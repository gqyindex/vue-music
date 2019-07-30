<template>
  <section>
    <!--      当音频不存在的时候，显示默认图片，点击返回-->
    <div class="default" v-if="songUrl === null || lrc === null ">
      <img src="../../assets/image/404.png">
    </div>


    <div v-else>

      <ul>
        <li v-for="(item,index) in lyricArr" :key="index">{{item[1]}}</li>
      </ul>

<!--      进度条-->
      <span>00：00</span>
      <span class="progress"></span>
      <span class="progressStatic"></span>
      <span>04：56</span>
      <i class="el-icon-video-pause"></i>
      <!--<audio controls = "controls" :src="songUrl">

      </audio>-->
    </div>

  </section>
</template>

<script>
  import {songAudio, songLyric} from "../../request/api";

  export default {
    name: "songAudio",
    data() {
      return {
        songId: '',
        songUrl: '',
        lrc: '',
        lyricArr: []
      }
    },
    mounted() {
      this.songId = this.$route.query.id;
      songAudio({
        id: this.songId
      }).then(res => {
        // this.$refs.audio.src = res.data.audio_url
        this.songUrl = res.data.data[0].url
      });
      songLyric({
        id: this.songId
      }).then(res => {
        this.lrc = res.data.lrc.lyric;
        this.dealLyric(this.lrc); // 格式化歌词函数
      })
    },
    methods: {
      dealLyric(str) {
        this.lyricArr = str.match(/\[[^[]+/g);
        for (const i in  this.lyricArr) {
          this.lyricArr[i] = [this.lyricTime(this.lyricArr[i].substring(0, 11)), this.lyricArr[i].substring(11).trim()];
          console.log(this.lyricArr[i])
        }
      },

      //格式化歌曲时间
      lyricTime(num) {
        num = num.substring(1, num.length - 1);
        let arr = num.split(':');
        return (parseFloat(arr[0] * 60) + parseFloat(arr[1])).toFixed(2);
      }
    }
  }
</script>

<style scoped lang="less">
  div {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .default {
    img {
      margin-top: 5%;
    }
  }

  ul {
    width: 100%;
    height: 620px;
    overflow: hidden;
    margin-bottom: 40px;
    li {
      margin: 10px;
      font-size: 14px;
    }
  }

  .progress{
    display:inline-block;
    width: 56%;
    height: 6px;
    background-color: #fff;
  }
  .progressStatic {
    &:extend(.progress);
    background-color: #8eb0ff;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
