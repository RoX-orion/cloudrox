<template>
  <div>
    <app-main/>
    <el-backtop ></el-backtop>
    <nav-bar/> 
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    NavBar,
  }
}
</script>