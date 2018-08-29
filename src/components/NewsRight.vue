<template>
<div class="page">
    <div class="col-3">
        <div class="card p-a-0">
          <el-carousel height="170px" class="s-btn">
                <el-carousel-item v-for="(item,i) in swiper" :key="i">
                    <a href="" class="swiper-a">
                        <img :src="item.url" alt="" class="swiper-img">
                        <h3 class="carousel-caption">{{item.txt}}</h3>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="card p-t-0">
          <h3 class="news-title">
            <span>热门资讯
              <i></i>
            </span>
          </h3>
          <ul class="news-rightside-list">

            <li class="text-ellipsis">
              <span class="text-danger">1</span>
              <a target="_blank" title="立业贷荣获星评社2017年度网贷行业百强企业" href="/news/meiti/8861.html" marked="1">立业贷荣获星评社2017年度网贷行业百强企业</a>
            </li>

            <li class="text-ellipsis">
              <span class="text-danger">2</span>
              <a target="_blank" title="立业贷四周年——不忘初心，砥砺前行" href="/news/meiti/8853.html" marked="1">立业贷四周年——不忘初心，砥砺前行</a>
            </li>

            <li class="text-ellipsis">
              <span class="text-danger">3</span>
              <a target="_blank" title="合规为矩，党建先行——立业贷党支部成立大会圆满举行" href="/news/meiti/8841.html" marked="1">合规为矩，党建先行——立业贷党支部成立大会圆满举行</a>
            </li>

            <li class="text-ellipsis">
              <span class="">4</span>
              <a target="_blank" title="立业贷朱洁：备案元年，互金做好信披工作成重点" href="/news/meiti/8877.html" marked="1">立业贷朱洁：备案元年，互金做好信披工作成重点</a>
            </li>

            <li class="text-ellipsis">
              <span class="">5</span>
              <a target="_blank" title="立业贷陈伟峰：深耕科技金融，为微小企业输送“血液”" href="/news/meiti/8887.html" marked="1">立业贷陈伟峰：深耕科技金融，为微小企业输送“血液”</a>
            </li>

            <li class="text-ellipsis">
              <span class="">6</span>
              <a target="_blank" title="《南方日报》专题报道立业贷公益慈善活动" href="/news/dongtai/8705.html" marked="1">《南方日报》专题报道立业贷公益慈善活动</a>
            </li>

            <li class="text-ellipsis">
              <span class="">7</span>
              <a target="_blank" title="网贷平台过了三级等保就真的安全了？需多维度构建安防体系" href="/news/dongtai/8753.html" marked="1">网贷平台过了三级等保就真的安全了？需多维度构建安防体系</a>
            </li>

            <li class="text-ellipsis">
              <span class="">8</span>
              <a target="_blank" title="立业贷严格按照“1+3”监管体系，全面完善平台合规工作" href="/news/dongtai/8811.html" marked="1">立业贷严格按照“1+3”监管体系，全面完善平台合规工作</a>
            </li>

            <li class="text-ellipsis">
              <span class="">9</span>
              <a target="_blank" title="立业贷与美的葡萄找车正式签署战略合作协议" href="/news/dongtai/8729.html" marked="1">立业贷与美的葡萄找车正式签署战略合作协议</a>
            </li>

            <li class="text-ellipsis">
              <span class="">10</span>
              <a target="_blank" title="致投资人的一封信：2018年，让我们聚“立”出发" href="/news/meiti/8791.html" marked="1">致投资人的一封信：2018年，让我们聚“立”出发</a>
            </li>

          </ul>
        </div>

        <div class="card news-rightside-qrcode">
          <img src="../assets/images/w_03.png">
          <br>扫描二维码，关注立业贷
        </div>
    </div>
</div>
</template>

<script>
import '../style/elemeUi.min.css'
export default {
  data () {
    return {

    }
  },
  props: ['swiper'],
  components: {

  }
}
</script>

<style lang="scss" scoped>
.swiper-img{
    height: 170px;
    display: block;
    width: 100%;
}
.swiper-a{
    position: relative;
    display: inline-block;
    width: 100%;
    h3{
        // width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        color: #fff;
        background-color: rgba(0,0,0,.4);
        text-align: center;
        margin: 0;
        padding: 8px 50px;
        overflow: hidden;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.news-rightside-list{
  span {
    padding-right: 6px;
    font-style: italic;
    font-weight: 700;
  }
  a {
    line-height: 1.8;
  }
}
// 二维码
.news-rightside-qrcode {
    padding: 40px 0;
    text-align: center;
}

</style>
