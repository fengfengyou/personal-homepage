<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">立管家</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="pull-right">
                <router-link to="/account/alertpay/加息券说明" class="acc-page-link" v-show="investBill==1" target="_blank">加息券说明</router-link>
                <router-link to="/account/alertpay/立业券说明" class="acc-page-link" v-show="investBill==2" target="_blank">立业券说明</router-link>
            </h4>
            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);" class="text-bold">加息券<i class="t-icon-corner" id="rateTicket">3</i></a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);" class="text-bold">立业券<i class="t-icon-corner" id="rateTicket">6</i></a></li>
            </ul>
            <div class="acc-rateticket" v-show="investBill==1">
                <div class="acc-child-types">
                <a :class="{active:currentItem==0}" @click="cutItem(0)" href="javascript:void(0);">全部加息券</a>|
                <a :class="{active:currentItem==1}" @click="cutItem(1)" href="javascript:void(0);">未使用</a>|
                <a :class="{active:currentItem==2}" @click="cutItem(2)" href="javascript:void(0);">已使用</a>|
                <a :class="{active:currentItem==3}" @click="cutItem(3)" href="javascript:void(0);">已过期</a>
                </div>
                <ul class="acc-ticket-items clearfix">

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal ">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">1.5 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/8/10</div>
                        <div><span>适用项目：</span>12月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal ">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">1.2 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/8/25</div>
                        <div><span>适用项目：</span>12月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal ">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">1.0 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/9/24</div>
                        <div><span>适用项目：</span>24月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal acc-ticket-expires">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">0.8 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/7/3</div>
                        <div><span>适用项目：</span>3月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal acc-ticket-expires">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">0.5 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/7/11</div>
                        <div><span>适用项目：</span>3月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal acc-ticket-expires">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">1.0 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/7/11</div>
                        <div><span>适用项目：</span>6月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                    <li class="acc-ticket-item rate-ticket rate-ticket-normal acc-ticket-used">
                        <div class="acc-ticketl acc-ticketl-rate">加息券<br><span class="acc-ticket-amount">0.8 %</span></div>
                        <div class="acc-ticketr acc-ticketr-rate">
                        <div><span>有效时间：</span>2018/6/26-2018/7/26</div>
                        <div><span>适用项目：</span>6月(含)以上的散标

                        </div>

                        <div>
                            <span>获得来源：</span>新用户注册
                        </div>

                        </div>
                    </li>

                </ul>
            </div>
            <div class="acc-rateticket" v-show="investBill==2">
                <div class="acc-child-types">
                <a :class="{active:currentItem==0}" @click="cutItem(0)" href="javascript:void(0);">全部立业券</a>|
                <a :class="{active:currentItem==1}" @click="cutItem(1)" href="javascript:void(0);">未使用</a>|
                <a :class="{active:currentItem==2}" @click="cutItem(2)" href="javascript:void(0);">已使用</a>|
                <a :class="{active:currentItem==3}" @click="cutItem(3)" href="javascript:void(0);">已过期</a>
                </div>
                <ul class="acc-ticket-items clearfix">
                    <form id="ticketAutoUse" class="acc-ticket-set">
                        <span>自动将立业券用于以下产品：<i class="icon ov-help-ico" data-toggle="tooltip" title="" data-tip="在投资选中的产品时，将自动使用符合条件的立业券"></i></span>
                        <label><input name="bids" type="checkbox">散标专区</label>

                        <input class="acc-search-btn btn" type="submit" value="保存设置">
                    </form>
                </ul>
            </div>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="10"
                layout="prev, pager, next, jumper,->"
                :total="total"
            >
            </el-pagination>
          </div>
        </template>
    </account>
 </div>
</template>

