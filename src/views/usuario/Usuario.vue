<template>
  <section class="usuario">
    <nav class="slidenav">
      <ul>
         <li>
          <router-link :to="{ name: 'perfil' }">Meu perfil</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario' }">Editar Usuario</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'notifications' }">Notificações</router-link>
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.usuario{
  height: 100vh;
  width: 100vw;
  background-color: #fff;
}

ul{
  display: flex;
  gap: 10px;
}


  

</style>