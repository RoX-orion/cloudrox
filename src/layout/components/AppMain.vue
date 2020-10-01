<template>
  <div class="container">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <div>
        <router-view/>
      </div>
    <!-- <transition/> -->
  </div>
</template>

<style scoped>
  .container {
    position: relative;
    width: 100%;
  }
</style>