<script>
import Account from '@/components/Account'
import LimitModal from '@/components/LimitModal'
import Log from '@/components/Log'
export default {
  data () {
    return {
      online: false,
      checkStatus: 0,
      limitModal: false,
      total: 100,
      startTime: '',
      endTime: '',
      currentPage: 1,
      investBill: 1,
      title: '',
      type: '',
      currentItem: 0
    }
  },
  mounted () {
    console.log(location.href)
    console.log(document.location.href)
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
    handleCurrentChange (currentPage) {
      console.log(currentPage)
    },
    cutReq (n) {
      this.investBill = n
    },
    cutItem (n) {
      this.currentItem = n
    }
  }
}
</script>
<style lang="scss" scoped>
// 标题
.acc-page-link {
    font-weight: 400;
    font-size: 12px;
    color: #4f87ff;
}
// 角标
.t-icon-corner {
    margin: -3px 0 0 5px;
    padding: 0 4px;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    border-radius: 10px;
    background: red;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    vertical-align: middle;
}
// 加息券分类选项卡
.acc-child-types {
    padding: 0px 0 24px 0;
    color: #a1a3a8;
    a.active {
        color: #f60;
    }
    a {
        margin: 0 24px;
        color: #a1a3a8;
    }
}
// 加息券
.acc-ticket-items {
    padding: 24px 0 0;
    font-size: 12px;
}
.acc-ticket-item {
    position: relative;
    float: left;
    width: 333px;
    height: 153px;
    padding: 8px 10px 0;
    margin: 0 23px 32px;
    background: url(../assets/images/icon-ticket-rate.png) center top no-repeat;
}
.rate-ticket{
    .acc-ticketl {
        width: 76px;
        font-size: 26px;
        color: #fff;
        text-align: center;
        line-height: 1.5em;
    }
    .acc-ticketl-rate {
        padding: 15px 0;
        font-size: 18px;
        line-height: 2.4em;
    }
}
.acc-ticketl {
    float: left;
    width: 90px;
    padding: 4px 0 0;
}
.acc-ticket-amount {
    padding: 24px 0 0;
    font-family: Impact,Arial,Verdana;
    font-size: 26px;
    line-height: 1.2em;
    color: #f6ff00;
}
.rate-ticket .acc-ticket-amount {
    padding: 0;
    text-align: center;
    font-size: 32px;
    line-height: 1.2em;
}
.rate-ticket-normal .acc-ticket-amount {
    font-size: 24px;
}
.rate-ticket .acc-ticketr-rate {
    padding-top: 21px;
    line-height: 24px;
}
.acc-ticketr {
    float: left;
    width: 230px;
    padding: 12px 0 0 12px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    div {
        padding: 0 0 0 5em;
        font-size: 12px;
        span {
            margin: 0 0 0 -5em;
        }
    }
}
// 已过期加息券
.rate-ticket.acc-ticket-expires {
    background-position: center bottom;
}
// 已使用加息券
.rate-ticket.acc-ticket-used {
    background-position: center center;
}

// 保存设置
.acc-ticket-set {
    padding: 12px;
    border: 1px dashed #d9d9d9;
    color: #666;
    font-size: 14px;
    span {
        margin: 0 12px 0 0;
        .ov-help-ico {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin: 0 0 0 10px;
            font-size: 0;
            line-height: 0;
            cursor: pointer;
            vertical-align: middle;
            background: url(../assets/images/icon-question.png) no-repeat center top;
            position: relative;
        }
    }
    label {
        margin: 0 12px 0 0;
        input {
            margin: 0 4px 0 0;
            vertical-align: -2px;
        }
    }
}
.ov-help-ico::after {
    content: attr(data-tip);
    background: #000;
    display: block;
    width: 240px;
    line-height: 20px;
    color: #fff;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
    text-indent: 0;
    border-radius: 6px;
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);
    top: -60px;
    left: -120px;
    position: absolute;
    opacity: 0;
    transition: all 0.7s;
}
.ov-help-ico::before {
    content: '';
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 11;
    border-top-color: #000;
    top: -16px;
    opacity: 0;
    transition: all 0.7s;
}
.ov-help-ico:hover::after,.ov-help-ico:hover::before{
    opacity: 1;
}
</style>
