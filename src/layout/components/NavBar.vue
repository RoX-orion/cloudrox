<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo navbar"
      mode="horizontal"
      collapse-transition="true"
      @select="handleSelect"
      text-color="#fff"
      background-color="black"
      active-text-color="#ffd04b"
    >
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
  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .navbar {
    height: 4rem;
    background-color: rgba(0, 0, 0, 0);
  }
</style>