<template>
  <section>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu>
                <el-menu-item>
                  <template>
                    <i class="el-icon-s-promotion"></i>
                    <span>推荐歌单</span>
                  </template>
                </el-menu-item>
                <el-menu-item>
                  <template>
                    <i class="el-icon-milk-tea"></i>
                    <span>发现新音乐</span>
                  </template>
                </el-menu-item>
                <el-menu-item>
                  <template>
                    <i class="el-icon-orange"></i>
                    <span>独播电台</span>
                  </template>
                </el-menu-item>
                <el-menu-item>
                  <template>
                    <i class="el-icon-sugar"></i>
                    <span>精选节目</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
  </section>
</template>

<script>
  export default {
    name: "AsideNav",
  }

</script>

<style scoped>

</style>
