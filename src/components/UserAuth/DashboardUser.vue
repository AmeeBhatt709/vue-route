<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allUser" class="nav-link">User</router-link>
          </li>

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Logout</button>
        </form>
      </div>
    </nav>
</template>
<script>
export default {

}
</script>