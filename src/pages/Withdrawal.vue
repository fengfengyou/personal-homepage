<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">提现</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <ul class="tab-nav sm no-margin">
                <li :class="{active:online}" @click="openOnline"><a href="javascript:void(0);">提现</a></li>
                <li :class="{active:!online}" @click="openHistory"><a href="javascript:void(0);">提现记录</a></li>
            </ul>
            <div class="acc-recharge" v-show="online">
              <form id="withdrawalForm" class="vform">
                <div class="acc-withform-item">
                  <input id="userBalance" value="0.0" type="hidden">
                  <div class="acc-withform-group mb10">
                    <span class="acc-withform-lab">持卡人姓名：<label id="canWithdraw">卢**</label></span>
                  </div>
                  <div class="acc-withform-group mb10">
                    <span class="acc-withform-lab">提现银行卡：</span><label class="get-bank-card" id="getBankCardNo" data-bankno="6216633400000244338"><img src="../assets/images/bank_boc.png" width="32"><u>中国银行( 尾号4338 )</u></label>
                  </div>
                  <div class="acc-withform-group mb10"><span class="acc-withform-lab">可提金额：<em id="canWithdraw">0.00</em></span></div>
                  <div class="acc-withform-group mb10">
                    <span class="acc-withform-lab">提现金额：</span>
                    <div class="acc-withform-val acc-withform-ipt">
                      <input id="withdrawalAmount" name="txAmount" class="acc-withform-ipt" type="text"><br>
                      <span class="acc-withform-msg"></span>
                      <p class="acc-withform-earn">您将每月少赚取<span></span>元。</p>
                    </div>
                  </div>

                  <div class="acc-withform-group">

                    <span class="acc-withform-lab">提现费用：<b id="withdrawalCost">0.00元</b>实付金额：<b id="payAmount">0.00元</b></span><a class="withdrawal-limit" id="withdrawalLimit" href="javascript:;" @click="openModal">限额标准</a>

                  </div>
                  <div class="acc-withform-group acc-large-amount mt10">
                    <span class="acc-withform-lab">联行行号：</span>
                    <div class="acc-withform-val acc-withform-ipt" id="withLasalle">
                      <input id="cardBankCnaps" name="cardBankCnaps" class="acc-withform-ipt" value="" type="text"><span class="ml10">(请输入联行行号,查询网址：www.lianhanghao.com。)</span><br>
                    </div>
                  </div>
                  <div class="acc-withform-group mt20 ml66">
                    <label><input class="checkStatus small-amount-status" v-model="checkStatus" value="0" checked="checked" type="radio">实时</label>
                    <label><input class="checkStatus big-amount-status" v-model="checkStatus" value="1" type="radio">大额</label>
                  </div>
                </div>
                <div class="acc-withform-btn"><input class="acc-rec-sbt btn" value="确认提交" type="button"></div>
              </form>
              <div class="acc-rec-info">
                <span>温馨提示：</span>
                <ul class="no-mar">
                  <li class="cred">* 提现时，如果在银行页面未输入支付密码，直接返回平台会导致平台资金冻结；</li>
                  <li class="cred">* 受银行业务时间限制，大额提现通道开放时间为工作日凌晨00:00—17:00（法定节假日不开放）；</li>
                  <li>* 请勿使用360浏览器进行提现操作；</li>
                  <li>* 平台限定每天最多可提现10笔，单笔提现最小金额为100元；</li>
                  <li>* 提现金额大于20万时需走大额提现通道，T+1工作日到账；</li>
                  <li>* 工商银行，中国银行，民生银行提现金额大于5万即可走大额提现通道；</li>
                  <li>* 提现过程中如出现异常，请拨打客服电话400-999-2101。</li>
                </ul>
              </div>
            </div>
            <log v-show="!online" @ajax-page="ajaxPage" :total="total">
                <template slot="tabel">
                    <table class="acc-table table" id="withdrawinfoTab" cellspacing="0" cellpadding="0" border="0">
                        <thead>
                        <tr>
                            <th width="18%">时间</th>
                            <th width="15%">提现金额</th>
                            <th width="15%">手续费</th>
                            <th>提现账号</th>
                            <th>开户行</th>
                            <th width="10%">状态</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td class="acclist-empty" colspan="8"><span>！<br>暂无记录</span></td></tr>
                        </tbody>
                    </table>
                </template>
                <template slot="select">
                    <option value="">全部</option>
                    <option value="0">失败</option>
                    <option value="1">待付款</option>
                    <option value="2">成功</option>
                    <option value="3">银行存管提交中</option>
                    <option value="5">已取消</option>
                    <option value="6">处理中</option>
                    <option value="-1">未通过</option>
                    <option value="-2">提现回退</option>
                    <option value="-3">银行存管提现失败</option>
                </template>
            </log>
          </div>
        </template>
    </account>
    <limit-modal @close-modal="closeModal" v-show="limitModal"></limit-modal>
 </div>
