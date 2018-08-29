<template>
  <div class="home-page">
    <div class="swiper-box">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
        <!-- slides -->
        <swiper-slide v-for="(e,i) in imgArr" :key="i" class="swiper-slider"><a :href="e.url" :style="'background-image: url('+e.img+');'"></a></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="report-inner">
        <p class="report-day">
          安全运营：
          <span>4年146天</span>
        </p>
        <p class="report-rate">
          <em>9.0%~14.0%</em>
          <span class="fs15"><label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label></span>
        </p>
        <p class="report-user">
          <a class="btn-report" href="#/login-regist" @click="regist">注册立领588元红包</a><br>
          <span>已有账号？<i></i><a href="#/login-regist" @click="login">立即登录</a></span>
        </p>
        <a class="report-intro" href="#/">了解立业贷</a>
      </div>
    </div>
    <div class="container">
      <div class="marquee-box">
        <div class="latest-notice"><i class="icon-home icon-notice"></i>
          <div class="notice-box">
            <ul id="latestNotice" ref="notice">
              <li>
                <a href="#/">关于立业贷债权转让规则优化公告</a>
              </li>
              <li>
                <a href="#/">决胜世界杯，赢千元大奖</a>
              </li>
              <li>
                <a href="#/">关于部分银行6月29日-6月30日系统升级维护公告</a>
              </li>
              <li>
                <a href="#/">关于立业贷债权转让规则优化公告</a>
              </li>
            </ul>
          </div>
          <a class="notice-more" href="#/">更多></a>
        </div>
        <div class="latest-invest"><i class="icon-home icon-lateivt"></i>
          <div class="invest-box">
            <ul id="lateivtList" class="lateivt-list" ref="lateivt">
              <li>188*****610 成功投资
                <span class="text-orange">￥10000.00</span>元 盈车贷NO.02920180629001 2018-07-06 07:16</li>
              <li>135*****101 成功投资
                <span class="text-orange">￥3000.00</span>元 盈车贷NO.01520180329002 2018-07-06 07:10</li>
              <li>134*****284 成功投资
                <span class="text-orange">￥510.00</span>元 盈车贷NO.02920180629001 2018-07-06 06:39</li>
              <li>133*****038 成功投资
                <span class="text-orange">￥318.00</span>元 盈车贷NO.00520180702002 2018-07-06 06:19</li>
              <li>188*****610 成功投资
                <span class="text-orange">￥10000.00</span>元 盈车贷NO.02920180629001 2018-07-06 07:16</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="static-wrap">
        <ul class="clearfix">
          <li class="first">
            <p>累计交易总额（元）</p>
            <em>17亿2518万</em>
          </li>
          <li>
            <p>累计注册用户（人）</p>
            <em>89972</em>
          </li>
          <li>
            <p>为出借人赚取收益（元）</p>
            <em>7050万</em>
          </li>
          <li>
            <p>累计服务项目（个）</p>
            <em>16506</em>
          </li>
        </ul>
        <a class="more p-t-19" href="/front/activity/index?src=2017_information&amp;type=operation">更多数据 &gt;</a>
      </div>
      <div class="feature-wrap clearfix">
        <a href="#/">
          <i class="icon-bank"></i>
          <div class="text">
              <h3>银行存管</h3>
              <p>江西银行 资金存管</p>
          </div>
        </a>
        <a href="#/">
          <i class="icon-contra"></i>
          <div class="text">
              <h3>电子合同</h3>
              <p>真实有效 不可篡改</p>
          </div>
        </a>
        <a href="#/" target="_blank">
          <i class="icon-secur"></i>
          <div class="text">
              <h3>行业权威</h3>
              <p>省市互金 协会会员</p>
          </div>
        </a>
        <a href="#/">
          <i class="icon-strong"></i>
          <div class="text">
              <h3>网贷百强</h3>
              <p>品牌价值 行业认可</p>
          </div>
        </a>
      </div>
      <div class="section-center bg-f5">
        <!-- 新手专区 -->
        <div class="hbsc-box">
          <div class="hbsc-title">
            <span>新手专区</span>
            <i></i>
            <em>新手专享 收益多多</em>
            <a class="hbsc-more" href="#/">更多
              <b>&gt;&gt;</b>
            </a>
          </div>
          <div id="hbCards" class="home-cards clearfix">
            <div class="hbsc-newsphoto">
              <a href="/register">
                <img src="../assets/images/news_hand.jpg">
              </a>
            </div>
            <div class="hbsc-cards hbsc-card-news clearfix m-l-16">

              <div class="hbsc-row-item">
                <h4 class="hbsc-name">
                  <a href="#/">新手标-18070601期</a>
                  <p>
                    <i class="pull-left"></i>
                    <span>新手专享 限额1万</span>
                    <i class="pull-right"></i>
                  </p>
                </h4>
                <i class="icon-home icon-hbsc-new"></i>
                <ul class="hbsc-info clearfix">
                  <li class="col-3 text-left">
                    <span class="text-orange fs30">13.00
                      <em class="fs18">%</em>
                      <b></b>
                    </span>
                    <p class="p-l-15"><label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label></p>
                  </li>
                  <li class="col-5 text-center tind10">
                    <span class="fs18">
                      <em class="fs22">1</em>个月</span>
                    <p>期限</p>
                  </li>
                  <li class="col-4 text-center tind-20">
                    <span class="fs18">
                      <em class="fs22">69,000</em>元</span>
                    <p>可投金额</p>
                  </li>
                </ul>

                <a class="btn-schedu btn-schedu-hand" href="#/">
                  <i class="schedu-i"></i>
                  <span>立即投标</span>
                </a>

              </div>

            </div>
            <div class="hbsc-newsapp m-l-16">
              <a href="#/">
                <img src="../assets/images/news_app_down.jpg">
                <div class="icon-appqr" style="display: none; height: 169px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">
                  <em></em>
                  <p></p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- 预约专区/小立有约、立管家 -->
        <div class="home-cards home-bidFinances clearfix">
          <div class="hbsc-title hbsc-title-plan">
            <span>预约专区</span><i></i>
            <em>一键约标 自动投标</em>
            <ul class="hbsc-tab hbsc-plan-tab">
              <li class="hbsc-tab-item" @mouseover="trueCards" ref="appoint">小立有约</li>
              <li class="hbsc-tab-item active"  @mouseover="falseCards" ref="steward">立管家</li>
            </ul>
            <div class="hbsc-tab-more">
              <a class="tab-item-more" href="/front/invest/investOrderPlan" v-show="cards">更多<b>&gt;&gt;</b></a>
              <a class="tab-item-more" href="/front/bidFinance/poolHome" v-show="!cards">更多<b>&gt;&gt;</b></a>
            </div>
          </div>
          <!-- 小立有约列表 -->
          <div class="hbsc-cards hbsc-plan-item clearfix" v-show="cards">

              <a class="hbsc-row-item " href="/front/invest/investOrderPlanDetail?planId=1">
                  <h4 class="hbsc-name">预约A计划</h4>
                  <i class="icon-home icon-plan"></i>
                  <ul class="hbsc-info clearfix">
                    <li class="col-6">
                      <span class="text-pink fs34">11.0<em class="fs20">%</em></span>
                        <p>
                          <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                        </p>
                    </li>
                    <li class="col-6 text-center"><span class="fs24">6<em class="fs18">个月</em></span><p>借款期限</p></li>
                  </ul>

                  <div class="btn-schedu btn-schedu-plan"><i></i><span>立即预约</span></div>

              </a>

              <a class="hbsc-row-item " href="/front/invest/investOrderPlanDetail?planId=2">
                  <h4 class="hbsc-name">预约B计划</h4>
                  <i class="icon-home icon-plan"></i>
                  <ul class="hbsc-info clearfix">
                    <li class="col-6">
                      <span class="text-pink fs34">12.5<em class="fs20">%</em></span>
                        <p>
                          <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                        </p>
                    </li>
                    <li class="col-6 text-center"><span class="fs24">12<em class="fs18">个月</em></span><p>借款期限</p></li>
                  </ul>

                  <div class="btn-schedu btn-schedu-plan"><i></i><span>立即预约</span></div>

              </a>

              <a class="hbsc-row-item m-r-0" href="/front/invest/investOrderPlanDetail?planId=5">
                  <h4 class="hbsc-name">预约C计划</h4>
                  <i class="icon-home icon-plan"></i>
                  <ul class="hbsc-info clearfix">
                    <li class="col-6">
                      <span class="text-pink fs34">14.0<em class="fs20">%</em></span>
                        <p>
                          <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                        </p>
                    </li>
                    <li class="col-6 text-center"><span class="fs24">24<em class="fs18">个月</em></span><p>借款期限</p></li>
                  </ul>

                  <div class="btn-schedu btn-schedu-plan"><i></i><span>立即预约</span></div>

              </a>

          </div>
          <!-- 立管家 -->
          <div class="hbsc-cards hbsc-plan-item clearfix" v-show="!cards">

              <a class="hbsc-row-item " href="/front/bidFinance/currentPoolDetails?id=12737">
                <h4 class="hbsc-name">立管家   S</h4>
                <ul class="hbsc-info clearfix">
                  <li class="col-4">
                    <span class="text-pink fs34">
                        9.0<em class="fs20">%</em>
                    </span>
                    <p>
                      <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                    </p>
                  </li>
                  <li class="col-4 text-center"><span class="fs24">1<em class="fs18">个月</em></span><p>借款期限</p></li>
                  <li class="col-4 text-center"><span class="fs18">99,067<em>元</em></span><p>可投金额</p></li>
                </ul>

                <div class="btn-schedu btn-schedu-plan"><i></i><span>立即加入</span></div>

              </a>

              <a class="hbsc-row-item " href="/front/bidFinance/currentPoolDetails?id=11984">
                <h4 class="hbsc-name">立管家  A</h4>
                <ul class="hbsc-info clearfix">
                  <li class="col-4">
                    <span class="text-pink fs34">
                        10.5<em class="fs20">%</em>
                    </span>
                    <p>
                      <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                    </p>
                  </li>
                  <li class="col-4 text-center"><span class="fs24">3<em class="fs18">个月</em></span><p>借款期限</p></li>
                  <li class="col-4 text-center"><span class="fs18">0<em>元</em></span><p>可投金额</p></li>
                </ul>

                <div class="btn-schedu btn-schedu-plan btn-schedu-gray"><i></i><span>已结束</span></div>

              </a>

              <a class="hbsc-row-item  m-r-0 " href="/front/bidFinance/currentPoolDetails?id=11940">
                <h4 class="hbsc-name">立管家  B</h4>
                <ul class="hbsc-info clearfix">
                  <li class="col-4">
                    <span class="text-pink fs34">
                        11.5<em class="fs20">%</em>
                    </span>
                    <p>
                      <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                    </p>
                  </li>
                  <li class="col-4 text-center"><span class="fs24">6<em class="fs18">个月</em></span><p>借款期限</p></li>
                  <li class="col-4 text-center"><span class="fs18">0<em>元</em></span><p>可投金额</p></li>
                </ul>

                <div class="btn-schedu btn-schedu-plan btn-schedu-gray"><i></i><span>已结束</span></div>

              </a>

          </div>
        </div>

        <!-- 广告区域图片 -->
        <a class="home-advs-banner" href="/front/activity/index?src=appointRepayment" target="_blank">
          <img src="../assets/images/home_advs_banner.jpg">
        </a>

        <!-- 直投专区 -->
        <div class="home-cards home-card-bids">
          <div class="hbsc-title hbsc-title-bids">
            <span>直投专区</span>
            <i></i>
            <em>期限灵活 快速出借</em>
            <ul class="hbsc-tab hbsc-bids-tab">
              <li class="hbsc-tab-item active" @mouseover="trueBids" ref="san">散标</li>
              <li class="hbsc-tab-item" @mouseover="falseBids" ref="rang">债权转让</li>
            </ul>
            <div class="hbsc-tab-more hbsc-bids-more">
              <a class="tab-item-more" href="/front/invest/investHome" v-show="bids">更多
                <b>&gt;&gt;</b>
              </a>
              <a class="tab-item-more" href="/front/debt/debtHome" v-show="!bids">更多
                <b>&gt;&gt;</b>
              </a>
            </div>
          </div>
          <div class="hcb-items hbsc-bids-item clearfix active" v-show="bids">

            <a class="hcb-item    yearCash hcb-item-six " href="/front/invest/invest?bidId=34489">
              <div class="inner">

                <div class="hcb-name">盈车贷NO.01320180629004</div>
                <div class="hcb-way">等额本息</div>
                <div class="hcb-rate">
                  <span class="text-orange">12.50
                    <em class="fs18">%</em>
                  </span>

                  <p>
                    <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                  </p>
                </div>
                <div class="hcp-progress">
                  <div class="hcp-progress-bar" style="width:89%"></div>
                  <div class="hcp-progress-text">89%</div>
                </div>
                <div class="hcb-info clearfix">
                  <div class="pull-left">
                    <span>借款期限：12个月</span>
                  </div>
                  <div class="pull-right">
                    <span>可投金额：12,075元</span>
                  </div>
                </div>

                <div class="btn-schedu btn-schedu-bid">
                  <i></i>
                  <span>立即投标</span>
                </div>

              </div>
            </a>

            <a class="hcb-item    yearCash hcb-item-six " href="/front/invest/invest?bidId=34468">
              <div class="inner">

                <div class="hcb-name">盈车贷NO.00320180628001</div>
                <div class="hcb-way">先息后本</div>
                <div class="hcb-rate">
                  <span class="text-orange">11.00
                    <em class="fs18">%</em>
                  </span>

                  <p>
                    <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                  </p>
                </div>
                <div class="hcp-progress">
                  <div class="hcp-progress-bar" style="width:85%"></div>
                  <div class="hcp-progress-text">85%</div>
                </div>
                <div class="hcb-info clearfix">
                  <div class="pull-left">
                    <span>借款期限：6个月</span>
                  </div>
                  <div class="pull-right">
                    <span>可投金额：29,323元</span>
                  </div>
                </div>

                <div class="btn-schedu btn-schedu-bid">
                  <i></i>
                  <span>立即投标</span>
                </div>

              </div>
            </a>

            <a class="hcb-item    yearCash hcb-item-six " href="/front/invest/invest?bidId=34472">
              <div class="inner">

                <div class="hcb-name">盈车贷NO.02820180702001</div>
                <div class="hcb-way">等额本息</div>
                <div class="hcb-rate">
                  <span class="text-orange">12.50
                    <em class="fs18">%</em>
                  </span>

                  <p>
                    <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                  </p>
                </div>
                <div class="hcp-progress">
                  <div class="hcp-progress-bar" style="width:52%"></div>
                  <div class="hcp-progress-text">52%</div>
                </div>
                <div class="hcb-info clearfix">
                  <div class="pull-left">
                    <span>借款期限：12个月</span>
                  </div>
                  <div class="pull-right">
                    <span>可投金额：15,722元</span>
                  </div>
                </div>

                <div class="btn-schedu btn-schedu-bid">
                  <i></i>
                  <span>立即投标</span>
                </div>

              </div>
            </a>

            <a class="hcb-item m-r-0  " href="/front/invest/invest?bidId=34510">
              <div class="inner">

                <div class="hcb-name">【个人消费】NO.201807080001</div>
                <div class="hcb-way">等额本息</div>
                <div class="hcb-rate">
                  <span class="text-orange">10.50
                    <em class="fs18">%</em>
                  </span>

                  <p>
                    <label class="hint hint-top" data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。">历史年化</label>
                  </p>
                </div>
                <div class="hcp-progress">
                  <div class="hcp-progress-bar" style="width:36%"></div>
                  <div class="hcp-progress-text">36%</div>
                </div>
                <div class="hcb-info clearfix">
                  <div class="pull-left">
                    <span>借款期限：3个月</span>
                  </div>
                  <div class="pull-right">
                    <span>可投金额：3,906元</span>
                  </div>
                </div>

                <div class="btn-schedu btn-schedu-bid">
                  <i></i>
                  <span>立即投标</span>
                </div>

              </div>
            </a>

          </div>
          <div id="hbTransfers" class="home-cards hbsc-bids-item home-debts" v-show="!bids">
            <div class="hd-items">
              <div class="hd-header">
                <span class="hd-row hd-name">借款标题</span>
                <span class="hd-row hd-rate">转让收益</span>
                <span class="hd-row hd-amount">转让价格</span>
                <span class="hd-row hd-term">剩余期限</span>
                <span class="hd-row hd-schedu">投标进度</span>
              </div>
              <div class="hd-groups">

                <a class="hd-item clearfix" href="/front/debt/debtDetails?debtId=46346">
                  <h5 class="hd-row hd-name">
                    <span href="/front/debt/debtDetails?debtId=46346">盈车贷NO.03120180122001债权转让</span>
                  </h5>
                  <div class="hd-row hb-rate text-orange">
                    <div class="hd-rate-center">
                      <span class="hd-rate-main">15.0
                        <em>%</em>
                      </span>
                    </div>
                  </div>
                  <div class="hd-row hd-amount">
                    <em>8,212元</em>
                  </div>
                  <div class="hd-row hd-term">
                    <em>18</em>个月
                    <em>13</em>天
                  </div>

                  <div class="hd-row hd-schedu" data-value="0.0">
                    <div class="hd-schedu-inner">
                      <div class="hd-schedu-wrap">
                        <span style="width: 0.0%"></span>
                      </div>
                      <span class="hd-buy">可购金额：8,212元</span>
                    </div>
                  </div>
                  <span class="hd-row hd-bidding" href="/front/debt/debtDetails?debtId=46346">
                    <i></i>
                    <span>转让中</span>
                  </span>

                </a>

                <a class="hd-item clearfix" href="/front/debt/debtDetails?debtId=46345">
                  <h5 class="hd-row hd-name">
                    <span href="/front/debt/debtDetails?debtId=46345">盈车贷NO.01320180123001债权转让</span>
                  </h5>
                  <div class="hd-row hb-rate text-orange">
                    <div class="hd-rate-center">
                      <span class="hd-rate-main">15.0
                        <em>%</em>
                      </span>
                    </div>
                  </div>
                  <div class="hd-row hd-amount">
                    <em>12,314元</em>
                  </div>
                  <div class="hd-row hd-term">
                    <em>18</em>个月
                    <em>14</em>天
                  </div>

                  <div class="hd-row hd-schedu" data-value="0.0">
                    <div class="hd-schedu-inner">
                      <div class="hd-schedu-wrap">
                        <span style="width: 0.0%"></span>
                      </div>
                      <span class="hd-buy">可购金额：12,314元</span>
                    </div>
                  </div>
                  <span class="hd-row hd-bidding" href="/front/debt/debtDetails?debtId=46345">
                    <i></i>
                    <span>转让中</span>
                  </span>

                </a>

                <a class="hd-item clearfix" href="/front/debt/debtDetails?debtId=45259">
                  <h5 class="hd-row hd-name">
                    <span href="/front/debt/debtDetails?debtId=45259">盈车贷NO.01920180302005债权转让</span>
                  </h5>
                  <div class="hd-row hb-rate text-orange">
                    <div class="hd-rate-center">
                      <span class="hd-rate-main">14.0
                        <em>%</em>
                      </span>
                    </div>
                  </div>
                  <div class="hd-row hd-amount">
                    <em>26,773元</em>
                  </div>
                  <div class="hd-row hd-term">
                    <em>20</em>个月
                    <em>22</em>天
                  </div>

                  <div class="hd-row hd-schedu" data-value="0.0">
                    <div class="hd-schedu-inner">
                      <div class="hd-schedu-wrap">
                        <span style="width: 0.0%"></span>
                      </div>
                      <span class="hd-buy">可购金额：26,773元</span>
                    </div>
                  </div>
                  <span class="hd-row hd-bidding" href="/front/debt/debtDetails?debtId=45259">
                    <i></i>
                    <span>转让中</span>
                  </span>

                </a>

                <a class="hd-item clearfix" href="/front/debt/debtDetails?debtId=45256">
                  <h5 class="hd-row hd-name">
                    <span href="/front/debt/debtDetails?debtId=45256">盈车贷NO.00620180329002债权转让</span>
                  </h5>
                  <div class="hd-row hb-rate text-orange">
                    <div class="hd-rate-center">
                      <span class="hd-rate-main">14.0
                        <em>%</em>
                      </span>
                    </div>
                  </div>
                  <div class="hd-row hd-amount">
                    <em>17,835元</em>
                  </div>
                  <div class="hd-row hd-term">
                    <em>20</em>个月
                    <em>24</em>天
                  </div>

                  <div class="hd-row hd-schedu" data-value="0.0">
                    <div class="hd-schedu-inner">
                      <div class="hd-schedu-wrap">
                        <span style="width: 0.0%"></span>
                      </div>
                      <span class="hd-buy">可购金额：17,835元</span>
                    </div>
                  </div>
                  <span class="hd-row hd-bidding" href="/front/debt/debtDetails?debtId=45256">
                    <i></i>
                    <span>转让中</span>
                  </span>

                </a>

              </div>
            </div>
          </div>
        </div>

        <!-- 官方公告 -->
        <div class="home-news clearfix">
          <div class="home-message">
            <div class="hn-top clearfix">
              <ul class="hn-tabs">
                <li class="hn-tab-item active" @mouseover="changeNoticeIndex" data-index='0'>官方公告</li>
                <li class="hn-tab-item" @mouseover="changeNoticeIndex" data-index='1'>立业动态</li>
                <li class="hn-tab-item" @mouseover="changeNoticeIndex" data-index='2'>互金快讯</li>
              </ul>
              <div class="hn-mores">
                <a class="hn-more-item active" href="/news/gonggao/" v-show="noticeIndex==0">更多&gt;</a>
                <a class="hn-more-item" href="/news/meiti/" v-show="noticeIndex==1">更多&gt;</a>
                <a class="hn-more-item" href="/news/wangdai/" v-show="noticeIndex==2">更多&gt;</a>
              </div>
            </div>
            <div class="hn-cards">
              <div class="hn-card-item" v-show="noticeIndex==0">

                <div class="hn-desc">

                  <img src="https://dn-liyedai.qbox.me/FsvlK6tzEA8yYdcfi4jnMFopedEr?imageView2/1/w/246/h/171">

                </div>
                <div>
                  <div class="hn-item p-t-5">
                    <span class="hn-date">2018-07-06</span>
                    <a title="关于江西银行系统升级优化通知" target="_blank" href="/news/gonggao/8967.html">关于江西银行系统升级优化通知</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-07-04</span>
                    <a title="关于立业贷债权转让规则优化公告" target="_blank" href="/news/gonggao/8966.html">关于立业贷债权转让规则优化公告</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-07-02</span>
                    <a title="决胜世界杯，赢千元大奖" target="_blank" href="/news/gonggao/8963.html">决胜世界杯，赢千元大奖</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-06-29</span>
                    <a title="关于部分银行6月29日-6月30日系统升级维护公告" target="_blank" href="/news/gonggao/8962.html">关于部分银行6月29日-6月30日系统升级维护公告</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-06-28</span>
                    <a title="用心创造，专注服务——立业贷运营体系全新升级" target="_blank" href="/news/gonggao/8961.html">用心创造，专注服务——立业贷运营体系全新升级</a>
                  </div>
                </div>
              </div>
              <div class="hn-card-item" v-show="noticeIndex==1">

                <div class="hn-desc">

                  <img src="https://dn-liyedai.qbox.me/Frjf21h3C9CwpickDxkkBbZgvAyi?imageView2/1/w/246/h/171">

                </div>
                <div>
                  <div class="hn-item p-t-5">
                    <span class="hn-date">2018-06-12</span>
                    <a title="立业贷携手南方日报远赴河源为医院爱心捐赠" target="_blank" href="/news/meiti/8951.html">立业贷携手南方日报远赴河源为医院爱心捐赠</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-05-30</span>
                    <a title="立业贷受邀出席车贷联盟汽车金融生态峰会" target="_blank" href="/news/meiti/8946.html">立业贷受邀出席车贷联盟汽车金融生态峰会</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-05-21</span>
                    <a title="立业贷出席广东互联网金融协会第二届第二次会员大会" target="_blank" href="/news/meiti/8940.html">立业贷出席广东互联网金融协会第二届第二次会员大会</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-05-08</span>
                    <a title="相约立夏，共话发展——立业贷首届投资人交流会圆满落幕" target="_blank" href="/news/meiti/8927.html">相约立夏，共话发展——立业贷首届投资人交流会圆满落.</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-04-23</span>
                    <a title="互金正能量·我们在路上——立业贷举办深互金党委联建活动" target="_blank" href="/news/meiti/8917.html">互金正能量·我们在路上——立业贷举办深互金党委联建..</a>
                  </div>
                </div>
              </div>
              <div class="hn-card-item" v-show="noticeIndex==2">

                <div class="hn-desc">
                  <img src="//dn-liyedai.qbox.me/Fh6_kTVuhb9IUeZF-Vsux0Z0uZBc?imageView2/1/w/246/h/171">
                </div>
                <div>
                  <div class="hn-item p-t-5">
                    <span class="hn-date">2018-04-16</span>
                    <a title="备案延期，P2P平台是喜是忧" target="_blank" href="/news/licaizhishi/8913.html">备案延期，P2P平台是喜是忧</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-04-09</span>
                    <a title="距监管大限已不足百日 这些地区备案要延期？" target="_blank" href="/news/licaizhishi/8907.html">距监管大限已不足百日 这些地区备案要延期？</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-04-02</span>
                    <a title="规模不应成P2P备案的选择标准 别信“大而不死”" target="_blank" href="/news/licaizhishi/8902.html">规模不应成P2P备案的选择标准 别信“大而不死”</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-03-26</span>
                    <a title="最后三个月，什么样的P2P平台可以拿到备案？" target="_blank" href="/news/licaizhishi/8886.html">最后三个月，什么样的P2P平台可以拿到备案？</a>
                  </div>

                  <div class="hn-item ">
                    <span class="hn-date">2018-03-19</span>
                    <a title="P2P平台整改困难超各方预期 备案大限或推迟" target="_blank" href="/news/licaizhishi/8879.html">P2P平台整改困难超各方预期 备案大限或推迟</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 投资排行版 -->
          <div class="hb-banner" id="bannerRankInvest">
            <div class="hb-banner-info">单月出借额前50用户排行</div>
            <div class="hb-banner-title">
              <span class="first">名次</span>
              <span class="second">用户</span>
              <span class="third">出借额</span>
            </div>
            <div class="inner-box">
              <ul class="rank-home-inner" id="investRankHome" ref="loan">
                  <li class="item">
                    <span class="orange">1</span>
                    <span>135*****465</span>
                    <span>￥3,770,000</span>
                  </li>
                  <li class="item">
                    <span class="orange">2</span>
                    <span>137*****288</span>
                    <span>￥158,050</span>
                  </li>
                  <li class="item">
                    <span class="orange">3</span>
                    <span>159*****025</span>
                    <span>￥124,605</span>
                  </li>
                  <li class="item">
                    <span>4</span>
                    <span>136*****877</span>
                    <span>￥109,121</span>
                  </li>
                  <li class="item">
                    <span>5</span>
                    <span>130*****992</span>
                    <span>￥101,000</span>
                  </li>
                  <li class="item">
                    <span>6</span>
                    <span>157*****526</span>
                    <span>￥100,000</span>
                  </li>
                  <li class="item">
                    <span>7</span>
                    <span>186*****516</span>
                    <span>￥91,479</span>
                  </li>
                  <li class="item">
                    <span>8</span>
                    <span>137*****865</span>
                    <span>￥80,287</span>
                  </li>
                  <li class="item">
                    <span>9</span>
                    <span>137*****271</span>
                    <span>￥80,000</span>
                  </li>
                  <li class="item">
                    <span>10</span>
                    <span>153*****612</span>
                    <span>￥74,929</span>
                  </li>
                  <li class="item">
                    <span>11</span>
                    <span>135*****729</span>
                    <span>￥73,751</span>
                  </li>
                  <li class="item">
                    <span>12</span>
                    <span>137*****408</span>
                    <span>￥70,877</span>
                  </li>
                  <li class="item">
                    <span>13</span>
                    <span>138*****730</span>
                    <span>￥68,000</span>
                  </li>
                  <li class="item">
                    <span>14</span>
                    <span>135*****392</span>
                    <span>￥60,000</span>
                  </li>
                  <li class="item">
                    <span>15</span>
                    <span>136*****702</span>
                    <span>￥60,000</span>
                  </li>
                  <li class="item">
                    <span>16</span>
                    <span>135*****989</span>
                    <span>￥57,000</span>
                  </li>
                  <li class="item">
                    <span>17</span>
                    <span>135*****521</span>
                    <span>￥51,160</span>
                  </li>
                  <li class="item">
                    <span>18</span>
                    <span>185*****201</span>
                    <span>￥50,375</span>
                  </li>
                  <li class="item">
                    <span>19</span>
                    <span>133*****973</span>
                    <span>￥50,000</span>
                  </li>
                  <li class="item">
                    <span>20</span>
                    <span>136*****788</span>
                    <span>￥50,000</span>
                  </li>
                  <li class="item">
                    <span>21</span>
                    <span>136*****591</span>
                    <span>￥50,000</span>
                  </li>
                  <li class="item">
                    <span>22</span>
                    <span>181*****830</span>
                    <span>￥49,083</span>
                  </li>
                  <li class="item">
                    <span>23</span>
                    <span>137*****310</span>
                    <span>￥44,570</span>
                  </li>
                  <li class="item">
                    <span>24</span>
                    <span>137*****066</span>
                    <span>￥43,532</span>
                  </li>
                  <li class="item">
                    <span>25</span>
                    <span>189*****292</span>
                    <span>￥43,367</span>
                  </li>
                  <li class="item">
                    <span>26</span>
                    <span>134*****163</span>
                    <span>￥42,900</span>
                  </li>
                  <li class="item">
                    <span>27</span>
                    <span>135*****399</span>
                    <span>￥42,818</span>
                  </li>
                  <li class="item">
                    <span>28</span>
                    <span>130*****299</span>
                    <span>￥41,000</span>
                  </li>
                  <li class="item">
                    <span>29</span>
                    <span>134*****258</span>
                    <span>￥40,376</span>
                  </li>
                  <li class="item">
                    <span>30</span>
                    <span>135*****873</span>
                    <span>￥40,000</span>
                  </li>
                  <li class="item">
                    <span>31</span>
                    <span>152*****847</span>
                    <span>￥40,000</span>
                  </li>
                  <li class="item">
                    <span>32</span>
                    <span>138*****523</span>
                    <span>￥37,162</span>
                  </li>
                  <li class="item">
                    <span>33</span>
                    <span>176*****413</span>
                    <span>￥35,000</span>
                  </li>
                  <li class="item">
                    <span>34</span>
                    <span>158*****281</span>
                    <span>￥35,000</span>
                  </li>
                  <li class="item">
                    <span>35</span>
                    <span>136*****356</span>
                    <span>￥33,994</span>
                  </li>
                  <li class="item">
                    <span>36</span>
                    <span>138*****816</span>
                    <span>￥33,655</span>
                  </li>
                  <li class="item">
                    <span>37</span>
                    <span>158*****232</span>
                    <span>￥33,000</span>
                  </li>
                  <li class="item">
                    <span>38</span>
                    <span>135*****728</span>
                    <span>￥32,762</span>
                  </li>
                  <li class="item">
                    <span>39</span>
                    <span>150*****997</span>
                    <span>￥32,300</span>
                  </li>
                  <li class="item">
                    <span>40</span>
                    <span>135*****683</span>
                    <span>￥32,188</span>
                  </li>
                  <li class="item">
                    <span>41</span>
                    <span>152*****222</span>
                    <span>￥31,444</span>
                  </li>
                  <li class="item">
                    <span>42</span>
                    <span>138*****382</span>
                    <span>￥31,404</span>
                  </li>
                  <li class="item">
                    <span>43</span>
                    <span>139*****388</span>
                    <span>￥31,000</span>
                  </li>
                  <li class="item">
                    <span>44</span>
                    <span>136*****876</span>
                    <span>￥30,563</span>
                  </li>
                  <li class="item">
                    <span>45</span>
                    <span>139*****459</span>
                    <span>￥30,295</span>
                  </li>
                  <li class="item">
                    <span>46</span>
                    <span>138*****315</span>
                    <span>￥30,050</span>
                  </li>
                  <li class="item">
                    <span>47</span>
                    <span>150*****277</span>
                    <span>￥30,000</span>
                  </li>
                  <li class="item">
                    <span>48</span>
                    <span>138*****799</span>
                    <span>￥30,000</span>
                  </li>
                  <li class="item">
                    <span>49</span>
                    <span>135*****066</span>
                    <span>￥30,000</span>
                  </li>
                  <li class="item">
                    <span>50</span>
                    <span>186*****660</span>
                    <span>￥30,000</span>
                  </li>
                  <li class="item">
                    <span class="orange">1</span>
                    <span>135*****465</span>
                    <span>￥3,770,000</span>
                  </li>
                  <li class="item">
                    <span class="orange">2</span>
                    <span>137*****288</span>
                    <span>￥158,050</span>
                  </li>
                  <li class="item">
                    <span class="orange">3</span>
                    <span>159*****025</span>
                    <span>￥124,605</span>
                  </li>
                  <li class="item">
                    <span>4</span>
                    <span>136*****877</span>
                    <span>￥109,121</span>
                  </li>
                  <li class="item">
                    <span>5</span>
                    <span>130*****992</span>
                    <span>￥101,000</span>
                  </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- 合作伙伴 -->
        <dl class="home-partner clearfix">
          <dt class="hpar-head">合作伙伴</dt>
          <dd class="hpar-items clearfix">

            <a href="javascript:void(0);" title="腾邦国际">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FqJc2ehLxlu3Y4a-WAocy7q0i4GQ?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="美的">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FnGJJyO1JgHpGCTT2amSc0GM4OZY?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="江西银行">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FuPGDPVKvc5nfJeDlyI-etD3v3Ur?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="广东省互联网金融协会">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FvCnRw5OFhXa1997M1-Z1hCXEtOR?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="深圳市互联网金融协会">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/Fm18n0_mC8O-lxkUcS3H1IqNnwru?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="网贷天眼">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FtUsnpsOhzv6HjnuirE_t3k0PCJa?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="法大大">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FkBTgHWYDmrMQMjKyQLCij2qIz9q?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="前海征信">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FlI07185SWhUMBdHdOIVlWA_l5ZG?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="同盾科技">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/Fo1Qd1nqViHzZbSebwjlwTpRNQpB?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="金杜律师事务所">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FlY-CDnvlX2rPQY3aaMHx_Zs5Cwm?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="网贷之家">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FsnXNuGUg-0ovm8NZipCpEEocr1_?imageView2/1/w/191/h/54">
            </a>

            <a href="javascript:void(0);" title="万商天勤律师事务所">
              <i></i>
              <img src="https://dn-liyedai.qbox.me/FlutrVHlAsR8X9vCDAbSOobOOzOL?imageView2/1/w/191/h/54">
            </a>

          </dd>
        </dl>
        <!-- 友情链接 -->
        <div class="home-friends active">
          <span>友情链接：</span>

          <a href="http://www.liyedai.cn/front/invest/investHome?type=1" target="_blank" title="P2P车贷">P2P车贷</a>

          <a href="https://www.liyedai.cn/news/licaizhishi/" target="_blank" title="P2P理财知识">P2P理财知识</a>

          <a href="https://www.imoney888.com/ " target="_blank" title="理财投资">理财投资</a>

          <a href="http://www.ylfcf.com/" target="_blank" title="P2P理财">P2P理财</a>

          <a href="http://money.cardbaobao.com/" target="_blank" title="金融服务平台">金融服务平台</a>

          <a href="http://www.huobaole.com/" target="_blank" title="文交所头条">文交所头条</a>

          <a href="http://www.wangdaijiamen.com/" target="_blank" title="网贷家门">网贷家门</a>

          <a href="http://www.p2pdh.com/" target="_blank" title="网贷导航">网贷导航</a>

          <a href="http://www.wdzj.com/dangan/lyd/" target="_blank" title="网贷之家">网贷之家</a>

          <a href="http://www.7edown.com " target="_blank" title="创e下载">创e下载</a>

          <a href="http://www.vipcn.com" target="_blank" title="清风绿色软件下载">清风绿色软件下载</a>

          <a href="http://www.yqdown.com" target="_blank" title="友情下载">友情下载</a>

          <a href="http://www.hackhome.com" target="_blank" title="网侠手机站">网侠手机站</a>

          <a href="http://www.downxia.com" target="_blank" title="当下软件园">当下软件园</a>

          <a href="http://www.jz5u.com" target="_blank" title="JZ5U绿色下载站">JZ5U绿色下载站</a>

          <a href="http://www.greenxf.com" target="_blank" title="绿色先锋下载">绿色先锋下载</a>

          <a href="http://www.xdowns.com/" target="_blank" title="绿色软件联盟">绿色软件联盟</a>

          <a href="http://www.arpun.com" target="_blank" title="ARP联盟">ARP联盟</a>

          <a href="http://www.downcc.com/" target="_blank" title="绿色软件站">绿色软件站</a>

          <a href="http://www.orsoon.com" target="_blank" title="未来软件园">未来软件园</a>

          <a href="http://sj.zol.com.cn/" target="_blank" title="ZOL手机软件下载">ZOL手机软件下载</a>

          <a href="http://www.99down.com/" target="_blank" title="99软件站">99软件站</a>

          <a href="http://www.duote.com/" target="_blank" title="2345软件大全">2345软件大全</a>

          <a href="http://www.anfone.net/" target="_blank" title="安丰网">安丰网</a>

          <a href="http://www.9553.com" target="_blank" title="9553下载">9553下载</a>

          <a href="http://www.bkill.com/" target="_blank" title="比克尔软件">比克尔软件</a>

          <a href="https://www.liyedai.cn/LiyedaiApp.html" target="_blank" title="合作应用市场">合作应用市场</a>

          <a href="http://www.xpgod.com/" target="_blank" title="软件下载天堂">软件下载天堂</a>

          <span @click="showTab" class="home-friends-show" ref="tab">
            <em>展开</em>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      imgArr: [
        {
          img: 'https://dn-liyedai.qbox.me/FlqA6nyxGR6fieLBnMId3FOtBFw8',
          url: '#/'
        },
        {
          img: 'https://dn-liyedai.qbox.me/Fh4NnH5gfBTnKhOm3KnWkd2N8c3j',
          url: '#/'
        },
        {
          img: 'https://dn-liyedai.qbox.me/FvQrTLD_Em6b6e6YCP44dsRsRIOl',
          url: '#/'
        }

      ],
      lalla: 123,
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          delay: 3000,
          autoplayDisableOnInteraction: false
        },
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        loop: true

      },
      cards: true,
      bids: true,
      noticeIndex: 0,
      isUnfold: false,
      lateivtTimer: null,
      noticeTiemr: null,
      loanTimer: null
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.lateivt()
    this.notice()
    this.loan('loan')
    // this.swiperOption.pagination.$el.classList.add('swiper-pagination-bullet')
  },
  destroyed () {
    clearInterval(this.lateivtTimer)
    clearInterval(this.noticeTiemr)
    clearInterval(this.loanTimer)
  },
  methods: {
    // vuex传值
    login () {
      this.$store.commit('updateLoginRegist', 'Login')
    },
    regist () {
      this.$store.commit('updateLoginRegist', 'Regist')
    },

    // 消息滚动展示
    lateivt () {
      var num = 0
      this.lateivtTimer = setInterval(() => {
        num = num < this.$refs.lateivt.children.length - 1 ? num + 1 : 0
        this.$refs.lateivt.style.transition = 'all 0.7s'
        if (this.$refs.lateivt.style.top === -((this.$refs.lateivt.children.length - 1) * this.$refs.lateivt.children[0].offsetHeight) + 'px') {
          this.$refs.lateivt.style.transition = 'none'
          this.$refs.lateivt.style.top = 0 + 'px'
        } else {
          this.$refs.lateivt.style.top = -(num * this.$refs.lateivt.children[0].offsetHeight) + 'px'
        }
      }, 3000)
    },
    notice () {
      var num = 0
      this.noticeTiemr = setInterval(() => {
        num = num < this.$refs.notice.children.length - 1 ? num + 1 : 0

        this.$refs.notice.style.transition = 'all 0.7s'
        if (this.$refs.notice.style.top === -((this.$refs.notice.children.length - 1) * this.$refs.notice.children[0].offsetHeight) + 'px') {
          this.$refs.notice.style.transition = 'none'
          this.$refs.notice.style.top = 0 + 'px'
        } else {
          this.$refs.notice.style.top = -(num * this.$refs.notice.children[0].offsetHeight) + 'px'
        }
      }, 2000)
    },
    // 出借消息滚动
    loan (obj) {
      var num = 0
      this.loanTimer = setInterval(() => {
        num++
        if (num > 50) {
          this.$refs.loan.style.transition = 'none'
          num = 0
        } else {
          this.$refs.loan.style.transition = 'all 0.7s'
        }
        this.$refs.loan.style.top = -num * 30 + 'px'
      }, 2000)
    },
    // 小立有约/立管家切换
    trueCards (e) {
      this.cards = true
      // 删除立管家active class
      this.$refs.steward.classList.remove('active')
      // 添加小立有约active class
      this.$refs.appoint.classList.add('active')
    },
    falseCards (e) {
      this.cards = false
      // 添加立管家active class
      this.$refs.steward.classList.add('active')
      // 删除小立有约active class
      this.$refs.appoint.classList.remove('active')
    },

    // 散标/债权转让切换
    trueBids (e) {
      this.bids = true
      // 添加散标active class
      this.$refs.san.classList.add('active')
      // 删除债权active class
      this.$refs.rang.classList.remove('active')
    },
    falseBids (e) {
      this.bids = false
      // 删除散标active class
      this.$refs.san.classList.remove('active')
      // 添加债权active class
      this.$refs.rang.classList.add('active')
    },
    // 公告选项卡
    changeNoticeIndex (e) {
      var card = document.getElementsByClassName('hn-tab-item')
      card[this.noticeIndex].classList.remove('active')
      this.noticeIndex = e.target.dataset.index
      card[this.noticeIndex].classList.add('active')
    },
    // 友情链接
    showTab (e) {
      if (!this.isUnfold) {
        this.isUnfold = true
        this.$refs.tab.children[1].style.backgroundPosition = '0 0'
        this.$refs.tab.children[0].textContent = '收起'
        this.$refs.tab.parentNode.classList.remove('active')
      } else {
        this.isUnfold = false
        this.$refs.tab.children[1].style.backgroundPosition = '0 -9px'
        this.$refs.tab.children[0].textContent = '展开'
        this.$refs.tab.parentNode.classList.add('active')
      }
    }
  }
}

