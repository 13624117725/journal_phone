<style scoped lang="scss">
 @import "../../style/theme.scss";
        $listColor:#d4d4d4;
        // $greyColor:#eee;
        // $titleColor:#eee;
        // $lineColor:#ccc;
        .regloin{

            background-color: $greyColor;
            width: 100%;
            // font-size:$mostFontSize;
            .search-house-list{
                width: 100%;
                overflow: hidden;
                .house-type-ul{
                    height: 8.5rem;
                    overflow-y: scroll;
                    overflow-x:hidden;
                    float: left;
                    width: 50%;
                    background-color: $titleColor;
                    padding-left:0.3rem;
                    box-sizing: border-box;
                    border-right: 2px solid $lineColor;
                    background-color: #fff;
                    -webkit-overflow-scrolling: touch;
                        &:last-child{
                            border-right:none
                        }
                        &:nth-child(1){
                            background-color: #eee;
                        }
                 .oLi{
                    width: 100%;
                    height: 0.54rem;
                    line-height: 0.54rem;
                    text-align: left;
                    padding:0.15rem;
                    font-size: 0.28rem;
                    /* border: 1px solid #ccc; */
                    margin-left: 2%;
                    margin-top: 0px;
                    border-radius: 0px;
                    border: none;
                    .textregion{
                        display: inline-block;
                        padding: 0.05rem 0.2rem;
                    }
                }
                .no-limit{

                }
                .redColor {
                    display: inline-block;
                    padding: 0.05rem 0.2rem;
                    // background-color: $mineColor;
                    color: #fff;
                }
                .subColor{
                    display: inline-block;
                    padding: 0.05rem 0.2rem;
                    // background-color: $mineColor;
                    color: #fff;
                }
            }
        }
    }
    .iosregloin{
        top:1.05rem;
    }
    .bounce-enter-active {
        animation: bounce-in  .5s ease;
    }
    .bounce-leave-active {
        animation: bounce-out .2s;
    }
    @keyframes bounce-in {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0rem);
        }
    }
    @keyframes bounce-out {
        0% {
            opacity: 0;
            // transform: translateY(0rem);
        }
        100% {
            opacity: 0;
            // transform: translateY(-100%);
        }
    }
</style>

<template>
        <!--筛选部分  -->
        <transition name="bounce">
            <!-- v-show="isSearchShow" -->
            <div class="regloin" v-show="isSearchShow">
                <div class="search-house-list">
                    <ul class="house-type-ul">
                        <template>
                            <li  class=" oLi no-limit"  @click="areaLimitClick"> <span class="textregion" :class="{redColor:isLimit}">不限</span> </li>
                            <li v-for="(item,index) in regionSubway" :key="index" class="oLi area-list"  @click="allAreaClick(item.id,index)"> <span class="textregion" :class="{redColor:item.id===isAreaType}">{{item.name}}</span> </li>
                        </template>
                    </ul>
                    <ul class="house-type-ul" id="area">
                        <template>
                            <li  class=" oLi no-limit" v-if="isNoLimit"  @click="subwayLimitClick"><span class="textregion" :class="{subColor:isSubwayLimit}">不限</span></li>
                            <li v-for="item in regionSubwayChildList" :key="item.id" class="oLi area-list"  @click="subwayClick(item.id,item.name)"><span class="textregion" :class="{subColor:item.id==isSubwayType}">{{item.name}}</span></li>
                        </template>
                    </ul>
                </div>
            </div>
        </transition>
</template>

<script>
export default {
        props:{
        isShow:{
            type:Boolean,
            default:"",
        },
        type:{
            type:String,
            default:"",
        },
        RegionList:{
            type:Array,
            default:[]
        },
        isMap:{
            type:Boolean,
            default:true,
        }
        },
        data(){
            return{
                regionSubway:[],
                regionSubwayChildList:[],
                AllRegionSubway:{},
                isAreaType:"",
                isSubwayType:"",
                isLimit:true,
                isSubwayLimit:false,
                isNoLimit:false,
                region:false,
                isAndrion:true,
            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
        //区域地铁筛选
            allAreaClick(id,index){
                this.isAreaType = id;
                this.isLimit = false;
                this.isNoLimit = true;
                let url = "";
                // let logId = id + index;
                // console.log(logId)
                if(this.type=="region"){
                    url = "common/getRegionList"
                }else if(this.type=="subway"){
                    url = "common/getStationLine"
                }
                if(this.AllRegionSubway[id] == undefined){
                    this.post(url,{
                        areaId: id
                    }).then((res)=>{
                        this.regionSubwayChildList = res.data;
                        this.AllRegionSubway[id] = res.data;
                    })
                }else{
                    this.regionSubwayChildList = this.AllRegionSubway[id];
                }
            },
            //二级筛选
            subwayClick(id,name){
                this.isSubwayType = id;
                var id = id || "";
                this.isSubwayLimit = false;
                this.$emit("changeRegionSubway",this.isAreaType,id,name);
            },
            //区域不限
            areaLimitClick(){
                this.isAreaType = "";
                this.isLimit = !this.isLimit;
                this.regionSubwayChildList = [];
                this.$emit("changeRegionSubway","");
            },
            //具体不限
            subwayLimitClick(){
                this.isSubwayType = "";
                if(this.isSubwayLimit){
                    this.isSubwayLimit  = true;
                }else{
                    this.isSubwayLimit = !this.isSubwayLimit;
                }

                this.$emit("changeRegionSubway",this.isAreaType);
            },
            regionClear(){
                this.isAreaType = "";
                this.isSubwayType = "";
                this.isLimit = false;
                this.isSubwayLimit =false;
                this.regionSubwayChildList = [];
            },

        },
        watch:{
            //  isShow:function(){
            //      if(!this.isShow){
            //         //  this.isAreaType = "";
            //          this.isSubwayType = "";
            //          this.isSubwayLimit = false
            //          this.isLimit = false;
            //      }
            //  }
            regionSubwayChildList: function () {
                setTimeout(function(){
                    var area =  document.getElementById("area")
                    let h = area.innerHeight || area.clientHeight || area.clientHeight;
                    let offseHeight =area.scrollHeight;
                    if(area.scrollHeight <= area.clientHeight){
                        area.addEventListener('touchmove', handler, false);
                    }else{
                        area.addEventListener('touchmove', function (e) {
                            e.returnValue = true;
                        }, false);
                    }
                    function handler() {
                        event.preventDefault();
                    }
                },500)
            }
        },
        computed:{
        isSearchShow(){
            if(this.isShow){
                this.regionSubway = this.RegionList;
                // this.regionSubwayChildList = this.regionSubwayChild;
            };
            this.isAndrion = false;

            return this.isShow;
        }
        },
    }
 </script>
