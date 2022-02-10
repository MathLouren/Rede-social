<template>
  <section class="usuario">
    <nav class="slidenav">
      <ul class="configs">
         <li>
          <router-link :to="{ name: 'perfil' }"  class="btn editar">Meu perfil</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario' }" class="btn editar">Editar Usuario</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'notifications' }" class="btn editar position">Notificações <img src="./imgs/bell.svg"></router-link>
        </li>
        <li>
          <button @click.prevent="deslogar" class="btn editar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <div class="router_area">
      <transition name="modal">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.usuario{
  padding: 0 10px;
  display: flex;
}

.slidenav{
  padding: 0 10px;
  width: 15%;
  display: flex;
}

.router_area{
  width: 90%;
}

ul{
  display: flex;
}

ul li{
  display: block;
  width: 100%;
}

.configs{
  display: flex;
  flex-direction: column;
}
  
.position{
  display: flex;
  align-items: center;
  gap: 10px;
}

.position img{
  height: 20px;
}

@media (max-width:900px){
  .usuario{
    display: flex;
    flex-direction: column;
  }
}

</style>