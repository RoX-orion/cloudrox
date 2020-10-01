<template>
  <div>
    <el-card>
      <div class="aboutme-img">
        <!-- <img src="../../../assets/img/sunset.jpg" class="aaa"> -->
      </div>
      <!-- <el-avatar class="aboutme-avatar" :size="100" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" @error="errorHandler">
      </el-avatar> -->
      <div class="grey">Change The World By Programimg</div>
      <ul>
        <li><a href="https://www.github.com/RoX-orion" target="_blank">github</a></li>
        <div class="icon">
          <svg-icon icon-class="new-visit"/>
        </div>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Aboutme'
}
</script>

<style scoped>
  .icon {
    color: brown;
    font-size: 50px;
  }
  .aboutme-img {
    /* position: relative;
    padding-bottom: 40%;
    height: 0; */
    height: 200px;
    background-color: rosybrown;
}

  .aboutme-img .aaa {
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
  }

  .aboutme-avatar {
    position: relative;
    left: 35%;
    top: 50%;
  }

  .img {
    width: 100%;
  }
</style>

<style>
  .el-card__body {
    padding: 0;
  }
</style>