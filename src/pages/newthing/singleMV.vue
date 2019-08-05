<template>
  <section style="text-align: center;">
    <video :src="mvUrl" type="video/mp4" controls autoplay width="80%" height="80%" >
    </video>
  </section>
</template>

<script>
  import {singleMV} from "../../request/api";

  export default {
    name: "singleMV",
    data() {
      return {
        mvUrl:''
      }
    },
    mounted() {
      singleMV({
        id: this.$route.query.id
      }).then(res => {
        this.mvUrl = res.data.data.url
      })
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">

</style>
