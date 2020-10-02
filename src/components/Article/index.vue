<template>
  <div class="container">
    <el-card>
      <el-row class="article">
        <el-col :lg="8" :xs="24" class="image">
          <img src="../../assets/img/avatar.jpg">
        </el-col>
        <el-col :lg="15" :xs="24" class="describe">
          <span class="title"><b>How to learn Java</b></span>
          <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non asperiores ex labore optio, facere doloremque inventore fugit dolores! 
            Minima maiores suscipit voluptatem reiciendis placeat corrupti quas a, rem quia cupiditate?</p>
          <span class="date grey">2020年10月05日</span>
          <svg-icon icon-class="visit" class=""/><span>256</span>
          <svg-icon icon-class="message"></svg-icon><span>32</span>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>

<script>


export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: this.src
    }
  }
}
</script>

<style>
  .article {
    height: 250px;
  }

  .describe {
    padding: 10px;
  }

  .title {
    font-size: 20px;
  }

  .visit {
    float: right;
  }

  .image img{
    height: 250px;
    width: 100%;
    /* margin: auto; */
  }
</style>