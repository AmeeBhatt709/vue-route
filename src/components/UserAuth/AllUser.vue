<template>
  <div>
    <div class="table-container">
      <h2>Page Permission</h2>
      <table class="table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Read</th>
          <th>Write</th>
          <th>Remove</th>
          <!-- Add more columns as needed -->
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in items" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td ><input type="checkbox" v-model="user.read" /></td>
          <td ><input type="checkbox" v-model="user.write" /></td>
          <td ><input type="checkbox" v-model="user.remove" /></td>
          <!-- Display additional columns as needed -->
        </tr>
        </tbody>
      </table>
      <button @click="submitChanges">Submit</button>
    </div>
  </div>
</template>

<script>
import axiosIns from "@/axios/axios";

export default {
  data() {
    return {
      items: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axiosIns
          .get("http://localhost:8081/api/v1/demo/users")
          .then((response) => {
            console.log("Data:", response.data);
            this.items = response.data; // Assuming your API returns an array of objects
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    },
    async submitChanges() {
      try {

        // Filter selected users based on checkbox values
        const selectedUsers = this.items.filter(
            (user) => user.read || user.write || user.remove
        );

        // Extract relevant data from selected users
        const selectedUserData = selectedUsers.filter((user) => ({
          id: user.id,
          email: user.email,
          read: user.read,
          write: user.write,
          remove: user.remove,
        }));

        console.log(selectedUserData);
        // Example: send selected user data to the server
        await axiosIns.post(`http://localhost:9000/admin/addPrivileges`,selectedUsers);
        this.$router.push('/dashboard');

      } catch (error) {
        console.error("Error submitting changes:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles for the scoped component */

.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% of the viewport height */
}

.table {
  width: 80%;
  border-collapse: collapse;
  margin-top: 10px;
  font-family: "Arial", sans-serif;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tbody tr:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}

.checkbox-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}
</style>
