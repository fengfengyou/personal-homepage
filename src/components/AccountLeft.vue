<template>
    <div class="pull-left account-left">
        <div class="account-sides" id="accMenu">
            <div class="account-side-item account-name">
            <dl>
                <dt><i class="icon-account icon-asset"></i>账户管理</dt>
                <dd><a href="#/account/index" :class="{curr:route=='/account/index'}">账户总览</a></dd>
                <dd><a id="rechargeTrigger"  data-tip="您还未开通江西银行存管账户，请先开通！" data-url="/front/account/home#/secureAuth" href="#/account/recharge" :class="{curr:route=='/account/recharge'}">充值</a></dd>
                <dd><a  data-tip="您还未开通江西银行存管存管账户，请先开通！" data-url="/front/account/home#/secureAuth" href="#/account/withdrawal" :class="{curr:route=='/account/withdrawal'}">提现</a></dd>
                <dd><a  data-tip="您还未开通江西银行存管账户，请先开通！" data-url="/front/account/home#/secureAuth" href="#/account/bankcardsJx" :class="{curr:route=='/account/bankcardsJx'}">银行卡</a></dd>
                <dd><a href="#/account/investBill" :class="{curr:route=='/account/investBill'}">回款账单</a></dd>
                <dd><a href="#/account/dealRecord" :class="{curr:route=='/account/dealRecord'}">交易记录</a></dd>
            </dl>
            </div>
            <div class="account-side-item account-conduct">
            <dl>
                <dt><i class="icon-account icon-conduct"></i>投资管理</dt>
                <dd><a href="#/account/investRecord" :class="{curr:route=='/account/investRecord'}">散标</a></dd>

                <dd><a href="#/account/myMatchingDetail" :class="{curr:route=='/account/myMatchingDetail'}">立管家</a></dd>
                <dd><a href="#/account/transferDebtList" :class="{curr:route=='/account/transferDebtList'}">债权转让</a></dd>
                <dd><a href="#/account/SubscribeSuccess" :class="{curr:route=='/account/SubscribeSuccess'}">小立有约</a></dd>
            </dl>
            </div>
            <div class="account-side-item account-asset">
            <dl>
                <dt><i class="icon-account icon-person"></i>会员管理</dt>
                <dd><a href="#/account/rateCoupon" :class="{curr:route=='/account/rateCoupon'}">优惠券</a><span class="icon-corner">9</span></dd>
                <dd><a href="#/account/systemMsgs" :class="{curr:route=='/account/systemMsgs'}">站内信</a><span class="icon-corner ">1</span></dd>
                <dd><a href="#/account/MyScore" :class="{curr:route=='/account/MyScore'}">我的积分</a></dd>
                <dd><a href="#/account/myAward" :class="{curr:route=='/account/myAward'}">我的奖品</a></dd>
                <dd>
                    <!-- <router-link :to="{
                    name:'test',
                    params:{
                        name:345
                        }
                }">资费说明</router-link> -->
                    <a href="#/account/alertpay/资费说明" :class="{curr:route=='/account/alertpay'}" target="_blank">资费说明</a>
                </dd>
            </dl>
            </div>
            <div class="account-side-item account-secur">
            <dl>
                <dt><i class="icon-account icon-secur"></i>安全设置</dt>
                <dd><a href="#/account/secureAuth" :class="{curr:route=='/account/secureAuth'}">安全认证</a></dd>
                <dd><a  data-tip="您还未开通江西银行存管账户，请先开通！" data-url="/front/account/home#/secureAuth" href="#/account/AuditmaticInvest" :class="{curr:route=='/account/AuditmaticInvest'}">授权签约</a></dd>
                <dd><a href="#/account/reset/login-pass" :class="{curr:route=='/account/reset/login-pass'}">密码管理</a></dd>
            </dl>
            </div>
            <div class="account-side-item account-extens">
            <dl>
                <dt><i class="icon-account icon-extens"></i>推广管理</dt>
                <dd><a href="#/account/spreadLink" :class="{curr:route=='/account/spreadLink'}">邀请好友</a></dd>
                <dd><a href="#/account/inviteRewards" :class="{curr:route=='/account/inviteRewards'}">邀请奖励</a></dd>
                <dd><a href="#/account/returnMoney" :class="{curr:route=='/account/returnMoney'}">推荐返现</a></dd>
                <dd><a href="#/account/userEveryRecommendReward" :class="{curr:route=='/account/userEveryRecommendReward'}">推荐返佣</a></dd>
                <dd><a href="#/account/inviteFriendsEarnGold" :class="{curr:route=='/account/inviteFriendsEarnGold'}">邀友赚金</a><span class="icon-corner">New</span></dd>
                <dd><a href="#/account/cashDividends" :class="{curr:route=='/account/cashDividends'}">现金分红</a><span class="icon-corner">New</span></dd>
            </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cornerMark: Object
    }
  },
  props: {

  },
  computed: {
    route () {
      return this.$route.fullPath
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
// 左侧菜单栏
.account-left {
    width: 200px;
    background: #fff;
    border: 0;
    padding-bottom: 3000px;
    margin-bottom: -3000px;
    float: left !important;
}
.account-sides .account-side-item.account-extens {
    border-bottom: 0;
}
.account-side-item dd a.curr, .account-side-item dd a:hover {
    color: #ff7d12;
}
.account-sides {
    padding: 18px 14px;
    .account-side-item {
        padding: 15px 0 5px 15px;
        border-bottom: 1px dashed #4d4d4d;
        color: #4d4d4d;
        dt {
            padding-bottom: 14px;
            line-height: 28px;
            font-size: 17px;
        }
        dd {
            position: relative;
            padding: 0 0 18px 36px;
            line-height: 16px;
            font-size: 14px;
        }
        .icon-account {
            margin-right: 10px;
            display: inline-block;
            width: 26px;
            height: 26px;
            background: url(../assets/images/icon_account.png) no-repeat;
            background-position-x: 0%;
            background-position-y: 0%;
            vertical-align: middle;
        }
        .icon-account.icon-asset {
            background-position: -52px 0;
        }
        .icon-account.icon-conduct {
            background-position: -26px 0;
        }
        .icon-account.icon-person {
            background-position: 0 0;
        }
        .icon-account.icon-secur {
            background-position: -78px 0;
        }
        .icon-account.icon-extens {
            height: 32px;
            background-position: 0 -29px;
        }
    }
}
// 角标
.account-side-item .icon-corner {
    margin-left: 5px;
    padding: 0 5px;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    background: red;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    text-align: center;
}
</style>
