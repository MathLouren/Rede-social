<template>
  <section class="perfil_container">  
    <div class="banner_photo">
      <div class="banner">
          <div class="photo">

          </div>
      </div>
    </div>
    <div class="desc">
        <p>O presente é o melhor momento para você ser feliz! A única certeza que temos é do momento que estamos vivendo. Por isso, viva intensamente! Hoje, o vento te abraçará, o sol estará mais atraente e a paz vai invadir seu coração!</p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.perfil_container{
  margin: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner_photo{
  width: 1300px;
}

.banner{
  margin: 10px auto;
  width: 60%;
  height: 200px;
  border: 1px solid #000;
  position: relative;
}

.photo{
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  margin-bottom: -50px;
  margin-left: 10px;
}

.desc{
  margin-top: 60px;
}

</style>