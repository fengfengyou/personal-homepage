<template>
  <div id="app">
    <TopHeader></TopHeader>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import Footer from './components/Footer'
import 'element-ui/lib/theme-chalk/index.css'
import './style/elemeUi.min.css'
import './style/account.min.css'
export default {
  name: 'App',
  components: {
    TopHeader,
    Footer
  }
}
</script>

<style lang="scss">
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote,select, th, td {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  a, button, input, select, textarea {
      outline: 0;
  }
  a {
    text-decoration: none;
    color: #333;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  a:hover {
    text-decoration: none;
    color: #f60;
  }

  // h1-h6字体设定
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  .h3, h3 {
    font-size: 24px;
  }
  .h4,
  h4 {
      font-size: 18px;
  }
  .h6, h6 {
    font-size: 12px;
  }
  .h4, .h5, .h6, h4, h5, h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .f16 {
    font-size: 16px;
  }
  .h5, h5 {
      font-size: 14px;
  }
  .h4, .h5, .h6, h4, h5, h6 {
      margin-top: 10px;
      margin-bottom: 10px;
  }

  .sitemap a {
    text-decoration: none;
    color: #999;
  }
  .clearfix:after{
    content: '';
    clear: both;
    display: block;
  }
  body, button, input, select, textarea {
    font-family: "Microsoft Yahei","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #f5f5f5;
    line-height: 1.4em;
  }
  #app {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  // 栅栏布局
  .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9 {
      float: left;
  }
  .col-3 {
      width: 25%;
  }
  .col-8 {
    width: 66.66666667%;
  }
  .col-9 {
    width: 75%;
  }
  .col-6 {
    width: 50%;
  }
  // 历史年化
  .hint {
    position: relative;
    cursor: pointer;
  }
  .hint-top:hover::after, .hint-top:hover::before {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  .hint:hover::after, .hint:hover::before {
    opacity: 1;
  }
  .hint-top::after {
      margin-left: -50px;
  }
  .hint-top::after, .hint-top::before {
    bottom: 138%;
    left: -50%;
  }
  .hint::after {
      content: attr(data-tip);
      background: rgba(255,205,165,.88);
      width: 166px;
      line-height: 20px;
      color: #E85800;
      padding: 8px 10px;
      font-size: 12px;
      font-weight: 100;
      text-align: center;
      text-indent: 0;
      border-radius: 6px;
      -o-box-shadow: 4px 4px 8px rgba(0,0,0,.3);
      box-shadow: 4px 4px 8px rgba(0,0,0,.3);
  }
  .hint-tip:hover::after,.hint-tip:hover::before{
    opacity: 1;
  }
  .hint::after, .hint::before {
      position: absolute;
      opacity: 0;
      z-index: 10;
      pointer-events: none;
      -webkit-transition: .3s ease;
      -moz-transition: .3s ease;
      transition: .3s ease;
  }
  .hint.hint-top::before {
      top: -38%;
      left: 48%;
      border-top-color: rgba(254,124,21,.3);
  }
  .hint::before {
      content: '';
      position: absolute;
      background: 0 0;
      border: 6px solid transparent;
      z-index: 11;
  }

  // 定位布局
  .r-0 {
    right: 0;
  }
  .r-94 {
    right: -94px;
  }
  // 外间距
  .mr30 {
    margin-right: 30px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt40 {
    margin-top: 40px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .ml10 {
    margin-left: 10px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .ml50 {
    margin-left: 50px;
  }
  .mr30 {
    margin-right: 30px;
  }
  .pt20 {
      padding-top: 20px !important;
  }
  .p-a-0 {
    padding: 0 !important;
  }
  // input格式
  input[type="text"], input[type="password"], input[type="file"], select, textarea {
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
a, button, input, select, textarea {
    outline: 0;
}
// 表格样式
  table {
      border-spacing: 0;
      border-collapse: collapse;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .table > caption + thead > tr:first-child > td, .table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > td, .table > thead:first-child > tr:first-child > th {
      border-top: 0;
  }
  .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
    padding: 8px;
    line-height: 1.42857143;
    border-top: 1px solid #ddd;
  }
  .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    font-weight: 700;
  }

  caption, th {
      font-style: normal;
      font-weight: 400;
      text-align: left;
  }
  // 图片
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  // em，strong
  em, strong {
      font-style: normal;
      font-weight: 700;
  }
  // 分页
  .pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
    z-index: 3;
    color: #666;
    cursor: default;
    border-color: #fe9d50;
  }
  .pagination > li > a, .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #333;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }
  // 按钮
  .btn.disabled, .btn[disabled] {
    background-color: #ccc !important;
    cursor: not-allowed;
    color: #fff !important;
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
  .btn.no-radius {
      border-radius: 0;
  }
  .modal-footer .btn {
      margin-right: 2px;
      margin-left: 2px;
  }
  // 日历宽度
  .day-sign-tab {
    width: 477px;
  }
  // 左浮动
  .pull-left {
      float: left!important;
  }
  // 右浮动
  .pull-right {
    float: right !important;
  }
  // 警告信息
  .error-news-mobile .error, .error-old-mobile .error, .error-r-info, .form-group em.error, .secur-setting form.invalid .error-info .error {
    -webkit-animation-name: shake;
    -moz-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: .4s;
    -moz-animation-duration: .4s;
    animation-duration: .4s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .sign-tips-err span.error{
    display: none;
  }
  .sign-tips-err span.error::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
    background: url(./assets/images/warn-small.png) center center no-repeat;
    vertical-align: -2px;
  }
  .sign-tips-err span.error {
    font-size: 12px;
    padding: 5px 10px 5px 0;
    line-height: 1.5em;
    border: 0;
    background: 0 0;

  }
  span.error.show{
    display: inline-block;
  }
  .error-info .error {
    display: block;
    padding: 10px;
    color: red;
    border: 1px solid #ffcdcd;
    border-radius: 2px;
    background: #f2dede;
  }
  .w86{
    width: 86px;
    display: inline-block !important;
  }
  .poiner{
    cursor: pointer;
  }

  // 绑定银行卡图标
  .btn-bind {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -48px;
    margin-left: -43px;
    width: 86px;
    height: 96px;
    line-height: 96px;
  }
  .btn-bind span {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 66px;
    height: 66px;
    background: url(/public/img/jiangxi/add.png) no-repeat;
  }
  .btn-bind p {
    margin: 5px 0 0;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
  }

  // 文字设置
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .text-danger {
      color: red;
  }
  .text-center{
    text-align: center;
  }
  .text-info {
    color: #00aeef;
  }
  .text-bold {
      font-weight: 700;
  }
  .text-notice {
    color: #ff850e;
  }
  .text-mutered {
    color: #aaa;
  }
  p {
      margin: 0 0 10px;
  }
  .sitemap .lyd-info p {
    margin-bottom: 0;
  }

  // 选项卡
  .tab-nav {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  // 定位
  .carousel {
      position: relative;
  }
  // :hover变色
  a.text-info:focus, a.text-info:hover {
      color: #f60;
  }
  // 下虚线
  hr {
    border: 0;
  }
  hr.dashed {
    border-bottom: 1px dashed;
  }
  // 超出文字隐藏
  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  // 组件宽度
  .com{
    width: 1200px;
    margin: 0 auto;
  }
  // 项目预设
  .card {
    padding: 15px;
    box-shadow: 0 0 0 1px #e0e0e0;
    margin-bottom: 15px;
    background-color: #fff;
  }
</style>
