<template>
  <section>
    <div class="title">
      <section>
        <img :src="IAMList.blurPicUrl" alt="blurPicUrl">
      </section>
      <div>
        <h2>《 {{IAMList.name}} 》</h2>
        <span>{{IAMList.publishTime | format}}</span>
        <h3>{{IAMList.description}}</h3>
      </div>
    </div>
    <!--    songs-->
    <div class="songs">
      <el-table
        :data="tableData"
        style="width: 100%;cursor: pointer;margin-top: 20px">
        <el-table-column
          label="喜欢">
          <template slot-scope="scope">
            <i class="el-icon-sunny" @click="like()" ref="likeIcon"></i>
          </template>
        </el-table-column>

        <el-table-column
          label="歌曲名称" >
          <template slot-scope="scope">
            <span @click="getSong(scope.row.songId)">{{tableData[0].songName}}</span>
          </template>
        </el-table-column>

        <el-table-column label="歌手">
          <!--          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <template slot-scope="scope">
          <el-tag type="success" v-for="(item,index) in tableData[0].singer" :key="index" @click="getSinger(scope.row.singer[0].id)">{{item.name}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
  import {hearIAMdetail} from '../../request/api'

  export default {
    name: "IAMdetail",
    data() {
      return {
        albumId: '',
        IAMList: {
          description: '',
          publishTime: '',
          blurPicUrl: '',
          name: '',
        },
        tableData: [{
          songId: '',
          songName: '',
          singer: []
        }],
        flag: false
      }
    },
    mounted() {
      this.albumId = this.$route.query.id;
      hearIAMdetail({
        id: this.albumId
      }).then(res => {
        this.IAMList = res.data.album;
        this.tableData[0].songId = res.data.songs[0].id;
        this.tableData[0].songName = res.data.songs[0].name;
        this.tableData[0].singer = res.data.songs[0].ar;
      })
    },
    methods: {
      like() {
        if (this.flag == false) {
          this.$refs.likeIcon.style.color = '#f13f40';
          this.flag = true
        } else {
          this.$refs.likeIcon.style.color = '';
          this.flag = false
        }
      },
      getSong(id) {
        this.$router.push({
          name:'songAudios',
          query:{
            id:id
          }
        });
      },
      getSinger(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    clear: both;
    height: 184px;
    overflow: hidden;

    section {
      width: 160px;
      height: 160px;
      float: left;
      margin-right: 20px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        transition: all 0.4s linear;
      }

      img:hover {
        transform: scale(1.1, 1.1);
      }
    }

    div {
      line-height: 27px;
      display: -webkit-box;
      display: -moz-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;

      span {
        color: #8eb0ff;
        font-weight: bold;
      }
    }
  }

  .songs {
    i {
      font-size: 24px;
    }

  }
</style>
