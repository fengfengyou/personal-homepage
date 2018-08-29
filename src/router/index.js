import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/pages/Home'
// 登录注册
// import LoginRegist from '@/pages/LoginRegist'
// // 个人账户
// import accountIndex from '@/pages/accountIndex'
// // 账户安全设置
// import SecureAuth from '@/pages/SecureAuth'
// // 交易密码重置
// import ResetDeal from '@/pages/ResetDeal'
// // 散标专区
// import Lend from '@/pages/Lend'
// // 债权转让
// import Transfer from '@/pages/Transfer'
// // 小立有约
// import Appoint from '@/pages/Appoint'
// // 债权转让介绍
// import TransferIntro from '@/pages/TransferIntro'
// // 登录密码修改
// import LoginPass from '@/pages/LoginPass'

// // 充值
// import Recharge from '@/pages/Recharge'
// // 提现
// import Withdrawal from '@/pages/Withdrawal'
// // 银行卡
// import BankcardsJx from '@/pages/BankcardsJx'
// // 回款账单
// import InvestBill from '@/pages/InvestBill'
// // 交易记录
// import DealRecord from '@/pages/DealRecord'
// // 散标
// import InvestRecord from '@/pages/InvestRecord'
// // 立管家
// import MyMatchingDetail from '../pages/MyMatchingDetail'
// // 债权转让
// import TransferDebtList from '../pages/TransferDebtList'
// // 债权转让协议
// import Protocol from '../pages/Protocol'
// // 小立有约
// import SubscribeSuccess from '../pages/SubscribeSuccess'
// // 加息券
// import RateCoupon from '../pages/RateCoupon'
// // 站内信
// import SystemMsgs from '../pages/SystemMsgs'
// // 我的积分
// import MyScore from '../pages/MyScore'
// // 我的奖品
// import MyAward from '../pages/MyAward'
// // 资费说明
// import Alertpay from '../pages/Alertpay'
// // 授权签约
// import AuditmaticInvest from '../pages/AuditmaticInvest'
// // 邀请奖励
// import InviteRewards from '../pages/InviteRewards'
// // 推荐返现
// import ReturnMoney from '../pages/ReturnMoney'
// // 推荐返佣
// import UserEveryRecommendReward from '../pages/UserEveryRecommendReward'
// // 邀友赚金
// import InviteFriendsEarnGold from '../pages/InviteFriendsEarnGold'
// // 现金分红
// import CashDividends from '../pages/CashDividends'
// // 邀请好友
// import SpreadLink from '../pages/SpreadLink'

// 资讯首页
import News from '@/pages/News'
// 会员中心首页
import VipIndex from '@/pages/VipIndex'
// 信息披露
import Info from '@/pages/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   // 登录注册
    //   path: '/login-regist/:name',
    //   component: LoginRegist
    // },
    // {
    //   // 出借
    //   path: '/lend',
    //   component: Lend
    // },
    // {
    //   // 债权转让
    //   path: '/lend/transfer',
    //   component: Transfer
    // },
    // {
    //   // 债权转让介绍
    //   path: '/lend/transfer/TransferIntro',
    //   component: TransferIntro
    // },
    // {
    //   // 小立有约
    //   path: '/lend/Appoint',
    //   component: Appoint
    // },
    // {
    //   // 个人账户首页
    //   path: '/account/index',
    //   component: accountIndex
    // },
    // {
    //   // 安全设置
    //   path: '/account/secureAuth',
    //   component: SecureAuth
    // },
    // {
    //   // 充值
    //   path: '/account/recharge',
    //   component: Recharge
    // },
    // {
    //   // 提现
    //   path: '/account/withdrawal',
    //   component: Withdrawal
    // },
    // {
    //   // 提现
    //   path: '/account/bankcardsJx',
    //   component: BankcardsJx
    // },
    // {
    //   // 回款账单
    //   path: '/account/investBill',
    //   component: InvestBill
    // },
    // {
    //   // 交易记录
    //   path: '/account/dealRecord',
    //   component: DealRecord
    // },
    // {
    //   // 交易记录
    //   path: '/account/investRecord',
    //   component: InvestRecord
    // },
    // {
    //   // 立管家
    //   path: '/account/myMatchingDetail',
    //   component: MyMatchingDetail
    // },
    // {
    //   // 债权转让
    //   path: '/account/transferDebtList',
    //   component: TransferDebtList
    // },
    // {
    //   // 债权转让协议介绍
    //   path: '/account/transferDebtList/protocol',
    //   component: Protocol
    // },
    // {
    //   // 小立有约
    //   path: '/account/subscribeSuccess',
    //   component: SubscribeSuccess
    // },
    // {
    //   // 加息券
    //   path: '/account/rateCoupon',
    //   component: RateCoupon
    // },
    // {
    //   // 站内信
    //   path: '/account/systemMsgs',
    //   component: SystemMsgs
    // },
    // {
    //   // 我的积分
    //   path: '/account/MyScore',
    //   component: MyScore
    // },
    // {
    //   // 我的奖品
    //   path: '/account/myAward',
    //   component: MyAward
    // },
    // {
    //   // 资费说明
    //   name: '资费说明',
    //   path: '/account/alertpay/:name',
    //   component: Alertpay
    // },
    // {
    //   name: '授权签约',
    //   path: '/account/AuditmaticInvest',
    //   component: AuditmaticInvest
    // },
    // {
    //   name: '邀请好友',
    //   path: '/account/SpreadLink',
    //   component: SpreadLink
    // },
    // {
    //   name: '邀请奖励',
    //   path: '/account/inviteRewards',
    //   component: InviteRewards
    // },
    // {
    //   name: '推荐返现',
    //   path: '/account/returnMoney',
    //   component: ReturnMoney
    // },
    // {
    //   name: '推荐返佣',
    //   path: '/account/UserEveryRecommendReward',
    //   component: UserEveryRecommendReward
    // },
    // {
    //   name: '邀友赚金',
    //   path: '/account/InviteFriendsEarnGold',
    //   component: InviteFriendsEarnGold
    // },
    // {
    //   name: '现金分红',
    //   path: '/account/cashDividends',
    //   component: CashDividends
    // },
    // // {
    // //   // 交易密码重置
    // //   path: '/account/reset/deal',
    // //   component: ResetDeal
    // // },
    // {
    //   // 重置登录密码
    //   path: '/account/reset/login-pass',
    //   component: LoginPass
    // },
    {
      // 会员中心首页
      path: '/vip/index',
      component: VipIndex
    },
    {
      name: '资讯首页',
      path: '/news/:comment',
      component: News
    },
    {
      name: '信息披露',
      path: '/info/index',
      component: Info
    }
  ]
})
