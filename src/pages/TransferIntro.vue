<template>
  <div class="page">
    <div class="credit-transfer">
      <div class="top-banner"></div>
      <div class="introduce">
        <img class="title" src="../assets/images/title-introduce.png">
        <div class="content">
          <p class="content-one">
            <span>债权转让</span>是立业贷旨在帮助平台出借人提高资金流动性的服务。
          </p>
          <p>在出借人需要流动资金时，可以通过转让其名下拥有的符合相应条件的债权给其他出借人，从而完成债权转让，获得流动资金。</p>
        </div>
      </div>
      <div class="flow-path">
        <img class="title" src="../assets/images/title-flow.png">
        <div class="content">
          <img class="flow-chart" src="../assets/images/flow-chart.png">
        </div>
      </div>
      <div class="condition-standard">
        <div class="wrapper">
          <ul class="clearfix">
            <li class="condition">
              <h4>转让需符合的条件</h4>
              <p>
                <span>1、债权转让标的期限大于等于3个月；</span>
                <span>2、该债权持有的时间大于等于1个月；</span>
                <span>3、回款日前后三天不可转让；</span>
                <span>4、转让期间最多可同时转让2个债权；</span>
                <span>5、债权转让必须是散标专区的标；</span>
                <span>6、限2017年2月10日后所投标的；</span>
              </p>
            </li>
            <li class="standard">
              <h4>债权转让收费标准</h4>
              <table class="tabulation" bordercolor="#716ef6" border="1">
                <thead>
                  <tr height="48">
                    <th width="145">债权持有时间</th>
                    <th width="105">是否可转让</th>
                    <th width="117">转让服务费</th>
                    <th width="113">备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X≤1个月</td>
                    <td>不可转让</td>
                    <td>——</td>
                    <td class="lr-pd-20" rowspan="5">回款日+1天即计算为债权持有的下一个月份</td>
                  </tr>
                  <tr>
                    <td>1个月&lt;X≤2个月</td>
                    <td rowspan="4">可转让</td>
                    <td>0.50%</td>
                  </tr>
                  <tr>
                    <td>2个月&lt;X≤3个月</td>
                    <td>0.30%</td>
                  </tr>
                  <tr>
                    <td>3个月&lt;X≤6个月</td>
                    <td>0.10%</td>
                  </tr>
                  <tr>
                    <td>X&gt;6个月</td>
                    <td>0.00%</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
      <div class="clearing-form">
        <img class="title-way" src="../assets/images/title-way.png">
        <div class="content">
          <img src="../assets/images/icon-money.png">
          <p>以转让方的转让申请时间作为起点结算利息收益</p>
          <p class="c-orange">1、转让方可获得结算利息=自上个回款日后至发出债权转让这段时间所产生的利息收益；</p>
          <p class="m-b-73 c-orange">2、受让方可获得结算利息=自转让方发出债权转让起至标的到期时间所产生的利息收益；
            <br> 3、出让人当期持有天数利息不包括且不享有其使用的加息券收益。
          </p>
          <p>举例：张三在1月1日购得某债权，上个回款日为3月1日，后因急事需要钱，在3月23日发布债权转让标，李四于当天时间受让该债权，则：张三本期可获得的利息=该债权3月1日至3月22日所产生利息；</p>
          <p>李四（受让人）本期可获得的利息=该债权3月23日至到期日期所产生利息。</p>
        </div>
      </div>
      <div class="footer-issue">
        <div class="wrapper">
          <img class="title-trouble" src="../assets/images/title-trouble.png">
          <div class="content">
            <p class="c-orange">1、如何进行债权转让？</p>
            <p class="m-t5-b12">登录立业贷平台账户，进入“我的账户”，点击“债权转让”即可查看可转让的债权，点击“债权转让”提交债权转让申请，平台审核通过后转让标自动挂出，后台审核时间一般为3个工作日内。</p>
            <p class="c-orange">2、购买的转让债权是否可以再次转让？转让手续费怎么计算？</p>
            <p class="m-t5-b12">可以。购买的转让债权符合转让条件可以再进行转让，转让手续费按承接时间进行计算。</p>
            <p class="c-orange">3、债权转让可否撤回？</p>
            <p class="m-t5-b12">在平台初审之前可以撤回，点击“债权转让”-“转让中的债权”，在相应项目后点击“撤销”即可；通过初审的转让项目不可撤销。</p>
            <p class="c-orange">4、债权可否溢价、折价转让或转让部分债权？</p>
            <p class="m-t5-b12">债权只能原价转让，不可折价及部分转让。</p>
            <p class="c-orange">5、购买债权转让标时为什么不能手动输入投资金额？</p>
            <p class="m-t5-b12">债权转让标的一对一转让承接，投资金额系统默认，无需手动输入。</p>
            <p class="c-orange">6、债权转让的转让价格怎么计算？</p>
            <p class="m-t5-b12">转让价格计算公式：剩余月份本金+当期利息/30天*当期实际持有天数(不含且不享有其使用的加息券收益)。</p>
            <p class="c-orange">7、什么情况下购买债权会失败？投资后什么时候开始计息？</p>
            <p class="m-t5-b12">点击投资后页面跳转至江西银行密码页面，中途关闭页面或交易密码连续错误3次则视为投资失败，资金冻结40分钟，解冻后可重新投资；投资成功后即可以计息。</p>
            <p class="c-orange">8、转出的债权流标了，原来使用的加息券还继续有效吗？</p>
            <p class="m-t5-b12">出让人转出的债权有使用平台加息券的，债权如转让失败，回购后继续享有加息收益。</p>
            <p class="c-orange">9、出让人转出债权，当期的加息券收益是否可以收到？</p>
            <p class="m-t5-b12">出让人转出的债权有使用平台加息券的，转出的当期持有天数利息不包括且不享有其使用的加息券收益。</p>
            <p class="c-orange">10、债权转让流标后什么时候可以再次转让，手续费怎么计算？</p>
            <p class="m-t5-b12">单个债权当期可申请转让次数为3次，申请债转的间隔时间不少于10天，流标的债权需等待下期再次操作申请，转让手续费按标的原始持有时间进行计算。</p>
          </div>
        </div>
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
.top-banner {
    height: 369px;
    background: url("../assets/images/topBanner.png") no-repeat center;
    min-width: 1200px;
}
.wrapper {
    width: 1150px;
    margin: 0 auto;
}
.introduce {
    height: 285px;
    background: #fff;
    text-align: center;
    .title {
        margin: 67px 0 35px 0;
    }
    .content {
        width: 1148px;
        height: 139px;
        border: 1px solid #726bf5;
        margin: 0 auto;
        .content-one {
            margin: 46px 0 19px 0;
        }
        p {
            font-size: 17px;
            color: #7a7a7a;
        }
        span {
            color: #ff7d12;
        }
    }
}

