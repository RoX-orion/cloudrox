<template>
  <div class="app-wrapper">
    <el-backtop></el-backtop>
      <nav-bar/>
      <app-main/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    NavBar,
    AppMain
  }
}
</script>

<style scoped>

</style>