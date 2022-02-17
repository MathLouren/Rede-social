<template>
    <section class="container_form">
        <div class="form" v-if="register">
            <span>Sua data de nascimento</span>
            <input type="date">
            <span>Escolha seu pais</span>
            <select>
                <option>Brasil</option>
                <option>Alemanha</option>
                <option>KKKK</option>
                <option>KKKK</option>
            </select>
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
           } catch(error){
               console.log(error)
           }
        },

    }
}
</script>

<style scoped>

select{
    margin-top: 10px;
    display: block;
    outline: none;
    padding: 5px 3px;
    font-size: 1rem;
}

</style>