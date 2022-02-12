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
      <div class="location">
        <p><img src="./imgs/map-pin.svg" alt=""></p>
        <p>Rio de janeiro</p>
        <p><img src="./imgs/brasil.png" alt="" class="country_img"></p>
      </div>
    </div>
    <div class="info_name">
        <p class="name">Matheus Lourenço</p>
        <p class="id">@matheuslourenco</p>
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 5px;
}

.banner_photo{
  max-width: 800px;
  position: relative;
}

.banner{
  margin: 10px auto;
  max-width: 800px;
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
  margin-bottom: -10px;
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

.location{
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

.location p{
  margin: 0 2px;
}

.desc{
  margin-top: 5px;
}

.info_name{
  margin-top: 15px;
}

.info_name p{
  margin: 5px 0;
  cursor: pointer;
}

.info_name .name{
  font-size: 1.4rem;
  font-weight: bold;
}

.info_name .id{
  text-transform: lowercase;
}

.country_img{
  height: 30px;
}

</style>