</template>

<script>
import Account from '@/components/Account'
import LimitModal from '@/components/LimitModal'
import Log from '@/components/Log'
export default {
  data () {
    return {
      online: true,
      checkStatus: 0,
      limitModal: false,
      total: 100
    }
  },
  components: {
    Account,
    LimitModal,
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
    }
  },
  methods: {
    openOnline () {
      this.online = true
    },
    openHistory () {
      this.online = false
    },
    openModal () {
      this.limitModal = true
    },
    closeModal () {
      this.limitModal = false
    },
    ajaxPage (currentPage) {
      console.log(currentPage)
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
// 选项卡
.tab-nav{
    border-bottom: 1px solid #ccc;
}
.tab-nav.sm li {
    padding: 10px 0;
}
.tab-nav li.active {
    border-bottom: 2px solid #f70;
    margin-bottom: -1px;
}
.tab-nav > li {
    display: inline-block;
    padding: 10px 0;
}
.tab-nav.sm li a {
    font-size: 14px;
    border-right-width: 1px;
}
.tab-nav li.active a {
    color: #f60;
}
.tab-nav li a {
    padding: 0 30px;
    border-right: 1px solid #ccc;
    font-size: 16px;
    color: #888;
}
.tab-nav li:last-child a {
    border-right: 0;
}
// 提交表单
.acc-recharge {
    position: relative;
    padding: 8px 0 0;
}
.acc-withform-item {
    margin: 0 0 24px;
}
.acc-withform-lab {
    width: auto;
    margin: 0;
    display: inline-block;
    text-align: right;
    vertical-align: top;
    line-height: 36px;
}
.acc-withform-group label {
    margin-right: 8px;
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
.acc-withform-lab em {
    position: relative;
    font-size: 22px;
    color: #F60;
    font-weight: 400;
}
.acc-withform-lab em::after {
    content: "元";
    font-size: 22px;
    color: #F60;
}
.acc-withform-bmsg, .acc-withform-msg {
    color: red;
    font-size: 12px;
}
.acc-withform-lab b {
    margin-right: 10px;
    font-weight: 400;
}
// 限额标准
.withdrawal-limit {
    line-height: 36px;
    color: #f89b56;
    display: inline-block;
    padding-left: 5px;
}
// 提示信息
.acc-withform-earn {
    display: none;
    margin: 5px 0;
    color: #f79a57;
}
// 提现金额
// .acc-withform-ipt {
//     padding: 0;
// }
.acc-withform-val {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
}
.acc-withform-group label {
    margin-right: 8px;
}
.acc-withform-group label input {
    margin-right: 3px;
    vertical-align: middle;
}
.acc-withform-btn {
    margin: 0 0 20px 200px;
}
.acc-rec-sbt {
    padding: 10px 84px;
}
// 温馨提示
.acc-rec-info {
    padding: 12px;
    line-height: 2em;
    border: 1px solid #d9d9d9;
    background: #fdefed;
}
.no-mar {
    margin: 0 !important;
}
.cred {
    color: red;
}
// 联行行号
.acc-large-amount {
    display: none;
}
</style>
