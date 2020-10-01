<template>
  <div class="container">
    <div class="notice">
      <Notice/>
    </div>
    <div class="main">
      <el-row :gutter="50" class="aaa">
        <el-col :lg="15">
          <el-row :gutter="50">
            <el-col :lg="24" :md="12" :sm="12" :xs="24">
              <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
            </el-col>
            <el-col :lg="24" :md="12" :sm="12" :xs="24">
              <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
            </el-col>
            <el-col :lg="24" :md="12" :sm="12" :xs="24">
              <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
            </el-col>
            <el-col :lg="24" :md="12" :sm="12" :xs="24">
              <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="8">
          <Aboutme></Aboutme>
        </el-col>
      </el-row>
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
  .container {
    padding: 25px;
    height: 1000px;
  }

  .notice {
    margin-bottom: 25px;
  }

  .article {
    margin-bottom: 20px;
  }

  .main {
    display: flex;
  }

  .aaa {
    margin: auto;
  }

  .aaa * {
    margin-bottom: 25px;
  }
</style>