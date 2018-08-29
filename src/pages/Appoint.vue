<template>
 <div class="page">
     <div class="ly-order-banner"></div>
    <div class="ly-wrapper">
      <div class="ly-order-box">
        <h2 class="ly-order-title">小立有约列表</h2>
        <ul class="ly-order-plan clearfix">

          <li class="ly-order-item">
            <h3 class="lop-title">预约A</h3>
            <div class="lop-info">
              <div class="col-3 col-28">
                <span>
                  <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>：
                  <b class="f89b56 fz26">

                    11.00
                    <i>%</i>

                  </b>
                </span>
              </div>
              <div class="col-3">

                <span>借款期限：
                  <b class="fz26">6</b>个月</span>

              </div>
              <div class="col-3">
                <span>历史等待时间：1-3天</span>
              </div>
              <div class="col-3 col-22">
                <span>标的来源：盈车贷</span>
              </div>
              <div class="col-3 col-28">
                <span>起息日期：放款后自动计息</span>
              </div>
              <div class="col-3">
                <span>风控措施：实物抵押</span>
              </div>
            </div>
            <div class="lop-link">

              <a class="btn-link-full">预约已满</a>

            </div>
          </li>

          <li class="ly-order-item">
            <h3 class="lop-title">预约B</h3>
            <div class="lop-info">
              <div class="col-3 col-28">
                <span>
                  <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>：
                  <b class="f89b56 fz26">

                    12.50
                    <i>%</i>

                  </b>
                </span>
              </div>
              <div class="col-3">

                <span>借款期限：
                  <b class="fz26">12</b>个月</span>

              </div>
              <div class="col-3">
                <span>历史等待时间：1-3天</span>
              </div>
              <div class="col-3 col-22">
                <span>标的来源：盈车贷</span>
              </div>
              <div class="col-3 col-28">
                <span>起息日期：放款后自动计息</span>
              </div>
              <div class="col-3">
                <span>风控措施：实物抵押</span>
              </div>
            </div>
            <div class="lop-link">

              <a class="btn-link-full">预约已满</a>

            </div>
          </li>

          <li class="ly-order-item">
            <h3 class="lop-title">预约C</h3>
            <div class="lop-info">
              <div class="col-3 col-28">
                <span>
                  <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>：
                  <b class="f89b56 fz26">

                    14.00
                    <i>%</i>

                  </b>
                </span>
              </div>
              <div class="col-3">

                <span>借款期限：
                  <b class="fz26">24</b>个月</span>

              </div>
              <div class="col-3">
                <span>历史等待时间：1-3天</span>
              </div>
              <div class="col-3 col-22">
                <span>标的来源：盈车贷</span>
              </div>
              <div class="col-3 col-28">
                <span>起息日期：放款后自动计息</span>
              </div>
              <div class="col-3">
                <span>风控措施：实物抵押</span>
              </div>
            </div>
            <div class="lop-link">

              <a class="btn-link-full">预约已满</a>

            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="ly-order-intro">
      <div class="container">
          <img class="intro-title" src="../assets/images/order_introduce.png" alt="了解小立有约">
      </div>
    </div>
    <div class="ly-order-cycle">
      <div class="container">
          <img class="cycle-photo" src="../assets/images/order_item_cycle.png" alt="项目周期">
      </div>
    </div>
    <div class="ly-order-detail">
      <div class="container">
          <img src="../assets/images/order_produce_detail.png" alt="产品说明">
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

  }
}
</script>

<style scoped lang="scss">
.ly-order-banner {
    height: 367px;
    background: url(../assets/images/banner_list_bg.jpg) no-repeat 50% 50%;
    background-size: cover;
    min-width: 1200px;
}
.ly-wrapper {
    width: 1200px;
    margin: auto;
}
.ly-order-box {
    margin: 78px 0 88px;
    padding: 20px;
    border: 1px solid #dcdcdc;
    border-top: 1px solid #ff7d12;
    background-color: #fff;
}
.ly-order-title {
    margin: 0;
    padding-bottom: 30px;
    font-size: 20px;
    color: #ff7d12;
}
.ly-order-item {
    position: relative;
    margin-bottom: 30px;
    padding: 0 20px;
    height: 120px;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
    .lop-title {
        position: absolute;
        top: -4px;
        left: -6px;
        margin: 0;
        width: 120px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border: 1px solid #f79a57;
        background-color: #f79a57;
        border-radius: 2px;
    }
    .lop-title::before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: -4px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px 4px 4px 4px;
        border-color: transparent #f79a57 transparent transparent;
    }
    .lop-info {
        padding: 48px 0 14px;
        float: left;
        width: 988px;
        div {
            height: 28px;
            line-height: 28px;
            color: #666;
            font-size: 15px;
        }
    }
    .col-28 {
        width: 28%;
    }
    .col-22 {
        width: 22%;
    }
    .lop-link {
        position: relative;
        float: left;
        padding: 40px 0;
        z-index: 10;
        .btn-link-full {
            display: inline-block;
            width: 120px;
            height: 40px;
            line-height: 40px;
            background-color: #ccc;
            color: #fff;
            font-size: 15px;
            letter-spacing: 1px;
            text-align: center;
            border-radius: 6px;
        }
    }
}
.ly-order-intro {
    padding: 42px 0 70px;
    background: #fff;
}
.container {
    width: 1200px;
    margin: 0 auto;
}
.ly-order-intro .intro-title {
    margin-bottom: 50px;
}
.ly-order-cycle {
    padding: 23px 0 70px;
    background: #f5f5f5;
}
.ly-order-detail {
    margin-bottom: -18px;
    padding: 70px 0 110px;
    background: #fff;
}
// 图片设置
.ly-order-cycle img, .ly-order-detail img, .ly-order-intro img {
    margin: 0 auto;
    display: block;
}
</style>
