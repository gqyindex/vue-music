<template>
    <section>
      details
    </section>
</template>

<script>
  import {hearIAMdetail} from '../../request/api'
    export default {
        name: "IAMdetail",
      data() {
          return {
            IAMList:[]
        }
      },
      mounted() {
          hearIAMdetail().then(res => {
            console.log(res)
          })
      }
    }
</script>

<style scoped>

</style>
