<template>
  <section>
    <div class="title">
      <div class="leftBox">
        <img :src="describe.artist.img1v1Url">
      </div>
      <div class="rightBox">
        <h3>singer : {{describe.artist.name}}</h3>
        <p>publishTime : {{describe.artist.publishTime | format}}</p>
        <p>description : {{describe.artist.briefDesc}}</p>
      </div>
    </div>
    <!--    tab切换-->
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="HotMusic" name="music">
          <el-table
            :data="describe.hotSongs"
            style="width: 100%">
            <el-table-column type="index" :index="indexMethod" width="80px">
            </el-table-column>
            <el-table-column label="喜欢" width="80px">
              <template slot-scope="scope">
                <i class="el-icon-sunny" ref="likeIcon"></i>
              </template>
            </el-table-column>
            <el-table-column label="歌名">
              <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="MV">
              <template slot-scope="scope">
                <span>{{scope.row.mv}}</span>
              </template>
            </el-table-column>
            <el-table-column label="歌手">
              <template slot-scope="scope">
                <el-tag v-for="(item,index) in scope.row.ar" :key="index" style="margin: 2px" >{{item.name}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="专辑">
              <template slot-scope="scope">
                <span>{{scope.row.al.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="专辑封面">
              <template slot-scope="scope">
                <img :src="scope.row.al.picUrl"
                     style="width: 60px;height: 60px;border-radius: 50%;border: 1px solid #8eb0ff;">
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="HotTopic" name="topic">话题</el-tab-pane>
      </el-tabs>
    </template>

    <!--    对应的tab显示区域-->

  </section>
</template>

<script>
  import {singerDes} from "../../request/api";
  import {format} from "../../assets/javascript/formatTime";

  export default {
    name: "singer",
    data() {
      return {
        describe: {
          artist: {
            img1v1Url: '',
            name: '',
            publishTime: '',
            briefDesc: ''
          },
          hotSongs: [{
            ar: [],
            al: {},
            mv: '',
            name: '',
            songId: ''
          }]
        },
        activeName: 'music'
      }
    },
    mounted() {
      singerDes({
        id: this.$route.query.id
      }).then(res => {
        this.describe = res.data;
      })
    },
    methods: {
      handleClick(tab, event) {

      },
      indexMethod(index) {
        return index + 1
      }
    }
  }
</script>

<style scoped lang="less">
  @commonMargin: 10px;
  .title {
    display: flex;

    .leftBox {
      width: 140px;
      height: 140px;
      margin-right: 40px;
      overflow: hidden;

      img {
        width: 140px;
        height: 140px;
        transition: all 0.4s linear;
      }

      img:hover {
        transform: scale(1.1, 1.1);
      }
    }

    h3, p {
      margin-bottom: @commonMargin;
    }
  }

</style>
