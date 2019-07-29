<template>
    <section>
      {{playLists}}
    </section>
</template>

<script>
  import {playList} from "../../request/api";

  export default {
        name: "playlist",
        data() {
          return {
            playLists:null
          }
        },
    }
</script>

<style scoped>

</style>
