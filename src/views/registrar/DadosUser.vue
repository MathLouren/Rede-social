<template>
    <section class="container_form">
        <div class="form" v-if="register">
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
name:"DadosUser",
components:{
    UsuarioForm
},
data(){
        return{
            register:true,
        }
    },
    methods:{
        async criarUsuario(){
           try{
            await this.$store.dispatch("criarUsuario", this.$store.state.user);
            await this.$store.dispatch("getUsuario", this.$store.state.user.email);
            this.$router.push({ name: "UsuarioInfo" });
           } catch(error){
               console.log(error)
           }
        }
    }
}
</script>

<style>

</style>