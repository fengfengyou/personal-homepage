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
            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">交易记录</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">当日江西银行账户交易明细</a></li>
                <li :class="{active:investBill==3}" @click="cutReq(3)"><a href="javascript:void(0);">江西银行账户历史交易明细</a></li>
            </ul>
            <div class="acc-search">
                <form>

                <select class="acc-search-sel a-s-s-big" name="statusType" id="statusType">

                    <option value="0">选择类型</option>
                    <option value="1">充值</option>
                    <option value="2">提现</option>
                    <option value="3">服务费</option>
                    <option value="4">账单还款</option>
                    <option value="5">红包奖励</option>
                    <option value="6">推荐奖励</option>
                    <option value="7">散标</option>
                    <option value="8">债权转让</option>
                    <option value="9">立管家</option>
                    <option value="10">小立有约</option>
                    <option value="11">节节高</option>

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
            <table class="acc-table table table-fixed" cellspacing="0" cellpadding="0" border="0">
                <thead>
                <tr>
                    <th width="18%">日期</th>
                    <th width="14%">科目</th>
                    <th width="12%">收支</th>
                    <th width="15%">可用余额</th>
                    <th width="13%">冻结金额</th>
                    <th width="28%">明细</th>
                </tr>
                </thead>
                <tbody>

                <tr><td class="acclist-empty" colspan="8"><span>！<br>暂无记录</span></td></tr>

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
      investBill: 1
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

</style>
