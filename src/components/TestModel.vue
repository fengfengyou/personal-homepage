<template>
 <div class="test-com">
    <div class="modal" style="display:none;" v-show="model">
        <a href="javascript:;" class="modal-close open" data-toggle="close" @click="closeModel">X</a>
        <div class="modal-header">
        <h3 class="modal-title">风险承受能力测评</h3>
        </div>
        <div class="modal-content clearfix">
        <div class="modal-content-inner">
            <p>本问卷旨在了解您可承受的风险程度等情况，借此协助您选择合适的金融产品或金融服务类别，以符合您的风险承受能力。</p>
                <p>风险承受能力评估是本公司向客户履行适当性职责的一个环节，其目的是使本公司所提供的金融产品或金融服务与您的风险承受能力等级相匹配。</p>
                <p>本公司特别提醒您：本公司向客户履行风险承受能力评估等适当性职责，并不能取代您自己的投资判断，也不会降低金融产品或金融服类别。
                </p><p>本公司提示您：本公司根据您提供的信息对您进行风险承受能力评估，开展适当性工作。您应当如实提供相关信息及证明材料，并对所提供的信息和证明材料的真实性、准确性、完整性负责。</p>
                <p>本公司建议：当您的各项状况发生重大变化时，需对您所投资的金融产品及时进行重新审视，以确保您的投资决定与您可承受的投资风险程度等实际情况一致。</p>
                <p>本公司在此承诺，对于您在本问卷中所提供的一切信息，本公司将严格按照法律法规要求承担保密义务。除法律法规规定的有权机关依法定程序进行查询以外，本公司保证不会将涉及您的任何信息提供、泄露给任何第三方，或者将相关信息用于违法、不当用途。</p>
        </div>
        <div class="dialog-button">

            <label for="close-bnt" class="dialog-btn-danger">立即测评</label>
            <input type="checkbox" id="close-bnt" v-model="model" style="display:none;">
            <!-- <a class="dialog-btn-danger" id="btnReview" href="javascript:void(0)">立即测评</a> -->
        </div>
        </div>
    </div>
    <div class="modal-question" v-show="!model">

        <a href="javascript:;" class="modal-close open" data-toggle="close" @click="closeModel">X</a>
        <div class="modal-content">
            <div class="subject-dialog subject-dialog-wrapper" style="position: static;margin: 0;z-index: 10">
                <div class="subject-dialog-inner">
                    <div class="subject-process">
                        <span class="line"></span>
                    </div>
                    <a href="javascript:void(0);" @click="reducePageNum" class="subject-nav s-n-l" id="navStepl"></a>
                    <a href="javascript:void(0);" @click="addPageNum" class="subject-nav s-n-r" id="navStepr"></a>
                    <div class="subject-content" id="navWrap">
                        <ul class="subject-list clearfix" id="navStepTab" style="width: 6800px;" ref="scroll">
                            <li class="subject-item">
                            <h4 class="subject-title">1. 您的年龄在以下哪个范围内？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_age" value="10" type="radio" v-model="questionnaire.age">
                                <i></i>A. 29岁以下</label>
                                <br>
                                <label>
                                <input name="s_age" value="8" type="radio" v-model="questionnaire.age">
                                <i></i>B. 30-39岁</label>
                                <br>
                                <label>
                                <input name="s_age" value="5" type="radio" v-model="questionnaire.age">
                                <i></i>C. 40-49岁</label>
                                <br>
                                <label>
                                <input name="s_age" value="3" type="radio" v-model="questionnaire.age">
                                <i></i>D. 50-59岁</label>
                                <br>
                                <label>
                                <input name="s_age" value="0" type="radio" v-model="questionnaire.age">
                                <i></i>E. 60岁以上</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">2. 您有过几年的投资经验？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_experience_year" value="10" type="radio" v-model="questionnaire.year">
                                <i></i>A. 10年以上</label>
                                <br>
                                <label>
                                <input name="s_experience_year" value="8" type="radio" v-model="questionnaire.year">
                                <i></i>B. 6-10年</label>
                                <br>
                                <label>
                                <input name="s_experience_year" value="5" type="radio" v-model="questionnaire.year">
                                <i></i>C. 3-5年</label>
                                <br>
                                <label>
                                <input name="s_experience_year" value="3" type="radio" v-model="questionnaire.year">
                                <i></i>D. 1-2年</label>
                                <br>
                                <label>
                                <input name="s_experience_year" value="0" type="radio" v-model="questionnaire.year">
                                <i></i>E. 1年以下</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">3. 以下哪项更能说明您的投资经验？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_experience_explain" value="10" type="radio" v-model="questionnaire.experience">
                                <i></i>A. 有投资贵金属、外汇、期货、期权等风险高衍生品经验</label>
                                <br>
                                <label>
                                <input name="s_experience_explain" value="8" type="radio" v-model="questionnaire.experience">
                                <i></i>B. 有投资股票、股票型基金的经验</label>
                                <br>
                                <label>
                                <input name="s_experience_explain" value="5" type="radio" v-model="questionnaire.experience">
                                <i></i>C. 有购买过银行的理财产品、债权基金、分红型、投连险</label>
                                <br>
                                <label>
                                <input name="s_experience_explain" value="3" type="radio" v-model="questionnaire.experience">
                                <i></i>D. 有购买过保本基金、货币基金（如余额宝）、信托等低风险产品</label>
                                <br>
                                <label>
                                <input name="s_experience_explain" value="0" type="radio" v-model="questionnaire.experience">
                                <i></i>E. 从未有过投资经历、只存银行的定期或活期</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">4. 您的家庭年收入目前如何？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_income" value="10" type="radio" v-model="questionnaire.income">
                                <i></i>A. 80万元以上</label>
                                <br>
                                <label>
                                <input name="s_income" value="8" type="radio" v-model="questionnaire.income">
                                <i></i>B. 50-80万元</label>
                                <br>
                                <label>
                                <input name="s_income" value="5" type="radio" v-model="questionnaire.income">
                                <i></i>C. 30-50万元</label>
                                <br>
                                <label>
                                <input name="s_income" value="3" type="radio" v-model="questionnaire.income">
                                <i></i>D. 10-30万元</label>
                                <br>
                                <label>
                                <input name="s_income" value="0" type="radio" v-model="questionnaire.income">
                                <i></i>E. 10万元以下</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">5. 您投资的主要目的是什么？选择最符合您的一个描述：</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_idea" value="10" type="radio" v-model="questionnaire.goal">
                                <i></i>A. 关心长期的高回报，能够接受短期的资产价值波动。</label>
                                <br>
                                <label>
                                <input name="s_idea" value="8" type="radio" v-model="questionnaire.goal">
                                <i></i>B. 倾向长期的成长，较少关心短期的回报以及波动。</label>
                                <br>
                                <label>
                                <input name="s_idea" value="5" type="radio" v-model="questionnaire.goal">
                                <i></i>C. 希望投资能获得一定的增值，同时获得波动适度的年回报。</label>
                                <br>
                                <label>
                                <input name="s_idea" value="3" type="radio" v-model="questionnaire.goal">
                                <i></i>D. 只想确保资产的安全性，同时希望能够得到固定的收益。</label>
                                <br>
                                <label>
                                <input name="s_idea" value="0" type="radio" v-model="questionnaire.goal">
                                <i></i>E. 希望利用投资以及投资所获得的收益在短期内用于大额的购买计划。</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">6. 当您进行投资时（例如基金、股票），您能接受一年内损失多少？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_loss" value="10" type="radio" v-model="questionnaire.loss">
                                <i></i>A. 我能承受50-80％以上亏损</label>
                                <br>
                                <label>
                                <input name="s_loss" value="8" type="radio" v-model="questionnaire.loss">
                                <i></i>B. 我能承受30-50％的亏损</label>
                                <br>
                                <label>
                                <input name="s_loss" value="5" type="radio" v-model="questionnaire.loss">
                                <i></i>C. 我最多只能承受10-20%的亏损</label>
                                <br>
                                <label>
                                <input name="s_loss" value="3" type="radio" v-model="questionnaire.loss">
                                <i></i>D. 我最多只能承受10%以下的亏损</label>
                                <br>
                                <label>
                                <input name="s_loss" value="0" type="radio" v-model="questionnaire.loss">
                                <i></i>E. 我几乎不能承受任何亏损</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">7.目前您的投资主要是哪一品种？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_type" value="10" type="radio" v-model="questionnaire.variety">
                                <i></i>A. 外汇、期货、现货贵金属 等超高风险资产</label>
                                <br>
                                <label>
                                <input name="s_type" value="8" type="radio" v-model="questionnaire.variety">
                                <i></i>B. 股票、股票基金、私募股权基金 等高风险资产</label>
                                <br>
                                <label>
                                <input name="s_type" value="5" type="radio" v-model="questionnaire.variety">
                                <i></i>C. 混合基金、指数基金、结构类产品 等较高风险资产</label>
                                <br>
                                <label>
                                <input name="s_type" value="3" type="radio" v-model="questionnaire.variety">
                                <i></i>D. 银行理财产品、信托、固定收益类基金（有限合伙基金）、货币基金(如余额宝） </label>
                                <br>
                                <label>
                                <input name="s_type" value="0" type="radio" v-model="questionnaire.variety">
                                <i></i>E. 活期、定期存款、国债、保险 </label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">8.如果您拥有50万用来建立资产组合，您会选择下面哪一个组合？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_group" value="10" type="radio" v-model="questionnaire.group">
                                <i></i>A. 低风险投资、一般风险投资、高风险投资的比重分别为 5 ：15 ：80</label>
                                <br>
                                <label>
                                <input name="s_group" value="8" type="radio" v-model="questionnaire.group">
                                <i></i>B. 低风险投资、一般风险投资、高风险投资的比重分别为 10 ：30 ：60</label>
                                <br>
                                <label>
                                <input name="s_group" value="5" type="radio" v-model="questionnaire.group">
                                <i></i>C. 低风险投资、一般风险投资、高风险投资的比重分别为 30 ：40 ：30</label>
                                <br>
                                <label>
                                <input name="s_group" value="3" type="radio" v-model="questionnaire.group">
                                <i></i>D. 低风险投资、一般风险投资、高风险投资的比重分别为 60 ：30 ：10</label>
                                <br>
                                <label>
                                <input name="s_group" value="0" type="radio" v-model="questionnaire.group">
                                <i></i>E. 低风险投资、一般风险投资、高风险投资的比重分别为 80 ：15 ：5</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">9.长期风险承受水平：下面哪一种描述最符合您可接受的价值波动程度？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_vale_range" value="10" type="radio" v-model="questionnaire.degree">
                                <i></i>A. 希望赚取最高回报潜力，能接受3年以上的负面波动，包括损失本金</label>
                                <br>
                                <label>
                                <input name="s_vale_range" value="8" type="radio" v-model="questionnaire.degree">
                                <i></i>B. 希望赚取较高回报潜力，能接受3年以上的负面波动</label>
                                <br>
                                <label>
                                <input name="s_vale_range" value="5" type="radio" v-model="questionnaire.degree">
                                <i></i>C. 寻求资金较高收益，可接受3年内负面波动，使回报显著高于定期存款</label>
                                <br>
                                <label>
                                <input name="s_vale_range" value="3" type="radio" v-model="questionnaire.degree">
                                <i></i>D. 保守投资，但愿意在2年内接受少许负面波动，使回报高于定期存款</label>
                                <br>
                                <label>
                                <input name="s_vale_range" value="0" type="radio" v-model="questionnaire.degree">
                                <i></i>E. 不希望投资本金承担风险。我愿意接受的回报大约与定期存款一样</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <a class="dialog-btn-danger dialog-next" href="javascript:void(0)">下一题</a>
                            </div>
                            </li>
                            <li class="subject-item">
                            <h4 class="subject-title">10.假设现有以下几个投资品种，那您会选择哪一个？</h4>
                            <div class="subject-choice">
                                <label>
                                <input name="s_choose" value="10" type="radio" v-model="questionnaire.select">
                                <i></i>A. 收益率在50%以上，同时本金也有可能亏损80%以上</label>
                                <br>
                                <label>
                                <input name="s_choose" value="8" type="radio" v-model="questionnaire.select">
                                <i></i>B. 本金不保证，收益率在30%以内，同时本金也有可能亏损50%以内</label>
                                <br>
                                <label>
                                <input name="s_choose" value="5" type="radio" v-model="questionnaire.select">
                                <i></i>C. 本息保证，收益率在15%左右</label>
                                <br>
                                <label>
                                <input name="s_choose" value="3" type="radio" v-model="questionnaire.select">
                                <i></i>D. 本息保证，收益率在6-10%之间</label>
                                <br>
                                <label>
                                <input name="s_choose" value="0" type="radio" v-model="questionnaire.select">
                                <i></i>E. 银行定期存款，收益率在3%</label>
                                <br>
                            </div>
                            <div class="dialog-button">
                                <button class="dialog-btn-danger dialog-submit" id="dialogSub" type="button">提交</button>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 0,
      model: true,
      questionnaire: {
        age: null,
        year: null,
        experience: null,
        income: null,
        goal: null,
        loss: null,
        variety: null,
        group: null,
        degree: null,
        select: null
      }
    }
  },
  components: {

  },
  mounted () {
    // console.log(this.$refs.scroll.children[0].offsetWidth)
    this.nextBtn()
  },
  methods: {
    closeModel () {
      this.$emit('close-btn', false)
      this.model = true
    },
    update (swiper) {
      swiper.update()
      this.swiperObj.startAutoplay()
      this.swiperObj.reLoop()
    },
    addPageNum () {
      this.pageNum = this.pageNum < this.$refs.scroll.children.length - 1 ? this.pageNum + 1 : this.$refs.scroll.children.length - 1
      //   console.log(this.pageNum)
      this.swiper()
    },
    reducePageNum () {
      this.pageNum = this.pageNum <= 0 ? 0 : this.pageNum - 1
      //   console.log(this.pageNum)
      this.swiper()
    },
    swiper () {
    //   console.log(this.$refs.scroll.children.length)
      this.$refs.scroll.style.left = -this.pageNum * this.$refs.scroll.children[0].offsetWidth + 'px'
    },
    nextBtn () {
      var el = document.getElementsByClassName('dialog-next')
      for (var i = 0; i < el.length; i++) {
        el[i].onclick = () => {
          this.addPageNum()
        }
      }
    }
  }
}
</script>

