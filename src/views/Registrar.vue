<template>
  <section class="container_form">
      <div class="form">
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


.container_resgister{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button{
    display: block;
}

</style>