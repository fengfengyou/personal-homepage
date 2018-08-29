<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">债权转让</li>
        </template>
        <template slot="right">
            <div class="p-rtbox">
                <h4 class="p-rtitle">债权转让</h4>
                <div class="p-rtword">
                    <p>债权转让需是满足债权可转让的条件才能进行转让，转让需支付一定对价，并且不得大于最高转让价格。且在转让中的债权不得超过两条，可待当前债权转让完成或者撤销后，再进行转让操作。</p>
                    <div class="p-rtlink"><a href="#/account/transferDebtList/protocol" class="coblue">详见债权转让协议《范本》</a></div>

                    <dl class="p-rtxxkdl clr">
                    <dt :class="{cur:cur==0}" @click="cutReq(0)"><a href="javascript:void(0);">可转让的债权</a></dt>
                    <dd>|</dd>
                    <dt :class="{cur:cur==1}" @click="cutReq(1)"><a href="javascript:void(0);">转让中的债权</a></dt>
                    <dd>|</dd>
                    <dt :class="{cur:cur==2}" @click="cutReq(2)"><a href="javascript:void(0);">转让结束的债权</a></dt>
                    <dd>|</dd>
                    <dt :class="{cur:cur==3}" @click="cutReq(3)"><a href="javascript:void(0);">受让债权管理</a></dt>
                    </dl>
                    <div class="p-zrtabox">
                    <table class="p-zrtable">
                        <thead>
                        <tr>
                            <th>序号</th>
                            <th>借款标题</th>
                            <th>借款金额(元)</th>
                            <th>历史年化</th>
                            <th>投标金额(元)</th>
                            <th>待收本息(元)</th>
                            <th>剩余期限</th>
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
                </div>
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
      cur: 0,
      total: 0,
      currentPage: 0
    }
  },
  components: {
    Account,
    LimitModal,
    Log
  },
  computed: {
  },
  methods: {
    handleCurrentChange (currentPage) {
      console.log(currentPage)
    },
    cutReq (n) {
      this.cur = n
    }
  }
}
</script>
<style lang="scss" scoped>
.p-rtbox {
    padding: 20px 55px;
}
.p-rtitle {

    height: 34px;
    line-height: 34px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    border-bottom: solid 2px #d9d9d9;
    padding: 0 5px;

}
.p-rtword {
    padding: 5px;
}
.p-rtword p {
    line-height: 28px;
}
.p-rtlink {
    height: 14px;
    line-height: 14px;
    margin-bottom: 30px;
}
.p-rtlink a {
    padding-left: 20px;
    background: url(../assets/images/p-rtico1.png) no-repeat left center;
}
.coblue {
    color: #39c;
}
// 选项卡
.p-rtxxkdl dt.cur, .p-rtxxkdl dt.cur::before {

    border-bottom-color: #FF850E;
    color: #ff9900;

}
.p-rtxxkdl dt {

    float: left;
    padding: 0 3px;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    border-bottom: solid 2px transparent;
        border-bottom-color: transparent;
    position: relative;
    font-size: 16px;

}
.clr::after {
    content: "";
    clear: both;
    visibility: hidden;
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
}
// 底部修饰符
.p-rtxxkdl dt::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: solid 4px transparent;
    bottom: 0;
    left: 50%;
    margin-left: -4px;
}
.p-rtxxkdl dd {

    float: left;
    height: 40px;
    line-height: 40px;
    margin: 0 20px;

}
// 表格
.p-zrtable {
    width: 100%;
    border: solid 1px #e0e0e0;
}
.p-zrtable thead th {
    height: 40px;
    background: #f9f9f9;
    padding-left: 12px;
    font-size: 12px;
    color: #666;
}
.p-zrtable tbody td {
    height: 48px;
    font-size: 12px;
    color: #333;
    padding-left: 12px;
    border-top: solid 1px #e0e0e0;
}
.acclist-empty {
    text-align: center;
}
.p-zrtable tbody td {
    height: 48px;
    font-size: 12px;
    color: #333;
    padding-left: 12px;
    border-top: solid 1px #e0e0e0;
}
.acclist-empty {
    text-align: center;
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
</style>
