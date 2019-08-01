<template>
  <section>
    <!--      当音频不存在的时候，显示默认图片，点击返回-->
    <div class="default" v-if="songUrl === null || lrc === null ">
      <img src="../../assets/image/404.png">
    </div>


    <div v-else style="position: relative">

      <div class="coverBox" ref="coverBox">
        <ul ref="lyricBox">
          <li v-for="(item,index) in lyricArr" :key="index" ref="singleLyric"
              :class="item[1] === activeLyric ? 'active':'' ">{{item[1]}}
          </li>
        </ul>
      </div>
      <!--      进度条-->
      <div class="view">
        <span>00：00</span>
        <span class="progressStatic"></span>
        <span class="progress"></span>
        <span>04：56</span>
        <i class="el-icon-video-pause"></i>
      </div>

      <audio :src="songUrl" ref="audioPlay"></audio>
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
        lyricArr: [],
        liHeight: '',
        audio: '',
        activeLyric: ''
      }
    },
    mounted() {
      this.songId = this.$route.query.id;
      songAudio({
        id: this.songId
      }).then(res => {
        this.songUrl = res.data.data[0].url; // 获取到了歌曲的URL
      });
      songLyric({
        id: this.songId
      }).then(res => {
        this.lrc = res.data.lrc.lyric;
        this.dealLyric(this.lrc); // 格式化歌词函数
        this.lyricMove(this.lyricArr); //控制歌词显示
      });
    },
    methods: {
      dealLyric(str) {
        this.lyricArr = str.match(/\[[^[]+/g);
        for (const i in  this.lyricArr) {
          this.lyricArr[i] = [this.lyricTime(this.lyricArr[i].substring(0, 11)), this.lyricArr[i].substring(11).trim()];
          //console.log(this.lyricArr[i])
        }
      },

      //格式化歌曲时间，将时间转化为数字
      lyricTime(num) {
        num = num.substring(1, num.length - 1);
        let arr = num.split(':');
        return (parseFloat(arr[0] * 60) + parseFloat(arr[1])).toFixed(2);
      },

      //控制歌词显示
      lyricMove(str) {
        this.audio = this.$refs.audioPlay;
        this.audio.play(); //音频开始播放

        // 因为是for循环的ref,循环出来是一个数组，用this.$nextTick获取，否则为undefined
        this.$nextTick(() => {
          this.liHeight = window.getComputedStyle(this.$refs.singleLyric[0]).height
        });

        /*获取歌曲音频播放的currentTime
        * 获取str中的当前时间比较
        * 显示符合条件的那一句歌词*/

        let _this = this;
        let timer = setInterval(function () {
          // console.log(_this.$refs.lyricBox.style.top); 获取到的值为空,但是可以设置值？？？？
          for (let i = 0; i < str.length; i++) {
            if (_this.audio.currentTime > str[i][0] && _this.audio.currentTime < str[i + 1][0] && i != str.length - 1) {
              // 高亮显示当前的这一句歌词
              _this.activeLyric = str[i][1];
              // 歌词整体向上滚动
              if (i > 3 && i < str.length - 3) {
                _this.$refs.coverBox.style.top = -parseInt(_this.liHeight) * (i - 3) + 'px';
              }
            }
          }

          if (_this.audio.paused) {
            console.log('audio paused');
            clearInterval(timer)
          }
        }, 1000)
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

  .active {
    color: #8eb0ff;
    font-size: 16px;
  }

  .default {
    img {
      margin-top: 5%;
    }
  }

  .coverBox {
    width: 100%;
    height: 680px;
    position: absolute;
    top: 0;
    overflow: hidden;
    transition: top .6s;
  }

  ul {
    width: 80%;
    overflow: hidden;
    margin-bottom: 40px;

    li {
      margin: 10px;
      font-size: 14px;
    }
  }

  .view {
      position: relative;
      top: 800px;
  }

  .progress {
    display: inline-block;
    width: 40%;
    height: 6px;
    background-color: #fff;
  }

  .progressStatic {
    &:extend(.progress);
    width: 30%;
    background-color: #8eb0ff;
    position: absolute;
    top: 9px;
  }
</style>
