<template>
  <div id="app">
    <transition name="modal">
      <router-view></router-view>
    </transition>
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

  #app{
    margin: auto;
    width: 80vw;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  h2,p{
    color: darkslategray;
  }

  body{
    overflow: hidden;
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
    width: 400px;
    box-shadow: 4px 4px 8px rgba(30, 60, 90, 0.4);
    padding: 20px;
    border: none;
    border-radius: 4px;
    transition: all 0.4s;
    outline: none;
    margin: 10px 0;
    border: 1px solid  #fff;
    font-size: 1rem;
  }
  input:focus{
    border:1px solid darkslategray;
  }

  input::placeholder{
    font-size: 1rem;
  }

  .btn{
    display: block;
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
    margin: 20px auto;
    text-align: center;
  }
  .btn:hover{
    transform: scale(1.1);
  }

  .editar{
    background-color: darkslategray;
  }

  .title{
    text-align: center;
    font-size: 2.2rem;
    margin: 10px 0 30px 0;
  }

 /*  Animations */
 
  .modal-enter,
  .modal-leave-to{
    opacity: 0;
  }

  .modal-enter{
    transform: translate3d(0,-10px,0);
  }

  .modal-leave-to{
    transform: translate3d(0,0px,0);
  }

  .modal-enter-active,
  .modal-leave-active{
    transition: all 0.2s;
  }


</style>
