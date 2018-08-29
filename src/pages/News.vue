<template>
<div class="page">
    <div class="container">
        <ul class="tab-nav news-tab">
            <li :class="{active:com=='index'}"><a href="#/news/index">资讯首页</a></li>
            <li :class="{active:com=='notice'}"><a href="#/news/notice">官方公告</a></li>

            <li :class="{active:com=='dynamic'}"><a href="#/news/dynamic">立业动态</a></li>

            <li :class="{active:com=='report'}"><a href="#/news/report">媒体报道</a></li>

            <li :class="{active:com=='strategy'}"><a href="#/news/strategy">投资攻略</a></li>

            <li :class="{active:com=='flash'}"><a href="#/news/flash">互金快讯</a></li>

            <li :class="{active:com=='rank'}"><a href="#/news/rank">网贷百强</a></li>

            <li :class="{active:com=='law'}"><a href="#/news/law">法律法规</a></li>
        </ul>
    </div>
    <div v-if="!detail">
        <keep-alive>
            <component :is="item" :swiper="swiper"></component>
        </keep-alive>
    </div>
    <div v-else>
        <NewsDetail :swiper="swiper"></NewsDetail>
    </div>
</div>
</template>

<script>
import NewsIndex from '../components/NewsIndex'
import NewsImg from '../components/NewsImg'
import NewsNotice from '../components/NewsNotice'
import NewsDetail from '../components/NewsDetail'
export default {
  data () {
    return {
      swiper: [

        {
          url: require('../assets/images/Fq7GPxarbkOyl8dd70FadO2bKGgv.png'),
          txt: '立业贷总裁陈伟峰接受深圳电视台采访，传递行业正能量'
        },
        {
          url: require('../assets/images/Fpd0EiSgrjMJtVnWXjKHWppitN8c.jpg'),
          txt: '关于部分银行6月29日-6月30日系统升级维护公告'
        },
        {
          url: require('../assets/images/FtmOdI_E5JdW1c3o2lfQ5YN11goH.jpg'),
          txt: '金融+公益，立业贷携手南方日报践行企业社会责任'
        },
        {
          url: require('../assets/images/lsTAePDGdDXfBijxHxIhd2-nOSye.jpg'),
          txt: '合规为矩，党建先行——立业贷党支部成立大会圆满举行'
        }
      ]
    }
  },
  components: {
    NewsIndex,
    NewsImg,
    NewsNotice,
    NewsDetail
  },
  mounted () {
    // if (this.detail) {
    //   console.log(1)
    // } else if (!this.detail) {
    //   console.log(2)
    // }
    console.log(this.detail)
  },
  computed: {
    com () {
      return this.$route.params.comment || ''
    },
    item () {
      if (this.com === 'index') {
        return 'NewsIndex'
      } else if (this.com === 'notice' || this.com === 'strategy' || this.com === 'flash' || this.com === 'rank' || this.com === 'law') {
        return 'NewsNotice'
      } else if (this.com === 'dynamic' || this.com === 'report') {
        return 'NewsImg'
      }
    },
    detail () {
      return this.$route.query.detail || ''
    }
  },
  watch: {
    detail (n, l) {
      console.log(n)
    }
  }
}
</script>

<style lang="scss">
.news-tab {
    padding-top: 20px;
}
.tab-nav li.active {
    border-bottom: 2px solid #f70;
    margin-bottom: -1px;
}
.tab-nav > li {
    display: inline-block;
    padding: 10px 0;
}
.tab-nav li a {
    padding: 0 30px;
    border-right: 1px solid #ccc;
    font-size: 16px;
    color: #888;
}
.tab-nav li.active a {
    color: #f60;
}
.news-tab li a {
    padding: 0 32px;
    font-size: 18px;
}
// 左侧部分宽度
.news-list {
    width: 73%;
    margin-right: 2%;
}
// 栏目前缀修饰
.news-title::before {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 94%;
    height: 2px;
    content: "";
    background-color: #fe9d50;
}
.news-title {
    position: relative;
    padding-top: 15px;
    margin: 0 0 15px;
    span {
        position: relative;
        display: inline-block;
        padding: 5px 20px 7px;
        font-size: 16px;
        color: #fff;
        border-radius: 6px 6px 0;
        background-color: #fe9d50;
        i {
            position: absolute;
            right: -10px;
            bottom: 0;
            width: 10px;
            height: 10px;
            background-color: #fe9d50;
        }
        i::after {
            position: absolute;
            right: -10px;
            bottom: 2px;
            width: 20px;
            height: 20px;
            content: "";
            border-radius: 16px;
            background-color: #fff;
        }
    }
}
// 内容最低高度
.news-cardlist, .news-ulist {
    min-height: 990px;
}
</style>
