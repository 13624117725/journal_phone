<template>
   <div class="PushIndex">
       <div class="header">
           <div class="topImg">
                <div class="img_box">
                    <img v-if="headImg" :src="headImg" alt="">
                    <img v-else src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1534211597&di=83de6ebb0011d7fa15b8c094a1d65246&src=http://p9.qhimg.com/t01a999288d1aa3f900.jpg" alt="">
                </div>
           </div>
           <div class="botInfo">
               <div class="name">
                   {{name}}
               </div>
               <!-- <div class="star">
                    <ul class="clearfix">
                        <li v-for="(its,index) in startArr" :key="index" class="stars" :class="{actStart:index>=star}"></li>
                    </ul>
               </div> -->
           </div>
       </div>
       <div class="btns_box">
           <ul>
                <!-- <li>
                    <div class="icons ">

                    </div>

                    <div class="btn_name">
                        账号设置
                    </div>

                    <div class="right">

                    </div>
                </li>
                <li>
                    <div class="icons money">

                    </div>

                    <div class="btn_name">
                        我的钱包
                    </div>

                    <div class="right">

                    </div>
                </li> -->
                <li @click="MyShoucang">
                    <div class="icons builds">

                    </div>

                    <div class="btn_name">
                        收藏房源
                    </div>

                    <div class="right">

                    </div>
                </li>
                <!-- <li>
                    <div class="icons custerms">

                    </div>

                    <div class="btn_name">
                        客户列表
                    </div>

                    <div class="right">

                    </div>
                </li>
                <li>
                    <div class="icons Mymsg">

                    </div>

                    <div class="btn_name">
                        我的消息
                    </div>

                    <div class="right">

                    </div>
                </li> -->
           </ul>
       </div>
   </div>
</template>
<script>
import {Rater} from "vux"
    export default {
        data() {
            return {
                star:3,
                startArr:[0,0,0,0,0,0],
                headImg:"",
                name:""
            }

        },
        components: {
            Rater
        },
        mounted(){
            this.headImg = localStorage.getItem("sub_headimgurl");
            this.name = localStorage.getItem("sub_nickname");
        },
        methods:{
            MyShoucang(){
                this.$router.push({name:"Collection"})
                this.$emit("closed");
            }
        }
    }
</script>

<style scoped lang="less">
.PushIndex{
    *{
        font-family: 'Source Han Sans CN';
        // font-family: 'Microsoft Yahei';
    }
    .header{
        height: 3.4rem;
        .topImg{
            // height: 2.5rem;
            text-align: center;
            box-sizing: border-box;
            .img_box{
                box-sizing: border-box;
                padding:4px;
                border:4px solid #C8151D;
                display: inline-block;
                margin: 0.5rem 0.4rem 0.1rem 0.4rem;

                border-radius: 50%;
            }
            img{
                display: block;
                width: 1.5rem;
                height:  1.5rem;
                margin: 0;
                padding: 0;
                border-radius: 50%;
            }
        }
        .botInfo{
            height: 1rem;
            .name{
                height: 0.7rem;
                line-height:0.7rem ;
                text-align: center;
                color:#eee;
                font-size: .3rem;
            }
            .star{
                height: 0.6rem;
                ul{
                    width:120px;
                    margin: 0 auto;
                    padding: 0;
                    .stars{
                        width: 20px;
                        margin: 0;
                        padding: 0;
                        float: left;
                        height: 20px;
                        background: url("../assets/img/images/start1.png") center no-repeat;
                        background-size: 160%;
                        &.actStart{
                            background: url("../assets/img/images/start2.png") center no-repeat;
                            background-size: 160%;
                        }
                    }
                }
                .star_info{
                    margin: 0 auto;
                }
            }
        }
    }
    .btns_box{
        ul{
            padding: 0 0.5rem;
        }
        li{
            margin-top: 0.2rem;
            height: 0.62rem;
            overflow: hidden;
            line-height: 1rem;
            overflow: hidden;
            color: #eee;
            border-bottom: 1px solid #eee;
        }
        .icons{
            float: left;
            width: 0.6rem;
            height: 0.6rem;
            background:url("../assets/img/images/people.png") center no-repeat;
            background-size: 76%;
            &.money{
                background:url("../assets/img/images/moeny.png") center no-repeat;
                background-size: 76%;
            }
            &.builds{
                background:url("../assets/img/images/builds.png") center no-repeat;
                background-size: 76%;
            }
            &.custerms{
                background:url("../assets/img/images/custerms.png") center no-repeat;
                background-size: 76%;
            }
            &.Mymsg{
                 background:url("../assets/img/images/Mymsg.png") center no-repeat;
                background-size: 60%;
            }
        }
        .btn_name{
            float: left;
            padding-left:9px;
            width: auto;
            height: 0.6rem;
            font-size: .34rem;
            line-height: .8rem;
            text-align: left;
        }
        .right{
            float: right;
            height:0.6rem;
            width: 0.4rem;
            background: url("../assets/img/images/Toright.png") right 77% no-repeat;
            background-size: 70% 46%;
        }
    }
}

</style>
<style lang="less">
    .star_info{
        *{
            font-size: 17px;
        }
    }
</style>
