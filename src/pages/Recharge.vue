<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">充值</li>
        </template>
        <template slot="right">
            <div class="acc-page">
                <ul class="tab-nav sm no-margin">
                    <li :class="{active:online}" @click="openOnline"><a href="javascript:void(0);">在线充值</a></li>
                    <li :class="{active:!online}" @click="openHistory"><a href="javascript:void(0);">充值记录</a></li>
                </ul>
                <div class="acc-recharge" v-show="online">
                    <ul class="acc-rec-tab">
                        <li :class="{active:!rapid}"><a href="javascript:;" @click="openBank">银行转账</a></li>
                        <!-- <li><a href="javascript:;">支付宝转账</a></li> -->
                        <li :class="{active:rapid}"><a href="javascript:;" @click="openRapid">快捷充值</a></li>
                    </ul>
                    <div class="acc-recharge no-margin">
                        <!-- 银行卡转账 -->
                        <div class="acc-rec-section active" v-show="!rapid">
                            <div class="acc-rec-content clearfix">
                                <div class="acc-recc-card">
                                    <div class="card-logo"><img src="../assets/images/jxlogo.jpg" alt="江西银行" width="128" height="32"><span>银行账户</span></div>
                                    <div class="card-number">791912987400309</div>
                                    <div class="card-info"><span class="fs13">开户名：深圳市立业贷互联网金融服务有限公司</span></div>
                                </div>
                                <div class="acc-recc-card-info">
                                    <div class="mt10">客户可直接通过绑定的银行存款账户向江西银行资金存管电子账户<br>转账（柜台、网银、手机银行），所需填写收款人信息如下：</div>
                                    <div class="card-info-acc">
                                        <p><label>收款方</label><span>深圳市立业贷互联网金融服务有限公司</span></p>
                                        <p><label>收款方账户</label><span>791912987400309</span></p>
                                        <p><label>收款方开户行</label><span>江西银行股份有限公司南昌铁路支行营业部</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="acc-recs-bank">
                                <p class="line-h28">注：应监管要求，银行转账充值仅限用户在立业贷平台绑定的银行卡，对立业贷存管统一汇总账户进行转账操作，并由银行自动划拨至用户的存管电子账户，<a class="c_258fc6" href="https://www.liyedai.cn/news/gonggao/8943.html" target="_blank">详见关于江西银行存管系统升级调整的公告。</a></p>

                            </div>
                            <div class="acc-recs-info">
                                温馨提示：
                                <div>
                                    <i class="i-star">* </i>您可通过银行存款账户向您的江西银行存管电子账户进行转账，具体操作如下：<br>
                                    a、部分银行系统转账需填写南昌银行营业部，柜台转账需走人行大小额通道或超级网银；<br>
                                    b、登录您的网银，手机银行进行转账。<br>
                                    <i class="i-star">* </i>因为银行会在23:30到次日凌晨3:00进行系统数据处理，请尽量避免在此时间段充值；<br>
                                    <i class="i-star">* </i>充值后如果账户余额没有变动请到个人中心，点击总资产旁的线下充值同步按钮获取最新账户余额；<br>
                                    <i class="i-star">* </i>充值过程中如出现异常，请拨打客服电话400-999-2101。<br>
                                </div>
                            </div>
                        </div>
                        <!-- 快捷充值 -->
                        <div class="acc-rec-section" v-show="rapid">
                            <div class="acc-recs-form">
                                <form id="quickRecharge" class="vform">
                                    <div class="acc-recs-input">
                                        <label class="text-center">真实姓名：</label>
                                        <input tabindex="1" value="卢**" readonly="true" type="text">
                                    </div>
                                    <div class="acc-recs-input">
                                        <label for="name">充值银行卡：</label>
                                        <span class="get-bank-card" id="getBankCardNo" data-bankno="6216633400000244338"><img src="../assets/images/bank_boc.png" width="32"><u>中国银行( 尾号4338 )</u></span>
                                    </div>
                                    <div class="acc-recs-input">
                                        <label for="name">银行预留手机号：</label>
                                        <input name="mobile" id="mobile" tabindex="2" value="17630023486" type="text">
                                    </div>
                                    <div class="acc-recs-input">
                                        <label for="name">充值金额：</label>
                                        <input name="txAmount" id="txAmount" tabindex="3" type="text">
                                        <span>元,（当前可用余额：0.00元）</span>
                                        <p class="acc-recs-error"></p>
                                    </div>
                                    <div class="acc-recs-btn">
                                        <input id="buttonRecharge" class="acc-rec-sbt btn" data-risk="1" value="去充值" type="submit">
                                        <em class="question-tips hint-tip hint-tip-top" data-tip="温馨提示：充值时银联页面的支付密码为银行卡的密码，非平台的交易密码。"><i class="icon"></i>充值支付密码？</em>
                                    </div>
                                </form>
                            </div>
                            <div class="cred text-center"></div>
                            <table class="acc-recs-banklist" cellspacing="0" cellpadding="0">
                                <caption><i class="i-star">*</i>快捷充值限额参考表</caption>
                                <thead>
                                    <tr>
                                        <th rowspan="2" width="100">序号</th>
                                        <th rowspan="2" width="148">支持银行</th>
                                        <th colspan="4" width="148">交易限额</th>
                                    </tr>
                                    <tr>
                                        <th width="148">单笔限额</th>
                                        <th width="148">单日累计限额</th>
                                        <th width="148">单月累计限额</th>
                                        <th width="360">备注</th>
                                    </tr>
                                </thead>
                                <tbody id="bankQuotaList">

                                <tr><td>1</td><td>工商银行</td><td>99万</td><td>99万</td><td>不限</td><td class="t-l">最高限额，需要单笔超过5万元</td></tr><tr><td>2</td><td>建设银行</td><td>100万</td><td>200万</td><td>不限</td><td class="t-l"></td></tr><tr><td>3</td><td>农业银行</td><td>2000</td><td>1万</td><td>不限</td><td class="t-l"></td></tr><tr><td>4</td><td>招商银行</td><td>10万</td><td>10万</td><td>不限</td><td class="t-l"></td></tr><tr><td>5</td><td>中国银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>6</td><td>交通银行</td><td>20万</td><td>20万</td><td>600万</td><td class="t-l"></td></tr><tr><td>7</td><td>光大银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>8</td><td>兴业银行</td><td>5万</td><td>5万</td><td>不限</td><td class="t-l"></td></tr><tr><td>9</td><td>邮储银行</td><td>1万</td><td>1万</td><td>300万</td><td class="t-l">需要开通银联在线</td></tr><tr><td>10</td><td>平安银行</td><td>不限</td><td>不限</td><td>不限</td><td class="t-l"></td></tr><tr><td>11</td><td>中信银行</td><td>5000</td><td>1万</td><td>2万</td><td class="t-l"></td></tr><tr><td>12</td><td>浦发银行</td><td>20万</td><td>20万</td><td>不限</td><td class="t-l"></td></tr><tr><td>13</td><td>广发银行</td><td>100万</td><td>不限</td><td>不限</td><td class="t-l"></td></tr><tr><td>14</td><td>华夏银行</td><td>2万</td><td>2万</td><td>不限</td><td class="t-l"></td></tr><tr><td>15</td><td>上海银行</td><td>5000</td><td>1万</td><td>2万</td><td class="t-l">需要开通银联无卡支付功能</td></tr><tr><td>16</td><td>北京银行</td><td>100万</td><td>100万</td><td>300万</td><td class="t-l"></td></tr><tr><td>17</td><td>广州银行</td><td>50万</td><td>100万</td><td>3000万</td><td class="t-l"></td></tr><tr><td class="ass-recs-tips" colspan="6">1.充值限额可参考上表，具体的额度以发卡银行为准。<br>2.如果您在发卡银行设置的支付额度低于此表限额，以您的设置为准。。</td></tr></tbody>
                            </table>
                            <div class="acc-recs-info">
                                温馨提示：
                                <div>
                                    <i class="i-star">* </i>请勿使用360浏览器进行充值操作；<br>
                                    <i class="i-star">* </i>快捷充值是从绑定的银行卡账户向江西银行电子账户充值；<br>
                                    <i class="i-star">* </i>单笔充值限额根据各个银行上的充值限额为准；<br>
                                    <i class="i-star">* </i>因为银行会在23:30到次日凌晨3:00进行系统数据处理，请尽量避免在此时间段充值；<br>
                                    <i class="i-star">* </i>使用第三方接口充值后，切勿立即关闭浏览器，当页面自动跳转至立业贷界面时，充值金额方能进入您的账户；<br>
                                    <i class="i-star">* </i>充值过程中如出现异常，请拨打客服电话400-999-2101。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="acc-recharge" v-show="!online">
                    <log v-show="!online" @ajax-page="ajaxPage" :total="total">
                        <template slot="tabel">
                            <table class="acc-table table" id="withdrawinfoTab" cellspacing="0" cellpadding="0" border="0">
                                <thead>
                                    <tr>
                                        <th width="18%">操作时间</th>
                                        <th>充值方式</th>
                                        <th>充值金额</th>
                                        <th>到账时间</th>
                                        <th>状态</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr><td class="acclist-empty" colspan="5"><span>！<br>暂无记录</span></td></tr>

                                </tbody>
                            </table>
                        </template>
                        <template slot="select">
                            <option value="">全部</option>
                            <option value="0">失败</option>
                            <option value="1">成功</option>
                        </template>
                    </log>
                </div>
            </div>
        </template>
    </account>
 </div>