.flow-path {
    height: 635px;
    background: url("../assets/images/icon-middle.png") no-repeat center;
    text-align: center;
    .title {
        margin: 80px 0 40px 0;
    }
    .content {
        width: 1148px;
        height: 419px;
        border: 1px solid #726bf5;
        margin: 0 auto;
    }
    .flow-chart {
        margin-top: 55px;
    }
}
.condition-standard {
    height: 450px;
    background: #fff;
    li {
        width: 554px;
        height: 307px;
        background: url("../assets/images/diagonal.png") no-repeat center;
        background-color: #ffffff;
        box-shadow: 0px 3px 8px 0px rgba(180, 180, 180, 0.79);
        margin-top: 85px;
        h4 {
            width: 454px;
            height: 58px;
            line-height: 58px;
            padding-left: 18px;
            border-bottom: 2px dotted #b9b9b9;
            margin: 12px auto 7px;
            font-size: 24px;
            font-weight: 600;
            color: #716ef6;
        }
    }
    .condition{
        float: left;
        p {
            width: 320px;
            height: 205px;
            margin-left: 59px;
            overflow: hidden;
        }
        span {
            display: block;
            font-size: 16px;
            line-height: 1;
            color: #666666;
            margin-top: 12px;
        }
    }
    .standard{
        float: right;
        margin-right: 0;
        .tabulation {
            width: 480px;
            height: 202px;
            font-size: 14px;
            color: #777777;
            margin: 8px auto 0;
            tr,th{
                text-align: center;
            }
        }
    }
}
.clearing-form {
    height: 580px;
    text-align: center;
    background: #fff;
    .title-way {
        margin: 38px 0 24px 0;
    }
    .content {
        position: relative;
        width: 1028px;
        height: 325px;
        padding: 50px 60px 0;
        text-align: left;
        border: 1px solid #726bf5;
        margin: 0 auto;
        img {
            position: absolute;
            top: 43px;
            right: 176px;
        }
        p {
            font-size: 17px;
            line-height: 35px;
            margin: 0;
            color: #666666;
        }
        .c-orange {
            color: #ff7d12;
        }
        .m-b-73 {
            margin-bottom: 73px;
        }
    }
}
.footer-issue {
    height: 926px;
    overflow: hidden;
    background: url("../assets/images/icon-footer.png") no-repeat center;
    text-align: center;
    .title-trouble {
        margin-top: 55px;
    }
    .content {
        width: 760px;
        height: 710px;
        text-align: left;
        margin: 60px 0 0 208px;
        p {
            font-size: 16px;
            color: #666666;
            line-height: 23px;
            margin: 0;
        }
        .m-t5-b12 {
            margin: 5px 0 12px;
        }
        .c-orange {
            color: #fe9d50;
        }
    }
}
</style>
