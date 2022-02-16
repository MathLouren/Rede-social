<template>
      <div>
        <InfosUser/>
      </div>
</template>

<script>

import InfosUser from "@/views/registrar/InfosUser.vue"

export default {
    name:"Resgistrar",
    components:{
        InfosUser,
       
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