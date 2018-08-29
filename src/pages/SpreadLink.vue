<template>
 <div class="page">
    <account>
        <template slot="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/index">我的账户</a></li>
            <li id="accountPageTitle" class="active">邀请好友</li>
        </template>
        <template slot="right">
          <div class="acc-page">

            <ul class="tab-nav sm no-margin">
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">邀请链接</a></li>
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">我的好友</a></li>
            </ul>
            <div v-show="investBill==1">
                <h4 class="acc-page-title">我成功邀请的好友</h4>
                <div class="acc-search">
                    <form>
                        <input name="key" id="keyStr" class="acc-search-ipt" v-model="title" placeholder="请输入关键词" type="text">
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
                <table class="acc-table table text-center" cellspacing="0" cellpadding="0" border="0">
                    <thead>
                        <tr>
                            <th  class="text-center">序号</th>
                            <th class="text-center">被邀请人</th>
                            <th class="text-center">注册时间</th>
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
                <div class="share-step">
                    <h4 class="text-bold clearfix">
                        <em>1</em>复制您的专属邀请链接
                        <button class="btn pull-right mr30" id="copySpreadLink" data-clipboard-text="http://www.liyedai.cn/register?mobile=BFE4999FEE95983A332D033D887BA66B" type="button" @click="copy">一键复制</button>
                        <textarea ref="copyText" id="" cols="30" rows="10" v-model="copyText" style="" class="select-text"></textarea>
                    </h4>
                    <div class="share-link">
                        <input class="input-share" v-model="copyText" readonly="" type="text">
                    </div>
                </div>
                <div class="share-step pt20">
                    <h4 class="text-bold">
                        <em>2</em>分享到社交平台</h4>
                    <input id="wechatLink" value="" type="hidden">
                    <ul class="clearfix share-item">
                        <li class="bdsharebuttonbox" data-tag="wc_chat">
                            <a href="javascript:;" class="bds_weixin spread-wechat" data-cmd="weixin" data-type="wechat"></a>
                        </li>
                        <li class="bdsharebuttonbox last" data-tag="wc_chat">
                            <a href="javascript:;" class="bds_weixin spread-wfriend" data-cmd="weixin" data-type="wfriend"></a>
                        </li>
                        <li>
                            <a href="javascript:;" target="_blank" data-type="qq">
                                <i class="share-ico ico1"></i>
                                <span>QQ好友</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" target="_blank" data-type="tqq">
                                <i class="share-ico ico2"></i>
                                <span>QQ空间</span>
                            </a>
                        </li>
                    </ul>
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
      startTime: '',
      endTime: '',
      currentPage: 1,
      investBill: 2,
      msg: [],
      reqMsg: [],
      msgDel: [],
      title: '',
      copyText: 'http://www.liyedai.cn/register?mobile=BFE4999FEE95983A332D033D887BA66B'
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
    // console.log(typeof window)
  },
  methods: {
    handleCurrentChange (currentPage) {
      console.log(currentPage)
    },
    cutReq (n) {
      this.investBill = n
    },
    copy (e) {
    //   console.log(e.target.dataset)
    //   console.log(window.copy)

    //   window.clipboardData.setData('Text', e.target.dataset.clipboardText)
    //   console.log(this.$refs.copyText)
      this.$refs.copyText.select()
      document.execCommand('Copy')
      alert('复制成功')
    }
  }
}
</script>
<style lang="scss" scoped>
.share-step {
    padding: 36px 30px 0;
}
.recommend-share h4 {
    height: 34px;
    line-height: 34px;
    font-size: 16px;
}
.recommend-share h4 {
    margin-bottom: 20px;
}
.share-step h4 em {
    margin-right: 20px;
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    border-radius: 16px;
    color: #fff;
    background-color: #ff9036;
    text-align: center;
}
.share-link {
    height: 56px;
    line-height: 56px;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
}
.share-link input {
    margin: 0;
    padding: 10px 20px;
    width: 90%;
    color: #5e5e5e;
}
.share-step {
    padding: 36px 30px 0;
        padding-top: 36px;
}
.share-item li {
    position: relative;
    margin: 20px 0;
    float: left;
    width: 25%;
    height: 172px;
    text-align: center;
}

.bdsharebuttonbox .bds_weixin {
    position: relative;
    display: block;
    float: none;
    font-size: 0;
    margin: 0;
    padding: 0;
    background: 0 0;
    height: 100%;
    z-index: 999999;
}
.bdsharebuttonbox .bds_weixin.spread-wechat {
    margin: 0 auto;
    display: block;
    width: 124px;
    height: 166px;
    background: url(../assets/images/spreadLink_wechat.png) no-repeat center center;
    background-size: cover;
}
.bdsharebuttonbox .bds_weixin.spread-wfriend {
    margin: 0 auto;
    display: block;
    width: 124px;
    height: 166px;
    background: url(../assets/images/spreadLink_wfriend.png) no-repeat center center;
    background-size: cover;
}
.share-item li .share-ico {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: url(../assets/images/ico_share.png);
    background-position: 0 0;
    background-repeat: no-repeat;
}
.share-item li .share-ico.ico2 {
    background-position: -119px 0;
}
.share-item span {
    display: block;
    padding: 20px 0 0;
    color: #474747;
    text-align: center;
    font-size: 16px;
}
.select-text{
    // visibility: hidden;
    height: 34px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: none;
    opacity: 0;
}
</style>
