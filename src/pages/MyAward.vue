<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">交易记录</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title"><a target="_blank" class="pull-right acc-page-link" href="/front/home/rate#6">积分常见问题</a>我的奖品</h4>

            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">奖品明细</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">邮寄地址</a></li>
            </ul>
            <div v-show="investBill==1">
                <table class="acc-table table text-center" cellspacing="0" cellpadding="0" border="0">
                    <thead>
                        <tr>
                            <th width="15%">日期</th>
                            <th>奖品</th>
                            <th>来源说明</th>
                            <th>是否发放</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(e,i) in reqMsg" :key="i">
                            <td><input :value="e" v-model="msgDel" type="checkbox"></td>
                            <td class="text-left"><a class="text-bold" href="#/systemMsgDetail/1/2">{{e.title}}</a></td>
                            <td>{{e.time}}</td>
                            <td>{{e.isRead?'已读':'未读'}}</td>
                            <td><a href="javascript:;" class="del" data-id="992373">删除</a></td>
                        </tr>
                        <tr  v-if="msg.length==0"><td class="acclist-empty" colspan="8"><span>！<br>暂无记录</span></td></tr>

                    </tbody>
                </table>
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="10"
                    layout="prev, pager, next, jumper,->"
                    :total="total"
                >
                </el-pagination>
            </div>
            <div class="address-form" v-show="investBill==2">
                <input name="mobile" type="hidden">
                <div class="address-item">
                <span class="address-title">姓名</span>
                <input class="address-input" id="userName" name="name" value="" type="text">
                </div>
                <div class="address-item">
                <span class="address-title">手机号</span>
                <input class="address-input" id="mobile" name="mobile" value="" type="text">
                </div>
                <div class="address-item address-item-full">
                <span class="address-title">邮寄地址</span>
                <input class="address-input" id="address" name="address" value="" type="text">
                </div>
                <button class="address-button" id="addressButton" type="button">提交信息</button>
                <div class="address-tips">温馨提示：请填写准确无误的收货信息，如提供的收货信息有误导致无法正常接收奖品的，立业贷不承担赔付责任。</div>
            </div>
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
      online: false,
      checkStatus: 0,
      limitModal: false,
      startTime: '',
      endTime: '',
      currentPage: 1,
      investBill: 2,
      msg: [],
      reqMsg: [],
      msgDel: [],
      allChecked: false
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
    },
    total () {
      return this.msg.length
    },
    isHad () {
      return this.msg.length > 0
    }
  },
  mounted () {
    this.classMsg(this.investBill)
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
    handleCurrentChange (currentPage) {
      console.log(currentPage)
    },
    cutReq (n) {
      this.investBill = n
      this.classMsg(n)
    },
    classMsg (n) {
      this.reqMsg = []
      if (n === 1) {
        this.reqMsg = this.msg
      } else if (n === 2) {
        this.msg.forEach((e) => {
          if (e.isRead) {
            this.reqMsg.push(e)
          }
        })
      } else {
        this.msg.map((e) => {
          if (!e.isRead) {
            this.reqMsg.push(e)
          }
        })
      }
    },
    checkAll () {
      if (this.allChecked) {
        this.msgDel = this.reqMsg
      } else {
        this.msgDel = []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.acc-page {
  position: relative;
  padding: 42px 0;
  margin: 0 60px;
}
// 标题
.acc-page-title {
    padding: 0 4px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid #d9d9d9;
}
.acc-page-link {
    font-weight: 400;
    font-size: 12px;
    color: #4f87ff;
}
// 邮寄地址
.address-form {
    border: 1px solid #eee;
    padding: 30px;
    .address-item {
        margin-bottom: 30px;
        float: left;
        width: 50%;
        overflow: hidden;
        .address-title {
            float: left;
            width: 120px;
            height: 35px;
            line-height: 35px;
            color: #666;
            text-align: center;
        }
        .address-input {
            padding: 5px 10px;
            width: 218px;
            height: 25px;
            line-height: 25px;
            color: #999;
            text-align: left;
        }
    }
    .address-item.address-item-full {
        width: 100%;
        .address-input {
            width: 620px;
        }
    }
    .address-button {
        margin: 0 auto;
        display: block;
        width: 152px;
        height: 36px;
        line-height: 36px;
        font-size: 15px;
        color: #fff;
        background: #ff7d12;
        border: 0;
        border-radius: 4px;
        text-align: center;
    }
    .address-tips {
        padding: 20px 0 0 28px;
    }

}
// 表格
.acc-table {
    padding-right: 4px;
    padding-left: 4px;
    font-size: 12px;
}
.table-fixed {
    table-layout: fixed;
}
.acclist-empty span {
    display: inline-block;
    padding: 15px 10px;
    margin: 50px 0;
    zoom: 1;
    font-size: 18px;
    line-height: 1.6em;
    text-align: center;
    color: #ccc;
    border: 1px solid #ccc;
}
.acc-table tr td {
    position: relative;
    z-index: 0;
}
.acclist-empty {
    text-align: center;
}
.allChecked::after{
    content: "全选";
    display: inline-block;
    width: 30px;
    transform: translate(60%,-20%)
}

</style>
