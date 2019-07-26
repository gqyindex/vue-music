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
              <span>今日为你推荐</span>
            </template>
            <el-menu-item index="/playlist">
              <span>智能推荐歌单</span>
            </el-menu-item>
            <el-menu-item index="/hitMusic">
              <span>智能推荐歌曲</span>
            </el-menu-item>
            <el-menu-item index="/personalFM">
              <span>你的私人FM</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>发现新大陆</span>
            </template>
            <el-menu-item index="/hearIAM">
              <span>新碟上架</span>
            </el-menu-item>
            <el-menu-item index="/album">
              <span>最新专辑</span>
            </el-menu-item>
            <el-menu-item index="/newsong">
              <span>最新音乐</span>
            </el-menu-item>
            <el-menu-item index="/newMV">
              <span>最新MV</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>热门榜单看这里</span>
            </template>
            <el-menu-item index="/singerList">
              <span>歌手榜</span>
            </el-menu-item>
            <el-menu-item index="/mvList">
              <span>MV排行榜</span>
            </el-menu-item>
            <el-menu-item index="/songList">
              <span>歌曲榜</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>我的云盘</span>
            </template>
            <el-menu-item index="/yunData">
              <span>云盘数据详情</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-promotion"></i>
              <span>我自己</span>
            </template>
            <el-menu-item index="/likeMusic">
              <span>喜欢音乐列表</span>
            </el-menu-item>
            <el-menu-item index="/likeMusic">
              <span>私藏歌单</span>
            </el-menu-item>
            <el-menu-item index="/songRecord">
              <span>播放记录</span>
            </el-menu-item>
            <el-menu-item index="/personInfo">
              <span>个人信息</span>
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
