<template>
  <section>
    <div class="card" v-for="(item,index) in albumList" :key="index">
      <img :src="item.picUrl" @click="getAlbum(item.id)">
      <h4 @click="getAlbum(item.id)">{{item.name}}</h4>
      <p>{{item.publishTime | format}}</p>
      <p @click="getSinger(item.artist.id)">{{item.artist.name}}</p>
    </div>
  </section>
</template>

<script>
  import {albumList} from "../../request/api";

  export default {
    name: "album",
    data() {
      return {
        albumList: [],
        pageSize: 10,
      }
    },
    mounted() {
      albumList().then(res => {
        this.albumList = res.data.albums.slice(0, 15);
      })
    },
    methods: {
      getAlbum(id) {
        this.$router.push({
          name: 'IAMdetail',
          query: {
            id: id
          }
        })
      },
      getSinger(id) {
        this.$router.push({
          name: 'singer',
          query: {
            id: id
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .card {
    display: inline-block;
    width: 14%;
    height: 220px;
    margin-left: 6%;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 5px 5px 10px #ccc;
    padding: 6px 0;
    border-radius: 12px;
    cursor: pointer;

    img {
      width: 75%;
      height: 75%;
      border: 1px solid #8eb0ff;
      border-radius: 50%;
    }
  }


</style>
