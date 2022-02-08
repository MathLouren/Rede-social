<template>
  <section class="container_resgister">
      <div class="resgister">
          <h2 class="title">Registrar</h2>
          <form>
              <input type="text" name="nome" placeholder="Nome" v-model="nome">
              <input type="text" name="email" placeholder="Email" v-model="email">
              <input type="password" name="senha" placeholder="Senha" v-model="password">
              <button class="btn button" @click.prevent="criarUsuario">Criar conta</button>
              <router-link class="btn button" to="/">Já possui uma conta? Logar</router-link>
          </form>
      </div>
  </section>
</template>

<script>
import { mapFields } from "@/helpers.js"

export default {
    name:"Resgistrar",
    computed:{
        ...mapFields({
            fields:["id","nome","email","password"],
            base:"user",
            mutation:"UPDATE_USER"
        })
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