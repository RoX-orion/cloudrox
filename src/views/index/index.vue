<template>
  <div class="container">
    <div class="notice">
      <Notice/>
    </div>
    <div class="main-box">
      <div class="main">
        <el-row :gutter="50" class="main-row">
          <el-col :lg="15" :md="12" :sm="12" :xs="24">
            <el-row :gutter="50">
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
              <el-col :span="24">
                <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
              </el-col>
            </el-row>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="24">
            <Aboutme></Aboutme>
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

export default {
  components: {
    Article,
    Aboutme,
    Notice
  }
}
</script>

<style scoped>
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
</style>