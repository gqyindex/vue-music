<template>
  <section>
    <div class="title">
      <div class="leftBox">
        <img :src="describe.artist.img1v1Url">
      </div>
      <div class="rightBox">
        <h3>singer : {{describe.artist.name}}</h3>
        <p>publishTime : {{describe.artist.publishTime | format}}</p>
        <p v-if="describe.artist.briefDesc">description : {{describe.artist.briefDesc}}</p>
      </div>
    </div>
    <!--    tab切换-->
    <section>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="HotMusic" name="music" style="text-align: center">

          <el-table
            :data="describe.hotSongs.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%;cursor: pointer">
            <el-table-column type="index" :index="indexMethod" width="80px">
            </el-table-column>
            <el-table-column label="喜欢" width="80px">
              <template slot-scope="scope">
                <!--                <i class="el-icon-sunny" :color=" isActive === scope.row.id ? '#8eb0ff':'' " @click="like(scope.row.id)"></i>-->
                <i class="el-icon-sunny" :class="isActive === scope.row.id ? 'active':''"
                   @click="like(scope.row.id)"></i>
              </template>
            </el-table-column>
            <el-table-column label="歌名">
              <template slot-scope="scope">
                <span @click="getSong(scope.row.id)">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="MV">
              <template slot-scope="scope">
                <i :class="scope.row.mv === 0 ?'':'active'" class="el-icon-video-camera-solid" @click="getMV(scope.row.mv)"></i>
              </template>
            </el-table-column>
        <!--    <el-table-column label="歌手">
              <template slot-scope="scope">
                <el-tag v-for="(item,index) in scope.row.ar" :key="index">{{item.name}}</el-tag>
              </template>
            </el-table-column>-->
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
          <el-pagination
            background
            layout="prev, pager, next"
            :total="describe.hotSongs.length"
            @current-change="current_change">
          </el-pagination>
        </el-tab-pane>

        <el-tab-pane label="HotTopic" name="topic">话题</el-tab-pane>
      </el-tabs>
    </section>

    <!--    对应的tab显示区域-->

  </section>
</template>

<script>
  import {singerDes, likeMusic} from "../../request/api";
  import {format} from "../../assets/javascript/formatTime";

  export default {
    name: "singer",
    data() {
      return {
        userInfo: '',
        isActive: 0,
        flag: false,
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
            name: ''
          }]
        },
        currentPage: 1,
        pagesize: 10,
        activeName: 'music'
      }
    },
    mounted() {
      this.userInfo = JSON.parse(sessionStorage.getItem('user')).profile;
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
      },

      current_change(currentPage) {
        this.currentPage = currentPage
      },

      like(id) {
        console.log(this.userInfo);
        // 喜欢音乐的图标是否变化
        this.isActive = id;
        if (this.flag === true) {
          return;
        }
        // 喜欢音乐接口
        likeMusic({
          id: id
        }).then(res => {
          console.log(res)
        });
        this.flag = true;
      },

      getSong(id) {
        this.$router.push({
          name: "songAudios",
          query: {
            id: id
          }
        })
      },

      getMV(mvId) {
        if (mvId === 0) {
          this.$message('改歌曲还没有MV');
          return;
        }
        this.$router.push({
          name:"singerMV",
          query:{
            id:mvId
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @commonMargin: 10px;
  .title {
    margin-bottom: @commonMargin;
    clear: both;
    height: 154px;
    overflow: hidden;

    .leftBox {
      width: 140px;
      height: 140px;
      margin-right: 40px;
      overflow: hidden;
      float: left;

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

  .active {
    color: #f13f40;
    font-size: 24px;
  }

</style>
