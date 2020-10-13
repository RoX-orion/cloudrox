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
                <Article 
                  :title="title"
                  :tags="tags"
                  :excerpt="excerpt"
                  :src="src"
                  :see="see"
                  :message="message">
                </Article>
              </el-col>
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
  },
  data() {
    return {
      tags: [
        {name: 'Java'},
        {name: '后端'},
        {name: 'SpringBoot'},
        {name: 'Java'},
        {name: '后端'},
        {name: 'SpringBoot'},
        {name: 'Java'},
        {name: '后端'}
      ],
      see: 120,
      message: 33,
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: '《一只特立独行的猪》-王小波',
      excerpt: '插队的时候，我喂过猪、也放过牛。假如没有人来管，这两种动物也完全知道该怎样生活。它们会自由自在地闲逛，饥则食渴则饮，春天来临时还要谈谈爱情；这样一来，它们的生活层次很低，完全乏善可陈。人来了以后，给它们的生活做出了安排：每一头牛和每一口猪的生活都有了主题。就它们中的大多数而言，这种生活主题是很悲惨的：前者的主题是干活，后者的主题是长肉。我不认为这有什么可抱怨的，因为我当时的生活也不见得丰富了多少，除了八个样板戏，也没有什么消遣。有极少数的猪和牛，它们的生活另有安排。以猪为例，种猪和母猪除了吃，还有别的事可干。就我所见，它们对这些安排也不大喜欢。'
    }
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