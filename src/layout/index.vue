<template>
  <div class="app-wrapper">
    <el-backtop></el-backtop>
    <div>
      <div>
        <nav-bar/> 
      </div>
      <div class="main">
        <app-main/>
      </div>
    </div>
    
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