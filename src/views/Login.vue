<template>
  <div class="container_login">
      <div class="login">
          <form>
              <label for="email">Email</label>
              <input type="text" name="email" id="email">
              <label for="senha">Senha</label>
              <input type="password" name="senha" id="senha">
              <button>Entrar</button>
          </form>
          <div class="register">
            <button>Novo? Crie sua conta aqui</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Login"
}
</script>

<style>
    .container_login{
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .login{
       border: none;
       min-height: 300px;
       border-radius: 10px;
       background-color: rgb(245, 245, 245);
       padding: 20px;
    }

    label{
        display: block;
        color: rgb(36, 36, 36);
        margin: 10px 5px;
        font-size: 1.1rem;
    }

    input{
        width: 300px;
        outline: none;
        border: none;
        border: 1px solid rgb(10, 92, 245);
        color: rgb(36, 36, 36);
        display: block;
        border-radius: 5px;
        padding: 10px 7px;
        margin: 5px;
        transition: 0.4s;
        background-color: rgb(255, 252, 252);
    }
    input:focus{
        transform: scale(1.1);
    }

    button{
        border: none;
        padding: 10px 18px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        color: #fff;
        border: none;
        background-color:rgb(10, 92, 245) ;
        display: block;
        margin: 20px auto;
        transition: 0.4s;
    }
    button:hover{
        transform: scale(1.1);
    }

</style>