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
        <!--<audio controls = "controls" :src="songUrl">

        </audio>-->
      </div>

    </section>
</template>

<script>
  import {songAudio,songLyric} from "../../request/api";

  export default {
        name: "songAudio",
        data() {
          return {
            songId:'',
            songUrl:'',
            lrc:'',
            lyricArr:[]
          }
        },
      mounted() {
          this.songId = this.$route.query.id;
          songAudio({
            id:this.songId
          }).then(res => {
              // this.$refs.audio.src = res.data.audio_url
              this.songUrl = res.data.data[0].url
          });
          songLyric({
            id: this.songId
          }).then(res => {
            this.lrc = res.data.lrc.lyric;
            this.dealLyric(this.lrc);
          })
      },
    methods: {
          dealLyric(str) {
            this.lyricArr = str.match(/\[[^[]+/g);
            /*for (var i=0;i < arr.length;i++){
              arr[i] = [FormateTime(arr[i].substring(0,11)) , arr[i].substring(11).trim()];
            }*/
            for (const i in  this.lyricArr) {
              this.lyricArr[i] = [this.lyricTime(this.lyricArr[i].substring(0,11)) , this.lyricArr[i].substring(11).trim()];
              console.log(this.lyricArr[i])
            }
            /*for(var j=0;j<arr.length;j++){
              $('#lyric').append('<li>'+arr[j][1]+'</li>');
            }*/

          },

     lyricTime(num) {
        num = num.substring(1,num.length-1);
        let arr = num.split(':');
        return (parseFloat(arr[0]*60) + parseFloat(arr[1])).toFixed(2);
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
    img{
      margin-top: 5%;
    }
  }
  ul{
    width: 100%;
    height: 620px;
    background-color: #8eb0ff;
    overflow: hidden;
  }
  li{
    margin: 10px;
    font-size: 14px;
  }
</style>
