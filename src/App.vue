<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: '微软雅黑', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
  background-image: url("assets/img/1876.jpg");
  background-size: cover;
}
</style>

<script>
export default {
  name: 'App'
}
</script>
