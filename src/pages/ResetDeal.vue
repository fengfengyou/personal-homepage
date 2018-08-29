<template>
    <div id="page">
        <header>
            <div id="zi3">手机号校验</div>
            <img id="xiantiao" src="../assets/images/hengxian.png">
        </header>
        <div class="mobile_form">
            <input id="nextUrl" name="nextUrl" type="hidden">
            <input id="jsessionid" value="6bd487c5-bd91-478b-bd77-6ad023d689dd" type="hidden">
            <div id="dianzi" class="input_line">
                <input name="mobile" id="dian-in-ref" maxlength="11" disabled="true" value="17630023486" placeholder="请输入电子账户预留手机号" type="text">
            </div>
            <div class="input_line duanxin">
                <input name="imageCodeInput" id="tu-in-ref" value="" maxlength="4" placeholder="图形校验码" type="text">
                <img src="/escrow/cp/mobile/validateCode.jsp?dt=1531875981934" class="tuxing-ref" id="imageCode" value="图片">
            </div>

            <div class="duanxin">
                <input name="validCode" id="duan-in-ref" maxlength="6" value="" placeholder="短信校验码" type="text">
                <button class="checkCode-ref" type="button" id="getcode" smstype="1">获取验证码</button>
            </div>

            <div style="position:relative;">
            <div id="display"></div>

            </div>
            <div class="checkCode2">
                <input name="confirmCode" value="确认" class="checkCode1" type="button">
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

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei",tahoma,arial,"Hiragino Sans GB","\5b8b\4f53",sans-serif;
    outline: none;
    -webkit-appearance: none;
    text-decoration: none;
    list-style: none;
    -webkit-appearance: none;
}
#page {
    position: relative;
    width: 600px;
    margin: 120px auto;
    padding: 30px;
    border: 8px solid rgba(26,120,137,0.1);
}
/* 头部标题 */
header {
    background: #DEDCDD;
    height: 55px;
    text-align: center;
    line-height: 53px;
    background-image: url(../assets/images/25.png);
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: 5% 6px;
}
#zi3 {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
}
#xiantiao {
    width: 100%;
    height: 3px;
    display: block;
}
#dianzi {
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    padding: 2px 0px;
    margin-top: 0px;
    margin-top: 22px;
}
#dian-in-ref {
    height: 45px;
    width: 85%;
    border: 0px;
    font-size: 16px;
    padding-left: 52px;
    background-image: url(../assets/images/14.png);
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 3%;
}
.duanxin {
    position: relative;
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    margin: 22px 0 22px 0;
    width: 100%;
}
#tu-in-ref {
    height: 49px;
    width: 51%;
    border: 0px;
    font-size: 16px;
    padding-left: 52px;
    background-image: url(../assets/images/21.png);
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 15px;
}
.tuxing-ref {
    cursor: pointer;
    border: 0px;
    text-align: center;
    line-height: 30px;
    width: 30%;
    height: 38px;
    font-size: 14px;
    color: white;
    /* background: #0d457e; */
    position: absolute;
    top: 5px;
    right: 5.2%;
}
#duan-in-ref {
    width: 51%;
    height: 49px;
    border: 0px;
    font-size: 16px;
    padding-left: 52px;
    background-image: url(../assets/images/14.png);
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 15px;
}
.checkCode-ref {
    cursor: pointer;
    border: 0px;
    text-align: center;
    line-height: 30px;
    width: 30%;
    height: 38px;
    font-size: 14px;
    color: white;
    background: #0d457e;
    position: absolute;
    top: 5px;
    right: 5.2%;
}
#display {
    margin: 0 0 18px 5px;
    color: red;
    font-size: 1rem;
    width: 400px;
    min-height: 30px;
}
.checkCode2 {
    width: 100%;
    text-align: center;
}
.checkCode1 {
    cursor: pointer;
    border: 0px;
    text-align: center;
    line-height: 24px;
    width: 90%;
    height: 42px;
    font-size: 15px;
    color: white;
    background: #10788a;
    /* position: absolute; */
}
</style>