</template>

<script>
import Account from '@/components/Account'
import Log from '../components/Log'
export default {
  data () {
    return {
      online: true,
      rapid: false,
      total: 100
    }
  },
  components: {
    Account,
    Log
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
    },
    bActive () {
      return {
        active: !this.rapid
      }
    },
    rActive () {
      return {
        active: this.rapid
      }
    }
  },
  methods: {
    openOnline () {
      this.online = true
    },
    openHistory () {
      this.online = false
    },
    openBank () {
      this.rapid = false
    },
    openRapid () {
      this.rapid = true
    },
    ajaxPage (currentPage) {
      console.log(currentPage)
    }
  }
}
</script>
<style scoped lang="scss">
// 在线充值、充值记录选项卡
.acc-page {
    position: relative;
    padding: 42px 0;
    margin: 0 60px;
}
.no-margin {
    margin: 0;
}

// 银行转账、快捷充值
.acc-rec-tab {
    border-bottom: 1px solid #DCD9D9;
}
.acc-rec-tab li {
    display: inline-block;
    padding: 10px 0;
}
.acc-rec-tab li.active a {
    color: #f60;
}
.acc-rec-tab li a:nth-child(1) {
    padding-left: 40px;
}
.acc-rec-tab li a {
    display: inline-block;
    padding: 0 30px;
    font-size: 15px;
}
.acc-recharge {
    position: relative;
    padding: 8px 0 0;
}
// 银行转账
.acc-rec-content {
    margin: 50px 0;
}
.acc-recc-card .card-logo {
    padding: 24px 22px;
}
.acc-recc-card {
    margin-left: 25px;
    display: inline-block;
    width: 326px;
    height: 206px;
    border: 1px solid #000;
    border-radius: 4px;
}
.acc-recc-card .card-logo span {
    position: relative;
    float: right;
    margin-top: 3px;
    padding: 2px 5px;
    background: #258FC6;
    border-radius: 6px;
    color: #fff;
}
// 前缀修饰
.acc-recc-card .card-logo span::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 5px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 6px solid #258FC6;
    border-bottom: 6px solid transparent;
}
// 银行卡号
.acc-recc-card .card-number {
    padding-left: 25px;
    height: 52px;
    line-height: 52px;
    color: #000;
    background: #efefef;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 20px;
}
.acc-recc-card .card-info {
    padding: 24px 0 30px 25px;
}
.fs13 {
    font-size: 13px;
}
.acc-recc-card-info {
    float: right;
    width: 410px;
    height: 206px;
}
.mt10 {
    margin-top: 10px;
}
.card-info-acc {
    padding: 30px 0 10px 0;
    p {
        margin-bottom: 20px;
        font-size: 12px;
        label {
            display: inline-block;
            width: 108px;
        }
    }
}

