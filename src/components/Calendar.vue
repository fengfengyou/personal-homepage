<template>
   <div id="calender" class="ov-calendar">
       <span class="arrow-top"><span class="arrow-top-inner"></span></span>
                <div id="calender_body" class="ov-calendar-body">
                    <div id="celender_head" class="ov-calendar-title">
                        <span id="left" class="celender_head ov-calendar-prev" @click="left()"><span></span></span>
                        <span id="celender_head_inner" class="celender_head ov-calendar-curr">{{header}}</span>
                        <span id="right" class="celender_head ov-calendar-next" @click="right()"><span></span></span>
                    </div>
                    <ul class='head ov-calendar-week clearfix'>
                        <li v-for="(head,i) in heads" :key="i">{{head}}</li>
                    </ul>
                    <ul v-for="(item,n) in show" :key="n" class="ov-calendar-day clearfix">
                        <li :class="{now: item1.now, last_month:item1.attr === 'last_month',next_month:item1.attr === 'next_month'}" v-for="(item1,i) in item " :key="i">
                            {{item1.num}}
                        </li>
                    </ul>
                </div>
                <!-- <div id="calender_foot">
                    <p @click="backToday">回到今天</p>
                </div> -->
            </div>
</template>

<script>
export default {
  created () {
    this.setCalender(new Date())
  },

  methods: {
    initline: function () {
      this.datas = []
      this.show = []
    },
    backToday: function () {
      this.setCalender(new Date())
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
    left: function () {
      this.initline()
      var yy = this.currentYear
      var mm = this.currentMonth
      var dd = 1
      if (yy === new Date().getFullYear() && mm === new Date().getMonth() + 1) {
        dd = new Date().getDate()
      }
      if (mm === 0) {
        mm = 12; yy = yy - 1
        this.currentMonth = mm
        this.currentYear = yy
      }
      var calenderrDate = yy + '-' + mm + '-' + dd
      this.setCalender(new Date(calenderrDate))
    },
    right: function () {
      this.initline()
      var yy = this.currentYear
      var mm = this.currentMonth + 2
      var dd = 1
      if (yy === new Date().getFullYear() && mm === new Date().getMonth() + 1) {
        dd = new Date().getDate()
      }
      if (mm > 12) {
        mm = 1; yy++
        this.currentMonth = mm
        this.currentYear = yy
      }
      var calenderDate = yy + '-' + mm + '-' + dd
      this.setCalender(new Date(calenderDate))
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
        // this.dateData.firstline.push(date);
      }
      // temp存放换行前上一个数据
      // 下一行第一个数字
      //   var numSecond = 7 - firstdayDay + 1
      // 存本月日期
      for (let i = 1; i <= curDays; i++) {
        var dates = {}
        dates.num = i
        dates.attr = 'this_month'
        if (i === this.currentDay && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear()) {
          dates.now = true
        } else {
          dates.now = false
        }
        this.datas.push(dates)
      }
      for (let i = 1; i <= 42 - curDays - (lastDays - lastFirstDay + 1); i++) {
        var datea = {}
        datea.num = i
        datea.attr = 'next_month'
        this.datas.push(datea)
      }

      var k = 0
      for (let i = 0; i < 6; i++) {
        var line = []
        for (let j = 0; j < 7; j++) {
          line.push(this.datas[k++])
        }
        this.show.push(line)
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
      show: []
    }
  }

}
</script>
<style lang="scss" scoped>

$red: red;
$gray:rgb(248,248,248);

.arrow-top {
    position: absolute;
    top: -20px;
    left: 18px;
    width: 0;
    height: 0;
    border: 10px solid #d9d9d9;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
}
.ov-calendar {
    position: relative;
    z-index: 0;
    margin: 55px 0 0;
    border: 1px solid #dad9d9;
    border-radius: 5px;
}
.ov-calendar-body {
    position: relative;
    z-index: 0;
    width: 664px;
    height: 332px;
    margin: 0 auto;
}
.ov-calendar-title {
    font-weight: 700;
    line-height: 42px;
    text-align: center;
}
.ov-calendar-curr {
    display: inline-block;
    width: 232px;
    margin: 0 20px;
    border-right: 1px solid #e5e7e9;
    border-left: 1px solid #e5e7e9;
}
// 左右箭头
.ov-calendar-next, .ov-calendar-prev {
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    cursor: pointer;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    transition: .2s;
    vertical-align: middle;
    border: 8px solid #474e5d;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
.ov-calendar-next {
    border-right-color: transparent;
    border-left-color: #474e5d;
}
.ov-calendar-week {
    margin: 10px 0 0;
    font-weight: 700;
    text-align: center;
    li {
        float: left;
        width: 34px;
        margin: 0 30px 10px;
        line-height: 30px;
    }
}
.ov-calendar-day {
    position: relative;
    li {
        float: left;
        width: 34px;
        margin: 0 30px 10px;
        line-height: 30px;
        text-align: center;
        border-radius: 3px;
    }

    .now{
      color: #fff;
      background-color: red;
      border-radius: 50%;
    }
    .last_month,.next_month{
      color: #ccc;
    }
}
// #calender{
//     position: relative;
//     z-index: 0;
//     margin: 55px 0 0;
//     border: 1px solid #dad9d9;
//     border-radius: 5px;
//     #celender_head{
//         height: 40px;
//         width: 100%;
//         background-color: #fff;

//     .celender_head{
//         line-height: 40px;
//         text-align: center;
//         height: 40px;
//     }

//     #left{
//         height: 40px;
//         width: 40px;
//         float: left;
//     }

//     #celender_head_inner{
//         height: 40px;
//         width: 80px;
//         float: left;
//         margin-left: 60px;
//         line-height:20px
//     }

//     #right{
//         height: 40px;
//         width: 40px;
//         float: left;
//         margin-left: 60px
//     }

//       p{
//         color: #333;
//         font-size: 10px;
//         text-align: center;
//         }
//     }

//     #calender_body {

//         .head td:hover{
//         background-color: $gray
//         }

//         td{
//         width: 40px;
//         height: 40px;
//         text-align: center;
//         line-height: 40px;
//         border-radius: 50%;
//             &:hover{
//             background-color: $red;
//             }
//             &.now {
//             color: $red;
//             }

//     }
//         .last_month {
//             color:lightgray;
//             &:hover {
//                 background-color: $gray
//                     }
//     }

//         .next_month{
//         color:lightgray;
//             &:hover {
//         background-color: $gray
//             }
//     }
//     }

//     #calender_foot{
//         background-color: $gray;
//         text-align: center;
//         line-height:40px;
//         p{
//         color: blue;
//         font-size: 10px;
//         }
//     }
// }

</style>
