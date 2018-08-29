<template>
 <div class="page">
   <div class="ly-debt-banner">
      <a href="#/lend/transfer/TransferIntro" target="_blank"></a>
    </div>
    <div class="invest-home">
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
                <span onclick="sort(1)">转让价格
                  <i></i>
                </span>
              </th>
              <th class="text-right" width="140">
                <span onclick="sort(9)">剩余期限
                  <i></i>
                </span>
              </th>
              <th class="text-center" width="180">还款方式</th>
              <th class="text-center" width="160">
                剩余可投金额
              </th>
              <th class="text-center" width="160">状态</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

              <td class="text-center">
                6,023.0元
              </td>
              <td class="text-right">

                <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>

              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

            <tr>
              <td>
                <u class="icon-cash-activity">奖</u>
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

                 <a href="/front/invest/invest?bidId=34546" class="p-zring" target="_blank">转让中</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.ly-debt-banner a {
    display: block;
    height: 367px;
    min-width: 1200px;
    background: url(../assets/images/banner_debt.jpg) no-repeat 50% 50%;
    background-size: cover;
}

// 借款标
.invest-home{
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #dcdcdc;
  border-top: 2px solid #ff850e;
  background: #fff;
  .table > thead > tr > th {
    padding: 14px 0;
    border: 0;
    background: #fffaf3;
    color: #666;
    font-weight: 400;
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
.p-zring {
    display: inline-block;
    width: 86px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 5px;
    background-color: #FF850E;
    color: #fff;
    font-size: 14px;
}
</style>
