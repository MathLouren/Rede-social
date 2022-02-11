<template>
  <section class="perfil_container">  
    <div class="banner_photo">
      <div class="banner">
        <label for="foto"></label>
        <input type="file" name="foto" id="foto">
      </div>
      <div class="photo">
            <label for="foto"></label>
            <input type="file" name="foto" id="foto">
      </div>
    </div>
    <div class="avaliation">
      <div class="like">.</div>
      <div class="deslike">.</div>
    </div>
    <div class="desc">
        <p>O presente é o melhor momento para você ser feliz! A única certeza que temos é do momento que estamos vivendo. Por isso, viva intensamente! Hoje, o vento te abraçará, o sol estará mais atraente e a paz vai invadir seu coração!</p>
    </div>
    <div class="country"></div>
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
  width: 800px;
  position: relative;
}

.banner{
  margin: 20px auto;
  width: 800px;
  height: 250px;
  border: 2px solid #000;
  position: relative;
}
.banner:hover{
  background-color: rgba(0, 0, 0, 0.1);
}

.photo{
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  margin-bottom: -50px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -30px;
}
.photo label{
  border-radius: 50%;
}

input[type="file"]{
  display: none;
}

label{
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-image: none;
}
label:hover{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: url(./imgs/camera.svg) no-repeat;
}


.desc{
  margin-top: 60px;
}

</style>