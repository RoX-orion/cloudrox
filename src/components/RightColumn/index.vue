<template>
  <div>
    <el-card class="about-me">
      <div class="aboutme-img">
        <img src="../../assets/img/sunset.jpg" class="aaa">
      </div>
      <!-- <el-avatar class="aboutme-avatar" :size="100" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" @error="errorHandler">
      </el-avatar> -->
      <div class="main">
        <div class="grey">Change The World By Coding</div>
        <ul class="social-media">
          <li><a href="https://www.github.com/RoX-orion" target="_blank"><svg-icon icon-class="github"/></a></li>
        </ul>
      </div>
    </el-card>

    <el-card class="user-card standard-font-size grey">
      <div style="text-align: center; color: black">你的信息</div>
      <div>IP地址:</div>
      <div>User-Agent:</div>
      <a href='https://www.freepik.com/vectors/star'>Star vector created by vectorpouch - www.freepik.com</a>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'RightColumn'
}
</script>

<style scoped>
  .about-me {
    margin-bottom: 25px;
  }

  .main {
    padding: 5px;
    text-align: center;
  }

  .social-media {
    font-size: 32px;
    list-style: none;
    padding:0; 
    /* margin:0; */
  }

  .aboutme-img {
    position: relative;
    padding-bottom: 40%;
    height: 0;
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


  .user-card {
    padding: 5px;
  }
</style>