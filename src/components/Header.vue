<template>
  <header>
      <div class="header_container">
          <div class="logo">
              <img src="@/assets/aperture.svg" alt="">
          </div>
          <div class="menu">
              <ul>
                  <li><a href="#">Login</a></li>
              </ul>
          </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header{
        height: 5vh;
        background-color: rgb(53, 53, 53);
        display: flex;
    }

    .header_container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .menu ul{
        display: flex;
    }

    .menu li{
        padding: 10px;
    }

    .menu li a{
        font-size: 1rem;
    }
</style>