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
  // text-align: center;
  color: #2c3e50;
  // background-image: linear-gradient(to right, #FF5733  , yellow);
  // width: 100%;
  //   height: 100%;
  // background-image: url("./assets/img/starry-night.jpg");
}
</style>

<script>
export default {
  name: 'App'
}
</script>
