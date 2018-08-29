<template>
  <div class="page">
    <breadcrumb>
      <li class="title">您的位置：</li>
      <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
      <li><a href="/front/account/home">我的账户</a></li>
      <li id="accountPageTitle" class="active">安全认证</li>
    </breadcrumb>
    <div class="container account-wrap clearfix card p-a-0" id="accMenu">
        <!-- 左侧部分 -->
        <AccountLeft></AccountLeft>
        <!-- 右侧部分 -->
        <div class="pull-right account-right">
          <div id="accountContent">
            <!-- 账户安全设置 -->
            <div class="acc-page" style="display:none;" v-show="setting">
              <div class="secur-setting secur-auth">
                <h4 class="acc-page-title">安全认证</h4>
                <div class="secur-score clearfix">
                  <div class="secur-info">
                    <p class="text-bold">账户资料完整度：
                      <span class="padding">中</span>
                      <span class="padding">40%</span>
                    </p>

                    <p>最后登录：
                      <span class="padding">2018-07-12</span>
                    </p>

                  </div>
                  <div class="progress">
                    <div class="progress-bar" style="width:216.0px"></div>
                    <div class="progress-bg"></div>
                  </div>
                </div>
                <ul class="secure-auth-groups">
                  <!-- 存管账户-->

                  <li v-if="!isDeposit">
                    <div class="clearfix accountIdentity">
                      <div class="col-3 cell text-mutered">
                        <i class="icon"></i>未开通</div>
                      <div class="col-3 cell">存管账户</div>
                      <div class="col-3 cell">您未开通银行存管账户</div>
                      <!-- <input type="checkbox"> -->
                      <label for="openAccount" class="col-3  cell text-right">开通</label>
                      <input type="checkbox" id="openAccount" v-model="showDeposit" style="display:none;">
                      <!-- <a class="col-3  cell text-right" data-toggle="collapse" href="javaScript:void(0);" aria-expanded="true" @click="showTab">开通</a> -->
                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                      <div v-show="showDeposit" class="collapse in" id="accountIdentity">
                        <div id="accoundCardStep1" class="card marb0 card-step2">
                          <form class="vform" method="post" ref="accountOpen">
                            <!-- <input name="srvAuthCode" id="srvAuthCode" type="hidden">
                            <input name="acctUseType" id="acct_use_type" value="0" type="hidden"> -->
                            <!-- 0 开通普通账户, 1 开通担保账户-->
                            <div class="form-group">
                              <label>
                                <span class="text-left">真实姓名：</span>

                                <input name="name" v-model="name" id="realName" placeholder="请输入真实姓名" type="text">

                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">身份证号：</span>

                                <input name="idNo" v-model="idNo" id="idNumber" placeholder="请输入身份证号" type="text">

                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">银行预留手机号：</span>
                                <input name="mobile" id="bankMobile" v-model="mobile" placeholder="请输入银行预留手机号" type="text">
                                <em class="question-tips r-94 hint-tip hint-tip-top" data-tip="1、银行预留手机号只能开通一个江西银行电子账户且是唯一的！     2、银行预留手机号必须为绑定银行卡的预留手机号，否则会影响后期充值与提现！">
                                  <i></i>银行预留手机号唯一性</em>
                              </label>
                            </div>
                            <div class="form-group">
                              <input class="cbox-input" id="cbox_normal" name="protocol" type="checkbox" v-model="isAgree">
                              <label for="cbox_normal"></label>我已同意
                              <a target="_blank" href="/front/activity/index?src=2017_RevealBook">《风险揭示书》</a>
                              <a target="_blank" href="/front/activity/index?src=2018_registerServiceProtocol">《立业贷注册用户服务协议》</a>
                            </div>
                            <p class="error-info text-danger">
                              <span class="error" v-show="!isAgree">请阅读勾选《风险揭示书》以及《立业贷注册用户服务协议》！</span>
                            </p>
                            <div class="form-group text-center">
                              <input type="button" class="btn btn-dange" data-loading-text="提交中..." value="确定开户" @click="accountOpen">
                              <!-- <button class="btn btn-dange" data-loading-text="提交中..." @click.prevent="accountOpen">确定开户</button> -->
                            </div>
                          </form>
                        </div>
                      </div>
                    </transition>
                  </li>
                  <li v-else>
                    <div class="clearfix accountIdentity">
                      <div class="col-3 cell text-info">
                        <i class="icon"></i>已开通</div>
                      <div class="col-3 cell">存管账户</div>
                      <div class="col-3 cell">您已开通银行存管账户</div>

                      <label for="openAccount" class="col-3  cell text-right">查看</label>
                      <input type="checkbox" id="openAccount" v-model="showDeposit" style="display:none;">
                      <!-- <a class="col-3  cell text-right" data-toggle="collapse" href="#accountIdentityDetail" aria-expanded="true">查看</a> -->
                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                    <div class="collapse in" id="accountIdentityDetail" aria-expanded="true" v-show="showDeposit">
                      <div id="accoundCardStep1" class="card marb0 card-step2">
                        <form action="/payment/createCredit2goUser" method="post">
                          <div class="form-group">
                            <label>
                              <span class="text-left">真实姓名：</span>
                              <input name="name" id="realName" value="**" readonly="" tabindex="1" type="text">
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              <span class="text-left">身份证号：</span>
                              <input name="idNo" id="idNumber" value="************" readonly="" tabindex="2" type="text">
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              <span class="text-left">银行卡号：</span>
                              <!--  校验位数 -->

                              <input name="cardNo" id="bankCard" value="621**********338" readonly="" tabindex="3" type="text">

                            </label>
                          </div>

                          <div class="form-group">
                            <label class="getBankBin">
                              <span class="text-left">开户银行：</span>
                              <p class="is-open" id="getBankCardNo" data-bankno="6216633400000244338">
                                <img src="../assets/images/bank_boc.png" width="24">
                                <u>中国银行</u>
                              </p>
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              <span class="text-left">银行预留手机号：</span>
                              <input name="mobile" id="bankMobile" value="176*****486" readonly="" tabindex="4" type="text">
                              <em class="question-tips hint-tip r-0 hint-tip-top" data-tip="1、银行预留手机号只能开通一个江西银行电子账户且是唯一的！&nbsp;&nbsp;&nbsp;&nbsp; 2、银行预留手机号必须为绑定银行卡的预留手机号，否则会影响后期充值与提现！">
                                <i></i>银行预留手机号唯一性</em>
                            </label>
                          </div>

                          <div class="form-group">
                            <input class="cbox-input" id="cbox_normal" name="protocol" checked="checked" disabled="disabled" type="checkbox">
                            <label for="cbox_normal"></label>我已同意
                            <a target="_blank" href="/front/activity/index?src=2017_RevealBook">《风险揭示书》</a>
                            <div class="cbox_protocol">
                              <a target="_blank" href="/front/activity/index?src=2018_registerServiceProtocol">《立业贷注册用户服务协议》</a>
                            </div>
                            <div class="cbox_protocol">
                              <a target="_blank" href="/front/activity/index?src=network_service_three_agreement">《江西银行网络交易资金账户服务三方协议》</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    </transition>
                  </li>

                  <!--  交易密码 -->
                  <li v-if="!isDeal">
                    <div class="clearfix set-trading-pwd">

                      <div class="col-3 cell text-mutered">
                        <i class="icon"></i>未设置</div>
                      <div class="col-3 cell">交易密码</div>
                      <div class="col-3 cell">您未设置交易密码</div>

                      <label for="openTradePwd" class="col-3 cell text-right collapsed">设置</label>
                      <input type="checkbox" id="openTradePwd" v-model="showDeal" style="display:none;">
                      <!-- <a id="openTradePwd" class="col-3 cell text-right collapsed" data-tips="您还未开通银行存管账户，请先开通！">设置</a> -->

                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                    <div class="collapse" v-show="showDeal" id="tradePwdIdentity">
                      <div class="card">
                        <form class="p-l-120 vform" action="/payment/mobileCodeCheck" method="post" id="tradePwdForm">
                          <input value="17630023486" id="tradePwdMobile" type="hidden">
                          <div class="form-group">
                            <label>
                              <input class="input-border" name="mobile" tabindex="1" value="176*****486" placeholder="请输入手机号码" readonly="" type="text">
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              <input class="sec-getsms-input" tabindex="2" maxlength="4" name="smsCode" placeholder="手机验证码" type="text">
                              <a id="getTrademsgCode" class="sec-getsms-code" href="javascript:void(0);">获取验证码</a>
                              <em class="sec-nocan-msg hint-tip hint-tip-top" data-tip="交易密码每天短信发送次数为5次，如果超过短信次数请联系客服处理。">
                                <i class="icon ov-help-ico"></i>无法收到验证码？</em>
                            </label>
                          </div>
                          <p class="error-info text-danger"></p>
                          <div class="form-group text-center">
                            <button class="btn btn-danger mr30" data-loading-text="提交中...">去设置</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    </transition>
                  </li>
                  <li v-else>
                    <div class="clearfix set-trading-pwd">

                      <div class="col-3 cell text-info">
                        <i class="icon"></i>已设置</div>
                      <div class="col-3 cell">交易密码</div>
                      <div class="col-3 cell">********</div>

                      <label for="openTradePwd" class="col-3 cell text-right">重置</label>
                      <input type="checkbox" id="openTradePwd" v-model="showDeal" style="display:none;">
                      <!-- <a id="openTradePwd" class="col-3 cell text-right" data-toggle="collapse" href="#resetTradePwdIdentity" aria-expanded="true">重置</a> -->
                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                      <div class="collapse " id="resetTradePwdIdentity" v-show="showDeal">
                        <div class="card">
                          <div class="card-reset-pwd">
                            <p class="text-center mb20">
                              <a class="btn btn-danger" href="#/account/reset/deal">去重置交易密码</a>
                            </p>
                            <p class="text-center">注：点击“去重置交易密码按钮跳转江西银行页面短信验证，并修改交易密码。”</p>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </li>
                  <!--  登陆密码 -->
                  <li>
                    <div class="clearfix">
                      <div class="col-3 cell text-info">
                        <i class="icon"></i>已设置</div>
                      <div class="col-3 cell">登录密码</div>
                      <div class="col-3 cell">********</div>
                      <a class="col-3 cell text-right" href="#/account/reset/login-pass">修改</a>
                      <!-- <label for="loginSetting" class="col-3 cell text-right">设置</label>
                      <input type="checkbox" id="loginSetting" v-model="setting" style="display:none;"> -->
                    </div>
                  </li>
                  <!-- 手机绑定 -->
                  <li>
                    <div class="clearfix modify-phonenum">
                      <div class="col-3 cell text-info">
                        <i class="icon"></i>已绑定</div>
                      <div class="col-3 cell">手机绑定</div>
                      <div class="col-3 cell">176*****486</div>
                      <label for="phoneChange" class="col-3 cell text-right collapsed">立即修改</label>
                      <input type="checkbox" id="phoneChange" v-model="phoneModel" style="display:none;">
                      <!-- <a class="col-3 cell text-right collapsed" data-tips="您还未开通银行存管账户，请先开通！">修改</a> -->
                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                      <div class="collapse " id="mobileIdentity" v-show="phoneModel">
                        <div id="cardMobileStep" class="card card-mobile" v-show="!showCan && !showCannot">
                          <div class="card-mobile-info">
                            您正在修改手机号
                            <span>17630023486</span>，请选择身份验证方式
                          </div>
                          <div class="card-mobile-item clearfix">
                            <span class="card-mobile-left">
                              <i class="card-mobile-ico"></i>原手机能接收短信</span>
                              <label for="phoneCan" class="card-mobile-btn-step">立即修改</label>
                              <input type="checkbox" id="phoneCan" v-model="showCan" style="display:none;">
                            <!-- <a class="card-mobile-btn-step1" href="javascript:;">立即修改</a> -->
                          </div>
                          <div class="card-mobile-item normal">
                            <span class="card-mobile-left">
                              <i class="card-mobile-ico"></i>原手机不能接收短信</span>

                              <label for="phoneCannot" class="card-mobile-btn-step">立即修改</label>
                              <input type="checkbox" id="phoneCannot" v-model="showCannot" style="display:none;">
                            <!-- <a class="card-mobile-btn-step2" href="javascript:;">立即修改</a> -->
                          </div>
                          <div class="mt20 text-danger">
                            <i class="i-star">*</i>成功修改手机号后，平台登录用户名为新手机号</div>
                        </div>
                        <!-- 原手机号能接收短信 -->
                        <div id="cardMobileStep1" class="card card-mobile" v-if="showCan">
                          <div class="card-mobile-info">
                            更换手机号：原手机能接收短信
                          </div>
                          <!-- 第一步 -->
                          <form class="card-mobile-form step1-form1" action="/payment/mobileCodeCheck" method="post" id="stepForm1" novalidate="novalidate" v-show="firstStep">
                            <div class="form-group">
                              <label>
                                <span class="text-left">原手机号：</span>
                                <input value="176*****486" tabindex="1" readonly="true" type="text">
                                <input id="orangeMoblie" name="mobile" value="17630023486" type="hidden">
                              </label>
                            </div>
                            <div class="form-group" v-show="firstStep">
                              <label>
                                <span class="text-left">手机验证码：</span>
                                <input class="sec-getsms-input" tabindex="2" maxlength="4" name="smsCode" placeholder="请输入手机验证码" type="text">
                                <a id="getOldSmsCode" class="sec-getsms-code" href="javascript:void(0);">获取验证码</a>
                              </label>
                            </div>
                            <p class="error-info error-old-mobile text-danger"></p>
                            <div class="form-group text-center">

                              <label for="firstStep" class="btn btn-danger mr30 w86">确定</label>
                              <input type="checkbox" id="firstStep" v-model="firstStep" style="display:none;">
                              <!-- <button class="btn btn-danger mr30" data-loading-text="提交中...">确定</button> -->
                              <!-- <a id="getBackStep1" class="btn btn-back" data-step="first" data-parent="cardMobileStep1" href="javascript:;">返回</a> -->
                              <label for="btnBack" class="btn btn-back w86">返回</label>
                              <input type="checkbox" id="btnBack" v-model="showCan" style="display:none;">
                            </div>
                          </form>
                          <!-- 第二步 -->
                          <form class="card-mobile-form step1-form2" action="/payment/mobileModifyPlus" method="post" id="stepForm2" novalidate="novalidate" v-show="!firstStep">
                            <input name="lastSrvAuthCode" id="updateMobileSrvAuthCode1" type="hidden">
                            <div class="form-group">
                              <label>
                                <span class="text-left">新手机号：</span>
                                <input name="mobile" id="newsMobile" tabindex="1" type="text">
                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">手机验证码：</span>
                                <input class="sec-getsms-input" tabindex="2" maxlength="6" name="smsCode" placeholder="请输入手机验证码" type="text">
                                <a id="getNewSmsCode" class="sec-getsms-code" href="javascript:void(0);">获取验证码</a>
                              </label>
                            </div>
                            <p class="error-info error-news-mobile text-danger"></p>
                            <div class="form-group text-center">
                              <!-- <button class="btn btn-danger no-radius mr30" data-loading-text="提交中...">确定</button>
                              <a id="getBackStep2" class="btn btn-back" data-step="previous" href="javascript:;">返回</a> -->
                              <label for="secondStep" class="btn btn-danger mr30 w86">确定</label>
                              <input type="checkbox" id="secondStep" style="display:none;">
                              <label for="btnBackS" class="btn btn-back w86">返回</label>
                              <input type="checkbox" id="btnBackS" v-model="firstStep" style="display:none;">
                            </div>
                          </form>
                        </div>
                        <!-- 原手机号不能能接收短信 -->
                        <div id="cardMobileStep2" class="card card-mobile" v-if="showCannot">
                          <div class="card-mobile-info">
                            更换手机号
                          </div>
                          <!-- 第一步 -->
                          <form class="card-mobile-form step2-form1 vform" action="/payment/mobileChangeByIdNo" method="post" v-show="firstStep">
                            <input id="validateMobile" value="17630023486" type="hidden">
                            <div class="form-group">
                              <label>
                                <span class="text-left">姓名：</span>
                                <input name="name" id="mobileName" tabindex="1" type="text">
                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">身份证号：</span>
                                <input name="idNo" id="mobileIdNo" tabindex="2" type="text">
                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">绑定银行卡：</span>
                                <input name="cardNo" id="mobileBankCard" tabindex="3" type="text">
                              </label>
                            </div>
                            <p class="error-info text-danger"></p>
                            <div class="form-group text-center">
                              <!-- <button class="btn btn-danger mr30" data-loading-text="提交中...">验证身份信息</button>
                              <a id="getBackStep2" class="btn btn-back" data-step="first" data-parent="cardMobileStep2" href="javascript:;">返回</a> -->
                              <label for="firstStep" class="btn btn-danger mr30 w86">确定</label>
                              <input type="checkbox" id="firstStep" v-model="firstStep" style="display:none;">
                              <label for="btnBack" class="btn btn-back w86">返回</label>
                              <input type="checkbox" id="btnBack" v-model="showCannot" style="display:none;">
                            </div>
                          </form>
                          <!-- 第二步 -->
                          <form class="card-mobile-form step2-form2 vform" action="/payment/mobileModifyPlus" method="post" id="stepForm2" v-show="!firstStep">
                            <input name="lastSrvAuthCode" id="secondLastSrvAuthCode" type="hidden">
                            <div class="form-group">
                              <label>
                                <span class="text-left">新手机号：</span>
                                <input name="mobile" id="newsMobile" tabindex="1" type="text">
                              </label>
                            </div>
                            <div class="form-group">
                              <label>
                                <span class="text-left">手机验证码：</span>
                                <input class="sec-getsms-input" tabindex="2" maxlength="6" name="smsCode" placeholder="请输入手机验证码" type="text">
                                <a id="getSecondMsgcode" class="sec-getsms-code" href="javascript:void(0);">获取验证码</a>
                              </label>
                            </div>
                            <div class="form-group text-center">
                              <label for="secondStep" class="btn btn-danger mr30 w86">确定</label>
                              <input type="checkbox" id="secondStep" style="display:none;">
                              <label for="btnBackS" class="btn btn-back w86">返回</label>
                              <input type="checkbox" id="btnBackS" v-model="firstStep" style="display:none;">
                            </div>
                          </form>
                        </div>
                      </div>
                    </transition>
                  </li>
                  <li>
                    <div class="clearfix">
                      <div class="col-3 cell text-mutered">
                        <i class="icon"></i>未绑定</div>
                      <div class="col-3 cell">邮箱绑定</div>
                      <div class="col-3 cell">您未绑定邮箱</div>
                      <!-- <a class="col-3 cell text-right collapsed" id="biddingEmail" data-toggle="collapse" href="#emailIdentity">绑定</a> -->
                      <label for="emailModel" class="col-3 cell text-right collapsed">绑定</label>
                      <input type="checkbox" id="emailModel" v-model="emailModel" style="display:none;">
                    </div>
                    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                    <div class="collapse " id="emailIdentity" v-show="emailModel">
                      <div class="card">
                        <form class="p-l-120 vform" action="/front/account/saveEmail" method="post">
                          <input name="type" value="0" type="hidden">
                          <div class="form-group">
                            <label>
                              <span class="text-left">邮箱地址：</span>
                              <input name="email" type="text">
                            </label>
                          </div>
                          <p class="error-info text-danger"></p>
                          <div class="form-group text-center">
                            <button class="btn btn-danger" data-loading-text="发送激活邮件...">提交绑定</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    </transition>

                  </li>
                  <!-- 风险承受能力评估 -->

                  <li>
                    <div class="clearfix">
                      <div class="col-3 cell text-mutered">
                        <i class="icon"></i>未评估</div>
                      <div class="col-3 cell">风险承受能力</div>
                      <div class="col-3 cell"></div>
                      <label for="testModel" class="col-3 cell text-right cell-no-letter poiner">立刻评估</label>
                      <input type="checkbox" id="testModel" v-model="testModel" style="display:none;">
                      <!-- <a class="col-3 cell text-right cell-no-letter" id="startReview" href="javascript:void(0)">立刻评估</a> -->
                    </div>
                  </li>
                  <TestModel v-show="testModel" @close-btn="closebtn"></TestModel>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TestModel from '@/components/TestModel'
