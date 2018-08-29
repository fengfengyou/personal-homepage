<template>
<div class="page">
    <div class="container clearfix">
        <ul class="breadcrumb">
            <li class="title">您的位置：</li>
            <li class="link-home"><a class="acc-home" href="#/"><i class="icon"></i>首页</a></li>
            <li><a href="#/account/secureAuth">我的账户</a></li>
            <li id="accountPageTitle" class="active">密码管理</li>
        </ul>
    </div>
    <div class="container account-wrap clearfix card p-a-0" id="accMenu">
        <AccountLeft></AccountLeft>
        <div class="pull-right account-right">
            <div class="acc-page">
                <h4 class="acc-page-title">密码管理</h4>
                <div class="tab-content secur-setting">
                    <div class="tab-pane active" id="passwordRst">
                    <form action="/front/account/savePassword" method="post" class="vform">
                        <input name="encryString" type="hidden">
                        <div class="form-group">
                        <label>
                            <span class="text-right">
                            <i class="text-danger">* </i>旧登录密码：</span>
                            <input name="oldPassword" maxlength="20" type="password">
                        </label>
                        <label>
                            <span class="text-right">
                            <i class="text-danger">* </i>新密码：</span>
                            <input class="pwdInput" name="newPassword1" maxlength="20" type="password">
                        </label>
                        <div class="pwd-strength">
                            <p>
                            <i>弱</i>
                            <i>中</i>
                            <i>强</i>
                            </p>
                            <p class="h6 text-danger">建议密码由6位以上数字、字母和特殊字符组成。</p>
                        </div>
                        </div>
                        <div class="form-group">
                        <label>
                            <span class="text-right">
                            <i class="text-danger">* </i>确认新密码：</span>
                            <input name="newPassword2" maxlength="20" type="password">
                        </label>
                        </div>
                        <p class="modify-pw-error error-info text-danger"></p>
                        <div class="form-group text-center">
                        <button class="btn btn-danger no-radius">确认</button>
                        </div>
                    </form>
                    </div>
                    <div class="modifypwd-notice text-danger">
                    <p>温馨提示</p>
                    <ol>
                        <li>1. 定期更换密码可让您的账户更加安全</li>
                        <li>2. 建议密码采用字母数字和特殊字符混合，并且不短于6位，不大于16位</li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import AccountLeft from '@/components/AccountLeft'
export default {
  data () {
    return {

    }
  },
  components: {
    AccountLeft
  }
}
</script>

<style scoped lang="scss">
p {
    margin: 0 0 10px;
}
.text-bold {
    font-weight: 700;
}
.h4, h4 {
    font-size: 18px;
}
@keyframes openDeposit {
  0%{
    // display: block;
    height: 0;
    overflow: hidden;
  }
  100%{
    height: 400px;
    overflow: hidden;
    // display: none;
  }
}
// 当前所在页面突出显示
.breadcrumb > .active {
    color: #ff7d12;
}
.showTab-enter-active{
  animation-name: openDeposit;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  transition: all 0.6s;
}
.card {
  padding: 15px;
  box-shadow: 0 0 0 1px #e0e0e0;
  margin-bottom: 15px;
  // background-color: #fff;
  margin-left: 1px;
  margin-right: 1px;
  // margin: 5px;
  // border: 1px solid #0ff;
}
.account-wrap.card {
    box-shadow: none;
    padding: 0;
}
.account-wrap {
    background: 0 0;
}
input[type="text"], input[type="password"], input[type="file"], select, textarea{

    width: 200px;
    padding: 8px 4px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 100%;
    vertical-align: middle;
    -webkit-transition: all .15s;
    -moz-transition: all .15s;
    transition: all .15s;

}
input[type="text"][readonly] {
    border-color: transparent;
    pointer-events: none;
    box-shadow: none;
}
.sec-getsms-input {
    width: 168px !important;
}
// 您的位置
.container {
    width: 1200px;
    margin: 0 auto;
}
.breadcrumb {
    padding: 8px 0;
    margin: 5px 0;
    list-style: none;
    li {
        display: inline-block;
    }
    li.title {
        font-weight: 700;
    }
}
.breadcrumb>li+li:before {
    padding: 0 5px;
    color: #ccc;
    content: "\003e";
}
.breadcrumb .link-home::before {
  content: '';
  padding: 0;
}
.acc-home i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 4px 0 0;
    -webkit-transition: all ease .2s;
    -moz-transition: all ease .2s;
    transition: all ease .2s;
    vertical-align: -2px;
    background: url(../assets/images/icon.png) -164px -3px no-repeat;
}

