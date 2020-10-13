<template>
  <div class="container">
    <el-card class="card">
      <el-row class="article">
        <el-col :lg="8" :xs="24" class="image">
          <div style="overflow: hidden">
            <router-link to="/content/index" @click.native="transferPrar"><img :src="src" height="250px"></router-link>
          </div>
        </el-col>
        <el-col :lg="15" :xs="24" class="describe">
          <el-tag
            class="tags"
            v-for="tag in tags"
            :key="tag.name"
            size="mini"
            type="success"
            effect="dark">
            {{tag.name}}
          </el-tag>
          <div class="title"><b><router-link to="/content/index" @click.native="transferPrar">{{title}}</router-link></b></div>
          <div class="grey excerpt standard-font-size">{{excerpt}}</div>
          <span class="date">2020年10月05日</span>
          <svg-icon icon-class="visit" class=""/><span>{{see}}</span>
          <svg-icon icon-class="message"></svg-icon><span>{{message}}</span>
          <svg-icon icon-class="forward" style="font-size: 30px"></svg-icon>
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
    excerpt: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: []
    },
    date: {
      type: String,
      default: ''
    },
    see: {
      type: Number,
      default: 0
    },
    message: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    transferPrar() {
      console.log("aaa")
      this.$router.push({path: '/content/index', name: 'Content', params: {text: 'hello world', src: this.src}})
    }
  }
}
</script>

<style scoped>
  span {
    color: grey;
  }

  .card:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .2);
  }

  .describe {
    padding: 10px;
    height: 250px;
  }

  .describe span {
    margin-right: 10px;
  }

  .title {
    font-size: 17px;
  }

  .excerpt {
    height: 120px;
    padding-top: 15px;
    margin-bottom: 10px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .visit {
    float: right;
  }

  .image img{
    max-height: 250px;
    width: 100%;
    transform: scale(1.04);
    transition: all 1s ease 0s;  
    -webkit-transform: scale(1.04);  
    -webkit-transform: all 1s ease 0s;  
  }

  .image:hover img {
    transform: scale(1.3);  
    transition: all 1s ease 0s;  
    -webkit-transform: scale(1.3);  
    -webkit-transform: all 1s ease 0s;  
  }

  .tags {
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>