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
                <li :class="{active:investBill==1}" @click="cutReq(1)"><a href="javascript:void(0);">站内信</a></li>
                <li :class="{active:investBill==2}" @click="cutReq(2)"><a href="javascript:void(0);">未读</a></li>
                <li :class="{active:investBill==3}" @click="cutReq(3)"><a href="javascript:void(0);">已读</a></li>
            </ul>
            <div class="acc-search">
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
                <!-- <tr><td class="acclist-empty" colspan="8"><span>！<br>暂无记录</span></td></tr> -->

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
      msg: [
        {
          title: '注册成功',
          time: '2018-06-26 10:10:00',
          isRead: true
        },
        {
          title: '小立新手活动',
          time: '2018-06-26 10:08:16',
          isRead: false
        },
        {
          title: '111',
          time: '2018-06-26 10:08:16',
          isRead: false
        },
        {
          title: '222',
          time: '2018-06-26 10:08:16',
          isRead: true
        },
        {
          title: '333',
          time: '2018-06-26 10:08:16',
          isRead: true
        },
        {
          title: '444',
          time: '2018-06-26 10:08:16',
          isRead: false
        },
        {
          title: '555',
          time: '2018-06-26 10:08:16',
          isRead: false
        },
        {
          title: '666',
          time: '2018-06-26 10:08:16',
          isRead: true
        }
      ],
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
    }
  },
  mounted () {
    this.classMsg(this.investBill)
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

</style>
