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
    max-width: 1400px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  h2{
    text-align: center;
    font-size: 1.8rem;
    color: darkslategray;
  }

  body{
    margin: auto;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input{
    display: block;
    width: 100%;
    box-shadow: 4px 4px 8px rgba(30, 60, 90, 0.4);
    padding: 17px;
    border: none;
    border-radius: 4px;
    transition: all 0.4s;
    outline: none;
    margin: 15px 0;
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
    padding: 15px 30px;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    background-color: darkslategray;
    color: #fff;
    text-transform: uppercase;
    margin: 25px auto;
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
    margin: 0px 0 30px 0;
    color: darkslategray;
  }

  .form{
      box-shadow: 4px 4px 8px rgba(30, 60, 90, 0.4);
      padding: 20px;
      border-radius: 5px;
      width: 450px;
      margin: 10px 5px;
  }

  .container_form{
      display: flex;
      justify-content: center;
      align-items: center;
      color: darkslategray;
      background: #fff;
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

  .error_input {
        background: darkslategray;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        z-index: 20000;
        position: relative;
        margin-bottom: 4px;
    }

    .error_input::before{
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid darkslategray;
    }

    .error_input li{
        font-family: 'Arial';
        padding: 5px 0;
    }

</style>
