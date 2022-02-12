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
  max-width: 1200px;
  display: flex;
}

.slidenav{
  padding-right: 20px;
  margin: 0 10px 0 20px;
  display: flex;
  border-right: 1px solid rgb(230, 230, 230);
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

.router_area{
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width:900px){
  .usuario{
    display: flex;
    flex-direction: column;
  }
}

</style>