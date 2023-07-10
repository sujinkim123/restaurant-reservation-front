<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ViewSignup',
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
</style>