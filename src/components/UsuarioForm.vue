<template>
  <div>
    <form>
        <input type="text" name="nome" placeholder="Nome" v-model="name">
        <input type="text" name="email" placeholder="Email" v-model="email">
        <input type="password" name="senha" placeholder="Senha" v-model="password">
    </form>
  </div>
</template>

<script>
import { mapFields } from "@/helpers.js"

export default {
    name:"UsuarioForm",
    computed:{
        ...mapFields({
            fields:["id","name","email","password"],
            base:"user",
            mutation:"UPDATE_USER"
        })
    }
}
</script>

<style>

</style>