<template>
    <div id="calender" class="com">
      <div class="modal clearfix">
        <a href="javascript:;" class="modal-close" data-toggle="close" @click="close">X</a>
        <div class="modal-header"><h3 class="modal-title">签到</h3></div>
        <div class="content clearfix">
          <div class="pull-left day-sign-tab">
                <div id="calender_body" class="day_sign">
                    <div id="celender_head" class="daysign-mon">
                      {{header}}
                    </div>
                    <ul class='daysign-day clearfix'>
                        <li v-for="(head,i) in heads" :key="i">{{head}}</li>
                    </ul>
                    <ul class="daysign-date clearfix">
                        <li :class="{last_month:item1.attr === 'last_month',this_month:item1.attr === 'this_month',next_month:item1.attr === 'next_month',on:item1.isSign==='true'}" v-for="(item1,i) in datas " :key="i">
                            {{item1.num}}
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div class="daysign-warn" id="daySignWarn"><div class="on"><i></i>签到成功,赠送10积分！</div></div>
                <a class="daysign-btn" id="daySignBtn" href="javascript:void(0);" @click="daka" ref="daysignBtn"><i></i>立即签到</a>
          </div>
          <div class="pull-right day-sign-info">
            <dl>
              <dt><i></i>签到奖励</dt>
              <dd id="signData"><div class="total">连续签到<span>2</span>天</div></dd>
            </dl>
            <div class="desc">签到可获以下奖励：<br>每日签到可立即获得10积分；<br>连续签到7天可额外获取100积分；<br>连续签到15天可额外获取200积分；<br>连续签到28天可额外获取500积分；<br>月底结算下月统一赠送(需连续签到才可计算奖励，按照本月累计天数计算)<br></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  created () {
    this.setCalender(new Date())
  },

  methods: {
    close () {
      this.$emit('close')
    },
    initline: function () {
      this.datas = []
    },
    daka: function (e) {
      this.datas.forEach((e, i) => {
        if (e.now) {
          e.isSign = true
          var tody = this.$el.querySelectorAll('.daysign-date li')
          // console.log(tody)
          tody[i].classList.add('on')
        }
      })
      this.$refs.daysignBtn.classList.add('off')
      this.$emit('changeQian', true)
    },
    getcurrentDates: function (calenderDate) { // 传入正常的Date（）类型数据
      this.initline()
      var months = calenderDate.getMonth()
      months = months + 1
      calenderDate.setMonth(months)
      calenderDate.setDate(0)

      return calenderDate.getDate()
    },
    getlastDates: function (calenderdDate) { // 传入正常的Date（）类型数据
      var curDate = calenderdDate
      curDate.setDate(0)
      return curDate.getDate()
    },
    setCalender: function (dateNow) {
      // 显示日历部分
      var firstday
      var today = dateNow
      var yy = today.getFullYear()
      this.currentYear = yy
      var mm = today.getMonth() + 1// today=2;mm=3
      this.currentMonth = mm - 1// this.curr=2
      var dd = today.getDate()
      this.currentDay = dd// 30
      firstday = yy + '-' + mm + '-1'// 2018-3-1
      // 本月第一天是星期几,也表示前面有几个空的天数
      var firstdayDay = new Date(firstday).getDay()
      // 日历头
      this.header = yy + '年' + mm + '月'
      var curDays = this.getcurrentDates(today)
      // 上一月有多少天
      var lastDays = this.getlastDates(dateNow)

      // 上个月从哪天开始出现
      var lastFirstDay = lastDays - firstdayDay + 1
      // firstline
      // 存上个月的日期
      for (let i = lastFirstDay; i <= lastDays; i++) {
        var date = {}
        date.num = i
        date.attr = 'last_month'
        date.now = false
        this.datas.push(date)
      }
      // temp存放换行前上一个数据
      // 下一行第一个数字
      //   var numSecond = 7 - firstdayDay + 1
      // 存本月日期
      for (let i = 1; i <= curDays; i++) {
        var dates = {}
        dates.num = i
        dates.attr = 'this_month'
        dates.isSign = this.sign.data[i]
        if (i === this.currentDay && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear()) {
          dates.now = true
        } else {
          dates.now = false
        }
        this.datas.push(dates)
      }
      // 下月日期
      for (let i = 1; i <= 42 - curDays - (lastDays - lastFirstDay + 1); i++) {
        var datea = {}
        datea.num = i
        datea.attr = 'next_month'
        this.datas.push(datea)
      }
    }
  },
  data () {
    return {
      body: '',
      header: '',
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      heads: ['日', '一', '二', '三', '四', '五', '六'],

      datas: [],
      show: [],
      sign: {
        'data': ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'false', 'false', 'false', 'false'],
        'nowDate': 1532672630778,
        'startTime': 1496246400000,
        'endTime': 4102415999000,
        'contiSign': 1,
        'allSign': 1,
        'allVir': 10.0
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.com{
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30000;
}
.modal{
  width: 800px;
  background-color: #fff;
  box-shadow: 1px 2px 12px rgba(0,0,0,.55);
  border-radius: 2px;
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-250px)
}
// 头部
.modal-header {
    padding: 20px 25px 15px;
    background: #F3F3F3;
    border-radius: 2px 2px 0 0;
}
.modal-title {
    margin: 0;
    color: #666;
    font-size: 15px;
    font-weight: 700;
}
// 关闭按钮
.modal-close {
    position: absolute;
    z-index: 10;
    top: 16px;
    right: 16px;
    width: 18px;
    height: 18px;
    overflow: hidden;
    line-height: 10;
    border-radius: 4px;
    background: url(../assets/images/icon.png) -91px 0;
}
// 主体部分
.content {
    min-height: 60px;
    padding: 20px 25px;
    overflow: auto;
    border: none;
    box-shadow: none;
}
// 左侧部分
.daysign-mon {
    position: relative;
    border-radius: 5px 5px 0 0;
    padding: 8px 0 0;
    background: #ffa145;
    line-height: 2em;
    text-align: center;
    font-size: 18px;
    color: #fff;
}
.daysign-day {
    background: #ffa145;
    color: #fff;
    font-size: 14px;
}
.daysign-day li {
    float: left;
    width: 68px;
    text-align: center;
    line-height: 36px;
}
.daysign-date {
    border-right: 1px solid #ddd;
}
.daysign-date li {
    float: left;
    width: 67px;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
    line-height: 52px;
    font-size: 14px;
    color: #6e6e6e;
}
// 已签到过的日期
.daysign-date li.on {
    position: relative;
}

.daysign-date li.on i {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url(../assets/images/sign-mark.png) center center no-repeat;
}
// 当日突出显示
.daysign-date li.curr {
    color: red;
}
// 签到成功提示信息
.daysign-warn {
    margin: 10px 0 0;
    text-align: center;
    color: red;
    line-height: 24px;
    font-size: 14px;
    .on {
      color: #666;
      i {
        background-image: url(../assets/images/tips-small.png);
      }
    }

    i {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin: 0 5px 0 0;
        background: url(../assets/images/warn-small.png) center center no-repeat;
        vertical-align: -2px;
    }
}

// 签到
.daysign-btn.off {
    background: #aaa;
    cursor: default;
}
.daysign-btn {
    display: block;
    width: 240px;
    margin: 12px auto 0;
    border-radius: 3px;
    background: #ffa145;
    text-align: center;
    line-height: 40px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.daysign-btn i {
    display: inline-block;
    width: 32px;
    height: 28px;
    margin: 0 8px 0 0;
    background: url(../assets/images/sign.png) center center no-repeat;
    vertical-align: -7px;
}
// 右侧部分
.day-sign-info {
    width: 253px;
    float: right;
    .desc {
        margin: 12px 0 0;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 18px 12px;
        line-height: 1.8em;
        color: #979797;
    }
    dt {
        border-radius: 5px 5px 0 0;
        padding: 5px 0;
        background-color: #ffa145;
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 2em;
        i {
            display: inline-block;
            width: 19px;
            height: 23px;
            margin: 0 8px 0 0;
            background: url(../assets/images/calendar.png) center center no-repeat;
            vertical-align: -5px;
        }
    }
    dd {
        border: 1px solid #ddd;
        border-top: none;
        padding: 12px 0;
        text-align: center;
        line-height: 2em;
        div.total {
            margin: 12px 0 5px;
        }
        div {
            color: #ff850e;
            font-size: 16px;
            span {
                margin: 0 5px;
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
}

.pull-right {
    float: right!important;
}
</style>
