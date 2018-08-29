<template>
<div class="com">
    <div class="modal">
        <div class="modal-header">
            <h3 class="modal-title">提现限额</h3>
        </div>
        <div class="modal-content">
            <table class="acc-recs-banklist" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                <th></th>
                <th>提现单笔限额</th>
                <th>单日限额</th>
                <th>单月限额</th>
                <th width="200">备注</th>
                </tr>
                <tr>
                <td>工商银行</td>
                <td>99万</td>
                <td>99万</td>
                <td>不限</td>
                <td class="t-l">最高限额，需要单笔超过5万元</td>
                </tr>
                <tr>
                <td>建设银行</td>
                <td>100万</td>
                <td>200万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>农业银行</td>
                <td>2000</td>
                <td>1万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>招商银行</td>
                <td>10万</td>
                <td>10万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>中国银行</td>
                <td>5万</td>
                <td>5万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>交通银行</td>
                <td>20万</td>
                <td>20万</td>
                <td>600万</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>光大银行</td>
                <td>5万</td>
                <td>5万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>兴业银行</td>
                <td>5万</td>
                <td>5万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>邮储银行</td>
                <td>1万</td>
                <td>1万</td>
                <td>300万</td>
                <td class="t-l">需要开通银联在线</td>
                </tr>
                <tr>
                <td>平安银行</td>
                <td>不限</td>
                <td>不限</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>中信银行</td>
                <td>5000</td>
                <td>1万</td>
                <td>2万</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>浦发银行</td>
                <td>20万</td>
                <td>20万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>广发银行</td>
                <td>100万</td>
                <td>不限</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>华夏银行</td>
                <td>2万</td>
                <td>2万</td>
                <td>不限</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>上海银行</td>
                <td>5000</td>
                <td>1万</td>
                <td>2万</td>
                <td class="t-l">需要开通银联无卡支付功能</td>
                </tr>
                <tr>
                <td>北京银行</td>
                <td>100万</td>
                <td>100万</td>
                <td>300万</td>
                <td class="t-l"></td>
                </tr>
                <tr>
                <td>广州银行</td>
                <td>50万</td>
                <td>100万</td>
                <td>3000万</td>
                <td class="t-l"></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <button href="javascript:;" data-toggle="close" class="btn btn-danger no-radius" @click="closeModal">关闭</button>
        </div>
        <a href="javascript:;" class="modal-close open" data-toggle="close" @click="closeModal">X</a>
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

  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
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
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99999;
    min-width: 300px;
    background-color: #fff;
    box-shadow: 1px 2px 12px rgba(0,0,0,.55);
    border-radius: 2px;
    text-align: left;
}
.modal-header {
    padding: 20px 25px 15px;
    background: #F3F3F3;
    border-radius: 2px 2px 0 0;
}
.modal-content {
    min-height: 60px;
    padding: 20px 25px;
    overflow: auto;
    border: none;
    box-shadow: none;
}
.modal-footer {
    padding: 10px 15px 15px;
    border-top: none;
    text-align: right;
}
.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 18px;
    height: 18px;
    overflow: hidden;
    line-height: 10;
    border-radius: 4px;
    background: url(../assets/images/icon.png) -91px 0;
}
.modal-title {
    margin: 0;
    color: #666;
    font-size: 15px;
    font-weight: 700;
}
.acc-recs-banklist {
    margin: 20px 0 15px;
    width: 660px;
    font-size: 12px;
}
.acc-recs-banklist tr td, .acc-recs-banklist tr th {
    border: 1px solid #ccc;
    text-align: center;
    padding: 3px 10px;
}
.acc-recs-banklist tr th {
    color: #FE6600;
    font-weight: 700;
}
.acc-recs-banklist tr td.t-l {
    text-align: left;
}
</style>