import AccountLeft from '@/components/AccountLeft'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  data () {
    return {
      isAgree: true,
      isDeposit: false,
      showDeposit: false,
      isDeal: true,
      showDeal: false,
      showCan: false,
      showCannot: false,
      firstStep: true,
      phoneModel: false,
      emailModel: false,
      testModel: false,
      setting: true,
      name: '',
      idNo: '',
      mobile: '17630023486',
      email: ''
    }
  },
  components: {
    TestModel,
    AccountLeft,
    Breadcrumb
  },
  mounted () {
    // console.log(this.getTime())
    console.log(document)
  },
  methods: {
    closebtn (p) {
      this.testModel = p
    },
    getTime () {
      var time = new Date()
      var year = time.getFullYear() < 10 ? '0' + time.getFullYear() : time.getFullYear().toString()
      var month = time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth().toString()
      var date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate().toString()
      var hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours().toString()
      var min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes().toString()
      var se = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds().toString()
      // console.log(year + month + date + hour + min + se)
      return {
        date: year + month + date,
        time: hour + min + se
      }
    },
    accountOpen () {
      var params = {
        idNo: this.idNo,
        name: this.name,
        mobile: this.mobile
      }
      console.log(params)

      if (!this.isAgree) {
        alert('请先勾选')
        return
      }
      this.http.post('/jixin/openAccount/pc', params)
        .then(data => {
          // JSON.stringify(data.data)

          // this.http.post(data.data.requestUrl, data.data)
          // document.body.innerHTML = data.data
          document.write(data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang='scss' scoped>
p {
    margin: 0 0 10px;
}
.text-bold {
    font-weight: 700;
}
.h4, h4 {
    font-size: 18px;
}
@keyframes openDeposit {
  0%{
    // display: block;
    height: 0;
    overflow: hidden;
  }
  100%{
    height: 400px;
    overflow: hidden;
    // display: none;
  }
}
// 当前所在页面突出显示
.breadcrumb > .active {
    color: #ff7d12;
}
.showTab-enter-active{
  animation-name: openDeposit;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  transition: all 0.6s;
}
.card {
  padding: 15px;
  box-shadow: 0 0 0 1px #e0e0e0;
  margin-bottom: 15px;
  // background-color: #fff;
  margin-left: 1px;
  margin-right: 1px;
  // margin: 5px;
  // border: 1px solid #0ff;
}
.account-wrap.card {
    box-shadow: none;
    padding: 0;
}
.account-wrap {
    background: 0 0;
}
input[type="text"], input[type="password"], input[type="file"], select, textarea{

    width: 200px;
    padding: 8px 4px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 100%;
    vertical-align: middle;
    -webkit-transition: all .15s;
    -moz-transition: all .15s;
    transition: all .15s;

}
input[type="text"][readonly] {
    border-color: transparent;
    pointer-events: none;
    box-shadow: none;
}
.sec-getsms-input {
    width: 168px !important;
}
// 您的位置
.container {
    width: 1200px;
    margin: 0 auto;
}

// 主体部分
.account-wrap {
    position: relative;
    z-index: 0;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
    // border: 1px solid red;
}

// 右侧主体
.account-right {
  width: 986px;
  background: #fff;
  padding-bottom: 3000px;
  margin-bottom: -3000px;
  // border: 1px solid #0ff;
  float: right;
  // margin-left: 10px;
}
// 右侧安全认证
.acc-page {
    position: relative;
    padding: 42px 0;
    margin: 0 60px;
}
.secur-setting {
    margin: 30px auto;
}
.acc-page-title {
    padding: 0 4px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid #d9d9d9;
}
.secur-score {
    padding: 20px 10px;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
}
.secur-auth{
  // 上方资料完整度
  .progress {
    position: relative;
    float: left;
    width: 540px;
    overflow: hidden;
    border-radius: 2px;
  }
  .secur-info {
      float: left;
      width: 230px;
  }
  span.padding {
      padding-left: 20px;
  }
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 20px;
    -webkit-transition: width .35s;
    -moz-transition: width .35s;
    transition: width .35s;
    background: #ffa15d;
    background: -webkit-repeating-linear-gradient(135deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
    background: -moz-repeating-linear-gradient(135deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
    background: repeating-linear-gradient(-45deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
    background: -webkit-repeating-linear-gradient(-45deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
    background: -moz-repeating-linear-gradient(-45deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
    background: -ms-repeating-linear-gradient(-45deg,#fec18b,#fec18b 2px,#ffa15d 2.5px,#ffa15d 4.5px);
  }
  .progress-bg {
    height: 20px;
    background-color: #e3e3e3;
  }
  // 下方安全设置
  li {
    border-top: 1px dashed #e2e2e2;
    overflow: hidden;
    .cell {
        display: block;
        padding: 25px 0;
        margin: 0;
    }
  }
  .icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: middle;
    border-radius: 4px;
  }
  .text-mutered{
    .icon {
      background-color: #ccc;
    }
  }
.text-info .icon {
    background-color: #6ccefd;
}
  a.cell::first-letter {
    letter-spacing: 20px;
  }

  // 存管账户
  .card::before {
    position: absolute;
    top: -17px;
    right: 15px;
    z-index: 0;
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #dcdcdc;
  }
  .card::after {
    position: absolute;
    top: -16px;
    right: 15px;
    z-index: 0;
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff;
  }

}
.secur-setting.secur-auth .card {
    position: relative;
    z-index: 1;
}
.secure-auth-groups li .card {
    padding: 25px 15px;
}
.secur-setting{
  form {
    width: 520px;
    margin: 0 auto;
    padding-left: 40px;
  }
  label {
    display: block;
    position: relative;
    margin-bottom: 20px;
    span {
    display: inline-block;
    width: 130px;
    padding-right: 20px;
    i{
      vertical-align: middle;
    }
    }

  p {
    margin-bottom: 0;
    display: inline-block;
    width: 300px;
    height: 35px;
    line-height: 35px;
    padding: 0 4px;
    border: 1px solid #ddd;
    background: #eee;
    font-size: 100%;
    vertical-align: middle;
    img{
      vertical-align: middle;
    }
    u {
    margin-left: 8px;
    display: inline-block;
    color: #999;
    text-decoration: none;
    }
  }
  p.is-open {
    border: 0;
    background: 0 0;
  }

  }
  input[type="text"], .secur-setting input[type="password"], .secur-setting textarea {
    width: 300px;
  }
  input[type="text"][readonly].input-border {
    border: 1px solid #ddd;
  }
  input[type="password"], .secur-setting textarea {
    width: 300px;
  }
  label.w134{
    margin-bottom: 0;
    height: 31px;
  }

  // 重置密码部分不同设置

  .pwd-strength {
      padding-left: 150px;
      i {
          display: inline-block;
          width: 45px;
          font-size: 12px;
          font-style: normal;
          line-height: 1.4;
          text-align: center;
          color: #fff;
          background-color: #ccc;
      }
  }
}
.form-group{
  margin-bottom: 0;
  overflow: visible;
  padding: 6px 0;
  position: relative;
  width: 100%;
  a:hover {
    text-decoration: none;
    color: #f60;
  }
}
.question-tips {
    position: absolute;
    width: auto;
    display: inline-block;
    margin-left: 10px;
    // top: 10px;
    color: red;
    font-weight: 400;
    font-size: 12px;
    font-style: normal;
    cursor: pointer;
    line-height: 37px;
    i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: -2px 5px 0 10px;
    font-size: 0;
    cursor: pointer;
    vertical-align: middle;
    background: url(../assets/images/question_tip.png) center top no-repeat;
    }
}
.hint-tip::after, .hint-tip::before {
    position: absolute;
    opacity: 0;
    z-index: 10;
    pointer-events: none;
    -webkit-transition: .6s ease;
    -moz-transition: .6s ease;
    transition: .6s ease;
    bottom: 70%;
    left: 5%;
}
.hint-tip::before {
    content: '';
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 11;
    left: 55%;
    border-top-color: #FFCDA5;
    // bottom: 80%;
}
.hint-tip::after {
    content: attr(data-tip);
    background: rgba(255,205,165,.88);
    width: 130px;
    line-height: 20px;
    color: #E85800;
    padding: 8px 10px;
    white-space: pre-wrap;
    font-size: 12px;
    text-align: left;
    border-radius: 6px;
    -o-box-shadow: 4px 4px 8px rgba(0,0,0,.3);
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);
    bottom: 100%;
}

.hint-tip:hover:after{
    opacity: 1;
}
.hint-tip:hover:before{
    opacity: 1;
}
.cbox-input {
    display: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.cbox-input+label {
    position: relative;
    display: inline-block;
    margin: -2px 4px 0 0;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background-color: #CDCDCD;
    vertical-align: middle;
    line-height: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.cbox-input:checked+label:after {
    position: absolute;
    top: 3px;
    left: 2px;
    width: 9px;
    height: 9px;
    border-radius: 10px;
    color: #FA8319;
    content: "\2714";
    font-weight: 700;
    line-height: 9px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.secur-auth .error-info {
    width: 465px;
    margin: 0 0 20px;
    text-align: center;
}
.error-info .error {
    display: block;
    padding: 10px;
    color: red;
    border: 1px solid #ffcdcd;
    border-radius: 2px;
    background: #f2dede;
    text-align: center;
}
.secur-setting button {
    width: 200px;
}
.btn {
    display: inline-block;
    padding: 6px 24px;
    font-size: 16px;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    color: #fff;
    border: none;
    border-radius: 4px;
    background-color: #f79a57;
    vertical-align: middle;
    cursor: pointer;
}
// 获取验证码按钮
.sec-getsms-code {

    display: inline-block;
    padding: 9px 10px;
    width: 108px;
    border-radius: 4px;
    background-color: #F79A57;
    color: #fff;
    vertical-align: middle;
    text-align: center;

}
.sec-getsms-code:hover {
    color: #fff !important;
    text-decoration: none;
}
.sec-nocan-msg {
    position: absolute;
    display: inline-block;
    width: 166px;
    line-height: 37px;
    color: #999;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
}
/* 交易密码修改 */
.card-reset-pwd {
  padding: 80px 0;
}
// 手机号更改
.card-mobile-info {
    margin-bottom: 25px;
    span {
    color: red;
    }
    i{
      vertical-align: center;
    }
}
.card-mobile-item {

    margin-bottom: 30px;
    padding: 18px 30px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #ccc;
    span {
      display: inline-block;
    }
    i {
      display: inline-block;
      padding-right: 20px;
      width: 18px;
      height: 14px;
      background-image: url(../assets/images/email.png);
      background-repeat: no-repeat;
      vertical-align: middle;
    }
     .card-mobile-btn-step{

        float: right;
        padding: 0 15px;
        background: #F96;
        color: #fff;

    }
}
.card-mobile-form{
  .btn-back {
    width: 86px;
    border: 1px solid #F96;
    border-radius: 2px;
    background-color: #fff;
    color: #F96;
    font-size: 14px;
  }
  button {
    width: 134px;
    font-size: 14px;
  }
}
.i-star {
    font-style: normal;
    vertical-align: middle;
}

</style>
