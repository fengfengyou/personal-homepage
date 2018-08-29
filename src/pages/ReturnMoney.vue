<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">推荐返现</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title">推荐返现</h4>
            <table class="acc-table table" cellspacing="0" cellpadding="0" border="0">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>推荐月份</th>
                        <th>推荐总数</th>
                        <th>有效推荐数</th>
                        <th>有效推荐数奖励</th>
                        <th>有效单个总奖励</th>
                        <th>总奖励</th>
                        <th>是否发放</th>
                        <th>操作</th>
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
