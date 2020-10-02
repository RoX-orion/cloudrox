<template>
  <div class="top">
    <h1 class="logo"><a href="http://localhost:8080/"></a></h1>
    <div class="menu">
      <ul class="nav" v-for="i in navItems">
        <li><a href="javascript:"><span>{{i.name}}</span></a></li>
      </ul>
    </div>
    

    <!-- <div class="dropdown">
    <input type="button" @click="myFunction" class="dropbtn"/>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div> -->
  <div class="right-menu">
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar" class="user-avatar">
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <a target="_blank" href="https://github.com/RoX-orion/">
          <el-dropdown-item>Github</el-dropdown-item>
        </a>
        <router-link to="/profile/index">
          <el-dropdown-item>
            个人中心
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click.native="logout">
          <span style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  </div>
</template>


<script>

const navItemss= [
  { name: "首页", indexPath: "/home", index: "1" },
  { name: "Linux", indexPath: "/subscribe", index: "2"},
  { name: "前端", indexPath: "/about", index: "3" },
  { name: "后端", indexPath: "/more", index: "4" },
  { name: "注册", indexPath: "/more", index: "5" },
  { name: "登录", indexPath: "/more", index: "6" }
]

  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        navItems: navItemss.reverse(),
        avatar: require("../../assets/img/navbar.png")
      };
    },
    mounted() {
      // 点击下拉菜单意外区域隐藏
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      },
    }
  }
</script>

<style scoped>

  a{text-decoration: none;}
  a:visited{text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active{text-decoration:none;}

  .top {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    height: 50px;
    background-color: rgba(25, 137, 250, 0.6);
  }

  .menu {
    width: auto;
    margin: 0 auto;
    margin-right: 30px;
  }

  a span {
    font-size: 18px;
  }

  .nav {
    float: right;
    margin-top: 10px;
    font-size: 20px;
  }
  
  .nav li {
    display: inline-block;
    margin-left: 40px;
  }
  
  .nav a {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    text-decoration: none;
  }

  /* .navbar{
    height: 4rem;
    background-color: #ffffff;
    float: right;
  } */

  .logo {
    float: left;
    margin-top: 9px;
    margin-left: 60px;
  }
  
  .logo a {
    display: inline-block;
    width: 32px;
    height: 32px;
    background-image: url("../../assets/logo.png");
    background-size: 32px 32px;
  }
			
  /* .navbar span {
    font-size: 18px;
  } */

  @media screen and (max-width: 775px){
    .menu {
      display: none;
    }
  }

  @media screen and (min-width: 775px){
    .right-menu {
      display: none;
    }
  }

  .dropdown .dropbtn {
    position: absolute;
    z-index: 100;
    right: 10px;
    top: 10px;
    background-color: rgba(0,0,0,0);
    background-image: url("../../assets/img/navbar.png");
    background-size: cover;
    color: white;
    padding: 16px;
    font-size: 0px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
      position: relative;
  }

  .dropdown-content {
      display: none;
      position: absolute;
      left: 10%;
      top: 20px;
      background-color: #ffffff;
      min-width: 80%;
      border-radius: 10px;
      /* overflow: auto; */
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
      z-index: 1;
  }

  .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }

  .show {display:block;}
</style>

<style lang="scss" scoped>
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          // border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
