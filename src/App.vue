<template>
  <div>
    <DashboardUser></DashboardUser>
    <router-view></router-view>
  </div>
</template>

<script>

import DashboardUser from "@/components/UserAuth/DashboardUser.vue";

export default {

  name: 'App',
  components: {
    DashboardUser
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
