<template>
  <!--  logo 搜索图标 个人登录/注册-->
  <header>
    <a href="#"></a>
    <input placeholder="search something you want...">
    <a><i class="el-icon-user"></i></a>
  </header>
</template>

<script>

</script>

<style scoped lang="less">
  header {
    a:first-child {
      display:  inline-block;
      width: 127px;
      height: 60px;
      margin-left: 100px;
      background: url("../assets/image/music_logo.png") no-repeat 100% 100% ;
    }

    input {
      outline: none;
      -webkit-appearance: none;
      width: 20%;
      height: 40px;
      position: absolute;
      top: 14px;
      left: 40%;
      border: 1px solid #8eb0ff;
      border-radius: 10px;
    }

    a:last-child {
      position: absolute;
      right: 100px;
      top: 5px;
      font-size: 24px;
      color: #8eb0ff;
    }

  }
</style>
