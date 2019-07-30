<template>
  <section style="height: 100%">
    <el-container style="height: 100%" direction="vertical">
      <el-header>
                  <v-header></v-header>
      </el-header>
      <el-container>
        <el-aside>
          <v-aside></v-aside>
        </el-aside>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  i {
    height: 24px;
  }

  .el-header {
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
  }
</style>
