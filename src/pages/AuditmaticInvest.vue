<template>
 <div class="page">
   <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">授权签约</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title b-eee">
              授权签约
              <span class="automatic-notice">* 注：开启签约过程中出现“签约中”状态，请重新签约！</span>
            </h4>
            <div class="automatic-wrap">
              <ul class="automatic-tab">
                <li class="tab-item t-i-1" @click="step=1">投标签约？<span>未签约</span></li>
                <li class="tab-item t-i-2" @click="step=2">购买债权签约？<span>未签约</span></li>
                <li class="tab-item t-i-3  active" @click="step=3">缴费授权签约<span>签约中</span></li>
              </ul>
              <div class="automatic-card">
                <div class="automatic-item active" id="step1" v-if="step==1">

                  <a class="automatic-ico" id="btn-bid-auth-sms" href="javascript:void(0);">
                    <img src="../assets/images/ico_auto_up.png">
                    <span>请点击投标签约</span>
                  </a>

                  <p class="automatic-text">
                    “小立有约”属于智能投标工具，用户签约后，将授权系统为用户资金智能匹配到优质债权标的，有利于降低投标风险。
                  </p>
                </div>
                <div class="automatic-item" id="step2" v-if="step==2">

                  <a class="automatic-ico" href="javascript:void(0);" id="btn-creditinvest-auth">
                    <img src="../assets/images/ico_zz_open.png">
                    <span class="cff902">购买债权签约中</span>
                  </a>

                  <p class="automatic-text">
                    “小立有约”属于智能投标工具，用户签约后，将授权系统为用户资金智能匹配到优质债权标的，有利于降低投标风险。
                  </p>
                </div>
                <div class="automatic-item" id="step3" v-if="step==3">

                  <a class="automatic-ico" href="javascript:void(0);">
                    <img src="../assets/images/ico_auto_open.png">
                    <span class="cff902">缴费授权签约中</span>
                  </a>

                  <p class="automatic-text">
                    “债权转让”资金交易环节所收取的手续费，需要投资用户进行缴费授权签约才能收取。
                  </p>
                </div>
              </div>
              <div class="automatic-details" style="display: none;">
                <h3>投资用户授权签约说明：</h3>
                <p>
                  投标用户首次加入“小立有约”必需进行自动投标和购买债权签约；<br>
                  投资用户操作标的“债权转让”所收取的手续费需进行缴费授权；<br>
                  点击授权签约会跳转至江西银行界面，验证交易密码；<br>
                  签约有效期默认5年，之前已签约用户为3年；如有疑问，详情请致电客服电话400-999-2101。
                </p>
              </div>
            </div>
          </div>
        </template>
    </account>
    <el-dialog
        title="为什么要签约投标、购买债权和缴费授权？"
        :visible.sync="dialogVisible"
        width="640px"
        :close-on-click-modal="false"
      >
      <div class="modal-content">
        <div class="auto-asign-tip">
          <h4>授权签约说明：</h4>
          <p>投标用户首次加入“小立有约”必需进行自动投标和购买债权签约；
            <br>投资用户操作标的“债权转让”所收取的手续费需进行缴费授权；
            <br>点击授权签约会跳转至江西银行界面，验证交易密码；
            <br>签约有效期默认5年，之前已签约用户为3年；如有疑问，详情请致电客服电话400-999-2101。</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="dialogVisible = false">我知道了</el-button>
      </span>
    </el-dialog>
 </div>
</template>

<script>
import Account from '@/components/Account'
export default {
  data () {
    return {
      dialogVisible: true,
      step: 2
    }
  },
  components: {
    Account
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.acc-page-title.b-eee {
    border-bottom: 1px solid #eee;
}
// 提示信息
.automatic-notice {
    float: right;
    color: #999;
    line-height: 36px;
    font-size: 12px;
    font-weight: 400;
}
// 签约内容
.automatic-wrap {
    position: relative;
    overflow: hidden;
}
.automatic-tab::after {
    content: "";
    position: absolute;
    top: 0;
    left: 80px;
    width: 656px;
    height: 4px;
    background: #ccc;
}
.automatic-tab {
    margin: 100px auto 0;
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 20px;
}
.automatic-card {
    padding: 100px 40px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
}
// 三个子项目
.automatic-tab .tab-item.t-i-1 {
    left: 80px;
}
.automatic-tab .tab-item.t-i-2 {
    left: 368px;
}
.automatic-tab .tab-item.t-i-3 {
    left: 656px;
}
.automatic-tab .tab-item {
    position: absolute;
    top: -58px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #999;
    z-index: 10;
    cursor: pointer;
    span {
        margin: 0 auto;
        display: block;
        width: 136px;
        height: 40px;
        background-color: #ccc;
        text-align: center;
        color: #fff;
        border-radius: 20px;
    }
}
.automatic-tab .tab-item.t-i-1.active, .automatic-tab .tab-item.t-i-2.active, .automatic-tab .tab-item.t-i-3.active {
    color: #FF9902;
}
// 项目样式
.automatic-ico {
    margin: 0 auto;
    display: block;
    text-align: center;
    color: #999;
    cursor: pointer;
    span {
        padding: 10px 0;
        display: block;
    }
}
.automatic-ico:hover{
  color: #f60;
}
// 底部提示信息
.automatic-text {
    margin-top: 80px;
    line-height: 32px;
    color: #999;
}
</style>
