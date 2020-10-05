<template>
  <div class="container">
    <div class="main-box">
      <div class="main">
        <el-row :gutter="50" class="main-row">
          <el-col :lg="15" :md="12" :sm="12" :xs="24">
            <el-card class="content">
              <el-page-header @back="goBack" content="详情页面">
              </el-page-header>
              <el-row :gutter="50" class="banner">
                <el-col :span="24" class="txt_right">
                  <h3>digital-vm：低至$4/月，日本\新加坡\美国等8机房，10Gbps带宽不限流量的VPS，畅快跑流量，PayPal/支付宝</h3>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xs="24">
            <right-column/>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log("goBack")
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 50px;
    padding: 25px;
  }

  .content {
    padding: 10px;
  }
</style>