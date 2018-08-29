<template>
<div class="page">
    <div class="charge-desc clearfix">
        <div class="col-3 charge-types" id="chargeDescleft">
            <h4>说明分类</h4>
            <ul>
                <li data-hash="1" :class="{active:params=='资费说明'}"><a href="#/account/alertpay/资费说明">资费说明<i></i></a></li>
                <li data-hash="3" :class="{active:params=='会员等级说明'}"><a href="#/account/alertpay/会员等级说明">会员等级说明<i></i></a></li>
                <li data-hash="6" :class="{active:params=='积分说明'}"><a href="#/account/alertpay/积分说明">积分说明<i></i></a></li>
                <li data-hash="7" :class="{active:params=='加息券说明'}"><a href="#/account/alertpay/加息券说明">加息券说明<i></i></a></li>
                <li data-hash="4" :class="{active:params=='立业券说明'}"><a href="#/account/alertpay/立业券说明">立业券说明<i></i></a></li>
            </ul>
        </div>
        <div class="col-9 charge-items" id="chargeDescRight">
            <div data-hash="1" class="charge-item" v-show="params=='资费说明'">
                <div class="charge-nav">资费说明<span>&gt;</span>资费概览</div>
                <div class="charge-detail">
                    <h4>资费说明</h4>
                    <h5 class="f16">出借资费</h5>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <thead>
                            <tr>
                                <th>类别</th>
                                <th>费用</th>
                                <th width="65%">说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">注册</td>
                                <td class="text-left"><span class="text-danger">免费</span></td>
                                <td class="text-left">所有网站访客均可免费注册成为立业贷平台会员。</td>
                            </tr>
                            <tr>
                                <td class="text-left">充值</td>
                                <td class="text-left"><span class="text-danger">免费</span></td>
                                <td class="text-left">合作银行及第三方支付机构对于在线上充值会按充值金额的一定比例收取充值费用，费用在充值时收取。现阶段由立业贷垫付。</td>
                            </tr>
                            <tr>
                                <td class="text-left">提现</td>
                                <td class="text-left"><span class="text-danger">免费</span></td>
                                <td class="text-left">立业贷平台对接江西银行进行银行资金存管，每笔提现需收取一定金额的手续费。现阶段该费用暂由立业贷垫付。</td>
                            </tr>
                            <tr>
                                <td class="text-left">服务费用</td>
                                <td class="text-left"><span class="text-danger">免费</span></td>
                                <td class="text-left">立业贷在考量安全并且稳健发展的情况下做出了历史年化收益率调整，实施了减免服务费的措施。</td>
                            </tr>
                            <tr>
                                <td class="text-left">债权转让管理费</td>
                                <td class="text-left"><span class="text-danger">0-0.5%</span></td>
                                <td class="text-left">
                                    1个月&lt;持有时间≤2个月 管理费用为转让价格的0.5%<br>
                                    2个月&lt;持有时间≤3个月 管理费用为转让价格的0.3%<br>
                                    3个月&lt;持有时间≤6个月 管理费用为转让价格的0.1%<br>
                                    6个月&lt;持有时间    管理费用为0
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 class="f16">借款资费</h5>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <thead>
                            <tr>
                                <th>类别</th>
                                <th>费用</th>
                                <th width="65%">说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">撮合服务费</td>
                                <td class="text-left"><span class="text-danger">0-4.22%</span></td>
                                <td class="text-left">根据借款人选择产品收取0-4.22%的平台撮合费</td>
                            </tr>
                            <tr>
                                <td class="text-left">贷中管理费</td>
                                <td class="text-left"><span class="text-danger">150元/月</span></td>
                                <td class="text-left">每月收取借款人150元GPS服务费 作为贷中管理费</td>
                            </tr>
                        </tbody>
                    </table>
                    <dl>
                        <dt>提示说明：</dt>
                        <dd>
                            1、以上资费均为现阶段平台的收费标准；如果资费发生改动会及时通知并以平台最新的收费标准为准；<br>
                            2、如果对以上收费标准有相关疑问，可拨打客服热线：400-999-2101咨询。
                        </dd>
                    </dl>
                </div>
            </div>
            <div data-hash="3" class="charge-item" v-show="params=='会员等级说明'">
                <div class="charge-nav">资费说明<span>&gt;</span>会员等级说明</div>
                <div class="charge-detail">
                    <h4>会员等级说明</h4>
                    <div class="text-indent">VIP会员等级以用户已获得成长值来确定会员等级，具体计算方式如下：</div>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <thead>
                            <tr>
                                <th>VIP等级</th>
                                <th>总收益</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>青铜会员</td><td>0</td></tr>
                            <tr><td>白银会员</td><td>600</td></tr>
                            <tr><td>黄金会员</td><td>3000</td></tr>
                            <tr><td>铂金会员</td><td>15000</td></tr>
                            <tr><td>白钻会员</td><td>60000</td></tr>
                            <tr><td>黑钻会员</td><td>120000</td></tr>
                            <tr><td>至尊会员</td><td>200000</td></tr>
                            <tr><td>帝王会员</td><td>400000</td></tr>
                        </tbody>
                    </table>
                    <h4>会员等级规则</h4>
                    <dl>
                        <dt></dt>
                        <dd>
                            <ul>
                                <li>1、立业贷根据会员所获得不同成长值的区间，将会员分为不同等级，享受不同的权益和增值服务，满足相应升级条件，系统自动升级对应级别；</li>
                                <li>2、成长值根据用户投资金额计算，随投资利息收益按月获得；</li>
                                <li>3、成长值=投资收益，即为用户在平台的累计收益；</li>
                                <li>4、立业贷有权对会员等级，会员享有权益和增值服务做适当调整。</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>查看历史累计收益（点击可查看大图）：</dt>
                        <dd><a data-lightbox="总收益查看示例" data-title="查看历史累计收益" href="javascript:void(0);" @click="controlLb(1)"><img src="../assets/images/view_income_big.jpg" alt="如何查看历史累计收益" title="点击查看大图"></a></dd>
                    </dl>
                </div>
            </div>
            <div data-hash="4" class="charge-item" v-show="params=='立业券说明'">
                <div class="charge-nav">资费说明<span>&gt;</span>立业券说明</div>
                <div class="charge-detail">
                    <h4>立业券说明</h4>
                    <ul>
                        <li>1、立业券为返现券，可在投标前使用。</li>
                        <li>2、立业券在项目满标放款之后自动返现。</li>
                        <li>3、立业券的有效期最高为三个月 。</li>
                        <li>4、立业券不可以分拆使用。</li>
                        <li>5、投资3个月(含)以上期限的债权项目方能使用(包括立业券的手动和自动使用)</li>
                        <li>6、立业券使用以券面使用规则为准，如同时使用多张立业券，应满足投资金额≥立业券合计起投金额。<br>
                            例如，在活动期内您获得100元立业券，您的投标金额满足券面使用条件就可以使用该券。<br>
                            （在您所投项目满标放款之后即返现100元到个人江西银行存管账户）
                        </li>
                    </ul>
                </div>
            </div>
            <div data-hash="6" class="charge-item" v-show="params=='积分说明'">
                <div class="charge-nav">资费说明<span>&gt;</span>积分说明</div>
                <div class="charge-detail">
                    <h4>积分说明</h4>
                    <p class="text-bold">1、立业贷积分是什么？</p>
                    <p class="pl2em">立业贷积分是深圳市立业贷互联网金融服务有限公司提供的一项增值服务。立业贷的会员在投资项目时可以获得相应的积分奖励，用于兑换立业贷会员专区中提供的积分礼品。目前立业贷用户可通过新手任务，常规任务，投资任务及其他活动方式获取积分。</p>
                    <p class="text-bold">2、积分计算规则？</p>
                    <p class="pl2em">
                        投资积分：用户在立业贷平台投资产品所获得的积分。<br>
                        用户投资先息后本标的，投资积分计算规则：<br>
                        投资积分=积分值系数*投资金额*标的期限*1%；<br>
                        用户投资等额本息标的，投资积分计算规则：<br>
                        投资积分=积分值系数*投资金额*标的期限*0.5%。<br>
                        （举例：白银会员，投资3月期限先息后本标的，投资金额1万元， 获得的积分为1*10000*3*1%=300；白银会员，投资12月期限等额本息标的，投资金额1万元，获得的积分为1*10000*12*0.5%=600；备注：用户所获得的积分数量舍零取整数。）
                    </p>
                    <p class="text-bold">3、积分有效期？</p>
                    <p class="pl2em">2018年12月31日，立业贷将对用户所剩余积分进行清零，此后每年12月31日将清空用户所剩余积分。</p>

                    <p class="text-bold">4、如何获得积分？</p>
                    <p class="pl2em">可通过投资立业贷的产品（仅限散标区和小立有约）、邀请好友投资、签到、参与官网活动等均可获取积分。</p>

                    <p class="text-bold">5、积分兑换规则？</p>
                    <p class="pl2em">①拥有积分的用户可参与平台兑换物品（虚拟/实物）的活动。<br>②兑换虚拟物品将会立即发放至您的个人账户中，兑换实物奖品将于15个工作日内发放，请在奖品发放前前往“我的账户-我的奖品”填写邮寄信息。<br>③立业贷有最终解释权。</p>
                </div>
            </div>
            <div data-hash="7" class="charge-item" v-show="params=='加息券说明'">
                <div class="charge-nav">资费说明<span>&gt;</span>加息券说明</div>
                <div class="charge-detail">
                    <h4>加息券说明</h4>
                    <p>1、加息券一次只能使用一张，可以和立业券同时使用；</p>
                    <p>2、若使用了加息券的项目在投资期间发生流标，则加息券返还给用户；</p>
                    <p>3、加息券的最高有效期为3个月(活动获取的加息券期限见详细活动说明)，请在规定时间内使用；</p>
                    <p>4、加息券仅限在立业贷平台上使用；</p><br>
                    <p class="text-bold">加息券如何使用：</p>
                    <p>客户登录——选择标的投标——使用加息券——立即投标</p>
                </div>
            </div>
        </div>
    </div>
    <!-- 蒙灰层 -->
    <div class="lb-data" v-show="lbShow">
        <div class="lb-box" ref="lbBox">
            <div class="lb-details clearfix">
                <span class="lb-caption" style="display: inline;">查看历史累计收益</span>
                <div class="lb-closeContainer"><a class="lb-zoom" @click="changeZoom"></a><a class="lb-close" @click="controlLb(0)"></a></div>
            </div>
            <img src="../assets/images/view_income_big.jpg" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      lbShow: false
    }
  },
  components: {

  },
  computed: {
    params () {
      return this.$route.params.name
    }
  },
  mounted () {
    // console.log(this.$route.params)
  },
  methods: {
    controlLb (v) {
      this.$refs.lbBox.classList.remove('zoom')
      this.lbShow = v
    },
    changeZoom () {
      this.$refs.lbBox.classList.toggle('zoom')
    }
  }
}
</script>