<style scoped>
.test-com{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 1.1;
}
.modal{
    width: 820px;
    display: inline-block;
    /* height: 450px; */
    z-index: 100018;
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
.modal-header {
    padding: 20px 25px 15px;
    background: #F3F3F3;
    border-radius: 2px 2px 0 0;
}
.modal-title {
    margin: 0;
    color: #666;
    font-size: 15px;
    font-weight: 700;
}
.modal-content {
    min-height: 60px;
    padding: 20px 25px;
}
p {
    margin: 0 0 10px;
    line-height: 1.4rem;
}
.dialog-btn-danger {

    display: inline-block;
    width: 174px;
    height: 35px;
    line-height: 35px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background-color: #fe9d50;
    border: 0;
    border-radius: 2px;
    cursor: pointer;
}
.dialog-button {
    margin: 28px 0 10px;
    text-align: center;
}
.modal-question {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99999;
    min-width: 300px;
    background-color: #fff;
    /* box-shadow: 1px 2px 12px rgba(0,0,0,.55); */
    border-radius: 2px;
    text-align: left;
    padding: 0;
    list-style: none;
}
.subject-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -480px;
    margin-top: -284px;
    width: 960px;
    height: 568px;
    background: #fff;
    border-radius: 4px;
    z-index: 1000;
}
.subject-dialog-inner {
    position: relative;
    margin: 0 40px;
    padding: 35px 0 0;
}
.subject-process {
    position: relative;
    margin: 0 auto;
    width: 880px;
    height: 6px;
    background-color: #e6e6e6;
    border-radius: 20px;
}
.subject-process .line {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    background-color: #fe9d50;
    border-radius: 20px;
}
.subject-content {
    position: relative;
    margin: 0 auto;
    width: 680px;
    overflow: hidden;
}
.subject-list {
    position: relative;
    /* position: absolute; */
    left: 0;
    top: 0;
    height: 483px;
    width: 6800px;
    transition: all 0.7s;
}
.subject-item {
    margin: 88px 0 0;
    float: left;
    width: 680px;
    color: #353535;
    list-style: none;
}
.subject-title {
    margin: 0;
    padding-bottom: 45px;
    font-size: 18px;
}
.subject-choice {
    font-size: 16px;
    line-height: 48px;
    letter-spacing: 1px;
}
.subject-choice label {
    display: inline-block;
    cursor: pointer;
}
.subject-choice label input[type="radio"] {
    display: none;
}
.subject-choice label i {
    position: relative;
    margin-right: 18px;
    font-size: 16px;
    font-style: normal;
    display: inline-block;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 28px;
    color: #fff;
    vertical-align: middle;
    border: #535353 1px solid;
}
.subject-choice label input[type="radio"]:checked + i {
    background: url('../assets/images/ico_tick.png') no-repeat center center;
    background-size: auto auto;
    background-size: 100%;
}

/* 左右箭头 */
.subject-nav {
    display: inline-block;
    width: 26px;
    height: 81px;
    position: absolute;
    top: 46%;
    background: url(../assets/images/subject-nav.png) no-repeat center center;
        background-position-x: center;
        background-position-y: center;
    background-position: 0 0;
    z-index: 10;
}
.subject-nav.s-n-l {
    left: 0;
}
.subject-nav.s-n-r {
    right: 0;
    background-position: -26px 0;
}
</style>