// 注
.acc-recs-bank {
    margin: 30px 0;
}
.acc-recs-bank p {
    color: #f60;
}
.line-h28 {
    line-height: 28px;
}
.c_258fc6 {
    color: #258fc6;
}
// 温馨提示
.acc-recs-info {
    background: #FDEFED;
    padding: 12px;
    line-height: 2em;
    border: 1px solid #d9d9d9;
}
.i-star {
    font-style: normal;
    vertical-align: middle;
}

// 快捷充值
.acc-recs-form {
    margin: 50px 0 22px;
    padding: 0 30px;
}
.acc-recs-input {
    padding: 0 0 22px;
}
.acc-recs-input label {
    display: inline-block;
    width: 116px;
    text-align: left;
}
.acc-recs-input span {
    display: inline-block;
    padding-left: 5px;
    font-size: 12px;
}
.get-bank-card img {
    display: inline-block;
}
.get-bank-card u {
    margin-left: 8px;
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    vertical-align: middle;
}
// 错误提示消息
.acc-recs-error {
    position: relative;
    display: block;
    margin: 0;
    padding-left: 120px;
    height: 36px;
    line-height: 36px;
}
// 充值按钮
.acc-recs-btn {
    position: relative;
    margin: 30px 0 10px;
    text-align: center;
}
.acc-rec-sbt {
    padding: 10px 84px;
}
.question-tips {
    position: absolute;
    width: auto;
    display: inline-block;
    margin-left: 10px;
    top: 10px;
    color: red;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
    font-style: normal;
    padding: 10px 0;
    i {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: -2px 5px 0 10px;
        font-size: 0;
        line-height: 0;
        cursor: pointer;
        vertical-align: middle;
        background: url(../assets/images/question_tip.png) center top no-repeat;
    }
}
// 提示框
.hint-tip-top::after, .hint-tip-top::before {
    bottom: 95%;
    left: 5%;
}
.hint-tip::after {
    content: attr(data-tip);
    background: rgba(255,205,165,.88);
    width: 130px;
    line-height: 20px;
    color: #E85800;
    padding: 8px 10px;
    font-size: 12px;
    text-align: left;
    border-radius: 6px;
    -o-box-shadow: 4px 4px 8px rgba(0,0,0,.3);
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);

}
.hint-tip::after, .hint-tip::before {

    position: absolute;
    opacity: 0;
    z-index: 10;
    pointer-events: none;
    -webkit-transition: .3s ease;
    -moz-transition: .3s ease;
    transition: .3s ease;

}
.hint-tip:hover::after,.hint-tip:hover::before{
    opacity: 1;
}
.hint-tip.hint-tip-top::before {
    top: 0;
    left: 55%;
    border-top-color: #FFCDA5;

}
.hint-tip::before {

    content: '';
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 11;

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
</style>