<style scoped lang="scss">
.page{
    width: 1200px;
    margin: 0 auto;
}
.charge-desc {
    margin: 24px 0 0;
}
// 左侧选项卡
.charge-types {
    h4 {
        margin: 0 20px 0 0;
        background: #ff8501;
        line-height: 40px;
        color: #fff;
        text-align: center;
        font-size: 16px;
    }
    ul {
        margin: 0 20px 0 0;
        li{
            a {
                position: relative;
                display: block;
                border-top: 1px solid #fff;
                padding: 0 0 0 5em;
                background: #eaeaea;
                line-height: 40px;
            }
            i {
                position: absolute;
                top: 15px;
                right: 28px;
                width: 0;
                height: 0;
                border-color: transparent transparent transparent #888;
                border-style: solid;
                border-width: 6px;
            }
        }
        li.active{
            a {
                background: #dadada;
                color: #f60;
                i {
                    border-color: transparent transparent transparent #f60;
                }
            }
        }
    }
}
// 右侧内容
.charge-items {
    min-height: 600px;
    background: #fff;
}
// 顶部导航
.charge-nav {
    padding: 0 12px;
    background: #eaeaea;
    line-height: 40px;
    span {
        margin: 0 8px;
    }
}
.charge-detail {
    margin: 0 24px;
    padding: 12px 0 36px;
    line-height: 1.8em;
    h4 {
        margin: 0 0 20px;
        border-bottom: 1px dashed #eaeaea;
        padding: 0 12px 8px;
        font-weight: 700;
        font-size: 16px;
        color: #f60;
        line-height: 2em;
    }
    table {
        margin: 20px 0;
        border-left: 1px solid #d9d9d9;
        border-top: 1px solid #d9d9d9;
    }
}
.charge-detail table th {
    font-weight: 700;
}
.charge-detail table td, .charge-detail table th {
    border-right: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px;
    line-height: 2em;
    text-align: center;
}
.charge-detail table td.text-left {
    text-align: left;
}
.lb-details{
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    text-align: left;
    line-height: 2rem;
    .lb-caption {
        padding: 0 1em;
        margin-top: 5px;
        font-size: 14px;
        line-height: 1em;
        color: #fff;
        float: left;
    }
    .lb-closeContainer{
        float: right;
    }
}
.charge-detail ul {
    padding: 0 0 0 24px;
}
.charge-detail ul li {
    margin: 0 0 12px;
    text-indent: -24px;
}
// 放大、关闭按钮
.lb-zoom {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 0;
    background: url(../assets/images/zoom.png) left top no-repeat;
    margin-right: 10px;
    cursor: pointer;
}
.lb-close {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 0;
    background: url(../assets/images/zoom.png) left bottom no-repeat;
    cursor: pointer;
}
// 蒙灰层
.lb-data{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    overflow-y: scroll;
}
.lb-box{
    position: relative;
    transition: all 0.6s;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width: 50%;
    // height: 60%;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 2px;
    img{
        width: 100%;
        height: 100%;
    }
}
.lb-box.zoom{
    width: 70%;
    // height: 100%;
}
</style>
