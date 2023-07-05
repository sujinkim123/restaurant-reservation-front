<template>
  <div>
    <pageHeader></pageHeader>
    <router-view></router-view>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from "./components/layouts/Header"
import pageFooter from "./components/layouts/Footer";

export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter
  }
}
</script>

<style>
</style>
