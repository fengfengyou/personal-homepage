<template>
  <div class="container">
    <div class="invest-home">
      <div class="invest-query">
        <form action="" id="queryForm">
          <input name="currPage" value="" type="hidden">
          <input name="type" value="" type="hidden">
          <input name="bidType" value="" type="hidden">
          <input name="apr" value="" type="hidden">
          <input name="period" value="" type="hidden">
          <input name="amount" value="" type="hidden">
          <input name="loanSchedule" value="" type="hidden">
          <input name="orderType" id="orderType" value="" type="hidden">
          <div class="header">投标搜索
            <input name="keywords" value="" placeholder="请输入标题或编号" type="text">
            <button class="btn no-radius" id="searchTitleBtn">搜索</button>
          </div>
          <div class="condition clearfix">
            <div class="col-8" id="condition">
              <div class="row" data-type="type">
                <span class="title">还款方式：</span>
                <a href="/front/invest/investHome" class="active">全部</a>
                <a data-v="1" href="/front/invest/investHome">等额本息</a>
                <a data-v="2" href="/front/invest/investHome">先息后本</a>
                <a data-v="4" href="/front/invest/investHome">约定还款</a>
              </div>
              <div class="row" data-type="bidType">
                <span class="title">标的类型：</span>
                <a href="/front/invest/investHome" class="active">全部</a>
                <a data-v="1" href="/front/invest/investHome">普通标</a>
                <a data-v="2" href="/front/invest/investHome">匹配标</a>
                <a data-v="3" href="/front/invest/investHome">活动标</a>

              </div>
              <div class="row" data-type="period">
                <span class="title">期限：</span>
                <a href="/front/invest/investHome" class="active">全部</a>
                <a data-v="1" href="/front/invest/investHome">1个月以下</a>
                <a data-v="2" href="/front/invest/investHome">1-3月</a>
                <a data-v="3" href="/front/invest/investHome">4-6月</a>
                <a data-v="4" href="/front/invest/investHome">7-9月</a>
                <a data-v="5" href="/front/invest/investHome">10-12月</a>
                <a data-v="6" href="/front/invest/investHome">13-18月</a>
                <a data-v="7" href="/front/invest/investHome">18月以上</a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="invest-list">
        <table class="table invest-tbhome">
          <thead>
            <tr>
              <th class="text-center" width="280">借款标题</th>
              <th class="product-apr-title" width="100">
                <span data-tip="历史年化是立业贷依据历史同期限项目的实际回款利息，结合回款方式和出借本金计算出的比例，仅作为收益参考，不等于实际收益利率，亦不构成平台的任何承诺。" class="hint hint-top" onclick="sort(3)">历史年化
                  <i></i>
                </span>
              </th>
              <th class="text-right" width="150">
                <span onclick="sort(1)">债权总额
                  <i></i>
                </span>
              </th>
              <th class="text-right" width="140">
                <span onclick="sort(9)">期限
                  <i></i>
                </span>
              </th>
              <th class="text-center" width="180">还款方式</th>
              <th class="text-center" width="160">
                <span onclick="sort(5)">进度
                  <i></i>
                </span>
              </th>
              <th class="text-center" width="160">状态</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34546" title="【个人消费】NO.02820180716001" target="_blank">【个人消费】NO.02820180716001</a>
              </td>
              <td class="product-apr">
                <span class="em">11.00</span>%

              </td>
              <td class="text-right">
                <span class="em">113,111</span>元</td>
              <td class="text-right">
                <span class="em">6</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:33.51%"></i>
                </span> 33.51%
                <b>剩余可投金额：75,203元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34546" class="btn btn-invest" target="_blank">立即投标</a>

              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34547" title="【个人消费】NO.01620180718001" target="_blank">【个人消费】NO.01620180718001</a>
              </td>
              <td class="product-apr">
                <span class="em">12.50</span>%

              </td>
              <td class="text-right">
                <span class="em">36,000</span>元</td>
              <td class="text-right">
                <span class="em">12</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34547" class="btn disabled btn-invest" target="_blank">待放款</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34543" title="【个人消费】NO.01220180716002" target="_blank">【个人消费】NO.01220180716002</a>
              </td>
              <td class="product-apr">
                <span class="em">11.00</span>%

              </td>
              <td class="text-right">
                <span class="em">52,205</span>元</td>
              <td class="text-right">
                <span class="em">6</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34543" class="btn disabled btn-invest" target="_blank">待放款</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type"></span>
                <a href="/front/invest/invest?bidId=34549" title="【个人消费】NO.201807180004" target="_blank">【个人消费】NO.201807180004</a>
              </td>
              <td class="product-apr">
                <span class="em">10.50</span>%

              </td>
              <td class="text-right">
                <span class="em">44,399</span>元</td>
              <td class="text-right">
                <span class="em">3</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">
                  等额本息

                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34549" class="btn disabled btn-invest" target="_blank">待放款</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34548" title="【个人消费】NO.01520180718001" target="_blank">【个人消费】NO.01520180718001</a>
              </td>
              <td class="product-apr">
                <span class="em">12.50</span>%

              </td>
              <td class="text-right">
                <span class="em">40,000</span>元</td>
              <td class="text-right">
                <span class="em">12</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34548" class="btn disabled btn-invest" target="_blank">待放款</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type"></span>
                <a href="/front/invest/invest?bidId=34506" title="【个人消费】NO.00520180706001" target="_blank">【个人消费】NO.00520180706001</a>
              </td>
              <td class="product-apr">
                <span class="em">12.50</span>%

              </td>
              <td class="text-right">
                <span class="em">79,474</span>元</td>
              <td class="text-right">
                <span class="em">12</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">
                  等额本息

                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34506" class="btn disabled btn-invest" target="_blank">还款中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34544" title="【个人消费】NO.00220180716001" target="_blank">【个人消费】NO.00220180716001</a>
              </td>
              <td class="product-apr">
                <span class="em">11.00</span>%

              </td>
              <td class="text-right">
                <span class="em">97,884</span>元</td>
              <td class="text-right">
                <span class="em">6</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34544" class="btn disabled btn-invest" target="_blank">还款中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type">约</span>
                <a href="/front/invest/invest?bidId=34542" title="【个人消费】NO.01220180716001" target="_blank">【个人消费】NO.01220180716001</a>
              </td>
              <td class="product-apr">
                <span class="em">11.00</span>%

              </td>
              <td class="text-right">
                <span class="em">130,512</span>元</td>
              <td class="text-right">
                <span class="em">6</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">

                  约定还款
                  <i class="icon-hot"></i>
                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34542" class="btn disabled btn-invest" target="_blank">还款中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type"></span>
                <a href="/front/invest/invest?bidId=34537" title="【个人消费】NO.201807140005" target="_blank">【个人消费】NO.201807140005</a>
              </td>
              <td class="product-apr">
                <span class="em">12.50</span>%

              </td>
              <td class="text-right">
                <span class="em">41,908</span>元</td>
              <td class="text-right">
                <span class="em">12</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">
                  等额本息

                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34537" class="btn disabled btn-invest" target="_blank">还款中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
                <span class="product-type"></span>
                <a href="/front/invest/invest?bidId=34540" title="【个人消费】NO.201807150003" target="_blank">【个人消费】NO.201807150003</a>
              </td>
              <td class="product-apr">
                <span class="em">12.50</span>%

              </td>
              <td class="text-right">
                <span class="em">38,556</span>元</td>
              <td class="text-right">
                <span class="em">12</span>个月 </td>
              <td class="text-center">
                <span class="tip-agency">
                  等额本息

                </span>
              </td>

              <td class="text-center overplus">
                <span class="progress">
                  <i style="width:100.0%"></i>
                </span> 100.0%
                <b>剩余可投金额：0元</b>
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34540" class="btn disabled btn-invest" target="_blank">还款中</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <Paging></Paging>
    </div>
  </div>
