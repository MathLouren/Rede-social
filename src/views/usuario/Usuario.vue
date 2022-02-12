<template>
  <section class="usuario">
    <nav class="slidenav">
      <ul class="configs">
        <li>
          <router-link :to="{ name: 'perfil' }"  class="btn editar">
            <div class="settings">
              <img src="./imgs/user.svg" alt="">
              <span>Meu perfil</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario' }" class="btn editar">
            <div class="settings">
              <img src="./imgs/settings.svg"><span>Informações</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'notifications' }" class="btn editar position">
            <div class="settings">
              <img src="./imgs/bell.svg"><span>Notificações</span>
            </div>
          </router-link>
        </li>
        <li>
          <button @click.prevent="deslogar" class="btn editar">
            <div class="settings">
              <img src="./imgs/log-out.svg" alt=""> <span>Deslogar</span>
            </div>
          </button>
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
}

.configs{
  display: flex;
  align-items: center;
  flex-direction: column;
}
  
.settings{
  display: flex;
  align-items: center;
  gap: 5px;
}

.position{
  display: flex;
  align-items: center;
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

  .slidenav{
    display: none;
  }
}

</style>