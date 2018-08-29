<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">银行卡</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title">我的银行卡</h4>
            <div class="acc-cardinfo-item text-center">
              <div class="acc-provice-card">
                <div class="card-logo"><img src="../assets/images/jxlogo.jpg" alt="江西银行" width="128" height="32"><span>电子账户</span></div>
                <div class="card-number">6212461470000298598</div>
                <div class="card-info"><span>开户人：卢文锋</span><span class="ml20">账户余额：<em>0.0</em>元</span></div>
              </div>
              <div class="acc-bank-card ml50">
                <div class="acc-bank-item  none" v-if="!isBind">

                  <a class="btn-bind" href="/payment/bindCardPage">
                    <span></span>
                    <p>绑定银行卡</p>
                  </a>

                </div>
                <div class="acc-bank-item" v-if="isBind">
                  <div class="card-logo"><em class="card-logo-bind" id="getBankCardNo" data-bankno="6216633400000244338"><img src="../assets/images/bank_boc.png" width="30"><u>中国银行</u></em><span>提现卡</span></div>
                  <div class="card-number">621*************338</div>
                  <div class="card-info">
                    <a class="btn-unbind" href="javascript:;">解绑</a>
                    <p>电子账户金额和债权金额均为0时，可更换提现卡</p>
                  </div>
                </div>
              </div>
            </div>
            <table class="acc-recs-banklist" cellspacing="0" cellpadding="0">
              <caption><i class="i-star">*</i>快捷充值限额参考表</caption>
              <thead>
                <tr>
                  <th rowspan="2" width="100">序号</th>
                  <th rowspan="2" width="138">支持银行</th>
                  <th colspan="4" width="138">交易限额</th>
                </tr>
                <tr>
                  <th width="138">单笔限额</th>
                  <th width="138">单日累计限额</th>
                  <th width="138">单月累计限额</th>
                  <th width="220">备注</th>
                </tr>
              </thead>
              <tbody id="bankQuotaList"><tr><td>1</td><td>工商银行</td><td>99万</td><td>99万</td><td>不限</td><td class="t-l">最高限额，需要单笔超过5万元</td></tr><tr><td>2</td><td>建设银行</td><td>100万</td><td>200万</td><td>不限</td><td class="t-l"></td></tr><tr><td>3</td><td>农业银行</td><td>2000</td><td>1万</td><td>不限</td><td class="t-l"></td></tr><tr><td>4</td><td>招商银行</td><td>10万</td><td>10万</td><td>不限</td><td class="t-l"></td></tr><tr><td>5</td><td>中国银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>6</td><td>交通银行</td><td>20万</td><td>20万</td><td>600万</td><td class="t-l"></td></tr><tr><td>7</td><td>光大银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>8</td><td>兴业银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>9</td><td>邮储银行</td><td>1万</td><td>1万</td><td>300万</td><td class="t-l">需要开通银联在线</td></tr><tr><td>10</td><td>平安银行</td><td>不限</td><td>不限</td><td>不限</td><td class="t-l"></td></tr><tr><td>11</td><td>中信银行</td><td>5000</td><td>1万</td><td>2万</td><td class="t-l"></td></tr><tr><td>12</td><td>浦发银行</td><td>20万</td><td>20万</td><td>不限</td><td class="t-l"></td></tr><tr><td>13</td><td>广发银行</td><td>100万</td><td>不限</td><td>不限</td><td class="t-l"></td></tr><tr><td>14</td><td>华夏银行</td><td>2万</td><td>2万</td><td>不限</td><td class="t-l"></td></tr><tr><td>15</td><td>上海银行</td><td>5000</td><td>1万</td><td>2万</td><td class="t-l">需要开通银联无卡支付功能</td></tr><tr><td>16</td><td>北京银行</td><td>100万</td><td>100万</td><td>300万</td><td class="t-l"></td></tr><tr><td>17</td><td>广州银行</td><td>50万</td><td>100万</td><td>3000万</td><td class="t-l"></td></tr><tr><td class="ass-recs-tips" colspan="6">1.充值限额可参考上表，具体的额度以发卡银行为准。<br>2.如果您在发卡银行设置的支付额度低于此表限额，以您的设置为准。</td></tr></tbody>
            </table>
            <div class="acc-card-tip">
              <h5>温馨提示：</h5>
              <ul>
                <li>请核对上面您保存的银行账户信息！</li>
                <li>江西银行电子账户余额和债权金额均为0时，您可以直接解绑提现卡，如有疑问请咨询平台客服；</li>
                <li>江西银行电子账户余额或债权金额不为0时，如需要更换提现卡，请联系客服电话400-999-2101。</li>
              </ul>
            </div>
            <!-- <div id="bindBank" class="">
                <h4 class="page-bind-title">绑定银行卡</h4>
                <div class="page-bind-card">
                  <h5>温馨提示：</h5>
                  <ul>
                    <li>1、目前暂不支持绑定信用卡;</li>
                    <li>2、绑定卡银行预留的信息需与存管账户姓名、身份证、手机号一致;</li>
                    <li>3、如操作中出现问题、请拨打客服电话400-999-2101</li>
                  </ul>
                </div>
                <div class="page-bc-form">
                  <form action="/payment/cardBind" method="post" id="paymentCardBindForm">
                    <input name="mobile" id="mobileNum" value="17630023486" type="hidden">
                    <input name="lastSrvAuthCode" id="lastSrvAuthCode" type="hidden">
                    <div class="form-group">
                      <span>绑定手机号：17630023486</span>
                    </div>
                    <div class="form-group">
                      <input id="cardNo" name="cardNo" placeholder="银行卡号" tabindex="1" type="text">
                    </div>
                    <div class="form-group">
                      <input class="bank-smscode-input" maxlength="6" name="smsCode" placeholder="请输入手机验证码" tabindex="2" type="text">
                              <a id="getSmsCode" class="btn-smscode" href="javascript:void(0);">获取验证码</a>
                    </div>
                    <p class="error-info text-danger"></p>
                    <div class="form-group">
                      <button id="submitBind" class="btn btn-danger no-radius" data-loading-text="提交中...">确定绑卡</button>
                    </div>
                  </form>
                </div>
            </div> -->

          </div>
        </template>
    </account>
 </div>
