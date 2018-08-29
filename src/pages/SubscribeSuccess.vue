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
            <h4 class="acc-page-title">立管家</h4>
            <ul class="ly-tztable clr ly-myacount-list">
                <li class="last">
                    <i class="ly-linedashed"></i>
                    <span><strong>{{0.00}}</strong>元</span>
                    <p> 预约总额</p>
                </li>
                <li>
                    <i class="ly-linedashed"></i>
                    <span><strong>{{0.00}}</strong>元</span>
                    <p>成功预约总额</p>
                </li>
                <li style="width: 160px">
                    <span><strong>{{0}}</strong>次</span>
                    <p>成功预约次数</p>
                </li>
            </ul>
            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">预约成功</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">预约失败</a></li>
            </ul>
            <table class="acc-table table" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <th>序号</th>
                        <th>计划名称</th>
                        <th>加入时间</th>
                        <th>历史年化</th>
                        <th>借款期限</th>
                        <th>加入金额（元）</th>
                        <th>已投资金额</th>
                        <th>未投资金额</th>
                        <th>操作</th>
                    </tr>

                        <tr class="acc-no-data">
                            <td class="text-center" colspan="10">暂无数据</td>
                        </tr>

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
// 标题
.acc-page-title {

    padding: 0 4px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid #d9d9d9;

}
// 金额次数
.clr::after {
    content: "";
    clear: both;
    visibility: hidden;
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
}
.ly-tztable {
    padding: 25px 0 19px 25px;
}
.ly-tztable li {
    float: left;
    width: 123px;
    position: relative;
    padding-left: 48px;
}
.ly-myacount-list li.last {
    padding-left: 20px;
}
.ly-myacount-list li {
    width: 230px;
}
.ly-linedashed {
    height: 75px;
    width: 1px;
    border-right: 1px dashed #d7d7d7;
    position: absolute;
    right: 0px;
    top: 25px;
}
.ly-tztable li span {

    font-size: 18px;
    display: block;
    line-height: 67px;
    color: #4e4e4e;

}
.ly-tztable li span strong {
    font-size: 48px;
    font-weight: normal;
    font-family: arial;
}
.ly-myacount-list li span strong {
    font-size: 38px;
}
.ly-tztable li p {
    line-height: 28px;
    color: #666;
}

</style>
