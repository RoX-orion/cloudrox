<template>
  <!-- <el-card :body-style="{padding: '0px'}">
    <div class="container">
      <img :src="src" class="image"/>
    </div>
    <div style="padding: 0px 8px 8px 8px">
      <h4>{{title}}</h4>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <span>{{text}}</span>
        <el-button type="primary" class="button" icon="el-icon-edit" circle></el-button>
      </div>
    </div>
  </el-card> -->
  <div>
    <el-card>
      <el-row class="article">
        <el-col :lg="7" :xs="24" class="image">
          <img src="../../assets/img/avatar.jpg">
        </el-col>
        <el-col :lg="15" :xs="24" class="describe">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non asperiores ex labore optio, facere doloremque inventore fugit dolores! 
            Minima maiores suscipit voluptatem reiciendis placeat corrupti quas a, rem quia cupiditate?</p>
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
    display: flex;
  }

  .describe {
    padding: 10px;
  }

  .image img{
    height: 250px;
    width: 250px;
    /* margin: auto; */
  }
  /* .container{
    position: relative;
    padding-bottom: 0%;
    height: 0;
  }
  .container .image{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 90%
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0px;
    margin-bottom: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: 100%;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */
</style>