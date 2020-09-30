<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :lg="7" :md="7" :sm="24" :xs="24" class="article">
        <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
      </el-col>
      <el-col :lg="7" :md="7" :sm="24" :xs="24">
        <Article title="Linux" text="bvkdhbv" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></Article>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Article from '@/components/Article'

export default {
  components: {
    Article
  }
}
</script>

<style scoped>
  .container {
    margin: 15px;
  }

  .article {
    margin-bottom: 20px;
  }
</style>