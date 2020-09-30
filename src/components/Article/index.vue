<template>
  <el-card :body-style="{padding: '0px'}">
    <div class="container">
      <img :src="src" class="image"/>
    </div>
    <div style="padding: 0px 8px 8px 8px">
      <h4>{{title}}</h4>
      <div class="bottom clearfix">
        <!-- <time class="time">{{ currentDate }}</time> -->
        <span>{{text}}</span>
        <el-button type="primary" class="button" icon="el-icon-edit" circle></el-button>
      </div>
    </div>
  </el-card>
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
  .container{
    position:relative;
    padding-bottom:80%;
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
  }
</style>