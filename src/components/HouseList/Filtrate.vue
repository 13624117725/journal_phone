<style scoped lang="less">
    @greyColor: grey;
    .regloinlist{
        height: 100%;
        overflow:auto;
        width: 100%;
        .search-house-list{
            width:100%;
            // height: 100%;
            background-color: #ccc;
            padding-left:0.3rem;
            box-sizing: border-box;
            // padding:0.2rem 0rem;
            padding-top:0.4rem;
            font-size: 0.28rem;
            .types{
                height: 0.5rem;
                padding:0rem 0rem 0rem 0.25rem;
                line-height: 0.5rem;
                // border-bottom: 1px solid @lineColor;
                font-size: 0.28rem;
                text-align: left;
            }
            .house-type-ul{
                width: 100%;
                overflow: hidden;
                margin-top:0rem;
                padding-bottom: 0.3rem;
                border-bottom: 1px solid #dcdcdc;
                .oLi{
                    background-color: #ccc;
                    width:33%;
                    text-align: center;
                    float: left;
                    height: 0.48rem;
                    // margin-right:0.2rem;
                    // width: 2rem;

                    line-height: 0.48rem;
                    border-radius:0.08rem;
                    border: 1px solid #ccc;
                    margin-top: 10px;
                    // float: left;
                    // text-align: center;
                    font-size:0.24rem;
                    // margin-top:0.2rem;
                    // margin-left:0px;
                    // &:last-child{
                    //     margin-right:0rem;
                    // }

                }
                .no-limit{
                    width: 1.1rem;
                    height: 0.48rem;
                    line-height: 0.48rem;
                    border-radius:0.08rem;
                    text-align: center;
                    margin-top:0.2rem;
                    border: 1px solid #ccc;
                    background-color: #ccc;
                    float: left;
                    margin-right: 0.2rem;
                }
                .feature-list{
                    background-color: @greyColor;
                    width: 1.85rem;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    border-radius:0.08rem;
                    float: left;
                    text-align: center;
                    margin-top:0.2rem;
                    margin-right: 0.3rem;
                    &:nth-child(4){
                        margin-right: 0rem;
                    }
                }
                .redColor {
                    border: 1px solid red;
                    // background-color: @partColor;
                    color: red;
                }
            }
        }
        .household{
            margin-top:0.2rem;
            .house-type-ul{
                .household-list{
                    width: 1.15rem;
                    margin-right: 0.2rem;
                }
                .orientation-list{
                    width: 1.15rem;
                    margin-right: 0.2rem;
                    &:nth-child(5){
                        margin-right: 0rem;
                    }
                }
                .constellation-list{
                    width: 1.15rem;
                    margin-right: 0.2rem;
                    &:nth-child(5){
                        margin-right: 0rem;
                    }
                    &:nth-child(10){
                        margin-right: 0rem;
                    }
                }
            }

        }
        .area{
            margin-top:0.2rem;
            .area-list{
                background-color: #ccc;
                width: 1.6rem;
                height: 0.48rem;
                line-height: 0.48rem;
                border-radius:0.08rem;
                float: left;
                text-align: center;
                margin-top:0.2rem;
                margin-right: 0.3rem;
                border: 1px solid #ccc;
                &:nth-child(4){
                    margin-right: 0rem;
                }
            }
        }
        // .buttons{
        //     padding:0.3rem 0rem;
        //     width: 100%;
        //     height: 0.8rem;
        //     .subMit{
        //         width: 50%;
        //         height: 100%;
        //         border-radius: 0.15rem;
        //         background-color: @mineColor;
        //         font-size:@reminderFontSize;
        //         border:1px solid @mineColor;
        //         color:#ccc;
        //         float:left;
        //         // margin-left:1.64rem;
        //         box-sizing: border-box;
        //     }
        //     .exit{
        //        // margin-left:1.04rem;
        //         width: 50%;
        //         height: 100%;
        //         border-radius: 0.15rem;
        //         font-size:@reminderFontSize;
        //         background-color:@greyColor;
        //         border:1px solid @mineColor;
        //         color:@mineColor;
        //         box-sizing: border-box;
        //     }
        // }
    }
    .iosregloin{
        top:1.05rem;
    }
    .bounce-enter-active {
        animation: bounce-in  .5s ease;
    }
    .bounce-leave-active {
        animation: bounce-out .2s ;
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
        <div class="regloinlist" v-show="isSearchShow" :class="{iosregloin:!isAndrion}">
            <div class="search-house-list">
                <div class="types">房型</div>
                <ul class="house-type-ul">
                    <template v-for="(item,index) in productType">
                        <li :key="index" class="oLi" :class="{redColor:index===isHousTypeList}" @click="allMoreTypeClick(index,item.id)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list household">
                <div class="types">户型</div>
                <ul class="house-type-ul">
                    <template v-for="(item,index) in roomNo">
                        <li :key="index" class=" oLi household-list" :class="{redColor:index===isHouseholdType}" @click="allHouseholdTypeClick(index,item.type)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list household">
                <div class="types">朝向</div>
                <ul class="house-type-ul">
                    <template v-for="(item,index) in orientationList">
                        <li :key="index" class=" oLi orientation-list" :class="{redColor:index===orientationIndex}" @click="allOrientationClick(index,item.type,item.code)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list area">
                <div class="types">面积</div>
                <ul class="house-type-ul">
                    <template>
                        <li  class="no-limit" :class="{redColor:isLimit}" @click="areaLimitClick">不限</li>
                        <li v-for="(item,index) in size" :key="index" class="area-list" :class="{redColor:index===isAreaType}" @click="allAreaClick(index,item.type)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list household">
                <div class="types">室友性别</div>
                <ul class="house-type-ul">
                    <template v-for="(item,index) in genderList">
                        <li :key="index" class=" oLi" :class="{redColor:index===genderIndex}" @click="genderClick(index,item.label,item.value)">{{item.label}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list household">
                <div class="types">星座</div>
                <ul class="house-type-ul">
                    <template v-for="(item,index) in constellationList">
                        <li :key="index" class=" oLi constellation-list" :class="{redColor:index===constellationIndex}" @click="constellationClick(index,item.type,item.flat)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <div class="search-house-list area">
                <div class="types">更多</div>
                <ul class="house-type-ul">
                    <template>
                        <!-- <li  class="no-limit" :class="{redColor:isLimitFeature}" @click="featureLimitClick">不限</li>  -->
                        <li></li>
                        <li v-for="(item,index) in feature" :key="index" class="feature-list" :class="{redColor:item.flat}" @click="featureClick(index,item.type,item.flat)">{{item.type}}</li>
                    </template>
                </ul>
            </div>
            <!-- <div class="buttons">
                <button class="subMit" @click="allBuildClick">筛选</button>
                <button class="exit" @click="allBuildExitClick">重置</button>
            </div> -->
            <div style="height:1rem;"></div>
        </div>
    </transition>
</template>

<script>
     export default {
         props:{
            isShow:{
                type:Boolean,
                default:false,
            },
            houseType:{
                type:String,
                default:"",
            }
         },
         data(){
             return{
                productType:[{id:'0019001',type:"合租",},{id:'0019002',type:"整租"},{id:'0019003',type:"国安家Home"}],
                roomNo:[{id:'1',type:"一居",},{id:'2',type:"二居"},{id:'3',type:"三居"},{id:'4',type:"四居"},{id:'5',type:"五居"}],
                size:[{id:'1',type:"10㎡以下",},{id:'2',type:"10-12㎡"},{id:'3',type:"12-15㎡"},{id:'4',type:"15-20㎡"},{id:'5',type:"20㎡以上"}],
                orientationList:[{code:"0011005",type:"东",},{code:"0011002",type:"南"},{code:"0011004",type:"西"},{code:"0011006",type:"北",},{code:"0011001",type:"南北"},{code:"0011003",type:"东南",}],
                // orientationList:["东","南","西","北","暗","南北","东南"],
                feature:[{flat:false,type:"3D实景"},{flat:false,type:"独立卫生间"},{flat:false,type:"独立阳台"},],
                genderList:[
                    {    //下拉
                        value: '1',
                        label: '都是帅哥'
                    },{    //下拉
                        value: '0',
                        label: '都是美女'
                    },{    //下拉
                        value: '2',
                        label: '异性空间'
                    },
                ],
                constellationList:[ {
                        flat: false,
                        type: '水瓶座'
                    },{    //下拉
                        flat: false,
                        type: '双鱼座'
                    },  {
                        flat: false,
                        type: '白羊座'
                    },{    //下拉
                        flat: false,
                        type: '金牛座'
                    },  {
                        flat: false,
                        type: '双子座'
                    },{    //下拉
                        flat: false,
                        type: '巨蟹座'
                    },  {
                        flat: false,
                        type: '狮子座'
                    },{    //下拉
                        flat: false,
                        type: '处女座'
                    },  {
                        flat: false,
                        type: '天秤座'
                    },{    //下拉
                        flat: false,
                        type: '天蝎座'
                    },  {
                        flat: false,
                        type: '射手座'
                    },{    //下拉
                        flat: false,
                        type: '魔蝎座'
                    },],
                isHousTypeList:"",  //房型
                isHouseholdType:"", //户型
                isAreaType:"",    //面积
                isLimit:false,    //面积不限
                isFeature:"",  //特色
                isLimitFeature:false,  //特色不限
                orientationIndex:"", //朝向
                constellationIndex:"",// 星座
                genderIndex:"",
                SearchDataList:{
                    productType:"",
                    roomNo:"",
                    userAreaMin:"",
                    userAreaMax:"",
                    lookUrl:false,
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:"",
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                },
                isConfirm:false,
                isAndrion:true,
             }
         },
         created(){
                switch(this.houseType){
                    case "0019001":
                        this.isHousTypeList = 0;
                        this.SearchDataList.productType = "0019001";
                        // this.$emit("changeFiltrate",this.SearchDataList);
                    break;
                    case "0019002":
                        this.isHousTypeList = 1;
                        this.SearchDataList.productType = "0019002";
                        // this.$emit("changeFiltrate",this.SearchDataList);
                    break;
                    case "0019003":
                        this.isHousTypeList = 2;
                        this.SearchDataList.productType = "0019003";
                        // this.$emit("changeFiltrate",this.SearchDataList);
                    break;
                    default:
                        this.isHousTypeList = "";
                    break;
                }
         },
         methods:{

             //筛选房型筛选
             allMoreTypeClick(index,type){
                 this.isHousTypeList = index;
                 this.SearchDataList.productType = type;
             },
             //户型
             allHouseholdTypeClick(index,type){
                this.isHouseholdType = index;
                this.SearchDataList.roomNo = index+1;
             },
             //朝向
             allOrientationClick(index,type,code){
                if(this.orientationIndex ===index){
                    this.orientationIndex ="";
                    this.SearchDataList.orientation = "";
                }else{
                    this.orientationIndex =index;
                    this.SearchDataList.orientation = code;
                }
             },
             //星座
             constellationClick(index,type,flat){
                if(this.constellationIndex ===index){
                    this.constellationIndex ="";
                    this.SearchDataList.roommateConstellation = "";
                }else{
                    this.constellationIndex =index;
                    this.SearchDataList.roommateConstellation = type;
                }
             },
             //性别
             genderClick(index,type,code){
                if(this.genderIndex ===index){
                    this.genderIndex ="";
                    this.SearchDataList.roommateSex = "";
                }else{
                    this.genderIndex =index;
                    this.SearchDataList.roommateSex = code;
                }
             },
             //筛选面积筛选
             allAreaClick(index,type){

                this.isAreaType = index;
                this.isLimit = false;
                type = type.split("-");
                this.SearchDataList.userAreaMin = parseFloat(type[0]);
                this.SearchDataList.userAreaMax = parseFloat(type[1]) ? parseFloat(type[1]) : "";
                if(type.join("-").includes("以下")){
                    this.SearchDataList.userAreaMin = ""
                    this.SearchDataList.userAreaMax = parseFloat(type[0]);
                }
             },
            featureClick(index,type,flat){
                // this.isFeature = index;
                // this.isLimitFeature = false;
                 if(flat){
                    this.feature[index].flat = false;
                    if(type==="3D实景"){
                        this.SearchDataList.lookUrl = false;
                    }else if (type ==="独立卫生间"){
                        this.SearchDataList.hasIndieRestRoom = false;
                    }else if(type ==="独立阳台"){
                        this.SearchDataList.hasVeranda = false;
                    }
                 }else{
                    this.feature[index].flat = true;
                    if(type==="3D实景"){
                        this.SearchDataList.lookUrl = true;
                    }else if (type ==="独立卫生间"){
                        this.SearchDataList.hasIndieRestRoom = true;
                    }else if(type ==="独立阳台"){
                        this.SearchDataList.hasVeranda = true;
                    }
                 }
             },
             //筛选面积不限
             areaLimitClick(){
                 this.isAreaType = "";
                 this.isLimit = !this.isLimit;
                 this.SearchDataList.userAreaMin = "";
                 this.SearchDataList.userAreaMax = "";
             },
              //特色不限
            featureLimitClick(){
                this.isLimitFeature = true;
                this.isFeature = "";
                this.SearchDataList.lookUrl = false;
                this.SearchDataList.hasIndieRestRoom = false;
                this.SearchDataList.hasVeranda = false;
             },
             //筛选确定按钮
            allBuildClick(){
                // this.$emit("changeFiltrate",this.SearchDataList);
                // this.isShow = false;
                this.isConfirm = true;
                this.$emit("changeFiltrate",this.SearchDataList,false);

                //  this.isHousTypeList = "";  //房型
                //  this.isHouseholdType = ""; //户型
                //  this.isAreaType = "";    //面积
                //  this.isLimit = false;    //面积不限
            },
            //筛选重置按钮
            allBuildExitClick(){
                this.SearchDataList = {
                    productType:"",
                    roomNo:"",
                    userAreaMin:"",
                    userAreaMax:"",
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:"",
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                 };
                this.isFeature = "";
                this.SearchDataList.lookUrl = false;
                this.isLimitFeature = false;
                this.isHousTypeList=""; //房型
                this.isHouseholdType=""; //户型
                this.isAreaType = "";  //面积
                this.isLimit=false;   //不限
                this.constellationIndex ="";
                this.orientationIndex ="";
                this.genderIndex="";
                this.orientationList.map(item=>{
                    item.flat = false;
                    return item;
                })
                this.constellationList.map(item=>{
                    item.flat = false;
                    return item;
                })
                this.feature.map(item=>{
                    item.flat = false;
                    return item;
                })
                // this.$router.replace({
                //     name: this.$route.name,
                //     query: this.$route.query
                // });
                // console.log(this.$router)
                this.$emit("changeFiltrate",this.SearchDataList,true);
            },
            filtrateClear(){
                this.SearchDataList = {
                     productType:"",
                     roomNo:"",
                     userAreaMin:"",
                     userAreaMax:"",
                 };
                this.isHousTypeList="";
                this.isHouseholdType="";
                this.isAreaType = "";
                this.isLimit=false;
            },
         },
         watch:{

         },
         computed:{
            isSearchShow(){
                    switch(this.houseType){
                        case "0019001":
                            this.isHousTypeList = 0;
                            this.SearchDataList.productType = "0019001";
                            // this.$emit("changeFiltrate",this.SearchDataList);
                        break;
                        case "0019002":
                            this.isHousTypeList = 1;
                            this.SearchDataList.productType = "0019002";
                            // this.$emit("changeFiltrate",this.SearchDataList);
                        break;
                        case "0019003":
                            this.isHousTypeList = 2;
                            this.SearchDataList.productType = "0019003";
                            // this.$emit("changeFiltrate",this.SearchDataList);
                        break;
                        default:
                            this.isHousTypeList = "";
                        break;
                    }
                 this.wxHeatMap = true;
                 this.isWex = true;
                return this.isShow;
            }
         },
     }
 </script>
