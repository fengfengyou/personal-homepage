<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">回款账单</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">我的回款账单</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">收款中</a></li>
                <li :class="{active:investBill==3}" @click="cutReq(3)"><a href="javascript:void(0);">已收款</a></li>
            </ul>
            <div class="acc-search">
                <form>
                    <input name="key" id="keyStr" class="acc-search-ipt" v-model="title" placeholder="搜索标题" type="text">
                    <select class="acc-search-sel a-s-s-big" name="statusType" id="statusType" v-model="type">
                        <option value="">全部</option>
                        <option value="3">未收款</option>
                    </select>
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
                    <a class="acc-dwonload-btn btn" href="javascript:void(0)">下载</a>
                </form>
            </div>
            <table class="acc-table table" id="accInvestBills" cellspacing="0" cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th width="15%">债权名称</th>
                        <th>期数</th>
                        <th>应收金额(元)</th>
                        <th>实际金额(元)</th>
                        <th>计息时间</th>
                        <th>到期还款日期</th>
                        <th>实际还款日期</th>
                        <th>是否逾期</th>
                        <th>状态</th>
                        <th>类型</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="acclist-empty" colspan="7"><span>！<br>暂无记录</span></td></tr>
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
      total: 100,
      startTime: '',
      endTime: '',
      currentPage: 1,
      investBill: 1,
      title: '',
      type: ''
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
    }
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
    }
  }
}
</script>
<style lang="scss" scoped>

// 限额标准
.withdrawal-limit {
    line-height: 36px;
    color: #f89b56;
    display: inline-block;
    padding-left: 5px;
}
// 提示信息
.acc-withform-earn {
    display: none;
    margin: 5px 0;
    color: #f79a57;
}
// 提现金额
// .acc-withform-ipt {
//     padding: 0;
// }
.acc-withform-val {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
}
.acc-withform-group label {
    margin-right: 8px;
}
.acc-withform-group label input {
    margin-right: 3px;
    vertical-align: middle;
}
.acc-withform-btn {
    margin: 0 0 20px 200px;
}
.acc-rec-sbt {
    padding: 10px 84px;
}

// 条件搜索
input.acc-search-ipt {
    width: 120px;
    padding: 3px 4px;
    margin: 0 12px 0 0;
    vertical-align: middle;
}

</style>
