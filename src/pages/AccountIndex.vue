<template>
  <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">账户总览</li>
        </template>
        <template slot="right">
            <div class="pull-right account-right">
                <div class="acc-home-overview">
                    <div class="ov-personal clearfix">
                        <div class="ov-user-logo" style="position: relative;">
                            <span class="acc-viplev">vip</span>
                            <span class="acc-avatar" id="accAvatarUploads" data-domain="https://dn-liyedai.qbox.me/" data-upload="/front/account/uploadUserImage"
                            style="z-index: 1;">
                            <img id="accAvatarPics" class="acc-avatar-pic" src="../assets/images/userImg.png?imageView2/1/w/105/h/105">
                            <span title="更换头像" class="acc-avatar-change">更换头像</span>
                            <span class="acc-avatar-front"></span>
                            </span>
                            <div id="html5_1cj875lsb5j61atk12221fthhf53_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 10px; left: 11px; width: 111px; height: 111px; overflow: hidden; z-index: 0;">
                            <input id="html5_1cj875lsb5j61atk12221fthhf53" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"
                                accept="image/jpeg,image/gif,image/png" type="file">
                            </div>
                        </div>
                        <div class="ov-person-info">
                            <div class="ov-person-member">
                                <h4 class="user-name">17698648527
                                <a href="#/account/alertpay/会员等级说明" target="_blank">（青铜会员）</a>
                                </h4>
                                <div class="user-system">
                                    <div class="system-time">
                                        <span class="datetime" id="systemTime">2018/07/25</span>
                                        <span class="date-week" id="dateWeek">星期三</span>
                                    </div>
                                    <a class="system-sign" id="daySign" @click="openModal" v-if="!qian">

                                        <i class="icon-acc-home icon-sign"></i>
                                        <span>立即
                                        <br>签到</span>
                                    </a>
                                    <a class="system-sign" id="daySign" v-else>
                                        <i class="icon-acc-home icon-already-sign"></i>
                                        <span>已签到</span>
                                    </a>
                                </div>
                            </div>
                            <div class="ov-person-auth">
                                <div class="secure">
                                    <a class="item m-r-22 hint-tip hint-auto-tip hint-tip-top" href="/front/account/home#/secureAuth" data-bubble="已绑定手机：17698648527">
                                    <i class="icon-acc-home icon-iden-mobile"></i>
                                    <span>手机验证</span>
                                    </a>
                                    <!-- 存管开户 -->

                                    <a class="item gray hint-tip hint-regular-tip hint-tip-top" href="#/secureAuth" data-bubble="未开通银行存管账户">
                                    <i class="icon-acc-home icon-secure-nobank"></i>
                                    <span>存管开户</span>
                                    </a>

                                    <!-- 身份认证 -->

                                    <a class="item gray hint-tip hint-middle-tip hint-tip-top" href="/front/account/home#/secureAuth" data-bubble="您还未身份认证">
                                    <i class="icon-acc-home icon-iden-noidcard"></i>
                                    <span>身份认证</span>
                                    </a>

                                    <!-- 绑定银行卡 -->

                                    <a class="item gray hint-tip hint-middle-tip hint-tip-top" data-tip="您还未开通江西银行存管账户，请先开通！" data-bubble="未绑定银行卡号" data-url="/front/account/home#/secureAuth">
                                    <i class="icon-acc-home icon-iden-nobankcard"></i>
                                    <span>银行卡号</span>
                                    </a>

                                </div>
                                <div class="identify">
                                    <!-- 交易密码 -->

                                    <a class="item gray m-r-26 hint-tip hint-regular-tip hint-tip-top" data-tip="您还未开通江西银行存管账户，请先开通！" data-bubble="您未设置交易密码"
                                    data-url="/front/account/home#/secureAuth">
                                    <i class="icon-acc-home icon-secure-notrade"></i>
                                    <span>交易密码</span>
                                    </a>

                                    <!-- 风险评测 -->

                                    <a class="item m-r-26 gray hint-tip hint-regular-tip hint-tip-top" id="ovFlowRisk" href="javascript:void(0)" data-bubble="您未进行风险评测">
                                    <i class="icon-acc-home icon-secure-norisk"></i>
                                    <span>风险评测</span>
                                    </a>

                                    <!-- 绑定邮箱 -->

                                    <a class="item m-r-26 gray hint-tip hint-normal-tip hint-tip-top" data-tip="您还未开通江西银行存管账户，请先开通！" data-bubble="未绑定邮箱" data-url="/front/account/home#/secureAuth">
                                    <i class="icon-acc-home icon-iden-noemail"></i>
                                    <span>邮箱绑定</span>
                                    </a>

                                    <!-- 绑定客服 -->

                                    <a class="item customer" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2851568303&amp;site=qq&amp;menu=yes" target="_blank">
                                    <i class="icon-acc-home icon-secure-4"></i>
                                    <span>专属客服：客服乐乐</span>
                                    </a>

                                </div>
                            </div>
                            <div class="ov-person-gift">
                                <div class="user-integral">可用积分：
                                    <a class="detail" href="#/myScore">
                                    <span>50</span> 分</a>
                                    <a class="number" href="/front/invest/exchangeHome">去抽奖
                                    <i class="text-nomal">&gt;&gt;</i>
                                    </a>
                                </div>
                                <div class="user-coupon">可用优惠券：
                                    <a class="detail" href="/front/account/home#/rateTicketQuery/1/12">
                                    <span>15</span> 张</a>
                                    <a class="store" href="/front/invest/investOrderPlan">去投资
                                    <i class="text-nomal">&gt;&gt;</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ov-account">
                        <h3 class="header">
                            <span>账户信息</span>
                            <div class="pull-right">
                            <a class="ov-asset-recharge" data-tip="您还未开通江西银行存管账户，请先开通！" href="javascript:void(0)" data-risk="1">充值</a>
                            <a class="ov-asset-withdraw" data-tip="您还未开通江西银行存管账户，请先开通！" href="javascript:void(0)">提现</a>
                            <a class="ov-asset-queryfy" id="synchroLineRecharge" href="javascript:void(0)">线下充值同步</a>
                            <a class="ov-asset-queryjx" id="queryJXAccount" href="javascript:void(0)">查询银行账户</a>
                            </div>
                        </h3>
                        <div class="info clearfix">
                            <div class="statis clearfix">
                            <div class="statis-empty"></div>
                            <div class="statis-pie"></div>

                            <div id="ovAssetIsRisk" class="ov-asset-empty">您的账户
                                <br>还没有余额~
                                <br>去充点吧！
                                <br>
                                <a data-tip="您还未开通江西银行存管账户，请先开通！" href="javascript:void(0)">立即充值</a>
                            </div>

                            <script type="text/json" id="ovAssetChartData">
                                {
                                "innerSize": "70%",
                                "data": [{
                                    "name": "可用余额",
                                    "y": 0.00
                                }, {
                                    "name": "待收本金",
                                    "y": 0.00
                                }, {
                                    "name": "冻结金额",
                                    "y": 0.00
                                }, {
                                    "name": "待收收益",
                                    "y": 0.00
                                }]
                                }
                            </script>

                            </div>
                            <div class="assets clearfix">
                            <ul class="assets-cards clearfix">
                                <li class="first">
                                <p class="asset-title">江西银行账户总资产</p>
                                <p class="asset-total">￥0.00
                                    <span>元</span>
                                </p>
                                </li>
                                <li class="second">
                                <p class="asset-title">累计出借</p>
                                <p class="asset-addup">￥0.00
                                    <span>元</span>
                                </p>
                                </li>
                                <li class="last">
                                <p class="asset-title">历史累计收益</p>
                                <p class="asset-history">￥0.00
                                    <span>元</span>
                                </p>
                                </li>
                            </ul>
                            <ul class="assets-items assets-money clearfix">

                                <li>
                                <i class="ov-enabl"></i>
                                <span class="ov-asset-key mr24">可用余额</span>
                                <span class="ov-asset-val">￥0.00</span>
                                </li>
                                <li>
                                <i class="ov-frozen"></i>
                                <span class="ov-asset-key mr24">冻结金额</span>
                                <span class="ov-asset-val">￥0.00</span>
                                </li>

                            </ul>
                            <ul class="assets-items assets-rewards clearfix">

                                <li>
                                <i class="ov-invest"></i>
                                <span class="ov-asset-key mr24">待收本金</span>
                                <span class="ov-asset-val">￥0.00</span>
                                </li>
                                <li>
                                <i class="ov-inter"></i>
                                <span class="ov-asset-key mr24">待收收益</span>
                                <span class="ov-asset-val">￥0.00</span>
                                </li>

                            </ul>
                            <ul class="assets-items assets-tickets">
                                <li>
                                <i></i>
                                <span class="ass-reward-key mr24">充值总额</span>
                                <span class="ass-reward-val">￥0.00</span>
                                </li>
                                <li>
                                <i></i>
                                <span class="ass-reward-key mr24">提现总额</span>
                                <span class="ass-reward-val">￥0.00</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="ov-investment clearfix">
                        <div class="ov-invest-tab clearfix">
                            <a :class="{active:showCalendar}" href="javascript:;" @click="calendarTab">回款日历</a>
                            <a href="javascript:;" :class="{active:showData}" @click="dataTab">收益数据</a>
                        </div>
                        <div class="ov-invest-inner">
                            <div class="ov-invest-content" v-show="showCalendar">
                                <dl class="ov-backsec-history">
                                    <dt class="ov-backsec-head clearfix">
                                        <ul class="ov-backsec-legend">
                                            <li>
                                            <i class="ov-legon"></i>已收回款</li>
                                            <li>
                                            <i class="ov-legoff"></i>待收回款</li>
                                        </ul>
                                        <h4 class="ov-backsec-tit">回款日历</h4>
                                    </dt>
                                    <!-- <vue-event-calendar :events="demoEvents"></vue-event-calendar> -->
                                    <Calendar style="background-color: #fff;"></Calendar>
                                </dl>
                                <div class="ov-calendar-total">
                                    <span>当月回款总额：
                                    <em id="repayMoney">0.00</em>元</span>
                                    <span>当月收益(包括加息金额)总额：
                                    <em id="incomeMoney">0.00</em>元</span>
                                    <span>当月未回款总额：
                                    <em id="unpaidBack">0.00</em>元</span>
                                    <span>当月未回款利息：
                                    <em id="unpaidInterest">0.00</em>元</span>
                                </div>
                                <a id="checkStatusBank" data-account="" data-setpaypw="0"></a>
                            </div>
                            <div class="ov-invest-content" v-show="showData">
                                <div class="ov-it-statis">
                                    <div class="ov-it-chart" id="ovItChart" data-highcharts-chart="0">
                                    <div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 870px; height: 160px; text-align: left; line-height: normal; z-index: 0; left: 0px; top: 0px;">
                                        <svg version="1.1" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;"
                                        xmlns="http://www.w3.org/2000/svg" width="870" height="160">
                                        <desc>Created with Highcharts 4.0.4</desc>
                                        <defs>
                                            <clipPath id="highcharts-1">
                                            <rect x="0" y="0" width="724" height="109"></rect>
                                            </clipPath>
                                        </defs>
                                        <rect x="0" y="0" width="870" height="160" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect>
                                        <g class="highcharts-grid" zIndex="1"></g>
                                        <g class="highcharts-grid" zIndex="1">
                                            <path fill="none" d="M 73 65.5 L 797 65.5" stroke="#C0C0C0" stroke-width="1" zIndex="1" opacity="1"></path>
                                        </g>
                                        <g class="highcharts-grid" zIndex="1">
                                            <path fill="none" d="M 73 65.5 L 797 65.5" stroke="#C0C0C0" stroke-width="1" zIndex="1" opacity="1"></path>
                                        </g>
                                        <g class="highcharts-axis" zIndex="2">
                                            <path fill="none" d="M 279.5 119 L 279.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 382.5 119 L 382.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 486.5 119 L 486.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 589.5 119 L 589.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 693.5 119 L 693.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 797.5 119 L 797.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 175.5 119 L 175.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 72.5 119 L 72.5 129" stroke="#C0D0E0" stroke-width="1" opacity="1"></path>
                                            <path fill="none" d="M 73 119.5 L 797 119.5" stroke="#C0D0E0" stroke-width="1" zIndex="7" visibility="visible"></path>
                                        </g>
                                        <g class="highcharts-axis" zIndex="2">
                                            <text x="839.9500007629395" zIndex="7" text-anchor="middle" transform="translate(0,0) rotate(90 839.9500007629395 64.5)"
                                            class=" highcharts-yaxis-title" style="color:#707070;fill:#707070;" visibility="visible" y="64.5">投资收益(元)</text>
                                        </g>
                                        <g class="highcharts-axis" zIndex="2">
                                            <text x="30.049999237060547" zIndex="7" text-anchor="middle" transform="translate(0,0) rotate(270 30.049999237060547 64.5)"
                                            class=" highcharts-yaxis-title" style="color:#707070;fill:#707070;" visibility="visible" y="64.5">投资金额(元)</text>
                                        </g>
                                        <g class="highcharts-series-group" zIndex="3">
                                            <g class="highcharts-series highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(73,10) scale(1 1)"
                                            style="" clip-path="url(#highcharts-1)">
                                            <rect x="23.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="126.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="230.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="333.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="437.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="540.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="643.5" y="55.5" width="25" height="0" fill="#d0d0d0" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            </g>
                                            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(73,10) scale(1 1)" clip-path="none"></g>
                                            <g class="highcharts-series highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(73,10) scale(1 1)"
                                            style="" clip-path="url(#highcharts-1)">
                                            <rect x="54.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="157.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="261.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="364.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="468.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="571.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            <rect x="674.5" y="55.5" width="25" height="0" fill="#ff864f" rx="0" ry="0" stroke="#FFFFFF" stroke-width="1"></rect>
                                            </g>
                                            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(73,10) scale(1 1)" clip-path="none"></g>
                                        </g>
                                        <g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7">
                                            <text x="124.71428571428572" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-20</text>
                                            <text x="228.14285714285717" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-21</text>
                                            <text x="331.57142857142856" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-22</text>
                                            <text x="435" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-23</text>
                                            <text x="538.4285714285714" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-24</text>
                                            <text x="641.8571428571429" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-25</text>
                                            <text x="745.2857142857143" text-anchor="middle" style="width:83px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="139" opacity="1">07-26</text>
                                        </g>
                                        <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7">
                                            <text x="812" text-anchor="start" style="width:267px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="67.5" opacity="1">0元</text>
                                        </g>
                                        <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7">
                                            <text x="58" text-anchor="end" style="width:267px;color:#606060;cursor:default;font-size:11px;fill:#606060;"
                                            y="67.5" opacity="1">0元</text>
                                        </g>
                                        <g class="highcharts-tooltip" zIndex="8" style="cursor:default;padding:0;white-space:nowrap;" transform="translate(0,-9999)">
                                            <path fill="none" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0"
                                            isShadow="true" stroke="black" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path>
                                            <path fill="none" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0"
                                            isShadow="true" stroke="black" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path>
                                            <path fill="none" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0"
                                            isShadow="true" stroke="black" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path>
                                            <path fill="rgba(249, 249, 249, .85)" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0"></path>
                                            <text x="8" zIndex="1" style="font-size:12px;color:#333333;fill:#333333;" y="21"></text>
                                        </g>
                                        </svg>
                                    </div>
                                    </div>
                                    <script type="text/json" id="ovItChartMonthData">
                                    {
                                        "date": [1532587267000],
                                        "series": [{
                                        "name": "投资收益",
                                        "data": [0.0]
                                        }, {
                                        "name": "投资金额",
                                        "data": [0.0]
                                        }]
                                    }
                                    </script>
                                    <script type="text/json" id="ovItChartYearData">
                                    {
                                        "date": ["2018-07"],
                                        "series": [{
                                        "name": "投资收益",
                                        "data": [0.0]
                                        }, {
                                        "name": "投资金额",
                                        "data": [0.0]
                                        }]
                                    }
                                    </script>
                                    <div class="ov-it-legend">
                                    <span>
                                        <i class="on"></i>投资金额(元)</span>
                                    <span>
                                        <i></i>投资收益(元)</span>
                                    </div>
                                    <h4 class="ov-it-title">投资收益数据</h4>
                                    <div class="ov-it-times clearfix" id="ovItChartRangeSelector">
                                    <a data-type="0" class="on" href="javascript:void(0);">近七日</a>
                                    <a data-type="1" href="javascript:void(0);">近一个月</a>
                                    <a data-type="2" href="javascript:void(0);">近一年</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </account>
    <sign-in @close="closeModal" @changeQian="changeQian" v-if="showModal"></sign-in>
    </div>
