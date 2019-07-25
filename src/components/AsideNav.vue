<template>
  <section>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :class="'menu'"
          class="el-menu-demo"
          :default-active="onRoutes"
          :router="true"
          :unique-opened="true"
          @open="handleSelect"
          @close="closeSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>推荐歌单</span>
            </template>
            <el-menu-item index="/personalized">
              <span>推荐歌单的子列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>发现新音乐</span>
            </template>
            <el-menu-item index="/newsong">
              <span>发现新音乐的子列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>独播电台</span>
            </template>
            <el-menu-item index="/djprogram">
              <span>独播电台的子列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>精选节目</span>
            </template>
            <el-menu-item index="/recommend">
              <span>精选节目的子列表</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "AsideNav",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      closeSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      onRoutes () {
        return this.$route.path
      }
    }
  }

</script>

<style scoped>

</style>
