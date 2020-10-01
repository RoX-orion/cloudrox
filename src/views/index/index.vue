<template>
  <div class="container">
    <div class="top">

    </div>
    <!-- <div>
      <Notice/>
    </div> -->
    <el-row :gutter="50" class="aaa">
      <el-col :lg="16">
        <el-row :gutter="50">
          <el-col :lg="12" :md="12" :sm="12" :xs="24" class="article">
            <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
          </el-col>
          <el-col :lg="12" :md="12" :sm="12" :xs="24">
            <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
          </el-col>
          <el-col :lg="12" :md="12" :sm="12" :xs="24" class="article">
            <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
          </el-col>
          <el-col :lg="12" :md="12" :sm="12" :xs="24">
            <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="8">
        <Aboutme></Aboutme>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Article from '@/components/Article'
import Aboutme from './components/Aboutme'
import Notice from './components/notice'

export default {
  components: {
    Article,
    Aboutme,
    Notice
  }
}
</script>

<style scoped>
  .container {
    padding: 25px;
  }

  .article {
    margin-bottom: 20px;
  }

  .aaa * {
    margin-bottom: 25px;
  }

  .top {
    /* position:absolute; */
    width: 100%;
    height: 500px;
    background-image: url(../../assets/img/starry-night.jpg);
    background-size: cover;
  }
</style>