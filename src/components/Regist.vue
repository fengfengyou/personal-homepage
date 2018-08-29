<template>
  <div class="login-com">
        <h4 class="sign-header">用户注册</h4>
        <div class="sign-qcord">
            <div class="qcord-corner" @mouseover="showQcord" @mouseout="hideQcord"></div>
            <div class="qcord-img" ref="img" @mouseover="showQcord" @mouseout="hideQcord">
                <img src="../assets/images/qrcode.png" width="120" height="120">
                <p>扫一扫，下载立业贷App</p>
            </div>
        </div>
        <form id="signinForm">
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                 <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-reg" v-model="mobile" autofocus tabindex="1" type="text" placeholder="请输入您的注册手机号码">
                </div>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                 <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-reg" v-model="password" tabindex="2" type="password" placeholder="请设置您的登录密码">
                </div>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                 <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-seccode sign-ipt-regsec" tabindex="3" maxlength="5" v-model="clientVerificationCode" type="text" placeholder="请输入验证码">
                 <input autocomplete="off" type="hidden" id="randomID" name="randomID">
                <a id="seccodeRefresh" class="sign-seccode" href="javascript:void(0);" title="点击刷新" @click="getSecurityCode">
                    <img width="90" height="32" alt="验证码" src="/register/refreshKaptcha" ref="auth">
                </a>
                </div>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                 <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-smscode" tabindex="4" maxlength="4" v-model="code" type="text" placeholder="请输入手机验证码">
                <a id="getSmsCode" class="sign-getsms-code" href="javascript:void(0);" @click="getCode">获取验证码</a>
                </div>
            </div>
            <div class="sign-item">
                <div class="sign-ipt-wraper">
                 <input autocomplete="off" @blur="showErr" class="sign-ipt sign-ipt-reg" v-model="recommendUserMobile" tabindex="5" type="text" placeholder="推荐人手机号码（选填）">
                </div>
            </div>
            <div class="sign-tips-agreement">
                <label>
                 <input autocomplete="off" type="checkbox" tabindex="6" v-model="agreement" checked>我已经阅读并同意《
                <a target="_blank" href="/front/home/services">立业贷用户服务协议</a>》</label>
            </div>
            <div class="sign-footer">
                 <input autocomplete="off" type="hidden" name="utm_src" value="">
                 <input autocomplete="off" type="hidden" name="utm_id" value="">
                 <input autocomplete="off" type="hidden" name="ajmUserId" value="" />
                 <input autocomplete="off" class="sign-btn-sbt" tabindex="7" type="button" value="立即领取588红包" @click="regist">
                <p class="sign-fs-login">已有账户？
                <a class="sign-login-link" href="#/login-regist/login">直接登录</a>
                </p>
            </div>
            <div class="sign-tips-err sign-tips-regerr error-info">
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
      mobile: '',
      password: '',
      recommendUserMobile: '',
      code: '',
      clientVerificationCode: '',
      agreement: true,
      canBtn: true,
      canGet: true
    }
  },
  components: {},
  methods: {
    showQcord () {
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
    getSecurityCode (e) {
      var rnd = Math.floor(Math.random() * 100000000)
      // 浏览器对于同一个页面（某个页面打开之后）中的资源，只会下载一次，如果希望浏览器对于某个地址的资源重新下载，则必须修改这个资源的url地址，通常可以使用随机参数的形式使浏览器重新请求该资源。
      this.$refs.auth.setAttribute('src', '/register/refreshKaptcha?' + rnd)
    //   console.log(this.$refs.auth)
    },
    timeMin (e) {
      var n = 60
      var timer = setInterval(() => {
        if (n > 1) {
          n--
          e.target.textContent = n + 'S'
        } else {
          clearInterval(timer)
          this.canGet = true
          e.target.classList.remove('sending')
          e.target.textContent = '获取验证码'
        }
      }, 1000)
    },
    // 获取验证码
    getCode (e) {
      if (this.mobile && this.password && this.canGet) {
        console.log(e.target.classList)
        e.target.classList.add('sending')
        e.target.textContent = '发送中'
        this.http.post('/register/sendCode', {
          mobile: this.mobile
        })
          .then(data => {
            this.canGet = false
            this.timeMin(e)
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // 注册
    regist (e) {
      if (!this.mobile || !this.password || !this.code || !this.clientVerificationCode || !this.agreement) {
        return null
      }
      e.target.classList.add('logining')
      e.target.value = '验证中...'
      var params = {
        mobile: this.mobile,
        password: this.password,
        recommendUserMobile: this.recommendUserMobile,
        code: this.code,
        clientVerificationCode: this.clientVerificationCode
      }
      console.log(params)
      this.http.post('/register/pc', params)
        .then(res => {
          console.log(res)
          e.target.classList.remove('logining')
          e.target.value = '立即领取588红包'
          this.$refs.error.classList.add('show')
          this.$refs.error.classList.add('animated')
          this.$refs.error.classList.add('shake')
          this.$refs.error.textContent = res.data.message
        })
        .catch(err => {
          console.log(err)
          e.target.classList.remove('logining')
          e.target.value = '立即领取588红包'
        })
    }
  },
  watch: {
    agreement (n) {
      if (!n) {
        this.$refs.error.classList.add('show')
        this.$refs.error.classList.add('animated')
        this.$refs.error.classList.add('shake')
        this.$refs.error.textContent = '您必须同意立业贷投资服务协议！'
        this.canBtn = false
      }
    }
  }

}

</script>

<style lang="scss" scoped>
    .sign-getsms-code.sending, .sign-getsms-code.wait {
        background: #999 !important;
        cursor: not-allowed;
    }
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
            .qcord-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 0px;
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
        #signinForm{
            a{
                text-decoration: none;
            }
            input{
                font-size: 14px;
                border: 1px solid #e1e1e1;
            }
            .sign-item {
                position: relative;
                padding-top: 13px;
                .sign-ipt-wraper {
                    position: relative;
                    display: inline-block;
                    input.sign-ipt.sign-ipt-reg {
                        width: 300px;
                        padding: 6px 4px 6px 14px;
                    }
                    input.sign-ipt-seccode.sign-ipt-regsec {
                        padding: 6px 4px 6px 14px;
                        width: 195px;
                        border: 1px solid #e1e1e1;
                    }
                    input.sign-ipt-seccode {
                        position: relative;
                        z-index: 0;
                    }
                    input.sign-ipt-smscode {
                        padding: 6px 4px 6px 14px;
                        position: relative;
                        z-index: 0;
                        width: 195px;
                    }
                    .sign-getsms-code {
                        position: absolute;
                        right: -107px;
                        top: 0;
                        width: 94px;
                        background: #5fbcf1;
                        color: #fff;
                        line-height: 32px;
                        font-size: 14px;
                        border-radius: 3px;
                        text-align: center;
                    }
                    .sign-seccode {
                        position: absolute;
                        right: -105px;
                        top: 0;
                        z-index: 9;
                        width: 90px;
                        height: 28px;
                        border: 1px solid #e1e1e1;
                    }
                }
            }
            .sign-tips-agreement {
                padding: 11px 0 4px;
                line-height: 24px;
                font-size: 12px;
            }
            label {
                cursor: default;
                font-size: 12px;
                .sign-tips-agreement input {
                    margin: 0 4px 0 0;
                    vertical-align: -2px;
                }
                a {
                    color: #3da7e3;
                }
            }
            .sign-footer {
                position: relative;
                text-align: center;
                padding: 18px 0 0;
                .sign-btn-sbt {
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
                    -webkit-transition: all .2s;
                    -moz-transition: all .2s;
                    transition: all .2s;
                    cursor: pointer;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .sign-fs-login {
                    padding-top: 10px;
                    margin-bottom: 0;
                    color: #787878;
                    font-size: 12px;
                    .sign-login-link {
                        margin: 0 0 0 10px;
                        color: #ff7d12;
                        vertical-align: bottom;
                        font-size: 12px;
                    }
                }
                .sign-btn-sbt.logining{
                    background-color: #ccc;
                }
            }
        }
    }
</style>
