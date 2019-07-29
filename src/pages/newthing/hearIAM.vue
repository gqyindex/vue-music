<template>
  <section>
    <!--  数据未渲染前的loading动画-->
    <img class="loading" src="../../assets/image/spinner.gif" v-if="isLoading">

    <section v-else>
      <!--      音乐专辑渲染-->
      <div style="overflow: hidden">
        <el-card :body-style="{ padding: '0px' }" shadow="always" v-for="(item,index) in hearIAMs" :key="index">
          <img :src="item.blurPicUrl" alt="album picture" @click="getDetail(item.id)">
          <p>{{item.name}}</p>
        </el-card>
      </div>
      <!--      分页-->
      <footer>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          background
          layout="prev, pager, next"
          :total="500">
        </el-pagination>
      </footer>
    </section>
  </section>

</template>

<script>
  import {hearIAM} from "../../request/api";

  export default {
    name: "hearIAM",
    data() {
      return {
        hearIAMs: [],
        isLoading: true,
        currentPage:1,
        pageSize:20
      }
    },
    mounted() {
     this.listInfo();
    },
    methods:{
      handleSizeChange(val){
        console.log("handleSizeChange"+val)
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(val);
        this.listInfo();
      },

      //分页渲染
      listInfo() {
        hearIAM({
          offset:this.currentPage - 1,
          limit:this.pageSize
        }).then(res => {
          this.isLoading = false;
          if (res.data.code === 200) {
            this.hearIAMs = res.data.albums
          }
        }).catch(err => {
          this.$message({
            showClose: true,
            message: '页面找不到了',
            type: 'warning'
          });
        })
      },

      //进入详情
      getDetail(id) {
        this.$router.push({
          name: "IAMdetail",
          query: {
            id: id
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .loading {
    margin-top: 16%;
  }

  .el-card {
    display: inline-block;
    float: left;
    width: 12%;
    height: 180px;
    border-radius: 10px;
    margin: 0 -3px 20px 5%; //-3px消除inline-block的默认间距问题
    img {
      width: 100%;
      height: 160px;
    }
  }

</style>
