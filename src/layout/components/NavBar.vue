<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo navbar"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"

      active-text-color="#ffd04b"
    >
    <button @click="showDropMenu">
      <el-submenu index="1" v-if="show">
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </button>
    <div>
      <svg-icon icon-class="new-visit"/>
    </div>
    
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">后端</el-menu-item>
      <el-menu-item index="3">Linux</el-menu-item>
      <el-menu-item index="4">下载</el-menu-item>
      <el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
      <el-menu-item index="6">登录</el-menu-item>
      <el-menu-item index="6">注册</el-menu-item>
    </el-menu>
  </div>
</template>


<script>

const navItems= [
  { name: "Home", indexPath: "/home", index: "1" },
  { name: "Subscribe", indexPath: "/subscribe", index: "2"},
  { name: "About", indexPath: "/about", index: "3" },
  { name: "More", indexPath: "/more", index: "4" }
]

  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        show: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      showDropMenu() {
        this.show = true
      }
    }
  }
</script>

<style scoped>
  .navbar {
    height: 4rem;
    /* background-color: rgba(0, 0, 0, 0); */
    
  }
</style>
