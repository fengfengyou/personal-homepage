<template>
  <div class="footer-page">
        <div class="sitemap">
            <div class="container">
            <div class="clearfix">
                <div class="col-5 clearfix">
                <dl class="col-3">
                    <dt>新手入门</dt>
                    <dd><a href="/sitemap">网站地图</a></dd>
                    <dd><a href="/front/home/getStart" rel="nofollow">入门指南</a></dd>
                    <dd><a href="/front/activity/index?src=2017_information&type=risk" rel="nofollow">风险管理</a></dd>
                </dl>
                <dl class="col-3">
                    <dt>我要出借</dt>
                    <dd><a href="/front/account/home#/auditmaticInvest" rel="nofollow">智能投标</a></dd>
                    <dd><a href="/front/account/home#/investBill" rel="nofollow">出借管理</a></dd>
                    <dd><a href="/news/licaizhishi/">出借攻略</a></dd>
                </dl>
                <dl class="col-3">
                    <dt>关于我们</dt>
                    <dd><a href="/front/home/aboutUs" rel="nofollow">公司介绍</a></dd>
                    <dd><a href="/front/home/aboutUs/team" rel="nofollow">团队介绍</a></dd>
                    <dd><a href="/front/home/aboutUs/contact" rel="nofollow">联系我们</a></dd>
                </dl>
                <dl class="col-3">
                    <dt>帮助中心</dt>
                    <dd><a href="/front/help/index?typeId=14" rel="nofollow">充值提现</a></dd>
                    <dd><a href="/front/help/index?typeId=15" rel="nofollow">到账说明</a></dd>
                    <dd><a href="/front/home/rate" rel="nofollow">资费说明</a></dd>
                </dl>
                </div>
                <div class="col-2 qrcode">
                <p>手机客户端</p>
                <img src="../assets/images/qrcode.png" width="93" height="93">
                </div>
                <div class="col-2 qrcode">
                <p>微信服务号</p>
                <img src="../assets/images/qrcode_wechat.png" width="93" height="93">
                </div>
                <div class="col-3 lyd-info">
                <p>客服服务热线 (工作时间：09:00-18:00)</p>
                <p class="lyd-tel">400-999-2101</p>
                <p>客服邮箱：<a href="mailto:liyedai@liyedai.cn" rel="nofollow">service@liyedai.cn</a></p>
                <p>售后服务专线（工作日10:00-17:00）<br/>0755-86532582</p>
                <p>深圳市南山区深南大道9672号华润大冲商务中心1栋2号楼（B座）26层</p>
                </div>
            </div>
            </div>
        </div>
        <div class="site-footer">
            <div class="site-license">
                <a class="norton" href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=www.liyedai.cn&amp;lang=zh_cn"
                target="_blank" title="立业贷网站诺顿评级" rel="nofollow"></a>
                <a class="check360" href="http://webscan.360.cn/index/checkwebsite/url/www.liyedai.cn" target="_blank" title="立业贷360网站安全检测"
                rel="nofollow"></a>
                <a class="ebs" href="http://szcert.ebs.org.cn/1a9eb39a-5d4f-4de9-89e6-96edc5340f5e" target="_blank" title="立业贷工商网监电子标示" rel="nofollow"></a>
                <a class="anquan" href="http://www.anquan.org/authenticate/cert/?site=liyedai.cn&at=business" target="_bank" title="立业贷品牌宝信誉档案"
                rel="nofollow"></a>
                <a class="zx110" href="http://pinggu.zx110.org/review_url_liyedai.cn" target="_blank" title="立业贷网站可信度评估" rel="nofollow"></a>
            </div>
            <p>
                <a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow">粤ICP备14000799号-1</a> 版权所有 &copy; 2013 - 2018
                <br>
                <a href="http://www.liyedai.cn">深圳市立业贷互联网金融服务有限公司</a>
                <a href="http://www.liyedai.cn">www.liyedai.cn</a> Copyright &copy; liyedai ONLINE . All Rights Reserved.
            </p>
            <h4 class="copyright">投资有风险 入市需谨慎 立业贷所有资金由江西银行存管</h4>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lalla: 123
    }
  },
  components: {}
}

</script>

<style lang="scss" scoped>
    .footer-page{
        background-color: #fff;
        .sitemap{
            width: 1200px;
            padding: 30px 0 20px;
            margin-top: 20px;
            font-size: 12px;
            color: #4d4d4d;
            background-color: #fff;
            margin: 0 auto;
            a{
                font-size: 14px;
                line-height: 2.4em;
            }
            dt {
                padding-bottom: 10px;
                font-size: 18px;
            }
            dl {
                display: block;
            }
            .qrcode {
                width: 14%;
                text-align: center;
                p{
                    margin: 0 0 10px;
                    font-size: 18px;
                }
            }
            .container{
                .clearfix{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    .col-5{
                        width: 41.66666667%;
                        text-align: center;
                    }
                    .col-3 {
                        width: 25%;
                    }
                    .lyd-info{
                        .lyd-tel {
                            padding: 8px 0;
                            font-size: 20px;
                            font-weight: 700;
                        }

                    }
                }
            }
        }
        .site-footer {
            width: 1200px;
            padding-bottom: 10px;
            font-size: 12px;
            text-align: center;
            background-color: #fff;
            border-top: 1px solid #ccc;
            margin: 0 auto;
            color: #999;
            p {
                margin: 0 0 10px;
                a {
                    text-decoration: none;
                    color: #999;
                    transition: all .2s;
                }
            }
            .site-license {
                padding-top: 30px;
                margin-bottom: 10px;
                border-top: 1px solid #ccc;
                a{
                    display: inline-block;
                    width: 90px;
                    height: 36px;
                    margin-right: 10px;
                    background-image: url(../assets/images/icon-license.png);
                    background-repeat: no-repeat;
                }
                .check360 {
                    background-position: -270px 0;
                }
                .ebs {
                    background-position: -90px 0;
                }
                .anquan {
                    background-position: -575px 0;
                }
                .zx110 {
                    width: 36px;
                    background-position: -449px 0;
                }
            }
            .copyright {
                padding-bottom: 10px;
                margin-top: -5px;
                font-size: 16px;
                font-weight: 200;
            }
        }
    }
</style>
