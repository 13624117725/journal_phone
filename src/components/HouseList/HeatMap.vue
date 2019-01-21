<style scoped lang="scss">
// @import "../../style/theme.scss";
$k:1;
$ColorClass: $labelOne, $labelTwo, $labelThree;
    .heat-map {
        position: fixed;
        left: 0;
        right: 0;
        top: 1.3rem;
        bottom: 0;
        height: 100%;
        .switch-cell {
            .el-switch__label, .el-switch__label * {
                font-size: 0.12rem;
            }
        }
        .regloin{
            position: absolute;
            width: 100%;
            top:0.45rem;
            z-index: 2;
            opacity: 1;
            background-color: #fff;
            font-size:$mostFontSize;
        }
        .regloinlists{
            position: absolute;
            width: 100%;
            top:0.9rem;
            z-index: 2;
            opacity: 1;
            background-color: #fff;
            font-size:$mostFontSize;
            height: 70%;
            .buttons{
                position: fixed;
                top:70%;
                transform: translate(0, 1.2rem);
                left:0px;
                padding:0.3rem 0rem;
                width: 100%;
                height: 0.8rem;
                .subMit{
                    width: 50%;
                    height: 100%;
                    border-radius: 0.15rem;
                    background-color: $mineColor;
                    font-size:$reminderFontSize;
                    border:1px solid $mineColor;
                    color:$titleColor;
                    float:left;
                    // margin-left:1.64rem;
                    box-sizing: border-box;
                }
                .exit{
                    // margin-left:1.04rem;
                    width: 50%;
                    height: 100%;
                    border-radius: 0.15rem;
                    font-size:$reminderFontSize;
                    background-color:$greyColor;
                    border:1px solid $mineColor;
                    color:$mineColor;
                    box-sizing: border-box;
                }
            }
            .wx-button{
                transform: translate(0, 1.1rem);
                top:63%;
            }
        }
        .iosregloin{
            top:0.45rem !important;
        }

        .iosfiltrate{
            top:0.9rem;
        }
        .wex-regloin{
            top:0.9rem;
        }
        .type-search {
            position: fixed;
            top:1.3rem;
            width: 100%;
            height: 0.95rem;
            line-height: 0.87rem;
            background: #fff;
            font-size: 0.35rem;
            color: #333333;
            border-bottom: 1px solid #ccc;
            z-index: 3;
        .isnotLinerent{
            font-size: $reminderFontSize;
            height: 0.8rem;
            line-height: 0.7rem;
            padding: 0.05rem 0px;
        }
            .flex-demo {
                text-align: center;
                background-clip: padding-box;
                color: #333333;
                position: relative;
                font-size: 0.28rem;
            }
            .open-icon {
                display: inline-block;
                position: absolute;
                width: 0.1rem;
                top: 45%;
                left: 1.4rem;
            }

            .stop-icon {
                display: inline-block;
                position: absolute;
                width: 0.1rem;
                top: 43%;
                left: 1.4rem;
            }
            .isnewhouse{
                top:25%;
                left:63%;
            }
            .long-string{
                position: absolute;
                left: 2rem;
                top:0.1rem;
                width: 1px;
                height: 0.5rem;
                background-color: #eee;
                display: none;
            }
            .notnewhouse{
                display: block;
                z-index: 10;
            }
            .regionarea{
                color:$mineColor;
            }
        }
        .iostypesearch{
            top:1.3rem;
        }
        .wx-type-search{
            top:0rem;
        }
        .market {
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.6;
            position: fixed;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            margin: auto;
            z-index: 1;
        }
        .house-list{
            position: fixed;
            bottom:0%;
            left:0rem;
            width: 100%;
            height:6rem;
            max-height: 6rem;
            background-color: #fff;
            z-index: 10000;
            .house-head{
                height: 0.92rem;
                line-height: 0.92rem;
                padding-left: 0.3rem;
                font-size: 0.32rem;
                color: #000;
                // border-bottom: 1px solid #e8e8e8;
                background-color: #fff;
            }
            .scroller{
                // position: relative;
                margin-top:0.92rem;
            }
            .scroller-absolute{
                position: relative;
                margin-top:0.01rem;
                // .no-data-text{
                //     height: 0px  !important;
                //     background-color: none  !important;
                // }
                .loading-layer{
                    height: 0px  !important;
                    background-color: none  !important;
                }
            }
            .house-ul{
                width: 100%;
                background-color: #fff;
                .house-ul-list{
                    background-color: $titleColor;
                    position: relative;
                    width: 100%;
                    height: 2.11rem;
                    border-bottom: 1px solid #eee;
                    padding: 0.3rem 0 0.2rem 0.3rem;
                    &:nth-child(1){
                        padding-top:0rem;
                    }
                    .image-left{
                        float: left;
	                    width: 2.86rem;
                        height: 2.1rem;
	                    .pull-left{
	                        display: inline-block;
	                        width: 2.86rem;
	                    	height: 2.1rem;
	                    	border-radius: 0.1rem;
                        }
                    }
                    .list-right{
                        float: right;
                        width: 4.07rem;
                        font-size:$titleFontSize;
                        margin:0.05rem 0.3rem 0 0;
                        .headline{
                            font-size: 0.32rem;
                            color:#000;
                            span{
                                display:inline-block;
                                width: 80%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                            .abbr3d{
                                position: absolute;
                                top:0.3rem;
                                right:0.5rem;
                                width: 0.5rem;
                                height: 0.3rem;
                                background:url("../../../../static/rent/house-list/head3d.png") no-repeat;
                                background-size: 100%;
                            }
                        }
                        .headline,.house-desc,.house-label,.area{
                            text-align: left;
                            margin-bottom:0.05rem;
                        }
                        .house-desc,.house-label{
                            font-size:0.2rem;
                        }
                        .house-desc{
                            // margin-top: 0.12rem;
                            font-size: 0.26rem;
                            color:#666;
                            .houseproducttype{
                                display:inline-block;
                                width: 0.45rem;
                                height: 0.45rem;
                                background:url("../../../../static/rent/house-list/joint.png") no-repeat;
                                background-size: 100%;
                                vertical-align: middle;
                            }
                            .houseentire{
                                display:inline-block;
                                width: 0.45rem;
                                height: 0.45rem;
                                background:url("../../../../static/rent/house-list/entire.png") no-repeat;
                                background-size: 100%;
                                vertical-align: middle;
                            }
                            .househome{
                                display:inline-block;
                                width: 0.45rem;
                                height: 0.45rem;
                                background:url("../../../../static/rent/house-list/home.png") no-repeat;
                                background-size: 100%;
                                vertical-align: middle;
                            }
                        }
                        .house-bottom{
                            height: 20%;
                            font-size: $mostFontSize;
                            color:#000;
                            .money-month{
                                // margin-top: 0.06rem;
                                text-align: left;
                                // .money{
                                //     color:$partColor;
                                // }
                            }
                        }
                        .bedroom{
                            color:$unselectedColor;
                            margin-right:0.3rem;
                        }
                        .area{
                            color:$unselectedColor;
                            font-size:0.26rem;
                        }
                        .house-label{
                            width: 100%;
                            margin-top:0.2rem;
                            .label{
                                width: 29%;
                                height: 0.45rem;
                                text-align: center;
                                float: left;
                                display:block;
                                margin-right:0.15rem;
                                line-height: 0.45rem;
                                border-radius:0.05rem;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                                padding: 0 0.05rem;
                                box-sizing: border-box;
                                background-color: #f5f5f5;
                                color: #999;
                            }
                            // @mixin color($bgColor){
                            //     border: 1px solid $bgColor;
                            //     color: $bgColor;
                            // }
                            // @for $i from 1 through 3{
                            //     .label:nth-child(3n+#{$i}){
                            //         @include color(nth($ColorClass,$i));
                            //     }
                            // }

                        }
                    }
                }
            }
        }
        .scroll-list{
            height:auto;
        }
    }
    .isandrion{
        top:1.3rem;
    }
    .wx-heat-map{
        top:0rem;
    }
    .fade-list-enter-active {
        animation: fade-list-in  .5s ease;
    }
    .fade-list-leave-active {
        animation: fade-list-out .2s;
    }
    @keyframes bounce-in {
        0% {
            transition: opacity 0;
        }
        100% {
            transition: opacity 1;
        }
    }
    .fade-mark-enter-active, .fade-mark-leave-active {
        transition: opacity 0;
    }
    .fade-mark-enter, .fade-mark-leave-active {
        opacity : 0
    }
</style>
<style scoped lang="scss">
    .map{
        height: 100%;
        width: 100%;
        // margin-left:450px;
    }
</style>

<template>
    <div class="heat-map" :class="{'wx-heat-map':wxHeatMap,'isandrion':isAndrion}">
         <div class="type-search" :class="{iostypesearch:!isAndrion,'wx-type-search':wxHeatMap}">
                <flexbox :class="{isnotLinerent:isonLinerent}">
                    <flexbox-item>
                        <div class="flex-demo" @click="regionClick">
                                <span :class="{regionarea:regionClass}">区域</span>
                                <img class="open-icon" v-if="region" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!region" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="subwayClick">
                                <span :class="{regionarea:subwayClass}">地铁</span>
                                <img class="open-icon" v-if="subway" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!subway" :src="stopUrl" :class="{isnewhouse:isnewhouse}" />
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="priceClick">
                                <span :class="{regionarea:priceClass}">价格</span>
                                <img class="open-icon" v-if="price" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!price" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="filtrateClick">
                                <span :class="{regionarea:filtrateClass}">筛选</span>
                                <img class="open-icon" v-if="filtrate" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!filtrate" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                        </div>
                    </flexbox-item>
                </flexbox>
        </div>
        <!-- 区域 -->
        <div class="regloin" :class="{iosregloin:isAndrion}" >
            <region-subway :isShow="region" :type="isType" @changeRegionSubway="changeRegionSubway" :RegionList = "RegionList" :isMap="false" ref="regionCommpont"></region-subway>
        </div>
        <!-- 地铁 -->
        <div class="regloin" :class="{iosregloin:isAndrion}">
            <subway :isShow="subway" :type="isType" @changeSubway="changeSubway" :subwayList = "subwayList" ref="subwayCommpont"></subway>
        </div>
        <!-- 价格 -->
        <div class="regloin" :class="{iosregloin:isAndrion}">
            <price-list :isShow="price" @changePrice="changePrice" ref="priceCommpont"></price-list>
        </div>
        <!-- 筛选 -->
        <div class="regloinlists" :class="{iosfiltrate:isAndrion,'wex-regloin':isWex}" v-show="filtrate">
            <filtrate :isShow="filtrate" @changeFiltrate="changeFiltrate" :houseType="houseType"  ref="filtrateCommpont"></filtrate>
            <div class="buttons" :class="{'wx-button':wxHeatMap}">
                <button class="subMit" @click="allBuildClick">筛选</button>
                <button class="exit" @click="allBuildExitClick">重置</button>
            </div>
        </div>

        <div id="container" class="map" ></div>
        <!-- 房源列表 -->
        <transition name="fade-list">
            <div class="house-list" v-if="showList" :class="{'scroll-list':scrollList}">
                <div class="house-head">
                    <h2> <span style="float:left;">{{areaName}}({{houseNumber}}套)</span></h2>
                    <div style="clear:both;"> </div>
                </div>
                <scroller class="scroller"
                    :on-refresh="refresh"
                    :on-infinite="infinite"
                    noDataText="-----已经没有更多数据了-----"
                    ref="myList"
                    :class="{'scroller-absolute':scrollList}"
                >
                    <div class="list-item">
                        <ul class="house-ul">
                            <li class="house-ul-list" v-for="item in HouseLists" :key="item.id" @click="goHouseDetail(item.id,item.productType)">
                                <div class="image-left">
                                    <img class="pull-left" :src="item.image || noDetailImg" :alt="item.communityName">
                                </div>
                                <div class="list-right">
                                    <div class="headline">
                                        <span>{{item.houseName}}&nbsp;{{item.roomName}}房间{{item.roomNumber || ""}}</span>
                                        <i class="abbr3d" v-if="item.lookUrl"></i>
                                    </div>
                                    <div class="house-desc">
                                        <span class="bedroom">{{item.buildNo}}号楼&nbsp;{{item.buildUnitNo}}单元</span>
                                        <span calss="floor">{{item.buildFloor}}层&nbsp;/&nbsp;{{item.userArea}}㎡</span>
                                        <!-- <span :class="{houseproducttype:item.productType==='0019001',houseentire:item.productType==='0019002',househome:item.productType==='0019003'}"></span> -->
                                    </div>
                                    <div class="house-bottom">
                                        <p class="money-month">
                                            <span class="money">{{item.price}}</span>
                                            <span>元/月</span>
                                        </p>
                                    </div>
                                    <div class="house-label">
                                        <span class="label" v-for="(label,index) in item.tags" :key="index">{{label}}</span>
                                    </div>
                                </div>
                            </li>
                            <li style="clear:both;"> </li>
                        </ul>
                    </div>
                </scroller>
            </div>
        </transition>
        <div class="BMap_mask" style="position:fixed; left: 0rem; top: 0rem; z-index: 1;  user-select: none; width: 100%; height: 100%;" v-if="showList" @touchstart="BMapMask"></div>
        <div class="loading"   v-if="notData" style="position: fixed; min-width: 130px; left: 50%;bottom: 0.6rem;background: rgba(0,0,0,.7);text-align: center;border-radius: 0.05rem;font-size: 0.16rem;color: #fff;padding: 0.1rem 0.14rem;-webkit-transform: translate(-50%, 0%);transform: translate(-50%, 0%);">未找到满足条件的房源</div>
        <!-- 遮罩层 -->
        <transition name="fade-mark">
            <div class="market" v-if="market" @click="markets"></div>
        </transition>
    </div>
</template>

<script>
// import MyBus from '../../script/myBus.js';
    import { Flexbox, FlexboxItem } from 'vux'
    import Filtrate from './Filtrate.vue';
    import RegionSubway from './RegionSubway.vue';
    import Subway from './Subway.vue';
    import PriceList from './PriceList.vue';
    import openUrl1 from "../../../../static/new/img/stop.png";
    import stopUrl1 from "../../../../static/new/img/open.png";
    import openUrl from "../../../../static/rent/img/open1.png";
    import stopUrl from "../../../../static/rent/img/stop1.png";
    import icon_ditu2 from '../../../../static/rent/fyxq/icon/ditu2.gif'
    export default {
        components: {
            Flexbox,
            FlexboxItem,
            Filtrate,
            RegionSubway,
            PriceList,
            Subway,
            // downLoad
        },
        props: {
        //     textSearch:{
        //         type:Object,
        //         default:"",
        //     },
        //     regionSearch:{
        //         type:Boolean,
        //         default:true,
        //     }
        },

        data() {
            return {
                points: [],
                area: [],

                map: null,
                local: null,

                // searchName: this.textSearch.textSearch || "",
                searchName:"",

                showArea: true,
                showMarkPoint: false,

                areaId: "",
                dynamicTags:{
                    communityId:"",
                    regionId:"",
                    districtId:"",
                    stationsId:"",
                    subwayLineId:"",
                    screenLeftLog: "",    //西南
                    screenRightLog: "",   //东北
                    screenLeftLat: "",     //西南
                    screenRightLat: "",    //东北
                    priceMax: "",
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",
                    textSearch: "",
                    roomNo:"",
                    longitude:"",
                    latitude:"",
                    isshowScope:false, //点击地铁以后 可以按范围查找
                    productType:"",
                    lookUrl:false,
                },
                label2:{},
                label3:{},
                count:"",
                isMap:false,
                subwayName:"",
                ply:"",
                count:"",
                subwayList:[],
                subwayType:{},
                isMoveend:true,   //拖拽是否加载数据
                isSubwaySearch:false,  //是第一次地铁找房
                // isenableMassClear:false,   //是否已经解除禁止清除
                oneregionSearch:true,     //是否点击了区域
                subwayStation:false,    // 是否点击了站点不进行缩放事件跟拖拽
                iszoomend:true,       //是否可以缩放
                isshowcolor:false,
                isAndrion:true,  //判断是ios还是andriod

                //筛选
                region:false,
                subway:false,
                price:false,
                filtrate:false,
                market:false,    //遮罩
                isType:"",
                houseType:"", //首页进来房源类型
                // regions:false,
                RegionList:[],
                subwayList:[],

                regionClass:false,
                subwayClass:false,
                priceClass:false,
                filtrateClass:false,

                isRegionClass:false,
                isSubwayClass:false,
                isPriceClass:false,
                isFiltrateClass:false,

                onMarket:false,  //点遮罩时把选择置空
                notnewhouse:true,
                isnewhouse:false,
                isWex:false,
                wxHeatMap:false,
                regionSearch:true,  //区域筛选
                noDetailImg :"https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png",
                showList:false,  //房源列表
                HouseLists:[],  // 房源列表
                loading : false,
                isData : false,
                total :"",
                currentPage:"1",
                areaName:"",
                houseNumber:"",
                scrollList:false,
                isUpload:false,
                notData:false,
                longitude:"",
                latitude:"",
            }
        },

        created(){
            this.isAndrion = false;
            this.wxHeatMap = true;
            this.isWex = true;

            this.notnewhouse = this.$route.query.title != "在线租房";
            this.isnewhouse = this.$route.query.title == "在线租房";
            this.getAddressComponent();
            this.getAreaDistribution();
            // this.getHouseDistribution();

        },
        mounted() {

            let map = new BMap.Map("container");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

            map.enableScrollWheelZoom(true);
            map.enableDragging();
            // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            //添加地图平移缩放控件
            // map.addControl(new BMap.NavigationControl());

            //控制地图的最大和最小缩放级别
            map.setMinZoom(11);
            map.setMaxZoom(18);
            this.map = map;
            this.local = new BMap.LocalSearch(map, {
                renderOptions:{map: map}
            });
            this.map.addEventListener("zoomend", ()=>{
                if(!this.isSubwaySearch && !this.subwayStation && !this.regionSearch){   //地铁找房
                    this.getLatLog();
                    let subwayCenter = this.map.getZoom();
                    if(subwayCenter<=13){    //小于12地图变成地铁
                        this.map.clearOverlays();
                        this.dynamicTags.isshowScope = false;
                        this.showMarkPoint = false;
                        this.dynamicTags={
                            stationsId:"",
                        };
                        this.createSubwayCover(this.subwayList,this.subwayType);
                        return;
                    }else if(subwayCenter>=14){   //大于14地图变成站点
                        // this.dynamicTags.isshowScope = true;
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.subwayMarkPoint();
                        });
                        return;
                    }
                }else if(this.regionSearch && this.oneregionSearch && this.iszoomend){     //区域找房
                    this.getLatLog();
                    let center = this.map.getZoom();
                    if(center<=13){     //变成区域
                        this.dynamicTags.districtId = "";
                        this.dynamicTags.communityId = "";
                        this.dynamicTags.longitude = "";
                        this.dynamicTags.latitude = "";
                        this.dynamicTags.isshowScope = false;
                        this.map.clearOverlays();
                        this.getAreaDistribution();
                        return;
                    }else if(center>=14){   //展示小区
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.createMarkPoint()
                        });
                        return;
                    }
                }
                });

            this.map.addEventListener("moveend",()=>{
                let moveendCenter = this.map.getZoom();
                this.getLatLog();
                this.dynamicTags.communityId = "";
                this.dynamicTags.stationsId = "";
                if(moveendCenter<=13){
                    if(this.regionSearch && this.oneregionSearch && this.isMoveend){   //区域
                        this.getAreaDistribution();

                    }else if(this.isMoveend && !this.isSubwaySearch){    //拖拽是地铁
                        this.createSubwayCover(this.subwayList,this.subwayType);

                    }
                }else if(moveendCenter>=14){
                    if(this.isMoveend && this.regionSearch && this.oneregionSearch){   //区域
                        this.getHouseDistribution(()=>{
                            this.map.clearOverlays();
                            setTimeout(()=>{
                                this.createMarkPoint()
                            },200)

                        });

                    }else if(this.isMoveend && !this.isSubwaySearch){       //地铁
                         this.getHouseDistribution(()=>{
                            this.map.clearOverlays();
                            setTimeout(()=>{
                                this.subwayMarkPoint();
                            },200)
                        });
                    }
                }
            })

            if(this.points.length　!== 0){
                this.init()
            }
        },
        beforeDestroy(){
            this.map = null;
            this.local = null;
        },

        methods: {
            getAreaDistribution(){
                this.post("pc/HouseInfoController/getAreaDistribution", {
                    priceMax: this.dynamicTags.priceMax,
                    priceMin: this.dynamicTags.priceMin,
                    userAreaMax:this.dynamicTags.userAreaMax,
                    userAreaMin:this.dynamicTags.userAreaMin,
                    roomNo: this.dynamicTags.roomNo,
                    screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                    screenRightLog: this.dynamicTags.screenRightLog,   //东北
                    screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                    screenRightLat: this.dynamicTags.screenRightLat ,
                    productType:this.dynamicTags.productType,
                    lookUrl:this.dynamicTags.lookUrl,
                }).then(res => {
                    if (res.code !== 0) {
                        this.showErrorTip(res.msg);
                    } else {
                        this.area = res.data;
                        this.map.clearOverlays();
                        this.createAreaCover();
                    }
                })
            },
            //绘制小区
            createAreaCover(){
                let size = 1.2;
                let _this = this;
                this.area.map((item,index) => {
                    let labelText = item.totalNum!=0 ? `${item.districtName}<br/>(${item.totalNum}套)` : "";
                    if(item.totalNum!=0){
                        let label = new BMap.Label(labelText, {
                            position: new BMap.Point(item.longitude, item.latitude)
                        });
                        label.setStyle({
                            textAlign: "center",
                            color : "#fff",
                            background: "rgba(228, 57, 60, 0.9)",
                            border: "1px solid rgba(228, 57, 60, 0.9)",
                            fontSize : "0.22rem",
                            height : `${size}rem`,
                            width : `${size}rem`,
                            borderRadius: '50%',
                            marginTop: `-${size/2}rem`,
                            marginLeft: `-${size/2}rem`,
                            paddingTop: `${size/5}rem`,
                            boxSizing: "border-box",
                        });
                        this.map.addOverlay(label);
                        label.addEventListener("click", () => {
                            this.oneregionSearch = false;   //点击区域的时候不进行缩放事件
                            this.isMoveend = false;    //点击区域的时候不可以拖拽加载
                            this.areaId = item._id;
                            this.dynamicTags.districtId = item._id;
                            if(item.districtName!=="海淀" && item.districtName!=="昌平" && item.districtName!=="顺义" && item.districtName!=="西城"){
                                this.map.centerAndZoom(new BMap.Point(item.longitude, item.latitude),14);
                            }else{
                                this.post("pc/HouseInfoController/getMapHouseList",{
                                    page: "1",
                                    districtId: item._id,
                                    size: 1,
                                }).then(res=>{
                                    this.map.centerAndZoom(new BMap.Point(res.data.content[0].longitude,res.data.content[0].latitude),14);
                                })
                            }
                            this.getHouseDistribution(()=>{
                                this.map.clearOverlays();
                                this.createMarkPoint()
                            });
                        });
                    }
                });
                this.isMoveend = true;
            },
            //绘制地铁
            createSubwayCover(subwayList,subwayType){
                this.dynamicTags.subwayLineId = subwayType.subwayLineId;
                this.post("pc/HouseInfoController/getSubwayLineHouseCount",{ //地图里展示站点套数
                        subwayLineId: subwayType.subwayLineId,
                        priceMax: this.dynamicTags.priceMax,
                        priceMin: this.dynamicTags.priceMin,
                        userAreaMax:this.dynamicTags.userAreaMax,
                        userAreaMin:this.dynamicTags.userAreaMin,
                        textSearch: this.dynamicTags.textSearch,
                        screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                        screenRightLog: this.dynamicTags.screenRightLog,   //东北
                        screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                        screenRightLat: this.dynamicTags.screenRightLat ,
                        roomNo:this.dynamicTags.roomNo,
                        productType:this.dynamicTags.productType,
                        lookUrl:this.dynamicTags.lookUrl,
                }).then(res=>{
                    this.subwayList = subwayList.map((item,index)=>{
                        for(var i = 0;i < res.data.length;i++){
                            if(res.data[i].stationsOne === item.id){
                                item.totalNum = res.data[i].totalNum;
                            }
                        }
                        return item;
                    })
                }).then(()=>{
                    let size = 1.2;
                    this.subwayList.map(item => {
                        let labelText =  item.totalNum ? `${item.name}<br/>(${item.totalNum}套)` : `${item.name}<br/>(0套)`;

                        let label2 = new BMap.Label(labelText, {
                            position: new BMap.Point(item.longitude, item.latitude)
                        });
                        label2.setStyle({
                            textAlign: "center",
                            color : "#fff",
                            background: "rgba(228, 57, 60, 0.9)",
                            border: "1px solid rgba(228, 57, 60, 0.9)",
                            fontSize : "0.22rem",
                            height : `${size}rem`,
                            width : `${size}rem`,
                            borderRadius: '50%',
                            marginTop: `-${size/2}rem`,
                            marginLeft: `-${size/2}rem`,
                            paddingTop: `${size/5}rem`,
                            boxSizing: "border-box",
                        });

                        this.map.addOverlay(label2);
                        label2.addEventListener("click", () => {
                            this.dynamicTags.stationsId = item.id;
                            this.dynamicTags.longitude = item.longitude;
                            this.dynamicTags.latitude = item.latitude;
                            this.dynamicTags.isshowScope = true;
                            this.subwayStation = true;   //点击时不进行缩放跟拖拽
                            this.subwayClick = true;
                            this.isMoveend = false;
                            this.map.centerAndZoom(new BMap.Point(item.longitude, item.latitude),15);
                            this.getHouseDistribution(()=>{
                                this.map.clearOverlays();
                                this.subwayMarkPoint();
                            });
                        });
                    });
                    this.isSubwaySearch = false;   //加载完地铁可以缩放事件
                    this.isMoveend = true;    //加载完地铁站点时可以拖拽加载
                })
            },
            //获取点击时区域内的的小区
            getHouseDistribution(cb = ()=>{}){
                this.getLatLog();
                this.post("pc/HouseInfoController/getCommunityByScreenCoordinate", {
                    areaId: this.areaId,
                    priceMax: this.dynamicTags.priceMax,
                    priceMin: this.dynamicTags.priceMin,
                    userAreaMax:this.dynamicTags.userAreaMax,
                    userAreaMin:this.dynamicTags.userAreaMin,
                    textSearch: this.dynamicTags.textSearch,
                    screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                    screenRightLog: this.dynamicTags.screenRightLog,   //东北
                    screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                    screenRightLat: this.dynamicTags.screenRightLat ,
                    subwayLineId:this.dynamicTags.subwayLineId,
                    roomNo:this.dynamicTags.roomNo,
                    productType:this.dynamicTags.productType,
                    lookUrl:this.dynamicTags.lookUrl,
                }).then(res => {
                    if (res.code !== 0) {
                        this.showErrorTip(res.msg);
                    } else {
                        if(res.data.length !=0){
                            this.points = res.data;
                            cb();
                        }else{
                            this.notData = true;
                            setTimeout(()=>{
                                this.notData = false;
                            },2000)
                            this.isMoveend = true;
                        }

                    }
                });
            },
            //绘制区域点击后小区
            createMarkPoint(){
                let points = this.points;
                for (let i = 0; i < points.length; i++) {
                    let obj = points[i];
                    this._getContent(obj)
                }

            },
            //小区
            _getContent(obj,flat){
                var _this = this;
                var mp = this.map;
                var obj = obj;
                function ComplexCustomOverlay(point, text, mouseoverText){
                    this._point = point;
                    this._text = text;
                    this._overText = mouseoverText;
                }
                ComplexCustomOverlay.prototype = new BMap.Overlay();
                ComplexCustomOverlay.prototype.initialize = function(map){
                    this._map = map;
                    var div = this._div = document.createElement("div");
                    div.style.position = "absolute";
                    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                    div.style.backgroundColor = "#EE5D5B";
                    // div.style.border = "1px solid #BC3B3A";
                    div.style.color = "white";
                    div.style.height = "0.3rem";
                    div.style.padding = "0.1rem";
                    div.style.lineHeight = "0.3rem";
                    div.style.whiteSpace = "nowrap";
                    div.style.MozUserSelect = "none";
                    div.style.fontSize = "0.24rem"
                    var span = this._span = document.createElement("span");
                    div.appendChild(span);
                    span.appendChild(document.createTextNode(this._overText));
                    var that = this;

                    var arrow = this._arrow = document.createElement("div");
                    arrow.style.background = "url(../../../../static/rent/house-list/label.png) no-repeat";
                    arrow.style.position = "absolute";
                    arrow.style.width = "0.2rem";
                    arrow.style.height = "0.18rem";
                    arrow.style.top = "0.5rem";
                    arrow.style.left = "0.2rem";
                    arrow.style.overflow = "hidden";
                    div.appendChild(arrow);

                    div.addEventListener("touchend",()=>{
                        var Overlays = _this.map.getOverlays();
                        Overlays.forEach(item2=>{
                            if(item2._text){
                                if(item2._text===obj.communityName){
                                    item2.V.style.background = "rgba(255, 150, 37, 0.9)"
                                    item2.V.style.border = "rgba(255, 150, 37, 0.9)"
                                    item2.V.style.zIndex = 999
                                    item2.V.lastElementChild.style.backgroundPosition = "0rem -0.20rem";
                                }else{
                                    item2.V.style.background = "rgba(228, 57, 60, 0.9)"
                                    item2.V.style.border = "rgba(228, 57, 60, 0.9)"
                                    item2.V.style.zIndex = -1
                                    item2.V.lastElementChild.style.backgroundPosition = "0rem 0rem";
                                }
                            }
                        })
                        // div.style.backgroundColor = "rgba(255, 150, 37, 1)";
                        // arrow.style.backgroundPosition = "0rem -0.20rem";
                        if(_this.regionSearch && _this.oneregionSearch && _this.isMoveend){   //区域
                            _this.dynamicTags.longitude = obj.longitude;
                            _this.dynamicTags.latitude = obj.latitude;
                            // _this.dynamicTags.isshowScope = true;
                            _this.dynamicTags.communityId=obj.communityId;
                        }else if(_this.isMoveend && !_this.isSubwaySearch){    //拖拽是地铁
                            _this.dynamicTags.longitude = obj.longitude;
                            _this.dynamicTags.latitude = obj.latitude;
                            _this.dynamicTags.stationsId = obj.stationsOne;
                        }
                        _this.dynamicTags.districtId = "";
                        _this.areaName = obj.communityName;
                        _this.houseNumber = obj.sum || obj.totalNum;
                        _this.showList = true;
                    })
                    mp.getPanes().labelPane.appendChild(div);
                    return div;
                }
                ComplexCustomOverlay.prototype.draw = function(){
                    var map = this._map;
                    var pixel = map.pointToOverlayPixel(this._point);
                    this._div.style.left = (pixel.x - parseInt(this._arrow.style.left))/100 + "rem";
                    this._div.style.top  = (pixel.y - 30)/100 + "rem";
                }
                if(flat){
                    var txt = obj.communityName, mouseoverTxt = txt + " " + obj.sum + "套" ;
                }else{
                    var txt = obj.communityName, mouseoverTxt = txt + " " + obj.totalNum + "套" ;
                }


                var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(obj.longitude,obj.latitude), obj.communityName,mouseoverTxt);

                mp.addOverlay(myCompOverlay);
                this.isMoveend = true;   //创建完小区可以拖拽加载
                // this.isenableMassClear = false;
                this.oneregionSearch = true; //创建完小区可以缩放
                this.iszoomend = true;  //缩放
            },
            //搜索时改变显示区域
            commitReigon(){
                if(this.regionSearch){
                    let regionCenter = this.map.getZoom();
                    if(regionCenter<=13){
                            this.isMoveend = false;
                            this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                            this.map.clearOverlays();
                            this.getAreaDistribution();
                    }else if(regionCenter>=14){
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.createMarkPoint();
                        });
                    }
                }else if(!this.isSubwaySearch && !this.subwayStation && !this.regionSearch){
                    let subwayCenter = this.map.getZoom();
                    if(subwayCenter<=13){    //小于12地图变成地铁
                        this.map.clearOverlays();
                        this.showMarkPoint = false;
                        this.dynamicTags={
                            stationsId:"",
                        };
                        this.createSubwayCover(this.subwayList,this.subwayType);

                        return;
                    }else if(subwayCenter>=14){   //大于14地图变成站点
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.subwayMarkPoint();
                        });

                        return;
                    }

                }
            },
            getLatLog(){
                var cp = this.map.getBounds();
                this.dynamicTags.screenLeftLog = cp.getSouthWest().lng,    //西南
                this.dynamicTags.screenRightLog = cp.getNorthEast().lng,   //东北
                this.dynamicTags.screenLeftLat =  cp.getSouthWest().lat,     //西南
                this.dynamicTags.screenRightLat = cp.getNorthEast().lat     //东北
            },
            //绘制站点房源
            subwayMarkPoint(flat){
                let points = this.points;
                for (let i = 0; i < points.length; i++) {
                    let obj = points[i];
                    this._getContentTwo(()=>{
                        this._getContent(obj,flat)
                    })
                }
            },
            //绘制站点
            _getContentTwo(cb = () =>{}){
                let size = 80;
                 setTimeout(()=>{
                    this.subwayList.map(item => {
                        item.totalNum = item.totalNum ? item.totalNum :0;
                        let label = new BMap.Label();
                        label.setPosition(new BMap.Point(item.longitude, item.latitude))
                        label.setContent(`<div class="labelText" style="width:0.8rem; height:0.8rem;">`+
                            `<span style="margin-top:0.2rem;display:block;background:url(../../../../static/rent/house-list/san.png) no-repeat; width: 0.16rem;height: 0.16rem;margin-left: 0.26rem;background-size: 100%;"></span>`
                            +`<p style="width:1.5rem;height:0.3rem;background-color: #fff;color: #000;line-height:0.3rem;margin-left:-0.35rem;margin-top:-0.02rem;">`+item.name+`</p>`
                            +`</div>`)
                        label.setStyle({
                                textAlign: "center",
                                color : "#fff",
                                background: "url(../../../../static/rent/house-list/map.png) no-repeat",
                                backgroundSize:"100%",
                                backgroundColor:"#fff",
                                fontSize : "0.16rem",
                                height : `0.8rem`,
                                width : `0.8rem`,
                                borderRadius: '50%',
                                marginTop: `-0.28rem`,
                                marginLeft: `-0.28rem`,
                                paddingTop: `0.53rem`,
                                boxSizing: "border-box",
                                border:"none"
                        });
                        this.map.addOverlay(label);
                    });
                    this.isSubwaySearch = false;
                    this.isMoveend = true;    //加载完地铁站点时可以拖拽加载
                    this.subwayStation = false;   //加载完可以缩放加载
                    // this.isenableMassClear = false;
                    cb();
                },500)
            },
            //绘制地铁线路
            getSubwayMap(name,subwayList,subwayType){
                this.subwayType = subwayType;
                this.isSubwaySearch = true;   //点击地铁搜索时不进行搜索事件
                this.regionSearch = false;   //区域缩放跟拖拽禁止
                this.subwayList = subwayList;
                this.isMoveend = false;    //点击地铁时不可以拖拽加载
                this.subwayName = name;
                this.dynamicTags.districtId = "";
                this.dynamicTags.communityId = "";
                this.map.clearOverlays();
                try{
                    var cp = this.map.getBounds();
                    this.dynamicTags.screenLeftLog = cp.getSouthWest().lng,    //西南
                    this.dynamicTags.screenRightLog = cp.getNorthEast().lng,   //东北
                    this.dynamicTags.screenLeftLat =  cp.getSouthWest().lat,     //西南
                    this.dynamicTags.screenRightLat = cp.getNorthEast().lat     //东北
                }catch(e){
                    Error(e)
                }
                if(this.subwayType.name!==""){   //点击站点进来
                    this.dynamicTags.subwayLineId = this.subwayType.subwayLineId;
                    subwayList.forEach(item=>{
                        if(item.name===this.subwayType.name){
                            this.dynamicTags.longitude = item.longitude;
                            this.dynamicTags.latitude = item.latitude;
                            // this.dynamicTags.isshowScope = true;
                            this.map.centerAndZoom(new BMap.Point(item.longitude,item.latitude),15);
                        }
                    })
                    this.getHouseDistribution(()=>{
                        this.map.clearOverlays();
                        this.getLatLog();
                        this.subwayMarkPoint();
                    });
                    return;
                }
                var busline = new BMap.BusLineSearch(this.map,{
                    renderOptions:{map:this.map,panel:"r-result"},
                        onGetBusListComplete: function(result){
                            if(result) {
                                var fstLine = result.getBusListItem(0);//获取第一个公交列表显示到map上
                                busline.getBusLine(fstLine);
                            }
                        }
                });
                var busName = name;
                busline.getBusList(busName);
                setTimeout(()=>{
                    this.createSubwayCover(subwayList,subwayType);
                    this.map.setZoom(13);
                },1000)
            },
            //定位
            getAddressComponent(){
                var options = {
                    enableHighAccuracy: true,
                    maximumAge: 1000
                };
                if (navigator.geolocation) {
                    //浏览器支持geolocation
                    var geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(result => {
                        result.accuracy = 10;
                        this.longitude = result.longitude; //纬度
                        this.latitude = result.latitude; //使用百度地图API //创建地图实例
                        var point = new BMap.Point(this.longitude, this.latitude);
                        var myIcon = new BMap.Icon(icon_ditu2,
                        new BMap.Size(45,70));
                        var mk = new BMap.Marker(point,{icon:myIcon});  // 创建标注
                        this.map.centerAndZoom(new BMap.Point(this.longitude,this.latitude),15);
                        mk.disableMassClear();
                        this.map.addOverlay(mk);
                        // this.addressAnalysis();
                    });
                }
            },
            // addressAnalysis() {
            // //  console.log(234,this.longitude,this.latitude);
            //     var geolocation = new BMap.Geolocation();
            //     var gc = new BMap.Geocoder();
            //     geolocation.getCurrentPosition(r => {
            //         if (geolocation.getStatus() == 0) {
            //         //console.log(r.point.lat)
            //             var mypoint = new BMap.Point(this.longitude, this.latitude); //r.point.lng,r.point.lat);
            //             gc.getLocation(mypoint, x => {
            //                 //正确的是地址逆解析成功后设置元素内容为详细地址，
            //                 //但是这里解析错误x为null  不清楚什么原因，
            //                 //但之前是好的 不知道怎么回事百度API就报错了
            //                 //有人遇到过百度经常报错时好时坏的吗？
            //                 this.address = x.surroundingPois[0].title;
            //                 this.recordSource = x.surroundingPois[0].title;
            //                 // console.log(this.address);
            //                 // $("#map_objective").html(x.address);
            //             });
            //         } else {
            //             alert(geolocation.getStatus());
            //         }
            //     });
            // },
            //获取区域或地铁数据
            getRegionSubway(){
                let url ="";
                if(this.region && this.isType=="region"){
                    url = "agenthouseCutomer/common/getAreaList";
                }else if(this.subway && this.isType=="houseMap"){
                    url = "agenthouseCutomer/common/getSubwayLine";
                }
                this.post(url,{}).then((res)=>{
                    let compare = function(prop) {
                        return function(obj1, obj2) {
                            let val1 = obj1[prop];
                            let val2 = obj2[prop];
                            if (!isNaN(parseInt(val1)) && !isNaN(parseInt(val2))) {
                                val1 = parseInt(val1);
                                val2 = parseInt(val2);
                            }
                            if (val1 < val2) {
                                return -1;
                            } else if (val1 > val2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }
                    }
                    if(this.region && this.isType=="region"){
                        res.data = res.data.sort(compare("name"))
                        this.RegionList = res.data;
                    }else if(this.subway && this.isType=="houseMap"){
                        res.data = res.data.sort(compare("name"))
                        this.subwayList = res.data;
                        return res.data;
                    }
                }).then(res=>{
                    if(this.isType==="houseMap"){
                         this.post("pc/HouseInfoController/getEachSubwayLineHouseCount",{
                        }).then(res2=>{
                            this.subwayList = res.map(item=>{
                                for(var k in res2.data){
                                    if(k === item.id){
                                        item.totalNum = res2.data[k].totalNum;
                                    }
                                }
                                return item;
                            })
                        })
                    }
                })
             },
             //区域
            regionClick(){
                this.region = !this.region;
                this.filtrate = false;
                this.subway = false;
                this.price = false;
                this.market = this.region; //遮罩
                // this.region = !this.region;
                this.isType = "region";
                if(this.region){
                    this.getRegionSubway();
                }
            },
            //地铁
            subwayClick(){
                this.subway = !this.subway;
                this.filtrate = false;
                this.region = false;
                this.price = false;
                this.market = this.subway; //遮罩

                this.isType = "houseMap";
                if(this.subway){
                    this.getRegionSubway();
                }
            },
            //价格
            priceClick(){
                this.price = !this.price;
                this.filtrate = false;
                this.region = false;
                this.subway = false;
                this.market = this.price; //遮罩
            },
            //筛选
            filtrateClick(){
                this.region = false;
                this.subway = false;
                this.price = false;
                this.filtrate = !this.filtrate;
                this.market = this.filtrate; //遮罩
            },
            //区域返回数据
            changeRegionSubway(id,regionId,name){
                this.dynamicTags.districtId = id || "";    //区域ID
                // this.dynamicTags.regionId =  regionId || "";   //具体ID
                this.dynamicTags.textSearch= "";
                this.headerSearch = "";
                this.isSubwaySearch = true;   //点击地铁搜索时不进行搜索事件
                this.regionSearch = true;
                //点击区域地铁置空
                this.dynamicTags.stationsId = "";
                this.dynamicTags.subwayLineId = "";
                this.subwayClass = false;
                this.isSubwayClass = false;
                this.$refs.subwayCommpont.clear();
                this.clearOption();
                if(id || regionId){
                    this.regionClass = true;
                    this.isRegionClass = true;
                    this.isUpload = true;
                }else{
                    this.regionClass = false;
                    this.isRegionClass = false;
                }
                if(id && !!name===false){
                    this.area.forEach(item=>{
                        if(item._id === id){
                            this.oneregionSearch = false;   //点击区域的时候不进行缩放事件
                            this.isMoveend = false;    //点击区域的时候不可以拖拽加载
                            this.areaId = id;
                            this.dynamicTags.districtId = id;
                            if(item.districtName!=="海淀" && item.districtName!=="昌平" && item.districtName!=="顺义"){
                                this.map.centerAndZoom(new BMap.Point(item.longitude, item.latitude),14);
                            }else{
                                this.post("pc/HouseInfoController/getMapHouseList",{
                                    page: "1",
                                    districtId: item._id,
                                    size: 1,
                                }).then(res=>{
                                    this.map.centerAndZoom(new BMap.Point(res.data.content[0].longitude,res.data.content[0].latitude),14);
                                })
                            }
                            this.getHouseDistribution(()=>{
                                this.map.clearOverlays();
                                this.createMarkPoint()
                            });
                        }
                    })
                    // this.getHouseList();
                }else if(!!name){
                    var localSearch = new BMap.LocalSearch(this.map);
                    localSearch.setSearchCompleteCallback( (searchResult)=> {
                        var poi = searchResult.getPoi(0);
                        this.map.centerAndZoom(new BMap.Point(poi.point.lng,poi.point.lat),14);
                        this.getHouseDistribution(()=>{
                            this.map.clearOverlays();
                            this.createMarkPoint()
                        });
                    });
                    localSearch.search(name);
                }else{
                    this.dynamicTags.districtId = "";
                    this.dynamicTags.communityId = "";
                    this.dynamicTags.longitude = "";
                    this.dynamicTags.latitude = "";
                    this.dynamicTags.isshowScope = false;
                    this.map.clearOverlays();
                    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                    this.getAreaDistribution();
                }
                this.market = false;
                this.subway = false;
                this.region = false;
                this.HouseLists = [];
            },
            //地铁返回数据
            changeSubway(name,subwayList,subwayType){
                //点击地铁区域置空
                this.dynamicTags.districtId = "";    //区域ID
                this.dynamicTags.communityId = "";
                this.dynamicTags.regionId = "";   //具体ID
                this.regionClass = false;
                this.isRegionClass = false;
                this.$refs.regionCommpont.regionClear();
                //清空筛选跟价格
                this.clearOption();

                if(name){
                    this.subwayClass = true;
                    this.isSubwayClass = true;
                    this.isUpload = true;
                }else{
                    this.subwayClass = false;
                    this.isSubwayClass = false;
                }
                if(name){
                    this.dynamicTags.stationsId = subwayType.subwayId || "";
                    this.dynamicTags.subwayLineId = subwayType.subwayLineId || "";
                    this.getSubwayMap(name,subwayList,subwayType)
                    // this.getHouseList();
                }else{
                    this.dynamicTags.stationsId =  "";
                    this.dynamicTags.subwayLineId =  "";
                    this.dynamicTags.districtId = "";
                    this.dynamicTags.communityId = "";
                    this.dynamicTags.longitude = "";
                    this.dynamicTags.latitude = "";
                    this.dynamicTags.isshowScope = false;
                    this.map.clearOverlays();
                    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                    this.getAreaDistribution();
                }
                this.market = false;
                this.subway = false;
                this.region = false;

                this.HouseLists = [];
            },
            //价格返回数据
            changePrice(data){
                if(data[1]=="10000" && data[0] =="500"){
                    this.priceClass = false;
                    this.isPriceClass = false;
                }else{
                    this.priceClass = true;
                    this.isPriceClass = true;
                    this.isUpload = true;

                }
                this.setStorage("mm",false);
                this.dynamicTags.priceMax = data[1];
                this.dynamicTags.priceMin = data[0];
                this.market = false;
                this.price = false;
                this.commitReigon();
                this.HouseLists = [];
                //  this.getHouseList();
            },
            //筛选
            allBuildClick(){
                this.$refs.filtrateCommpont.allBuildClick();
            },
            //重置
            allBuildExitClick(){
                this.$refs.filtrateCommpont.allBuildExitClick();
            },
            //筛选返回
            changeFiltrate(data,close = true){
                if(data.productType  || data.roomNo ||data.userAreaMin || data.lookUrl){
                    this.filtrateClass = true;
                    this.isFiltrateClass = true;
                    this.isUpload = true;
                    if(data.productType == "0019001"){
                        this.houseType = "0019001";
                    }else if (data.productType == "0019002"){
                        this.houseType = "0019002";
                    }else if (data.productType == "0019003"){
                        this.houseType = "0019003";
                    }
                }else{
                    this.houseType = "";
                    this.filtrateClass = false;
                    this.isFiltrateClass = false;
                }
                this.filtrate = close;
                this.market = close;
                this.dynamicTags.productType = data.productType;
                this.dynamicTags.roomNo = data.roomNo;
                this.dynamicTags.userAreaMin = data.userAreaMin;
                this.dynamicTags.userAreaMax = data.userAreaMax;
                this.dynamicTags.lookUrl = data.lookUrl;
                if(close){
                    return
                }
                this.commitReigon();
                this.HouseLists = [];
            },
            clearOption(){
                //清空筛选跟价格
                this.dynamicTags.priceMax = "";
                this.dynamicTags.priceMin = "";
                this.dynamicTags.userAreaMax = "";
                this.dynamicTags.userAreaMin = "";
                this.dynamicTags.roomNo = "";
                this.dynamicTags.productType = "";
                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.priceClass = false;
                this.isPriceClass = false;
                this.$refs.filtrateCommpont.filtrateClear();
                this.setStorage("mm",true);
            },
            markets(){
                if(this.dynamicTags.districtId == ""){
                    this.regionClass = false;
                }
                if(this.dynamicTags.productType == "" && this.dynamicTags.roomNo =="" && this.dynamicTags.userAreaMin=="" && this.dynamicTags.userAreaMax ==""){
                    this.filtrateClass = false;
                }
                if(this.dynamicTags.priceMax == 10000 && this.dynamicTags.priceMin == 500){
                    this.priceClass = false;
                 }
                if(this.dynamicTags.stationsId == "" && this.dynamicTags.subwayLineId == ""){
                    this.subwayClass = false;
                }
                // this.onMarket = true;
                this.filtrate = false;
                this.region = false;
                // this.regions = false;
                this.subway = false;
                this.price = false;
                this.market = !this.market;
            },
            BMapMask(){
                this.dynamicTags.districtId = "";
                this.dynamicTags.communityId = "";
                this.currentPage = 1;
                this.HouseLists = [];
                this.showList = false;
                this.scrollList = false;
            },
            //获取房源列表
            getHouseList(){
                let Url = "pc/HouseInfoController/getMapHouseList";
                // let req = Object.assign({}, this.HouseListData);
                return this.post(Url, {
                        page: this.currentPage,
                        roomNo: this.dynamicTags.roomNo,
                        districtId: this.dynamicTags.districtId,
                        regionId:this.dynamicTags.regionId,
                        communityId: this.dynamicTags.communityId,
                        priceMax: this.dynamicTags.priceMax,
                        priceMin: this.dynamicTags.priceMin,
                        userAreaMax:this.dynamicTags.userAreaMax,
                        userAreaMin:this.dynamicTags.userAreaMin,
                        textSearch: this.dynamicTags.textSearch,
                        sortType:this.dynamicTags.sortType,
                        asc:this.dynamicTags.asc,
                        stationsId:this.dynamicTags.stationsId,
                        subwayLineId:this.dynamicTags.subwayLineId,
                        screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                        screenRightLog: this.dynamicTags.screenRightLog,   //东北
                        screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                        screenRightLat: this.dynamicTags.screenRightLat ,
                        size: 10,
                        productType:this.dynamicTags.productType,
                        lookUrl:this.dynamicTags.lookUrl,
                    }).then((res)=>{
                        if(res.data.content.length > 0){
                            this.loading = false;
                            this.isData = false;
                            this.total = res.data.totalPageNo;
                            res.data.content.forEach(item => {
                                item.tags= item.tags ? item.tags.split(",").slice(0,3) : "";
                                for( var i = 0; i < item.tags.length; i ++){
                                    if(item.tags[i] == ""){
                                        item.tags.splice(i,1)
                                    }
                                }
                                if(item.productType == "0019001"){
                                    if(item.roomRentStatus=="0015001"){
                                        item.image = this.bookedUrl;
                                    }else if(item.roomRentStatus=="0015004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? this.concatFileUrl(item.image,200,180) : "";
                                    }
                                }else if(item.productType=="0019002"){
                                    if(item.houseRentStatus =="0026002"){
                                        item.image = this.bookedUrl;
                                    }else if(item.houseRentStatus =="0026004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? this.concatFileUrl(item.image,200,180) : "";
                                    }
                                }else if(item.productType=="0019003"){
                                    if(item.houseRentStatus =="0026002"){
                                        item.image = this.bookedUrl;
                                    }else if(item.houseRentStatus =="0026004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? this.concatFileUrl(item.image,200,180) : "";
                                    }
                                }
                                this.HouseLists.push(item);
                            });
                        }else{
                            this.isData = true;
                            // this.HouseLists = [];
                        }
                        this.totalPageNo = res.data.totalPageNo;
                        this.isbottom = false;
                        return res;
                })
            },
            refresh(done){
                this.currentPage = 1;
                this.HouseLists = [];
                this.isUpload = true;
                this.getHouseList().then((res)=>{
                    if(res.data.content.length=="0"){
                        done(true)
                    }else{
                        done(false)
                    }
                    if(this.HouseLists.length<2){
                        this.scrollList = true;
                    }else{
                        this.scrollList = false;
                    }
                })
            },

            infinite(done){
                this.getHouseList().then((res)=>{
                    this.currentPage += 1;
                    if(res.data.content.length=="0"){
                        done(true)
                    }else{
                        done(false)
                    }
                    if(this.HouseLists.length<2){
                        this.scrollList = true;
                    }else{
                        this.scrollList = false;
                    }
                })
            },
            //跳转房源详细
            goHouseDetail(id,productType){
                this.setStorage("mm",false);
                this.$router.push({path:'/HouseList/houseDetail',query:{id:id,productType:productType}})
            },

        },

        watch: {
            regionSearch(){
                if(this.regionSearch){
                    this.dynamicTags.subwayLineId = "";
                    this.isSubwaySearch = true;
                    this.oneregionSearch = true;
                    this.map.clearOverlays();
                    this.isMoveend = false;
                    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                    this.getAreaDistribution();
                    // this.getHouseDistribution();
                }
            },
             price:function(){
                if(this.price){
                    this.priceClass= true;
                }else if(this.price == false && this.isPriceClass == false ){
                    this.priceClass= false;
                }else{
                    this.priceClass= true;
                }
            },
            region:function(){
                if(this.region){
                    this.regionClass= true;
                }else if(this.region == false && this.isRegionClass == false ){
                    this.regionClass = false;
                }else{
                    this.regionClass = true;
                }
            },
            subway:function(){
                if(this.subway){
                    this.subwayClass= true;
                }else if(this.subway == false && this.isSubwayClass == false ){
                    this.subwayClass = false;
                }else{
                    this.subwayClass = true;
                }
            },
            filtrate:function(){
                if(this.houseType){
                    this.filtrateClass= true;
                }
                else if(this.filtrate){
                    this.filtrateClass= true;
                }else if(this.filtrate == false && this.isFiltrateClass == false ){
                    this.filtrateClass = false;
                }else{
                    this.filtrateClass = true;
                }
            },
        },
        computed:{
             isonLinerent(){
                if(this.$route.query.title != "在线租房"){
                    this.openUrl = openUrl; //"../../../../static/rent/img/open.png";
                    this.stopUrl = stopUrl;//"../../../../static/rent/img/stop.png";
                }else{
                    this.openUrl = openUrl1  //"../../../../static/new/img/stop.png";
                    this.stopUrl = stopUrl1 //"../../../../static/new/img/open.png";
                }
                return this.$route.query.title != "在线租房";
            }
        }
    }
</script>
