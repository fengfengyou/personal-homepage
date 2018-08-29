<template>
 <div class="invest-pagination">
        <span>共
          <span class="text-primary text-bold">7818</span>个标(共{{pages}}页)</span>
        <div id="pager" class="pager" data-total="7818" data-page="1">
          <ul class="pagination">
            <!-- <li class="page" v-for="(e,i) in 10" :key="i">
              <a href="javascript:void(0);">{{e}}</a>
            </li> -->
            <li class="page active">
              <a href="#" data-pageNum="1" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="2" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="3" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="4" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="5" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="6" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="7" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="8" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="9" class="pageNum"></a>
            </li>
            <li class="page">
              <a href="#" data-pageNum="10" class="pageNum"></a>
            </li>
            <li class="next">
              <a href="#" @click="nextPage">下一页</a>
            </li>
          </ul>
        </div>
        <span>到第</span>
        <input v-model="currentPage" id="pageJumpInput" type="text">
        <span>页</span>
        <button class="btn" type="button" id="pageJump" @click="setData">确定</button>
      </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      aNum: document.getElementsByClassName('pageNum'),
      itemNum: 10
    }
  },
  components: {
  },
  mounted () {
    this.setData()
    this.skip()
    // console.log(this.aNum)
  },
  computed: {
    pages: {
      get () {
        return Math.ceil(7818 / this.itemNum)
      }
    }

  },
  methods: {
    skip () {
      console.log(123)
      var bThis = this
      for (let i = 0; i < this.aNum.length; i++) {
        this.aNum[i].onclick = function (e) {
          e.preventDefault()
          bThis.currentPage = this.textContent * 1
          bThis.setData()
        }
      }
    },
    setData () {
      if (this.currentPage <= 5) {
        for (let i = 0; i < this.aNum.length; i++) {
          this.aNum[i].textContent = i + 1
          this.aNum[i].parentNode.classList.remove('active')
        }
        this.aNum[this.currentPage - 1].parentNode.classList.add('active')
      } else {
        for (let i = 0; i < this.aNum.length; i++) {
          this.aNum[i].textContent = this.currentPage - 4 + i
          this.aNum[i].parentNode.classList.remove('active')
        }
        this.aNum[4].parentNode.classList.add('active')
      }
    },
    nextPage (e) {
      e.preventDefault()
      this.currentPage++
      this.setData()
    }
  }
}
</script>

<style scoped lang='scss'>
// 通用样式
table {
    border-spacing: 0;
    border-collapse: collapse;
}
.invest-home .table > tbody > tr > td {
    padding: 22px 0;
    font-size: 16px;
    border-top-style: dashed;
}
// 分页
.invest-pagination {
    padding: 30px 0;
    text-align: center;
    span {
        display: inline-block;
        padding: 7px 0;
        vertical-align: top;
        color: #666;
    }

    .text-primary {
        color: #f70;
    }
    .text-bold {
        font-weight: 700;
        line-height: 6px;
        // vertical-align: middle;
    }
    .pager {
        display: inline-block;
    }
    input {
        width: 40px;
        padding: 6px 0 7px;
        margin: 0 5px;
        text-align: center;
        vertical-align: top;
        border-color: #fff;
        border-radius: 3px;
    }
    input:focus{
      border-color: #fe9d50 !important;
      outline: 0;
    }
    button {
        padding: 6px 12px;
        margin-left: 10px;
        vertical-align: top;
    }
    .pagination {
        margin: 0 30px;
        display: inline-block;
        padding-left: 0;
        border-radius: 4px;
        li {
            display: inline;
            list-style: none;
            a:hover{
              z-index: 3;
              color: #666;
              border-color: #fe9d50;
            }
        }
    }
}
</style>
