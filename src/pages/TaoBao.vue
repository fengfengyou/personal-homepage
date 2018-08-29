<template>
    <div class="hao">
        <h1>taobao</h1>
        <div class="content">

            <div class="left">
                <ul>
                    <li v-for="(item,i) in shopList" :key="i" @click="checked(item.tag)">
                        <a href="javascript:void(0);">{{item.tag}}</a>
                    </li>
                </ul>
            </div>

            <div class="right">

                <div class="middle">
                    <ul v-for="(item,i) in shopList" :key="i" v-show="checkedItem==item.tag">
                        <li v-for="(items,n) in item.list" :key="n">
                            <h3>{{items.nList}}</h3>
                            <a href="javascript:void(0);"></a>
                        </li>
                    </ul>
                    <span>内容</span>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      shopList: {

        clothes: {
          tag: '衣服',
          list: [
            {
              nList: '裙子'
            },
            {
              nList: '西装'
            }
          ]
        },

        shoes: {
          tag: '鞋子',
          list: [
            {
              name: '男鞋',
              nList: '马丁靴'
            },
            {
              name: '女鞋',
              nList: '高跟鞋'
            }
          ]
        },

        bags: {
          tag: '包包',
          list: [
            {
              name: '休闲包',
              nList: '帆布包'
            },
            {
              name: '商务包',
              nList: '手提包'
            }
          ]
        }
      },
      checkedItem: '衣服'
    }
  },
  mounted () {
    console.log(this.shopList[0])
  },
  methods: {
    checked (v) {
      this.checkedItem = v
    }
  }
}

</script>

<style scoped>
    .content {
        border: solid 1px black;
        width: 800px;
        margin: 0 auto;
        height: 300px;
    }

    .left {
        border: solid 1px green;
        width: 200px;
        float: left;
    }

    .left ul {
        width: 100%;
        /*padding: 10px 25px;*/
    }

    .left ul li {
        width: 100%;
    }

    .left ul li:hover {
        background-color: pink;
        color: orangered;
    }

    .left ul li a:hover {
        color: orangered;
    }

    .left a {
        color: black;
        display: inline-block;
    }

    .right {
        border: solid 1px red;
        width: 596px;
        float: right;
        height: 300px;
        position: relative;

    }
    .middle {
        width: 400px;
        height: 300px;
        background-color: aquamarine;
        position: absolute;
        top: 0;
        left: 0;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;

    }
</style>
