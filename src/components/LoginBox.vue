<template>
  <div class="login-box">
    <div class="title">{{ loginText }}</div>
    <div class="login-inputs">
      <input placeholder="username"/>
      <input placeholder="password" type="password"/>
      <button v-on:click="true"> Login</button>
      <button> Register </button>
      <button> forgot password? </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  data() {
    return {
      loginText: 'Login'
    }
  }
}
</script>

<style scoped>
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title {
  font-size: 50px;
}
.login-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  background: none;
  border: none;
  border-bottom: 1px solid #1c1c1c;
  color: #1c1c1c;
  padding: 15px 5px;
  font-size: 25px;
  outline: none;
}
button {
  padding: 10px;
  width: 100%;
}
</style>
