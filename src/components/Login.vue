<template>
  <div class="login-com">
        <h4 class="sign-header">用户登录</h4>
        <div class="sign-qcord">
            <div class="qcord-corner" @mouseover="showQcord" @mouseout="hideQcord"></div>
            <div class="qcord-img" ref="img" @mouseover="showQcord" @mouseout="hideQcord">
                <img src="../assets/images/qrcode.png" width="120" height="120">
                <p>扫一扫，下载立业贷App</p>
            </div>
        </div>
        <form id="loginForm">
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                <input autocomplete="off" @blur="showErr" class="sign-ipt" autofocus tabindex="1" type="text" placeholder="请输入您的用户名或手机号码" v-model="userName">
                </div>
                <a class="sign-help-link" href="/front/account/findBackUsernameBytele">忘记用户名？</a>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                <input autocomplete="off" @blur="showErr" class="sign-ipt" tabindex="2" type="password" placeholder="请输入您的登录密码" v-model="password">
                </div>
                <a class="sign-help-link" href="/front/account/resetPasswordByEmail">忘记密码？</a>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-seccode" tabindex="3" type="text" placeholder="请输入验证码" v-model="clientVerificationCode">
                <input autocomplete="off" type="hidden" id="randomID" name="randomID">
                <a id="seccodeRefresh" class="sign-seccode" href="javaScript:void(0);" title="点击刷新" @click="getSecurityCode">
                    <!-- <img width="90" height="36" alt="验证码" src="/login/refreshKaptcha" ref="auth"> -->
                </a>
                </div>
            </div>
            <div class="sign-tips-encrypt">您的信息将通过256位SGC加密保护数据传输安全</div>
            <div class="sign-footer">
                <input autocomplete="off" class="sign-btn-sbt" tabindex="4" type="submit" value="安全登录" @click.prevent="loginTest">
                <p class="sign-info-sbt">还没有账户？
                <a class="sign-reg-link" href="#/login-regist/regist">注册新用户</a>
                </p>
            </div>
            <div class="sign-tips-err sign-tips-login error-info">
                <span class="error" ref="error"></span>
            </div>
        </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lalla: 123,
      timer: null,
      userName: '',
      password: '',
      clientVerificationCode: ''
    }
  },
  components: {},
  mounted () {
    // console.log(window.sessionStorage.getItem('user'))
  },
  methods: {
    showQcord (e) {
      this.$refs.img.classList.add('show-img')
    },
    hideQcord (e) {
      this.$refs.img.classList.remove('show-img')
    },
    showErr (e, value) {
      if (!e.target.value) {
        this.canBtn = false
        // console.log(e.target.placeholder)
        this.$refs.error.classList.add('show')
        this.$refs.error.classList.add('animated')
        this.$refs.error.classList.add('shake')
        this.$refs.error.textContent = e.target.placeholder
      }
    },
    login (e) {
      e.target.classList.add('logining')
      e.target.value = '登录中...'
      this.http.post('/verify/login/pc', {
        userName: this.userName,
        password: this.password,
        clientVerificationCode: this.clientVerificationCode
      })
        .then(res => {
          if (res.data.message !== '登录成功') {
            this.$refs.error.classList.add('show')
            this.$refs.error.classList.add('animated')
            this.$refs.error.classList.add('shake')
            this.$refs.error.textContent = res.data.message
          } else {
            sessionStorage.setItem('user', res.data.userName)
            console.log(sessionStorage.getItem('user'))
            this.$router.replace({path: '/'})
          }
          e.target.classList.remove('logining')
          e.target.value = '登录'
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginTest () {
      if (this.userName === '666' && this.password === '123' && this.clientVerificationCode === '111') {
        // sessionStorage.setItem('user', this.userName)
        this.$store.commit('login', this.userName)
        this.$router.replace({path: '/'})
      } else {
        this.$refs.error.classList.add('show')
        this.$refs.error.classList.add('animated')
        this.$refs.error.classList.add('shake')
        this.$refs.error.textContent = '登录失败'
      }
    },
    getSecurityCode () {
      var rnd = Math.floor(Math.random() * 100000000)
      // 浏览器对于同一个页面（某个页面打开之后）中的资源，只会下载一次，如果希望浏览器对于某个地址的资源重新下载，则必须修改这个资源的url地址，通常可以使用随机参数的形式使浏览器重新请求该资源。
      this.$refs.auth.setAttribute('src', '/login/refreshKaptcha?' + rnd)
    //   console.log(this.$refs.auth)
    }
  }
}

</script>

<style lang="scss" scoped>
    .login-com{
        padding: 0 28px;
        width: 324px;
        height: 508px;
        background: #fdfdfd;
        border-radius: 6px;
        .sign-header {
            margin: 0;
            position: relative;
            padding: 80px 0 10px;
            width: 323px;
            line-height: 1;
            color: #818181;
            font-size: 20px;
            text-align: left;
            border-bottom: 2px solid #ff7d12;
        }
        .sign-qcord{
            .qcord-corner {
                position: absolute;
                top: 0;
                right: 0;
                width: 107px;
                height: 107px;
                background: url(../assets/images/icon_qcore_corner.png) no-repeat;
                background-size: cover;
                cursor: pointer;
                z-index: 101;
                transition: all 0.7s;
            }
            .qcord-img:hover{
                display: block;
            }
            .qcord-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 0;
                overflow: hidden;
                transition: all 0.7s;
                border-radius: 6px;
                background: #fff;
                z-index: 100;
                text-align: center;
                img {
                    display: block;
                    margin: 140px auto 0;
                    width: 200px;
                    height: 200px;
                    vertical-align: middle;
                }
            }
            .show-img{
                transition: all 0.7s;
                height: 508px;
            }
        }
        #loginForm{
            a{
                text-decoration: none;
            }
            .sign-item {
                position: relative;
                padding: 25px 0 0;
                font-size: 14px;
                .sign-ipt-wraper {
                    position: relative;
                    display: inline-block;
                    input.sign-ipt {
                        padding-left: 14px;
                        width: 242px;
                        border: 1px solid #e1e1e1;
                        padding: 8px 4px;
                        font-size: 100%;
                    }
                    input.sign-ipt-seccode {
                        position: relative;
                        z-index: 0;
                        width: 210px;
                    }
                }
                .sign-help-link {
                    position: absolute;
                    top: 35px;
                    width: 75px;
                    margin: 0 0 0 10px;
                    font-size: 12px;
                    color: #3eb8ff;
                    vertical-align: bottom;
                    line-height: 2.5em;
                }
                .sign-seccode {
                    position: absolute;
                    right: -105px;
                    top: 0;
                    z-index: 9;
                    width: 90px;
                    height: 32px;
                    border: 1px solid #e1e1e1;
                }
            }
            .sign-tips-encrypt {
                padding: 11px 0;
                line-height: 24px;
                font-size: 12px;
                color: #999;
            }
            .sign-footer {
                padding: 18px 0 0;
                .sign-btn-sbt{
                    margin: 0 auto;
                    display: block;
                    width: 155px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 25px;
                    border: none;
                    background: #ff7d12;
                    color: #fff;
                    font-size: 15px;
                    transition: all .2s;
                    cursor: pointer;
                }
                .sign-btn-sbt.logining{
                    background-color: #ccc;
                }
                .sign-info-sbt {
                    padding-top: 24px;
                    color: #787878;
                    font-size: 12px;
                    text-align: center;
                    margin: 0 0 10px;
                    .sign-reg-link {
                        margin-left: 9px;
                        font-size: 12px;
                        color: #ff7d12;
                    }
                }
            }
        }
    }
</style>
