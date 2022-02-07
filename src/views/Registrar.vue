<template>
  <section class="container_resgister">
      <div class="resgister">
          <h2>Registrar</h2>
          <form>
              <label for="email" id="email">Email</label>
              <input type="text" name="email" v-model="email">
          </form>
      </div>
  </section>
</template>

<script>
export default {
    name:"Resgistrar",
    data(){
        return{
            email:"",
            senha:"",
        }
    }
}
</script>

<style>

</style>