</template>

<script>
import Paging from '../components/Paging'
export default {
  data () {
    return {

    }
  },
  components: {
    Paging
  },
  mounted () {
    this.checked()
    document.getElementsByClassName('page')[0].classList.add('active')
  },
  methods: {
    checked () {
      var oRow = document.getElementsByClassName('row')
      for (var i = 0; i < oRow.length; i++) {
        var aA = oRow[i].getElementsByTagName('a')
        for (var y = 0; y < aA.length; y++) {
          var lastThis = aA[0]
          aA[y].onclick = function (e) {
            e.preventDefault()
            lastThis.classList.remove('active')
            this.classList.add('active')
            lastThis = this
          }
        }
        // for (var y = 0; y < oA.getElementsByTagName('a').length; i++) {
        //   oA.children[y].onclick = function () {
        //     this.classList.add('active')
        //   }
        // }
      }
    }
  }
}
</script>

<style scoped lang="scss">

// 页面主体
.container {
    width: 1200px;
    margin: 0 auto;
}
.invest-home {
    margin-top: 20px;
    border: 1px solid #dcdcdc;
    border-top: 2px solid #ff850e;
    background: #fff;
}
// 标题部分
.invest-query {
    padding: 15px 25px;
    // 标题头部
    .header {
      padding: 0 25px 10px;
      margin: -5px -25px 0;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    input[type="text"] {
    width: 276px;
    padding: 7px;
    margin: 0 14px;
    font-size: 14px;
    }
    // 标题主体
    .condition {
      padding: 15px 0;
      border-bottom: 1px dashed #dcdcdc;
      min-height: 148px;
      .row {
          padding: 10px 0;
          a {
              display: inline-block;
              padding: 2px 10px;
              margin: 0 6px;
              border-radius: 15px;
          }
      }
      .title {
          display: inline-block;
          width: 90px;
          text-align: right;
          color: #999;
      }
      .active {
          color: #fff;
          background: #ff942c;
      }
    }
}

// 借款标
.invest-home{
  .table > thead > tr > th {
    padding: 14px 0;
    border: 0;
    background: #fffaf3;
  }
  .table > tbody > tr {
    td:first-child {
      padding-left: 28px;
      white-space: nowrap;
      a {
          display: inline-block;
          max-width: 234px;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: text-top;
          overflow: hidden;
      }
    }
    td:last-child {
        padding-right: 28px;
    }
  }
  .table > tbody > tr:first-child > td {
    border: 0;
  }
  .table > tbody > tr > td {
    padding: 22px 0;
    font-size: 16px;
    // border-top-style: dashed;
  }
  .em, .product-apr > span {
    font-size: 20px;
  }
  // 进度条
  .progress {
    position: relative;
    margin-top: 10px;
    float: left;
    width: 80px;
    height: 4px;
    vertical-align: middle;
    border-radius: 2px;
    background: #fff0db;
    i {
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        border-radius: 2px;
        background: #ff850e;
    }
  }
}
.product-apr-title {
    padding-left: 32px !important;
}
.product-apr {
    padding-left: 26px !important;
    color: #ff850e;
    position: relative;
}
.invest-tbhome{
  th span{
    cursor: pointer;
    i {
      display: inline-block;
      width: 7px;
      height: 10px;
      background: url(../assets/images/p-rtico8.png) no-repeat;
      margin-left: 4px;
    }
  }
  th span.up i {
    background-position: 0 -15px;
  }
  th span.down i {
    background-position: 0 -30px;
  }
  .overplus {
    position: relative;
    b {
        position: absolute;
        left: 0;
        top: 50px;
        line-height: 1;
        color: #999;
        font-size: 12px;
        text-align: left;
        font-weight: 400;
    }
  }

}
// 标提示
.icon-cash-activity {
    display: inline-block;
    padding: 0 2px;
    margin-right: 3px;
    color: #fff;
    border-radius: 2px;
    background: #ff850e;
    text-decoration: none;
}
// 投标按钮
.btn:hover {
    background-color: #ff850e;
    text-decoration: none;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    color: #fff;
}
.product-type {
    display: inline-block;
    padding: 0 2px;
    margin-right: 6px;
    color: #fff;
    border-radius: 2px;
    background: #ff850e;
}
.btn-invest {
    padding: 5px 16px;
    font-size: 14px;
}
.tip-agency {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.icon-hot {
    position: absolute;
    // margin-left: 4px;
    left: calc(100% + 4px);
    top: 2px;
    width: 14px;
    height: 18px;
    background-image: url(../assets/images/icon_home.png);
    background-repeat: no-repeat;
    background-position: 0 0;
}

</style>
