<template>
     <main class="login">
        <div class="login__container" v-if="statusCreated === true">
        <h1 class="login__title">Login</h1>
        <form class="login__form">
          <input class="login__input" type="email" placeholder="e-mail" />
          <span class="login__input-border"></span>
          <input class="login__input" type="password" placeholder="senha"/>
          <span class="login__input-border"></span>
          <button class="login__submit">Login</button>
          <a class="login__reset" href="#">Esqueceu a senha?</a>
          <button class="login__submit" @click="statusCreated = false">Novo? Criar conta</button>
        </form>
      </div>
    <div class="created_acc" v-else>
      <div class="created_container">
      <h1>Criar conta</h1>
      <form class="created">
        <label for="nome">Nome</label>
        <input type="text" name="nome">
        <label for="email">Email</label>
        <input type="text" name="email">
        <label for="senha">Senha</label>
        <input type="password" name="senha">
        <button class="created__submit">Criar conta</button>
        <button class="created__submit">Já possui conta? Logar</button>
      </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    name:"Login",
    data(){
      return{
        statusCreated:true,
      }
    },
}
</script>

<style>
 :root {
  --input-linear: linear-gradient(120deg, #7c899b, #053ae9);
  --input-error: red;
  --button-linear: linear-gradient(120deg, #4a6588, #053ae9);
  --button-disabled: #acacac;
  --button-success: rgb(18, 151, 107);
  --white: #fff;
  --black: #303030;
  --gray: #929292;
  --light-gray: #cfcfcf;
  --border-height: 1px;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

.login {
  height: 100vh;
  background: var(--input-linear);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login__container {
  min-height: 400px;
  width: 350px;
  background-color: var(--white);
  box-sizing: border-box;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: login .3s forwards;
}

.login__title {
  margin-bottom: 32px;
  color: var(--black);
}

.login__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login__input {
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  border: unset;
  outline: none;
  position: relative;
}

.login__input-border {
  height: var(--border-height);
  width: 100%;
  margin-bottom: 16px;
  background: var(--light-gray);
  transition: .3s ease-in-out;
}

.login__input-border::after {
  content: '';
  display: block;
  height: var(--border-height);
  width: 0;
  margin-bottom: 16px;
  background: var(--input-linear);
  transition: .3s ease-in-out;
}

.login__input:focus + .login__input-border::after {
  width: 100%;
}

.login__input-border.error {
  background: var(--input-error);
}

.login__input-border.error::after {
  background: var(--input-error);
}

.login__submit {
  outline: none;
  background: var(--button-linear);
  background-size: 200%;
  margin-bottom: 32px;
  color: var(--white);
  font-size: 16px;
  border: unset;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease;
  padding: 10px 30px;
  display: block;
  font-family: 'Roboto',sans-serif;
  letter-spacing: 0.1rem;
}

.login__submit:disabled {
  background: var(--button-disabled);
  cursor: not-allowed;
}

.login__submit:hover {
  background-position: right;
}

.login__submit.success {
  background: var(--button-success);
}

.login__submit.error {
  background: var(--input-error);
}

.login__reset {
  font-size: 12px;
  color: var(--gray);
  text-decoration: none;
  margin-bottom: 30px;
}

/* Created acc */

.created_container{
  animation: login .3s forwards;
}

.created_acc h1{
  font-size: 2.1rem;
  text-align: center;
}

.created_acc label{
  margin: 10px 0;
  display: block;
  font-size: 1.1rem;
}

.created_acc input{
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #303030;
  width: 400px;
  transition: 0.4s;
}
.created_acc input:focus{
  transform: scale(1.1);
}

.created_acc button{
  margin: 30px auto;
  padding: 15px 30px;
  letter-spacing: 0.1rem;
}

.created__submit{
  display: block;
  color: #fff;
  background: var(--button-linear);
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
}
.created__submit:hover{
  transform: scale(1.1);
}

/* Animations */

@keyframes login {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0,0px,0);
  }
}


</style>