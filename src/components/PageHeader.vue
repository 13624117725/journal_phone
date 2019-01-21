<style scoped lang="less">
    @height: 1.3rem;
    @btnSize: 0.47rem;

    .header{
        position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:1rem;
        /*border-bottom: @baseBorder;*/
        border-bottom:1px solid #cccccc;
        z-index: 1000;
         background:#eee;
    }
    .on-headers{
        position: absolute;
        top: 0;
        width: 100%;
        height:1.3rem;
        /*border-bottom: @baseBorder;*/
        z-index: 1000;
        background: #fff;
    }
    .back-btn{
        float: left;
        height: 1.2rem;
        width: @height;
        background: url("../assets/img/images/icon-back-btn.png") no-repeat center;
        background-size: 20%;
        display: inline-block;
    }
    .An-back-btn{
        float: left;
        height: 1.1rem;
        width: @height;
        background: url("../assets/img/images/icon-back-btn.png") no-repeat center;
        background-size: 20%;//@btnSize;
        display: inline-block;
    }
    .middle{
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0.3rem;
        right: 0.3rem;

        .title{
        	height: 1.1rem;
      		font-size: 0.36rem;//@titleFontSize;
            line-height: 1.6rem;
            color: #000000;//@titleColor;
        }
        .Antitle{
            height: 1.1rem;
      		font-size: 0.36rem;//@titleFontSize;
            line-height: 1.5rem;
            color: #000000;//@titleColor;
        }
    }

    .right-part{
        float: right;
        height: 1.1rem;
        width: 1.1rem;
    }
     ::-webkit-input-placeholder {
        color: #e24e59;
    }

    :-moz-placeholder {
        color: #e24e59;
    }

    ::-moz-placeholder {
        color: #e24e59;
    }

    :-ms-input-placeholder {
        color: #e24e59;
    }
</style>

<template>
    <div class="header">
    	<div style="height: 0.2rem;"></div>
        <!-- <span class="back-btn" :class="{'An-back-btn':onheader}"  @click="back" v-if="!this.$store.state.showWxTitle" v-show="_needBack"></span> -->

        <div class="middle">
            <slot name="middle" v-if="!title"></slot>
            <p class="title" v-else-if="!title">{{title}}</p>
        </div>

        <div class="right-part">
            <slot name="right-btn"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,

            needBack: {
                type: Boolean,
                default: true,
            }
        },
        computed:{
            _needBack(){
                return this.needBack;
            },
            isonLinerent(){
                console.log(this.$store.state.isonLinerent)
                return this.$store.state.isonLinerent;
            }
        },
        data() {
            return {
                // 判断安卓和ios样式控制
                onheader:false,
            }
        },

        created() {

        },

        mounted() {
//          if(!this.AndroidOrIos()){
//              this.onheader =  false;
//              // console.log('IOS',this.AndroidOrIos());
//          }else{
//              this.onheader =  true;
//              //   console.log('安卓',this.AndroidOrIos());
//          }
            //判断是安卓还是ios登录，定义到变量中
			let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid === true && isiOS === false) {
                this.onheader =  true;
                return true;
            }
            if (isAndroid === false && isiOS === true) {
                this.onheader =  false;
                return false;
            }


        },

        methods: {
            back(){
                if(this.$store.state.loginShow){
                     this.$store.state.loginShow =  false;
                }else{
                    this.$router.go(-1);
                }
            },
        },

        components: {},
    }
</script>