// 主体部分
.account-wrap {
    position: relative;
    z-index: 0;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
    // border: 1px solid red;
}

// 右侧主体
.account-right {
  width: 986px;
  background: #fff;
  padding-bottom: 3000px;
  margin-bottom: -3000px;
  // border: 1px solid #0ff;
  float: right;
  // margin-left: 10px;
}
// 右侧安全认证
.acc-page {
    position: relative;
    padding: 42px 0;
    margin: 0 60px;
}
.secur-setting {
    margin: 30px auto;
}
.acc-page-title {
    padding: 0 4px;
    font-weight: 700;
    line-height: 36px;
    border-bottom: 2px solid #d9d9d9;
}
.secur-score {
    padding: 20px 10px;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
}

.secur-setting.secur-auth .card {
    position: relative;
    z-index: 1;
}
.secure-auth-groups li .card {
    padding: 25px 15px;
}
.secur-setting{
  form {
    width: 520px;
    margin: 0 auto;
    padding-left: 40px;
  }
  label {
    display: block;
    position: relative;
    margin-bottom: 20px;
    span {
    display: inline-block;
    width: 130px;
    padding-right: 20px;
    i{
      vertical-align: middle;
    }
    }

  p {
    margin-bottom: 0;
    display: inline-block;
    width: 300px;
    height: 35px;
    line-height: 35px;
    padding: 0 4px;
    border: 1px solid #ddd;
    background: #eee;
    font-size: 100%;
    vertical-align: middle;
    img{
      vertical-align: middle;
    }
    u {
    margin-left: 8px;
    display: inline-block;
    color: #999;
    text-decoration: none;
    }
  }
  p.is-open {
    border: 0;
    background: 0 0;
  }

  }
  input[type="text"], .secur-setting input[type="password"], .secur-setting textarea {
    width: 300px;
  }
  input[type="text"][readonly].input-border {
    border: 1px solid #ddd;
  }
  input[type="password"], .secur-setting textarea {
    width: 300px;
  }
  label.w134{
    margin-bottom: 0;
    height: 31px;
  }

  // 重置密码部分不同设置

  .pwd-strength {
      padding-left: 150px;
      i {
          display: inline-block;
          width: 45px;
          font-size: 12px;
          font-style: normal;
          line-height: 1.4;
          text-align: center;
          color: #fff;
          background-color: #ccc;
      }
  }
}
.form-group{
  margin-bottom: 0;
  overflow: visible;
  padding: 6px 0;
  position: relative;
  width: 100%;
  a:hover {
    text-decoration: none;
    color: #f60;
  }
}
.secur-auth .error-info {
    width: 465px;
    margin: 0 0 20px;
    text-align: center;
}
.error-info .error {
    display: block;
    padding: 10px;
    color: red;
    border: 1px solid #ffcdcd;
    border-radius: 2px;
    background: #f2dede;
    text-align: center;
}
.secur-setting button {
    width: 200px;
}
.btn {
    display: inline-block;
    padding: 6px 24px;
    font-size: 16px;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    color: #fff;
    border: none;
    border-radius: 4px;
    background-color: #f79a57;
    vertical-align: middle;
    cursor: pointer;
}
</style>