</template>

<script>
import Account from '@/components/Account'
import Calendar from '../components/Calendar'
import SignIn from '../components/SignIn'
export default {
  data () {
    return {
      showCalendar: true,
      showData: false,
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      }, {
        date: '2016/11/12',
        title: 'this is a title'
      }],
      showModal: false,
      qian: false
    }
  },
  components: {
    Account,
    Calendar,
    SignIn
  },
  mounted () {
    // console.log(new Date().getTime())
  },
  created () {
    // this.initData()
  },
  methods: {
    calendarTab () {
      this.showCalendar = true
      this.showData = false
    },
    dataTab () {
      this.showCalendar = false
      this.showData = true
    },
    clickDay () {

    },
    changeDate () {

    },
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    changeQian (v) {
      this.qian = v
    }
  }
}
</script>

<style scoped lang="scss">
//   弹出提示框
.hint-tip:after,.hint-tip:before {
 position:absolute;
 opacity:0;
 z-index:10;
 pointer-events:none;
 -webkit-transition:.3s ease;
 -moz-transition:.3s ease;
 transition:.3s ease
}
.hint-tip:before {
 content:'';
 position:absolute;
 background:0 0;
 border:6px solid transparent;
 z-index:11
}
.hint-tip:after {
 content:attr(data-tip);
 background:rgba(255,205,165,.88);
 width:130px;
 line-height:20px;
 color:#E85800;
 padding:8px 10px;
 font-size:12px;
 text-align:left;
 border-radius:6px;
 -o-box-shadow:4px 4px 8px rgba(0,0,0,.3);
 box-shadow:4px 4px 8px rgba(0,0,0,.3)
}
.hint-tip:hover:after,.hint-tip:hover:before {
 opacity:1
}
.hint-tip-top:after,.hint-tip-top:before {
 bottom:95%;
 left:5%
}
.hint-tip.hint-tip-top:before {
 top:0;
 left:55%;
 border-top-color:#FFCDA5
}
.hint-tip-top:hover:after,.hint-tip-top:hover:before {
 -webkit-transform:translateY(-8px);
 -moz-transform:translateY(-8px);
 -ms-transform:translateY(-8px);
 transform:translateY(-8px)
}
.hint-regular-tip:after {
 content:attr(data-bubble);
 max-width:110px;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-regular-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.hint-big-tip:after {
 content:attr(data-bubble);
 max-width:136px;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-big-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.hint-small-tip:after {
 content:attr(data-bubble);
 width:64px;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-small-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.hint-middle-tip:after {
 content:attr(data-bubble);
 width:84px;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-middle-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.hint-normal-tip:after {
 content:attr(data-bubble);
 width:66px;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-normal-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.hint-auto-tip:after {
 content:attr(data-bubble);
 width:auto;
 background:rgba(0,0,0,.6);
 color:#fff
}
.hint-auto-tip.hint-tip-top:before {
 left:20%;
 border-top-color:rgba(0,0,0,.4)
}
.ov-person-auth .item i, .ov-person-auth .item span {
    vertical-align: middle;
}
  @keyframes openDeposit {
    0% {
      // display: block;
      height: 0;
      overflow: hidden;
    }
    100% {
      height: 400px;
      overflow: hidden; // display: none;
    }
  }

  .showTab-enter-active {
    animation-name: openDeposit;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    transition: all 0.6s;
  }

  .card {
    padding: 15px;
    box-shadow: 0 0 0 1px #e0e0e0;
    margin-bottom: 15px; // background-color: #fff;
    margin-left: 1px;
    margin-right: 1px; // margin: 5px;
    // border: 1px solid #0ff;
  }

  .account-wrap.card {
    box-shadow: none;
    padding: 0;
  }

  .account-wrap {
    background: 0 0;
  }

  input[type="text"],
  input[type="password"],
  input[type="file"],
  select,
  textarea {

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

.acc-home-overview {
    position: relative;
    background: #f5f5f5;
}
//   头像部分
.ov-personal {
    padding: 17px 24px 17px 18px;
    background: #fff;
}
.ov-user-logo:hover .acc-avatar-change{
    bottom: 6px;
}
.ov-user-logo {
    float: left;
    width: 133px;
    height: 133px;
}
.acc-viplev {
    position: absolute;
    top: 12px;
    right: -14px;
    z-index: 9;
    width: 45px;
    height: 20px;
    padding: 0 0 8px 9px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    color: #fff;
    background: url(../assets/images/vip-flag.png);
}
.acc-avatar {
    position: relative;
    z-index: 0;
    display: block;
    margin: 10px auto 0;
    width: 105px;
    height: 105px;
    padding: 3px;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    img {
        position: relative;
        z-index: 0;
        max-width: 100px;
    }
}
.acc-avatar-change {
    position: absolute;
    right: 0;
    bottom: -36px;
    left: 0;
    height: 36px;
    line-height: 36px;
    -webkit-transition: all ease .2s;
    -moz-transition: all ease .2s;
    transition: all ease .2s;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,.5);
}
.acc-avatar-front {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 112px;
    height: 112px;
    background: url(../assets/images/ico-avator.png) center center no-repeat;
}
// 头像右侧信息
.ov-person-info {
    position: relative;
    padding-left: 25px;
    float: left;
    width: 775px;
    height: 145px;
    .ov-person-member {
        padding-bottom: 12px;
        height: 45px;
    }
}
.user-name {
    margin: 0;
    line-height: 45px;
    font-size: 17px;
    color: #4d4d4d;
}
.user-system {
    position: absolute;
    top: 0;
    right: 0;
}
.system-time {
    margin-top: 4px;
    padding-right: 12px;
    display: inline-block;
    font-size: 16px;
    color: #4d4d4d;
    vertical-align: middle;
    .datetime {
        padding-bottom: 5px;
    }
    span {
        display: block;
        text-align: right;
    }
}
.system-sign {
    display: inline-block;
    line-height: 20px;
    color: #ff7d12;
    font-size: 14px;
    cursor: pointer;
    .icon-sign {
        width: 41px;
        height: 41px;
        background-position: -28px -26px;
        vertical-align: middle;
    }
    span {
        padding-top: 6px;
        display: inline-block;
        vertical-align: middle;
    }
}
.system-sign .icon-already-sign {
    width: 41px;
    height: 41px;
    background-position: -68px -26px;
    vertical-align: middle;
}
.icon-acc-home {
    display: inline-block;
    background: url(../assets/images/icon_account.png) no-repeat;
}
// 已认证信息
.ov-person-auth {
    float: left;
    .item.gray {
        color: #4d4d4d !important;
    }
}
.secure {
    padding: 0 0 28px;
    font-size: 0;
    .item {
        position: relative;
        margin-right: 26px;
        display: inline-block;
        color: #ff7d12;
        font-size: 14px;
        cursor: pointer;
        i {
            margin-right: 5px;
        }
    }
}
.identify{
    .item {
        position: relative;
        color: #ff7d12;
    }
}
.m-r-26 {
    margin-right: 26px;
}
// 手机验证
.icon-acc-home.icon-secure-nobank {
    width: 20px;
    height: 23px;
    background-position: -147px -32px;
}
// 存管开户
.icon-acc-home.icon-iden-mobile {
    width: 21px;
    height: 29px;
    background-position: -2px -71px;
}
// 身份认证
.icon-acc-home.icon-iden-noidcard {
    width: 19px;
    height: 24px;
    background-position: -142px -76px;
}
// 银行卡
.icon-acc-home.icon-iden-nobankcard {
    margin-right: 5px;
    width: 21px;
    height: 15px;
    background-position: -166px -85px;
}
// 交易密码
.icon-acc-home.icon-secure-notrade {
    margin-right: 5px;
    width: 17px;
    height: 20px;
    background-position: -136px 0;
}
// 风险评测
.icon-acc-home.icon-secure-norisk {
    width: 22px;
    height: 20px;
    background-position: -185px 0;
}
// 邮箱绑定
.icon-acc-home.icon-iden-noemail {
    margin-right: 5px;
    width: 21px;
    height: 14px;
    background-position: -190px -86px;
}
// 专属客服
.icon-acc-home.icon-secure-4 {
    width: 17px;
    height: 23px;
    background-position: -170px -32px;
}
// 图标
.icon-acc-home {
    display: inline-block;
    background: url(../assets/images/icon_account.png) no-repeat;
}
// 右侧积分
.ov-person-gift {
    float: right;
    .user-integral {
        padding: 6px 0 17px;
        border-bottom: 1px dashed #ccc;
    }
    .user-coupon {
        padding-top: 17px;
    }
    span{
        color: red;
    }
    .number , .store {
        float: right;
        font-size: 13px;
        color: #0774da;
        font-style: normal;
    }
    .detail:hover{
        color: red;
    }
}
.ov-person-gift .user-coupon, .ov-person-gift .user-integral {
    width: 268px;
    font-size: 14px;
    color: #4d4d4d;
}

// 账户信息
.ov-account {
    margin-top: 14px;
    padding: 15px 25px 0 0;
    background: #fff;
    overflow: hidden;
    h3 {
        margin: 0;
        span {
            display: inline-block;
            margin: 0;
            padding: 8px 0 18px;
            width: 131px;
            font-size: 17px;
            font-weight: 600;
            color: #4d4d4d;
            text-align: center;
            border-bottom: 3px solid #ff7d12;
        }
    }
    .pull-right {
        float: right !important;
    }
    .info {
        padding: 30px 0 17px;
    }
    .statis {
        float: left;
        width: 230px;
        height: 222px;
    }
    .assets {
        float: left;
    }
}
.ov-asset-recharge, .ov-asset-withdraw {
    width: 73px;
}
.ov-asset-queryfy, .ov-asset-queryjx, .ov-asset-recharge, .ov-asset-withdraw {
    display: inline-block;
    margin: 0 0 0 9px;
    padding: 0;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    text-align: center;
}
.ov-asset-queryfy, .ov-asset-queryjx, .ov-asset-recharge, .ov-asset-withdraw {
    float: left;
    background: #f5675d;
}
.ov-asset-queryfy, .ov-asset-queryjx {
    width: 100px;
}
.ov-asset-queryfy {
    position: relative;
    background: #448aca;
}
.ov-asset-queryjx {
    background: #257ecb;
}
// 余额充值
.ov-asset-empty {
    float: none;
    margin: 40px auto 0;
    width: 92px;
    height: 82px;
    padding: 19px 14px;
    font-size: 12px;
    line-height: 1.8em;
    text-align: center;
    border-radius: 60px;
    box-shadow: 0 0 3px 3px rgba(0,0,0,.1);
}
.ov-asset-empty a {
    color: #2a8ae0;
}
.assets-cards {
    margin-bottom: 28px;
    li {
        float: left;
        .asset-title {
            padding-bottom: 20px;
            font-size: 15px;
            color: #515151;
        }
        p {
            margin: 0;
            line-height: 1;
        }
        .asset-total {
            font-size: 28px;
            color: #ff7d12;
        }
        span {
            margin-left: 3px;
            font-size: 14px;
            vertical-align: middle;
        }
    }
    li.first {
        padding-right: 10px;
        width: 256px;
    }
    li.second {
        padding-right: 10px;
        width: 240px;
    }
    li.last {
        width: 204px;
    }
}
.assets-cards li .asset-addup, .assets-cards li .asset-history {
    font-size: 22px;
    color: #515151;
    line-height: 35px;
}
.assets-items {
    float: left;
    padding-right: 10px;
    li {
        padding: 12px 0;
        line-height: 1;
    }
}
.assets-money li i, .assets-rewards li i {
    margin-right: 15px;
    display: inline-block;
    width: 17px;
    height: 17px;
    vertical-align: middle;
}
.ov-enabl {
    background: #3691e3;
}
.ov-frozen {
    background: #ec644c;
}
.ov-invest {
    background: #00b7ee;
}
.ov-inter {
    background: #ff864f;
}
.assets-items li span.ov-asset-key.mr24 {
    margin-right: 24px;
}
.assets-items li span.ov-asset-key {
    margin-right: 30px;
}
.assets-items li span {
    display: inline-block;
    width: auto;
    height: 17px;
    line-height: 17px;
    color: #515151;
    font-size: 15px;
    vertical-align: middle;
}
.assets-items li span.ov-asset-val {
    min-width: 112px;
    max-width: 132px;
}
.ov-asset-key {
    display: inline-block;
    width: 100px;
    margin: 0 18px 0 0;
        margin-right: 18px;
}
.assets-rewards {
    padding-right: 10px;
}
.assets-rewards, .assets-tickets {
    padding: 0 0 0 22px;
    border-left: 1px dashed #ccc;
}
.assets-rewards, .assets-tickets {
    padding: 0 0 0 22px;
    border-left: 1px dashed #ccc;
}
.assets-tickets li i {

    margin-right: 4px;
    display: inline-block;
    width: 3px;
    height: 14px;
    background: #ff7d12;
    vertical-align: middle;

}
// 收益日历/收益数据
.ov-investment {
    position: relative;
    margin-top: 13px;
    background: #fff;
}
// 选项卡
.ov-invest-tab {
    position: relative;
    a {
        margin-right: 60px;
        float: left;
        width: 132px;
        height: 51px;
        line-height: 51px;
        font-size: 17px;
        color: #4d4d4d;
        text-align: center;
        font-weight: 700;
        border-bottom: 3px solid transparent;
    }
}
.ov-invest-tab a.active {
    border-bottom: 3px solid #ff7d12;
}
.ov-invest-content {
    padding: 20px 86px 40px 30px;
    height: 520px;
}
.ov-backsec-history {
    position: relative;
    z-index: 9;
    margin: 28px 0 0;
}
.ov-backsec-head {
    padding: 0 5px;
    line-height: 32px;
}
.ov-backsec-legend {
    float: left;
    li {
        float: left;
        margin: 0 26px 0 0;
        i.ov-legon {
            background: #009de4;
        }
        i.ov-legoff {
            background: #ff850e;
        }
        i {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin: 0 12px 0 0;
            vertical-align: middle;
            border-radius: 2px;
        }
    }
}
.ov-backsec-tit {
    float: left;
    margin: 0 24px 0 140px;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
}
.ov-calendar {
    position: relative;
    z-index: 0;
    margin: 55px 0 0;
    border: 1px solid #dad9d9;
    border-radius: 5px;
    width: 100% !important;
    max-width: 100%;
    div{
        background-color: #fff !important;
    }
}
.ov-calendar-total {

    padding: 20px 0 0;
    overflow: hidden;
    span {

        padding-bottom: 20px;
        float: left;
        width: 45%;
        font-weight: 500;
        em {
            margin: 0 4px;
            font-style: normal;
            color: #f60;
            font-weight: 700;
        }
    }
}
</style>