</template>

<script>
import Account from '@/components/Account'
export default {
  data () {
    return {
      online: true,
      isBind: true
    }
  },
  components: {
    Account
  },
  computed: {
    oActive () {
      return {
        active: this.online
      }
    },
    hActive () {
      return {
        active: !this.online
      }
    }
  },
  methods: {
    openOnline () {
      this.online = true
    },
    openHistory () {
      this.online = false
    }
  }
}
</script>
<style scoped lang="scss">
.acc-page {
  position: relative;
  padding: 42px 0;
  margin: 0 60px;
}
.acc-page-title {
    padding: 0 4px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid #d9d9d9;
}
.acc-cardinfo-item {
    margin: 66px auto 60px;
}
.acc-bank-card, .acc-provice-card {
    display: inline-block;
    width: 326px;
    height: 206px;
    border: 1px solid #000;
    border-radius: 4px;
    vertical-align: middle;
    overflow: hidden;
}
.acc-bank-item .card-logo, .acc-provice-card .card-logo {
    padding: 24px 22px;
    text-align: left;
}
.acc-bank-item .card-number, .acc-provice-card .card-number {
    padding-left: 25px;
    height: 52px;
    line-height: 52px;
    background: #efefef;
    color: #000;
    text-align: left;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 20px;
}
.acc-provice-card .card-info {
    padding: 24px 0 30px 25px;
    text-align: left;
}
.acc-bank-item .card-logo span::before, .acc-provice-card .card-logo span::before {
    position: absolute;
    top: 5px;
    left: -5px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 6px solid #258FC6;
    border-bottom: 6px solid transparent;
    content: "";
}
.acc-bank-item .card-logo span, .acc-provice-card .card-logo span {
    position: relative;
    float: right;
    margin-top: 3px;
    padding: 2px 5px;
    border-radius: 6px;
    background: #258FC6;
    color: #fff;
    text-align: center;
}
.acc-provice-card .card-info span em {
    margin-right: 3px;
    color: red;
    font-weight: 400;
}
.acc-bank-card {
    background: #F0F4F7;
}
// 银行卡
.acc-bank-item {
    position: relative;
    height: 100%;
    border-radius: 4px;
}
.acc-bank-item .card-info {
    padding: 0 25px;
    text-align: left;
}
.acc-bank-item .card-logo-bind {
    display: inline-block;
    height: 32px;
    line-height: 32px;
}
.acc-bank-item .card-logo-bind {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    u {
        margin-left: 8px;
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        vertical-align: middle;
    }
}
.btn-unbind {
    display: inline-block;
    margin-top: 14px;
    width: 60px;
    color: #258FC6;
}
.acc-bank-item .card-info p {
    margin: 15px 0 0;
    color: #AAA;
    font-size: 12px;
}

// 表格
.acc-recs-banklist {
    margin: 20px 0 15px;
    width: 866px;
    font-size: 12px;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
    caption, .bankList-box h4 {
        margin: 0;
        padding: 5px 0;
        color: #F60;
        font-weight: 600;
        font-size: 14px;
    }
}
.acc-recs-banklist tr td, .acc-recs-banklist tr th {
    border: 1px solid #ccc;
    text-align: center;
    padding: 3px 10px;
}
.acc-recs-banklist tr th {
    color: #FE6600;
    font-weight: 700;
}
caption, th {
    font-style: normal;
    font-weight: 400;
    text-align: left;
}
.acc-recs-banklist td.ass-recs-tips {
    padding: 10px 0;
    color: #FE6600;
    font-size: 14px;
}
// 温馨提示
.acc-card-tip {
    background: #FDEFED;
    padding: 12px;
    line-height: 2em;
    border: 1px solid #d9d9d9;
}
.i-star {
    font-style: normal;
    vertical-align: middle;
}
</style>
