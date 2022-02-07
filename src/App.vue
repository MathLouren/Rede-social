<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default{
  name:"App",
  components:{
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:darkslategray;
  font-family: "Roboto", sans-serif;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

label{
  display: block;
}

input{
  display: block;
}

.btn{
  display: block;
  margin: 10px auto;
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin: auto;
  cursor: pointer;
  transition: 0.4s;
  background-color: darkslategray;
  color: #fff;
  text-transform: uppercase;
}
.btn:hover{
  transform: scale(1.1);
}


</style>
