<template>
    <section class="container_form">
       <div class="form">
           <h2>Registro</h2>
           <label for="date">Informe a data do seu aniversário</label>
           <input type="date" name="date">
           <label for="date">Informe a data do seu aniversário</label>
           <input type="date" name="date">
       </div>
    </section>      
</template>

<script>


export default {
name:"DadosUser",
components:{
    
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

<style scoped>

h2{
    margin: 20px 0;
}

label{
    display: block;
    text-align: center;
    font-size: 1.2rem;
}

</style>