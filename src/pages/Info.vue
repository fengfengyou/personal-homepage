<template>
<div class="page">
    <div class="info-banner"></div>
    <div class="container mt20 clearfix">
        <div class="info-menu">
            <h4 class="menu-title">信息披露</h4>
            <ul class="menu-list clearfix">
                <li class="active">公司概述</li>
                <li class="">运营数据</li>
                <li class="">备案登记</li>
                <li class="">银行存管</li>
                <li id="riskManagePart" class="">风险管理</li>
                <li>审计报告</li>
                <li>合同协议</li>
                <li>法律法规</li>
                <li>法人签章</li>
                <li>资费说明</li>
                <li>联系我们</li>
                <div class="menu-icon" ref="icon" style="top:55px;"></div>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    this.changeTop()
  },
  methods: {
    changeTop () {
      var aLi = document.querySelectorAll('.menu-list li')
      var bThis = this
      for (let i = 0; i < aLi.length; i++) {
        // console.log(aLi[i].offsetTop)
        aLi[i].onclick = function () {
          bThis.$refs.icon.style.top = this.offsetTop + 'px'
          console.log(bThis.$refs.icon.style.top)
          console.log(i)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* 顶部图片 */
.info-banner {
    width: 100%;
    height: 220px;
    min-width: 1200px;
    background-image:url('../assets/images/banner_company.jpg');
    background-position: center center;
    background-repeat: repeat;
}
/* 左侧菜单 */
.info-menu {
    position: relative;
    float: left;
    width: 220px;
    background: #fff;
    .menu-title {
        margin: 0;
        height: 55px;
        line-height: 55px;
        font-size: 18px;
        position: relative;
        text-indent: 60px;
        cursor: pointer;
        color: #ff850e;
    }
    li.active, li:hover {
        color: #ff850e;
    }
}
.im-list .im-title, .menu-list li {
    display: block;
    font-size: 16px;
    border-left: 2px solid #FFF;
    transition: .3s ease-out;
    height: 48px;
    line-height: 48px;
    text-indent: 70px;
    cursor: pointer;
    transition: all .2s ease;
}
.info-menu .menu-icon {
    position: absolute;
    top: 55px;
    left: 0;
    // margin-top: 55px;
    width: 2px;
    height: 48px;
    background: #ff850e;
    transition: all 0.3s;
}
</style>
