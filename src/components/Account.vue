<template>
    <div class="com">
        <div class="container clearfix">
            <ul class="breadcrumb">
                <slot name="breadcrumb"></slot>
            </ul>
        </div>
        <div class="container account-wrap clearfix card p-a-0" id="accMenu">
            <AccountLeft></AccountLeft>
            <div class="pull-right account-right">
                <slot name="right"></slot>
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
.acc-home:hover i {
    background-position: -164px -23px;
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
.breadcrumb > .active{
    color: #ff7d12;
}
  // 主体部分
.account-wrap {
    position: relative;
    z-index: 0;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1; // border: 1px solid red;
}

  // 右侧主体
.account-right {
    width: 986px;
    background: #fff;
    padding-bottom: 3000px;
    margin-bottom: -3000px; // border: 1px solid #0ff;
    float: right; // margin-left: 10px;
}
</style>