</script>

<style lang='scss' scoped>
p {
    margin: 0 0 10px;
}
a{
  text-decoration: none;
  color: #333;
}
em, i {
    font-style: normal;
    font-weight: 400;
}
.width-1200{
  width: 1200px;
  margin: 0 auto;
}
.bg-f5{
  background-color: #f5f5f5;
}
.fs18 {
  font-size: 18px;
}
.fs24 {
  font-size: 24px;
}
.fs34 {
    font-size: 34px;
}
// 按钮移入变色
.btn-schedu {
    position: relative;
    display: inline-block;
    border: 1px solid #ff850e;
    width: 143px;
    height: 35px;
    line-height: 35px;
    border-radius: 20px;
    font-size: 15px;
    color: #ff850e;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    i {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      height: 100%;
      width: 0;
      background: #ff850e;
      transition: all ease .2s;
    }
    span{
      position: relative;
      z-index: 1;
    }
}
.hbsc-row-item:hover , .relative-top:hover{
  top: -4px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.349);
  border-radius: 2px;
  a>i {
    width: 144px;
  }
  .btn-schedu{
    border: 1px solid transparent;
  }
  .btn-schedu>i {
    width: 100%;
  }
  .btn-schedu>span {
    color: #fff;
  }
}

// 轮播图
.swiper-box{
  position: relative;
  .swiper-container{
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    height: 406px;
  }
  .swiper-slider{
    height: 406px;
    a{
      display: block;
      width: 100%;
      height:100%;
      background-size: 100% 100%;
      background-position: 50% 50%;
    }
  }

  .report-inner {
    position: absolute;
    top: 7px;
    left: 50%;
    margin-left: 304px;
    width: 314px;
    height: 397px;
    background-image: url(../assets/images/banner_float.png);
    background-size: 100% 100%;
    // background-size: cover;
    text-align: center;
    z-index: 100;
    .report-intro, .report-user .btn-report {
      background-image: url(../assets/images/icon_feature.png);
        background-repeat: no-repeat;
    }
    .report-day {
      margin-left: 72px;
      padding: 44px 0 26px;
      line-height: 1;
      font-size: 18px;
      color: #7d7d7d;
      text-align: left;
    }
    .report-rate{
      padding: 36px 0 27px;
      em {
        display: block;
        line-height: 1;
        color: #ff7d12;
        font-weight: 700;
        font-size: 36px;
      }
      span {
          padding-top: 28px;
          display: block;
          line-height: 1;
          font-size: 15px;
          color: #a4a4a4;
      }
    }
    .report-user{
      padding-bottom: 10px;
      a {
          color: #ff7d12;
          font-size: 13px;
          text-decoration: none;
      }
      .btn-report {
        margin-bottom: 19px;
        display: inline-block;
        width: 208px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        font-size: 17px;
        text-align: center;
        background-position: -230px 0;
      }
      span {
        display: block;
        line-height: 1;
        color: #9d9d9d;
        font-size: 13px;
      }
    }
    .report-intro {
      text-decoration: none;
      display: block;
      margin-left: 14px;
      width: 284px;
      height: 50px;
      line-height: 50px;
      font-size: 17px;
      color: #fff;
      text-align: center;
      background-position: -438px 0;
      letter-spacing: 1px;
    }
  }
  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    display: inline-block;
    border-radius: 50%;
    background: #000;
    opacity: 0.2;
  }
  .swiper-pagination-bullet-active{
    width: 22px;
    background-color: red;
  }
}
// 主体部分
.container {
  // width: 1200px;
  // margin: 0 auto;
  .marquee-box{
    @extend .width-1200;
    padding: 10px 0;
    li{
      list-style: none;
    }
    display: flex;
    justify-content: space-between;
    .icon-lateivt {
      margin: 0px 8px 0 0;
      float: left;
      width: 19px;
      height: 19px;
      background-position: -52px 0;
    }
    .icon-notice {
      display: inline-block;
      margin: 0 7px 0 3px;
      height: 19px;
      width: 19px;
      background-position: -33px 0;
      vertical-align: middle;
    }
    .icon-home {
      background-image: url(../assets/images/icon_home.png);
      background-repeat: no-repeat;
    }
    .latest-notice,.latest-invest {
      height: 32px;
      display: flex;
      align-items: center;
      line-height: 32px;
      position: relative;
      div{
        position: relative;
        overflow: hidden;
      }
      .notice-box{
        width: 328px;
        height: 32px;
      }
      .invest-box{
        width: 558px;
        height: 32px;
      }
      ul{
        top: 0;
        left: 0;
        position: absolute;
        overflow: hidden;
        font-size: 14px;
        transition: all 0.6s;
        a{
          text-decoration: none;
          margin: 0 20px 0 0;
          color: #4d4d4d;
        }
      }
      a.notice-more {
        color: #666;
        font-size: 12px;
        vertical-align: middle;
        text-decoration: none;
      }
      .no-transition{
        transition: none;
      }
      li{
          height: 32px;
          line-height: 32px;
          color: #4d4d4d;
          width: 558px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
    }
  }
  .static-wrap {
    @extend .width-1200;
    padding: 16px 0 23px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      width: 1130px;
      list-style: none;
      li {
        position: relative;
        width: 25%;
        text-align: center;
        p {
          margin-bottom: 18px;
          line-height: 1;
          color: #8e8e8e;
          font-size: 15px;
        }
        em {
          display: block;
          line-height: 1;
          font-size: 22px;
          font-weight: 700;
          color: #f55;
        }
      }
    }
    .more {
      float: right;
      font-size: 13px;
      color: #727272;
    }
    .p-t-19 {
      padding-top: 19px;
    }
  }
  .feature-wrap {
    @extend .width-1200;
    padding: 30px 0 25px;
    a {
      float: left;
      width: 25%;
      .text{
        h3 {
          padding: 6px 0 10px;
          font-size: 17px;
          font-weight: 700;
          color: #ff7d12;
        }
      }
      p {
        font-size: 14px;
        color: #8e8e8e;
      }
      i {
        margin-left: 40px;
        margin-right: 12px;
        float: left;
        width: 58px;
        height: 56px;
        background-image: url(../assets/images/icon_message.png);
        background-repeat: no-repeat;
        transition: all .4s ease;
        position: relative;
        top: 0;
        left: 0;
      }
      i:hover{
        top: -10px;
      }
      .icon-bank {
        background-position: -58px 0;
      }
      .icon-contra {
          background-position: -116px 0;
      }
      .icon-secur {
          background-position: -174px 0;
      }
      .icon-strong {
          background-position: 0 0;
      }
    }
  }
  // 新手专区
  .hbsc-box{
    @extend .width-1200;
    .hbsc-title {
      padding: 36px 0 30px;
      span {
        display: inline-block;
        font-size: 22px;
        color: #434343;
        vertical-align: middle;
      }
      em {
        display: inline-block;
        font-size: 14px;
        color: #727272;
        vertical-align: middle;
      }
      i {
        margin: 0 12px;
        display: inline-block;
        width: 1px;
        height: 16px;
        background-color: #ff7d12;
        vertical-align: middle;
      }
      .hbsc-more {
        text-decoration: none;
        margin-top: 3px;
        float: right;
        color: #727272;
        font-size: 14px;
      }
    }
    .home-cards{
      display: flex;
      justify-content: space-between;
      // 两侧图片
      .hbsc-newsapp a, .hbsc-newsphoto a {
        display: block;
        position: relative;
        text-decoration: none;
        top: 0;
        left: 0;
        transition: all 0.3s;
      }
      .hbsc-newsapp a:hover, .hbsc-newsphoto a:hover{
        top: -4px;
      }
      .hbsc-newsphoto{
        img {
          width: 360px;
          height: 222px;
        }
      }
      .hbsc-newsapp{
        img {
          width: 240px;
          height: 222px;
        }
      }
      img {
          max-width: 100%;
          vertical-align: middle;
      }

      // 中间div
      .hbsc-card-news:hover{
        top: -4px;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.349);
        a>i {
          width: 144px;
        }
      }

      .hbsc-card-news{
        position: relative;
        top: 0;
        left: 0;
        transition: all 0.3s;
        border-radius: 2px;
        .hbsc-row-item {
          width: 567px;
          height: 222px;
          position: relative;
          float: left;
          text-align: center;
          background-color: #fff;
          transition: all .2s ease;
          box-shadow: 0 0 5px 0 #eee;
          .hbsc-name {
              padding: 22px 20px 18px;
              text-align: center;
              margin: 0;
              line-height: 1;
              font-size: 20px;
              color: #ff7d12;
              a {
                display: block;
                padding-bottom: 8px;
                color: #5e5d5d;
                font-size: 18px;
                font-weight: 500;
              }
              p{
                span {
                  text-align: center;
                  font-size: 12px;
                  color: #ff8f8f;
                  background: 0 0;
                  vertical-align: middle;
                }
                i {
                  margin-top: 12px;
                  width: 189px;
                  height: 1px;
                  background-color: #ff9494;
                  vertical-align: middle;
                }
                .pull-left {
                    float: left!important;
                }
                .pull-right {
                  float: right!important;
                }

              }
          }
          .hbsc-info {
            padding: 0 0 24px 44px;
            list-style: none;
            display: flex;
            .col-3 {
              width: 25%;
            }
            .col-4 {
              width: 33.33333333%;
            }
            .col-5 {
              width: 41.66666667%;
            }
            li{
              span {
                position: relative;
                display: block;
                height: 28px;
                line-height: 28px;
                color: #676767;
              }
              .fs30 {
                font-size: 30px;
              }

              .text-orange {
                color: #ff850e!important;
              }
              p {
                margin-bottom: 0;
                padding-top: 15px;
                line-height: 1;
                font-size: 15px;
                color: #7c7c7c;
              }

              .p-l-15 {
                padding-left: 15px;
              }
            }

          }
          .btn-schedu-hand {
            width: 142px;
            height: 33px;
            line-height: 33px;
            border-radius: 6px;
          }
        }
      }

    }
  }
  // 预约专区
  .home-cards{
    @extend .width-1200;
    .hbsc-title {
      padding: 36px 0 30px;
      span {
        display: inline-block;
        font-size: 22px;
        color: #434343;
        vertical-align: middle;
      }
      i {
        margin: 0 12px;
        display: inline-block;
        width: 1px;
        height: 16px;
        background-color: #ff7d12;
        vertical-align: middle;
      }
      em {
        display: inline-block;
        font-size: 14px;
        color: #727272;
        vertical-align: middle;
      }
      .hbsc-tab {
        display: inline-block;
        overflow: hidden;
        margin-left: 24px;
        vertical-align: middle;
        list-style: none;
        .hbsc-tab-item {
          float: left;
          margin: 14px 6px 0 0;
          padding: 0 0 14px;
          width: 64px;
          color: #7c7c7c;
          text-align: center;
          font-size: 14px;
          line-height: 1;
          cursor: pointer;

        }
        .hbsc-tab-item.active {
          border-bottom: 2px solid #ff7d12;
          color: #ff7d12;
        }
      }
      .hbsc-tab-more {
        float: right;
        margin: 5px 17px 0 0;
        .tab-item-more {
          color: #727272;
          font-size: 14px;
        }

      }
    }
    .hbsc-plan-item {
      // display: none;
      display: flex;
      .hbsc-row-item {
        @extend .hbsc-row-item;
        margin-right: 14px;
        position: relative;
        top: 0;
        width: 390px;
        height: 286px;
        text-align: center;
        background-color: #fff;
        transition: all .2s ease;
        box-shadow: 0 0 5px 0 #eee;
        .hbsc-name {
          margin: 0;
          line-height: 1;
          padding: 36px 0 40px;
          font-size: 22px;
          color: #525252;
        }
        .icon-plan {
            position: absolute;
            top: 7px;
            right: 16px;
            width: 22px;
            height: 22px;
            background-position: -73px 0;
        }
        .icon-home {
            background-image: url(../assets/images/icon_home.png);
            background-repeat: no-repeat;
        }
        .hbsc-info {
          padding: 0 16px 50px;
          list-style: none;
          display: flex;
          justify-content: space-around;
          li{
            span {
              position: relative;
              display: block;
              height: 28px;
              line-height: 28px;
              color: #676767;
            }

            .text-pink {
                color: #fc7272!important;
            }
            p {
              margin-bottom: 0;
              line-height: 1;
              font-size: 15px;
              color: #7c7c7c;
              padding-top: 24px;
            }
          }
        }
        .btn-schedu {
          border: 1px solid #fc7272;
          color: #fc7272;
          i{
            background-color: #fc7272;
          }
        }

      }

    }
  }
  // 广告区域图片
  .home-advs-banner {
    @extend .width-1200;
    padding-top: 36px;
    display: block;
    height: 222px;
  }
  .hd-items:hover{
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.349);
    border-radius: 8px;
  }
  // 直投专区
  .hbsc-bids-item{
    display: flex;
    justify-content: space-between;
    .hcb-item {
      @extend .relative-top;
      margin-right: 14px;
      width: 289px;
      height: 400px;
      display: inline-block;
      position: relative;
      top: 0;
      left: 0;
      transition: all 0.3s;
      text-align: center;
      color: #7c7c7c;
      .inner {
          padding: 31px 22px 0;
          text-align: center;
      }
      .hcb-name {
        font-size: 16px;
        color: #676767;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .hcb-way {
        position: relative;
        padding: 28px 0 40px;
        font-size: 15px;
      }

      .text-orange {
          color: #ff850e!important;
      }
      .hcb-rate{
        .text-orange {
            color: #ff850e!important;
            font-size: 34px;
            line-height: 1;
        }
        .hint-top{
          font-size: 15px;
        }
        p {
            margin: 29px 0 42px;
            line-height: 20px;
            font-size: 12px;
        }
      }
      .hcp-progress {
          position: relative;
          margin-left: 4px;
          width: 198px;
          height: 5px;
          background-color: #d6d6d6;
          border-radius: 50px;
          .hcp-progress-bar {
              position: absolute;
              left: 0;
              top: 0;
              height: 5px;
              background: #ff7d12;
              border-radius: 50px;
          }
          .hcp-progress-text {
            position: absolute;
            width: 38px;
            height: 21px;
            top: -7px;
            right: -43px;
            font-size: 14px;
            color: #4c4c4c;
            text-align: right;
        }
      }
      .hcb-info {
          padding: 28px 0 36px;
          line-height: 1;
          color: #8c8c8c;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
      }

    }

    .hd-items {
      .hd-header {
        padding-left: 54px;
        width: 1200px;
        height: 62px;
        line-height: 62px;
        background: #fff;
        font-size: 15px;
        color: #c3c3c3;
        span{
          display: inline-block;
          text-align: center;
        }
        .hd-name {
            width: 240px;
            // text-indent: -4em;
        }
        .hd-rate {
          width: 120px;
        }
        .hd-amount {
            width: 200px;
            text-indent: -1em;
        }
        .hd-term {
            width: 156px;
            text-indent: -2em;
        }
        .hd-schedu {
            width: 240px;
            text-indent: -2em;
        }
      }
      .hd-item {
        display: block;
        padding: 23px 0 23px 54px;
        line-height: 33px;
        background: #fff;
        display: flex;
        font-size: 20px;
        color: #7c7c7c;
        .hd-row{
          text-align: center;
        }
        .hd-name {
            margin: 0;
            width: 240px;
            line-height: 33px;
            font-size: 16px;
            color: #504f4f;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .hb-rate {
            color: #ff850e!important;
            font-size: 20px;
            .hd-rate-center {
                width: 120px;
                .hd-rate-main {
                    font-size: 30px;
                }
            }
        }
        .hd-amount {
            width: 200px;
        }
        .hd-term {
            width: 156px;
        }
        .hd-schedu {
            width: 240px;
            .hd-schedu-inner {
                width: 120px;
                height: 34px;
                line-height: 34px;
                margin-left: auto;
                margin-right: auto;
                .hd-schedu-wrap {
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 5px;
                    background: #ccc;
                    border-radius: 50px;
                    span {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 5px;
                        background: #ff850e;
                        border-radius: 50px;
                    }
                }
                .hd-buy {
                    display: block;
                    font-size: 12px;
                    color: #999;
                    text-align: left;
                    text-align: center;
                }
            }
        }
        .hd-bidding {
            position: relative;
            display: inline-block;
            width: 106px;
            height: 33px;
            line-height: 33px;
            font-size: 15px;
            border: 1px solid #ff850e;
            color: #ff850e;
            border-radius: 4px;
            // box-sizing: border-box;
            i {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 0;
                height: 33px;
                width: 0;
                border-radius: 3px;
                background: #ff850e;
                transition: all ease .2s;
            }
            span {
                position: relative;
                z-index: 1;
            }
        }
      }

        .hd-item:hover{
          .hd-bidding{
            color: #fff;
            border: 1px solid transparent;
            i{
              width: 100%;
            }
          }
        }
    }
  }

  .home-message:hover , .hb-banner:hover , .home-partner:hover , .home-friends:hover {
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.349);
    border-radius: 2px;
  }
  // 官方公告
  .home-news {
    @extend .width-1200;
    margin: 20px auto 0 auto;
    display: flex;
    justify-content: space-between;

  }
    .home-message {
        float: left;
        width: 835px;
        height: 242px;
        background-color: #fff;
    }
    .hn-top {
        position: relative;
        padding: 16px 22px 14px 32px;
        display: flex;
        justify-content: space-between;
        ul{
          list-style: none;
          display: flex;
        }
    }
    .hn-tab-item.active {
        display: block;
        border-bottom: 2px solid #ff9647;
        color: #ff9647;
    }
    .hn-cards {
        padding: 0 22px 0 24px;
    }
    .hn-card-item{
      display: flex;
    }
    .hn-tabs .hn-tab-item {
        margin-right: 25px;
        padding-bottom: 9px;
        width: auto;
        line-height: 1;
        color: #949494;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
    }
    .hn-mores .hn-more-item {
        color: #949494;
        font-size: 14px;
    }
    .hn-desc {
        overflow: hidden;
        color: #666;
        line-height: 24px;
        padding-right: 24px;
        img {
          float: left;
          width: 246px;
          height: 171px;
        }
    }
    .hn-item {
        line-height: 1;
        padding-bottom: 22px;
        width: 510px;
    }

    .p-t-5 {
        padding-top: 5px;
    }
    .hn-date {
        float: right;
        color: #999;
    }
    .hn-date:after{
      content: "";
      display: block;
      clear: both;
    }
    .hn-item a {
        display: inline-block;
        width: 358px;
        color: #515151;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hb-banner {
        margin-left: 14px;
        width: 350px;
        background: #fff;
        height: 242px;
        transition: all .2s ease;
        // border: 1px solid red;
    }
    .hb-banner-info {
        padding: 16px 0 14px;
        text-align: center;
        font-size: 16px;
        color: #ff8d30;
    }
    .hb-banner-title {
        padding: 0 6px 6px;
        overflow: hidden;
        span{
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
        }
        span:nth-of-type(1){
          width: 25%;
        }
        span:nth-of-type(2){
          width: 35%;
        }
        span:nth-of-type(3){
          width: 35%;
        }
    }
    .inner-box{
        // padding: 0 6px;
        position: relative;
        height: 150px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .rank-home-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        li {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            color: #8e8e8e;
            white-space: nowrap;
            overflow: hidden;
            span{
              display: inline-block;
              box-sizing: border-box;
              text-align: center;
            }
            span:nth-of-type(1){
              width: 25%;
            }
            span:nth-of-type(2){
              width: 35%;
            }
            span:nth-of-type(3){
              width: 35%;
            }
        }
    }
}
// 合作伙伴
.home-partner {
    @extend .width-1200;
    margin: 20px auto;
    padding: 16px 0;
    background: #fff;
}
.hpar-head {
    padding: 0 24px 12px;
    font-size: 16px;
    line-height: 30px;
}
.hpar-items {
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    a {
        position: relative;
        width: 150px;
        height: 43px;
        overflow: hidden;
        margin: 13px 24px;
        float: left;
        img {
            max-width: 100%;
            vertical-align: middle;
        }
        i {
            position: absolute;
            left: 216px;
            top: 0;
            width: 32px;
            height: 100%;
            background: rgba(255,255,255,.3);
            display: block;
            -webkit-transform: skew(60deg);
            -moz-transform: skew(60deg);
            -ms-transform: skew(60deg);
            transform: skew(60deg);
            z-index: 200;
            transition: all 0.7s;
        }
    }
    a:hover i{
      left: -100px;
    }
}
.hpar-items:after{
  display: block;
  clear: both;
  content: "";
}

// 友情链接
.home-friends {
    width: 1158px;
    position: relative;
    margin: 20px auto;
    padding: 12px 32px 12px 10px;
    // box-sizing: border-box;
    background: #fff;
    font-size: 14px;
    color: #666;
    line-height: 2em;
    overflow: hidden;
    a {
        margin: 0 24px 0 0;
        font-size: 14px;
        white-space: nowrap;
    }
}
.home-friends.active{
    max-height: 22px;
}
.home-friends-show {
    position: absolute;
    right: 5px;
    top: 12px;
    cursor: pointer;
    -moz-transition: all .2s ease;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    i {
        display: inline-block;
        margin-top: -2px;
        margin-left: 6px;
        width: 16px;
        height: 9px;
        background: url(../assets/images/icon-more-down.png) 0 -9px no-repeat;
        vertical-align: middle;
    }
}
</style>
