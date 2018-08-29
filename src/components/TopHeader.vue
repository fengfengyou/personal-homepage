<template>
<div class="top-com">
    <div class="top-box">
        <div class="top-header">
            <div>
                <span>
                    <a href="javaScript:void(0);">
                        客服服务热线：400-999-2101
                    </a>
                </span>|
                <span>
                    <a href="javaScript:void(0);">
                        在线客服
                    </a>
                </span>
            </div>
            <div>
                <span v-if="userName">
                    <a href="#/account/secureAuth">
                        {{userName}}
                    </a>
                    <a href="javaScript:void(0);" @click="logOut">
                        [安全退出]
                    </a>
                </span>
                <span>
                    <a href="javaScript:void(0);" class="activity">
                        小立活动
                    </a>
                </span>|
                <span>
                    <a href="javaScript:void(0);">
                        帮助中心
                    </a>
                </span>|
                <span>
                    <a href="javaScript:void(0);">
                        关于我们
                    </a>
                </span>|
                <span>
                    <a href="javaScript:void(0);">
                        回到旧系统
                    </a>
                </span>
            </div>
        </div>
        <div class="top-nav">
            <div class="logo-box">
                <router-link to="">
                    <img src="../assets/images/logo_website.png" alt="">
                    <div class="log-img">
                        <img ref="img" :src="e" alt="" v-for="(e,i) in imgArr" :key="i">
                    </div>
                </router-link>
            </div>
            <div class="nav-box">
                <ul v-if="isIndex">
                    <li><router-link to="/" :class="{active:route=='/'}">首页</router-link></li>
                    <li>
                        <router-link to="/lend" :class="{active:route=='/lend'}">
                            我要出借
                            <ul class="nav-item">
                                <li><router-link to="/lend">散标专区</router-link></li>
                                <li><router-link to="/lend/transfer">债权转让</router-link></li>
                                <li><router-link to="/lend/Appoint">小立有约</router-link></li>
                            </ul>
                        </router-link></li>
                    <li><router-link to="/vip/index">会员中心</router-link></li>
                    <li><router-link to="/info/index">信息披露</router-link></li>
                    <li><router-link :class="{active:route=='/news'}" to="/news/law">法律法规</router-link></li>
                </ul>
                <ul v-else>
                    <li>
                        <router-link to="/vip/index" :class="{active:route=='/vip/index'}">
                            会员首页
                            <ul class="nav-item">
                                <li><router-link to="">积分抽奖</router-link></li>
                                <li><router-link to="">积分兑换</router-link></li>
                                <li><router-link to="">深海寻宝</router-link></li>
                            </ul>
                        </router-link>
                    </li>
                    <li><router-link to="">赚积分</router-link></li>
                    <li><router-link to="">会员权益</router-link></li>
                    <li><router-link to="/">官网首页</router-link></li>
                </ul>
                <div v-if="!userName">
                    <a href="#/login-regist/login">登录</a>
                    |
                    <a href="#/login-regist/regist">注册</a>
                </div>
                <div v-else>
                    <router-link to="/account/index">我的账户</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      opacity: 1,
      showIndex: 0,
      tiemr: null,
      imgArr: [
        require('../assets/images/logo_tab_1.png'),
        require('../assets/images/logo_tab_2.png')
      ]
    }
  },
  computed: {
    ...mapState(['loginRegist', 'userName']),
    route () {
      return this.$route.fullPath
    },
    isIndex () {
      return this.$route.fullPath.indexOf('vip') === -1
    }
  },
  mounted () {
    this.changeImg()
    this.fixed()
    // console.log(this.param)
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    changeImg () {
      this.timer = setInterval(() => {
        this.showIndex = this.showIndex < 1 ? this.showIndex + 1 : 0
        this.$refs.img.forEach(e => {
          e.style.opacity = 0
        })
        this.$refs.img[this.showIndex].style.opacity = 1
      }, 2000)
    },
    fixed () {
      document.onscroll = () => {
        // console.log(document.documentElement.scrollTop)
        var top = document.documentElement.scrollTop
        // console.log(top)
        if (top >= this.$el.offsetHeight) {
          this.$el.classList.add('fixed')
        //   console.log(this.$el.classList)
        } else {
          this.$el.classList.remove('fixed')
        //   console.log(this.$el.classList)
        }
      }
    },
    logOut () {
      this.$store.commit('logout')
      //   this.$router.replace({path: '/login-regist/login'})
      location.href = '#/login-regist/login'
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
    $color-9e:#9e9e9e;
    $color-f85:#ff850e;
    $color-d12:#ff7d12;
    .fixed{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 100;
        box-shadow: 1px 1px 10px #ccc;
    }
    .top-box{
        width: 1200px;
        margin: 0 auto;
        .top-header{
            width: 100%;
            // position: absolute;
            // top: 0;
            // left: 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #ccc;
            color: $color-9e;
            font-weight: 300;
            font-size: 12px;
            line-height: 36px;
            span{
                padding: 0 6px;
                display: inline-block;
            }
            a{
                color: $color-9e;
                text-decoration: none;
            }
            .activity{
                color: $color-f85;
            }
        }
        .top-nav{
            display: flex;
            justify-content: space-between;
            .logo-box{
                padding: 15px 0;
                a{
                    display: flex;
                    .log-img{
                        position: relative;
                        width: 200px;
                        height: 57px;
                        img{
                            position: absolute;
                            left: 0;
                            top: 0;
                            transition: all 1s;
                            opacity: 1;
                            background-color: #fff;
                        }
                    }
                }
            }
            .nav-box{
                display: flex;
                align-items: center;
                ul{
                   display: flex;
                   padding-right: 20px;
                   li{
                       list-style: none;
                       margin-left: 15px;
                       a{
                            outline: 0;
                            display: inline-block;
                            text-decoration: none;
                            padding: 10px 16px;
                            border-bottom: 2px solid transparent;
                            font-size: 16px;
                            text-align: center;
                            color: #222;
                            border-radius: 2px;
                            position: relative;
                            line-height: 1.4rem;
                            .nav-item{
                                display: none;
                                position: absolute;
                                width: 100%;
                                top: calc(100% + 2px);
                                z-index: 100;
                                left: 0;
                                background-color: #fff;
                                padding: 8px 0;
                                box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.267);
                                border-radius: 2px;
                                li{
                                    margin: 0;
                                    text-align: left;
                                }
                                a{
                                    width: 100%;
                                    padding: 8px 0;

                                }
                                a:hover{
                                    color: $color-d12;
                                    border-bottom: 2px solid transparent;
                                }
                            }
                       }
                       a.active{
                            color: $color-d12;
                            border-bottom: 2px solid $color-d12;
                       }
                       a:hover{
                            color: $color-d12;
                            border-bottom: 2px solid $color-d12;
                            .nav-item{
                                display: block;
                            }
                       }
                   }
                }
                div{
                    background-color: #ff850e;
                    width: 120px;
                    height: 30px;
                    line-height: 30px;
                    background-color: $color-d12;
                    border-radius: 15px;
                    text-align: center;
                    color: #fff;
                    a{
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
