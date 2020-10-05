<template>
  <div class="container">
    <div class="notice">
      <Notice/>
    </div>
    <div class="main-box">
      <div class="main">
        <el-row :gutter="50" class="main-row">
          <el-col :lg="15" :md="12" :sm="12" :xs="24">
            <el-row :gutter="50" v-for="i in 10" :key="i" class="banner">
              <el-col :span="24" class="txt_right">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              
              <!-- <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col> -->
            </el-row>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="24">
            <aboutme/>
            <user-info/>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Aboutme from './components/Aboutme'
import Notice from './components/notice'
import UserInfo from './components/user-info'

export default {
  components: {
    Article,
    Aboutme,
    Notice,
    UserInfo
  }
}
</script>

<style scoped>
  .banner .txt_right{
    color:black;
    animation: rightEaseInAnimate 1s ease 1; /*调用动画：动画名、时间、时间线条、播放次数*/
    animation-fill-mode: forwards;/*定义动画结束的状态*/
  }
  @keyframes rightEaseInAnimate{/*定义从右边滑入文字的动画*/
    0%{transform: translateX(1000px);opacity: 0;}
    100%{transform:translateX(0px);opacity: 1; }
  }
  .main-box {
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    margin: 25px;
    position: relative;
    max-width: 1250px;
  }

  .notice {
    margin: 25px;
    margin-top: 70px;
  }

  .article {
    position: absolute;
    margin-bottom: 20px;
  }

  .main-row *{
    margin-bottom: 25px;
  }

  .rotating {
    
  }
</style>