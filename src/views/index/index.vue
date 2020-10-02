<template>
  <div class="container">
    <div class="notice">
      <Notice/>
    </div>
    <dic class="test">
      <div class="main">
      <el-row :gutter="50" class="aaa">
        <el-col :lg="15" :md="12" :sm="12" :xs="24" class="bbb">
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
        <el-col :lg="8" :md="12" :sm="12" :xs="24" class="bbb">
          <Aboutme></Aboutme>
        </el-col>
      </el-row>
    </div>
    </dic>
    
    
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
  .test {
    display:flex;
      justify-content: center;
      align-items: center;
  }

  .main {
    /* padding: 25px, 0, 0, 0; */
    margin: 25px;
    /* margin:0 auto; */
    position: relative;
    max-width: 1250px;
  }


  .notice {
    /* margin-bottom: 25px; */
    /* margin: 0, 25px, 25px, 25px; */
    margin: 25px;
    margin-top: 70px;
  }

  .article {
    position: absolute;
    margin-bottom: 20px;
  }

  /* .main *{
    text-align: center;
    margin: auto;
  } */

  .aaa *{
    margin-bottom: 25px;
  }
</style>