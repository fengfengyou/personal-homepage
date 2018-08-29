<template>
 <div class="com">
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
        <select class="acc-search-sel a-s-s-big" name="statusType" id="statusType">
            <slot name="select"></slot>
        </select>
        <button class="acc-search-btn btn">搜索</button>
        <a class="acc-dwonload-btn btn" href="javascript:void(0)">下载</a>
        </form>
    </div>
    <slot name="tabel"></slot>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper,->"
      :total="total">
    </el-pagination>
 </div>
</template>

<script>
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      currentPage: 1
    }
  },
  props: ['total'],
  components: {

  },
  methods: {
    handleCurrentChange (val) {
    //   console.log(`当前页: ${val}`)
      this.$emit('ajax-page', val)
    }
  }
}
</script>

<style lang="scss">
.acc-search {
    padding: 0 0 20px;
    margin: 24px 0;
    border-bottom: 1px solid #c6c6c6;
}
input.ipt-datepicker {
    margin: 0;
    background: url(/public/img/common/ico-date.png) 102px center no-repeat;
}
input.acc-search-ipt {
    width: 120px;
    padding: 3px 4px;
    margin: 0 12px 0 0;
    vertical-align: middle;
}
.acc-search-spt {
    color: #b3b3b3;
}
input.ipt-datepicker {
    margin: 0;
    background: url(/public/img/common/ico-date.png) 102px center no-repeat;
}
input.acc-search-ipt {
    width: 120px;
    padding: 3px 4px;
    margin: 0 12px 0 0;
    vertical-align: middle;
}
select.acc-search-sel {
    width: 120px;
    padding: 2px 4px;
    margin: 0 12px 0 0;
    vertical-align: middle;
}
.acc-search-btn {
    margin: 0 0 0 12px;
    vertical-align: middle;
    font-size: 12px;
}
.acc-dwonload-btn {
    font-size: 12px;
    line-height: 1.4;
}
.acc-table {
    padding-right: 4px;
    padding-left: 4px;
    font-size: 12px;
}
.acclist-empty span {
    display: inline-block;
    padding: 15px 10px;
    margin: 50px 0;
    zoom: 1;
    font-size: 18px;
    line-height: 1.6em;
    text-align: center;
    color: #ccc;
    border: 1px solid #ccc;
}
.acc-table tr td {
    position: relative;
    z-index: 0;
}
.acclist-empty {
    text-align: center;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 130px;
}
// .el-input--small .el-input__inner {
//     height: auto;
//     line-height: 1.4rem;
// }
.el-input--small .el-input__inner {
    width: 120px;
    height: auto;
    line-height: 1.4rem;
}
.el-input--prefix .el-input__inner {
    // padding-left: 30px;
    padding: 3px 4px;
}
.el-input--suffix .el-input__inner {
    // padding-right: 30px;
    padding: 3px 4px;
}
.el-input__prefix {
    width: 25px;
    right: 10px;
    left: auto;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    -webkit-transition: all .3s;
    height: 100%;
    color: #c0c4cc;
    text-align: right;
}
.el-pager li.active {
    color: #333;
    cursor: default;
    border: 1px solid #fe9d50;
    border-radius: 3px;
}
.el-pager li {
    padding: 0;
    background: #fff;
    font-size: 1rem;
    min-width: 34px;
    height: 34px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
}
.el-pagination {
    text-align: center;
    font-weight: 400;
    margin: 20px 0;
}

.el-pagination button, .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 1rem;
    min-width: 34px;
    height: 34px;
    line-height: 34px;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
