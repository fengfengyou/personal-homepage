<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">邀友赚金</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title">邀友赚金</h4>
            <table class="acc-table table" cellspacing="0" cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>推荐好友</th>
                        <th>注册日期</th>
                        <th>投资金额</th>
                        <th>投资时间</th>
                        <th>推荐返佣</th>
                        <th>是否发放</th>
                        <th>活动来源</th>
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
