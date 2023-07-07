<!-- https://onethejay.tistory.com/128 -->
<template>
  <div id="app">
    <h2>Please Log In</h2>
    <div id="loginForm">
      <form>
        <p>
          <input class="w3-input" name="uid" placeholder="아이디를 입력해주세요" v-model="user_id"><br>
        </p>
        <p>
          <input name="password" class="w3-input" placeholder="비밀번호를 입력해주세요" v-model="user_pw" type="password">
        </p>
        <p>
          <button type="submit" class="w3-button w3-green w3-round">로그인</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewLogin',
  data() {
    return {
      user_id : '',
      user_pw : ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }
      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
      alert('로그인 되었습니다.')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#loginForm {
  width: 500px;
  margin: auto;
}
</style>