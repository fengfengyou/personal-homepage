<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">我的积分</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title"><a target="_blank" class="pull-right acc-page-link" href="#/account/alertpay/积分说明">积分常见问题</a>我的积分</h4>
            <div class="acc-score-header">
                <div class="acc-search pull-right">
                    <form>
                    <el-date-picker
                        v-model="startTime"
                        type="date"
                        placeholder="开始时间"
                        size="small"
                    >
                    </el-date-picker>
                    <!-- <input name="beginTime" id="startTime" class="acc-search-ipt ipt-datepicker" value="" placeholder="开始时间" type="date"> -->
                    <span class="acc-search-spt">--</span>
                    <!-- <input name="endTime" id="endTime" class="acc-search-ipt ipt-datepicker" value="" placeholder="结束时间" type="text"> -->
                    <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="结束时间"
                        size="small"
                        >
                    </el-date-picker>
                    <button class="acc-search-btn btn">搜索</button>
                    </form>
                </div>
                <ul class="acc-rec-details clearfix">
                    <li>可用积分：<span>60</span></li>

                </ul>
            </div>
            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">积分明细</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">收入积分</a></li>
                <li :class="{active:investBill==3}" @click="cutReq(3)"><a href="javascript:void(0);">支出积分</a></li>
            </ul>
            <table class="acc-table table text-center" cellspacing="0" cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th class="text-center"><input value="992373" v-model="allChecked" @change="checkAll" type="checkbox" class="allChecked"></th>
                        <th class="text-center">标题</th>
                        <th class="text-center">发送时间</th>
                        <th class="text-center">状态</th>
                        <th class="text-center">操作</th>
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
    console.log(this.isHad)
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
// 条件搜索
.acc-search {
    margin: 0;
    padding: 0 0 20px;
    border-bottom: none;
}

</style>
