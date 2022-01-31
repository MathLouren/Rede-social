<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>

import Login from "@/views/Login.vue";

export default{
  name:"App",
  components:{
    Login
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-family: "Roboto", sans-serif;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

</style>
