<template>
  <section class="container_resgister">
      <div class="resgister">
          <h2 class="title">Registrar</h2>
            <UsuarioForm />
            <button class="btn button" @click.prevent="criarUsuario">Criar conta</button>
            <router-link class="btn button" to="/">Já possui uma conta? Logar</router-link>
      </div>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"

export default {
    name:"Resgistrar",
    components:{
        UsuarioForm
    },
    methods:{
        async criarUsuario(){
           try{
            await this.$store.dispatch("criarUsuario", this.$store.state.user);
            await this.$store.dispatch("getUsuario", this.$store.state.user.email);
            this.$router.push({ name: "usuario" });
           } catch(error){
               console.log(error)
           }
        }
    }
}
</script>

<style scoped>

body{
    background-color: darkslategray;
}

.container_resgister{
    width: 100vw;
    height: 100vh;
    background: darkslategray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.resgister{
    background: #fff;
    padding: 30px 40px;
    border-radius: 5px;
}

.button{
    display: block;
}

</style>