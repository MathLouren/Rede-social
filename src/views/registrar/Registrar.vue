<template>
      <div>
        <transition name="modal">
        <InfosUser v-if="!$store.state.user.dadosUser"/>
        <DadosUser v-else/>
        </transition>
      </div>
</template>

<script>

import InfosUser from "@/views/registrar/InfosUser.vue"
import DadosUser from "@/views/registrar/DadosUser.vue"

export default {
    name:"Resgistrar",
    components:{
        InfosUser,
        DadosUser
    },
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