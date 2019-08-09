<template>
  <section>
<!--    分类-->
    <el-select v-model="value" ref="selected" @change="newSong()">
      <el-option
        v-for="(item,index) in options" :value="item.value" :key="index"  :label="item.key">
      </el-option>
    </el-select>

<!--    表格数据-->
    <el-table
      :data="songList"
      style="width: 100%">
      <el-table-column
        prop="alias"
        label="alias">
      </el-table-column>
      <el-table-column
        prop="publishTime"
        label="发布时间">
      </el-table-column>
      <el-table-column
        prop="artists.name"
        label="artists name">
      </el-table-column>
      <el-table-column
        prop="album.picUrl"
        label="picUrl">
      </el-table-column>
      <el-table-column
        prop="mMusic.id"
        label="mMusic">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  import {newSong} from '../../request/api'

  export default {
    name: "newsong",
    data() {
      return {
        options:[{key:'全部', value:0}, {key:'华语', value:7}, {key:'欧美', value:96}, {key:'日本', value:8}, {key:'韩国', value:16}],
        value:0,
        songList:[]
      }
    },
    mounted() {
      this.newSong();
    },
    methods: {
      newSong() {
        console.log(this.value);
        newSong({
          type:this.value
        }).then(res => {
          this.songList = res.data.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
