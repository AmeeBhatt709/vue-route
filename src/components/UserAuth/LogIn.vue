<template>
  <div>Log In</div>
</template>
<script>

import {login} from "@/components/UserAuth/Login";

export default {
  mounted() {
    console.log("SDHIUFHUSD");
    const currentUrl = this.$route.query.code;
    console.log(currentUrl);

    const response= login(currentUrl);
    console.log(response);
    console.log(response);
    if(response)
    {
      this.$router.push('/dashboard');
    }
  }

}


</script>