<template>
  <div class="login-page">
    <div class="swiper-box">
      <div class="swiper-item" v-for="(e,i) in imgArray" :key="i" ref="show">
        <img :src="e.img" alt="">
        <p><img :src="e.txt" alt=""></p>
      </div>
      <div class="login-box">
        <keep-alive>
        <component :is="param" class="login-model"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'
import Regist from '../components/Regist'
// import {mapState} from 'vuex'
export default {
  data () {
    return {
      mark: 0,
      imgArray: [
        {
          img: require('../assets/images/login_bg_11.jpg'),
          txt: require('../assets/images/icon_text_1.png')
        },
        {
          img: require('../assets/images/login_bg_22.jpg'),
          txt: require('../assets/images/icon_text_2.png')
        },
        {
          img: require('../assets/images/login_bg_33.jpg'),
          txt: require('../assets/images/icon_text_3.png')
        }
      ],
      showIndex: 0,
      tiemr: null
    }
  },
  // computed: {
  //   ...mapState(['loginRegist'])
  // },
  mounted () {
    this.changeImg()
    // console.log(this.$route)
  },
  destroyed () {
    clearInterval(this.timer)
  },
  computed: {
    param () {
      return this.$route.params.name
    }
  },
  watch: {
    param (n, l) {
      // console.log(n)
      this.$store.commit('updateLoginRegist', n)
    }
  },
  components: {
    Login,
    Regist
  },
  methods: {
    changeImg () {
      this.timer = setInterval(() => {
        this.showIndex = this.showIndex < 2 ? this.showIndex + 1 : 0
        this.$refs.show.forEach(e => {
          e.style.opacity = 0
        })
        this.$refs.show[this.showIndex].style.opacity = 1
      }, 4000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page{
    .swiper-box{
      position: relative;
      height: 730px;
      .swiper-item{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 1s;
        opacity: 1;
        img{
          width: 100%;
          height: 730px;
          min-width: 1200px;
        }
        p{
          display: inline-block;
          width: 463px;
          height: 50px;
          position: absolute;
          top: 0;
          left: 20%;
          bottom: 0;
          margin: auto;
          font-size: 30px;
          color: #fff;
          img{
            width: 463px;
            height: 50px;
            min-width: 0;
          }
        }
      }
      .login-box{
        width: 1200px;
        height: 730px;
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
        .login-model{
          position: absolute;
          top: 50%;
          right: 100px;
          margin-top: -254px;
        }

      }
    }
  }

</style>
