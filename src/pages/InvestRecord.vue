<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">出借记录</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title">出借记录</h4>
            <div class="acc-search">
                <form>
                    <input name="key" id="keyStr" class="acc-search-ipt" v-model="title" placeholder="搜索标题" type="text">
                    <select class="acc-search-sel a-s-s-big" name="statusType" id="statusType" v-model="type">

                        <option value="">当月</option>
                        <option value="2">筹款中</option>
                        <option value="3">待放款</option>
                        <option value="4">还款中</option>
                        <option value="5">已还款</option>
                        <option value="6">提前还款</option>
                        <option value="-4">流标</option>
                        <option value="-10">全部</option>

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
            <table class="acc-table table" cellspacing="0" cellpadding="0" border="0">
                <thead>
                  <tr>
                    <th width="17%">债权名称</th>
                    <th>投标金额</th>
                    <th>历史年化</th>
                    <th>期限</th>
                    <th>标的状态</th>
                    <th>回款方式</th>
                    <th>投标时间</th>
                    <th>投资状态</th>
                    <th>计息时间</th>
                    <th>类型</th>
                    <th colspan="2">操作</th>
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
input.acc-search-ipt {
    width: 120px;
    padding: 3px 4px;
    margin: 0 12px 0 0;
    vertical-align: middle;
}
</style>
