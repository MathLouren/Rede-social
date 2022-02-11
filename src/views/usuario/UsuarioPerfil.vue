<template>
  <section class="perfil_container">  
    <div class="banner_photo">
      <div class="banner">
        <label for="foto" @mouseover="bannerIMG = true" @mouseleave="bannerIMG = false"><img src="./imgs/camera.svg" alt="" v-if="bannerIMG"></label>
        <input type="file" name="foto" id="foto">
      </div>
      <div class="photo">
            <label for="foto" @mouseover="photoIMG = true" @mouseleave="photoIMG = false"><img src="./imgs/camera.svg" alt="" v-if="photoIMG"></label>
            <input type="file" name="foto" id="foto">
      </div>
    </div>
    <div class="desc">
        <p>O presente é o melhor momento para você ser feliz! A única certeza que temos é do momento que estamos vivendo. Por isso, viva intensamente! Hoje, o vento te abraçará, o sol estará mais atraente e a paz vai invadir seu coração!</p>
    </div>
    <div class="country"></div>
  </section>
</template>

<script>
export default {
  name:"Profile",
  data(){
    return{
      bannerIMG:false,
      photoIMG:false
    }
  },
  methods:{
    hoverStyle(){
      document.querySelector('label img').style.display = 'block';
    }
  },
  watch:{
    hover(){
      this.hoverStyle()
    }
  }
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
  transition: 0.4s;
  border-radius: 2px;
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
  margin-bottom: -30px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo label{
  border-radius: 50%;
}
.photo label:hover{
  background-color: rgba(0, 0, 0, 0.1);
}

input[type="file"]{
  display: none;
}

label{
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
}


.desc{
  margin-top: 40px;
}

</style>