<template>
  <div>
    <el-form class="login-from" v-if="login">
      <h1>Login</h1>
      <el-form-item label="phone number" prop="pass">
        <el-input type="input" v-model="phone" prefix-icon="el-icon-user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="password" prop="checkPass">
        <el-input type="password" v-model="password" prefix-icon="el-icon-lock" show-password
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginHandle()">Login</el-button>
        <el-button type="success" @click="registerFrom()">Register</el-button>
      </el-form-item>
    </el-form>
    <el-form class="login-from" v-else>
      <h2>Register</h2>
      <el-form-item label="phone number" prop="pass">
        <el-input v-model="phone" prefix-icon="el-icon-user" autocomplete="off" @blur="getCode"></el-input>
      </el-form-item>
      <el-form-item label="ctcode" prop="checkPass">
        <el-input v-model="ctcode" prefix-icon="el-icon-edit" show-password
                  autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="password" prop="checkPass">
        <el-input type="password" v-model="password" prefix-icon="el-icon-lock" show-password
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="nickname" prop="pass">
        <el-input v-model="nickname" prefix-icon="el-icon-sugar" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registerHandle">Register</el-button>
        <el-button type="success" @click="backLogin">Login</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import {getLogin,getCode,getRegister} from '../../request/api'

  export default {
    name: "userLogin",
    data() {
      return {
        login: true,
        phone: '',
        password: '',
        ctcode: '',
        nickname: ''
      }
    },
    methods: {
      loginHandle() {
        getLogin({
          phone: this.phone,
          password: this.password
        }).then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: '恭喜你，登录成功',
              type: 'success'
            });
          sessionStorage.setItem("user",JSON.stringify(res.data)); //用户信息存储在客户端
            this.$router.push('personalized'); // 登录成功跳转到默认的路由
          }
        }).catch(err => {
          this.$message({
            showClose: true,
            message: '用户名或密码错误',
            type: 'warning'
          });
          this.phone = '';
          this.password = '';
        })
      },
      registerFrom() {
        this.login = false
      },
      getCode() {
        getCode({
          phone:this.phone
        }).then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: '已成功发送验证码',
              type: 'success'
            });
          }
        }).catch(err => {
          this.$message({
            showClose: true,
            message: '发送验证码失败',
            type: 'warning'
          })
        })
      },
      registerHandle() {
        getRegister({
          phone:this.phone,
          captcha:this.ctcode,
          password:this.password,
          nickname: this.nickname
        }).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
      },
      backLogin() {
        this.login = true
      }
    }
  }
</script>

<style scoped>
  .login-from {
    width: 560px;
    padding: 60px;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    text-align: center;
    box-shadow: 5px 5px 20px rgba(82, 83, 80, 0.65);
  }
</style>
