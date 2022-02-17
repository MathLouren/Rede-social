<template>
  <section class="container_form">
      <div class="form">
            <h2 class="title">Registrar</h2>
            <UsuarioForm />
            <span>Sua data de nascimento</span>
            <input type="date">
            <button class="btn button" @click.prevent="criarUsuario">Criar conta</button>
            <router-link class="btn button" to="/">Já  uma conta? Logar</router-link>
      </div>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"
export default {
  components:{
    UsuarioForm
  },
    methods:{
        async criarUsuario(){
           try{
            await this.$store.commit("UPDATE_DADOS_USER", true)
            await this.$store.dispatch("criarUsuario", this.$store.state.user);
            await this.$store.dispatch("getUsuario", this.$store.state.user.email);
            this.$router.push({ name: "perfil" });
           } catch(error){
               console.log(error)
           }
        }
    }
}
</script>

<style>

</style>