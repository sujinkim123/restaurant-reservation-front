<template>
  <div id="app">
    <div id="map" style="width:500px; height:600px;">
    <p>오늘의 날씨</p>
    <p>주간날씨</p>
    <p>날씨검색</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ViewWeather',
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