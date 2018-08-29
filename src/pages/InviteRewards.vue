<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">邀请奖励</li>
        </template>
        <template slot="right">
          <div class="acc-page">
            <h4 class="acc-page-title">邀请奖励</h4>
            <div class="acc-search">
                <form>
                    <input name="key" id="keyStr" class="acc-search-ipt" v-model="title" placeholder="被推荐人用户名" type="text">
                    <el-date-picker
                        v-model="startTime"
                        type="date"
                        placeholder="开始时间"
                        size="small"
                    >
                    </el-date-picker>
                    <span class="acc-search-spt">--</span>
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
                        <th>序号</th>
                        <th>时间</th>
                        <th>期数</th>
                        <th>本期应收奖励(元)</th>
                        <th>状态</th>
                        <th>好友</th>
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
import Log from '@/components/Log'
export default {
  data () {
    return {
      total: 100,
      startTime: '',
      endTime: '',
      currentPage: 1,
      investBill: 1,
      title: ''
    }
  },
  components: {
    Account,
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
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
