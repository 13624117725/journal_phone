<style scoped lang="less">
    @titleFontSize:0.3rem;
    @titleColor:#ccc;
    .regloin{
        .search-house-list{
            width:100%;
            height: 100%;
            background-color: #fff;
            // margin-top:0.3rem;
            // margin-left:0.32rem;
            // .price-one{
            //     padding:0rem 0.3rem;
            // }
            // .types{
            //     height: 0.8rem;
            //     padding:0rem 0.3rem;
            //     line-height: 0.8rem;
            //     border-bottom: 1px solid @lineColor;
            //     font-size:0.3rem;
            // }
            .house-type-ul{
                overflow: hidden;
                margin:0.1rem 0rem;
                padding:0rem 0.1rem 0rem 0.2rem;
                height: 3.1rem;
                .renge{
                    width: 100%;
                    // margin-left:2%;
                    margin-top:1.2rem;
                    position: relative;
                    .min-price{
                        position: absolute;
                        top:0.01rem;
                        left:-0.8rem;
                        // color:@unselectedColor;
                    }
                    .max-price{
                        position: absolute;
                        top:0.01rem;
                        right:0.1rem;
                        // color:@unselectedColor;
                    }
                }
            }
        }

        .buttons{
            width: 100%;
            height: 0.6rem;
            margin-top:0.2rem;
            margin-bottom:0.2rem;
            .subMit{
                width: 2.2rem;
                height: 0.6rem;
                line-height: 0.6rem;
                background: url("../../assets/img/images/search/submit-button.png") no-repeat;
                background-size: 100%;
                font-size:@titleFontSize;
                color:@titleColor;
                float:left;
                box-sizing: border-box;
                margin-left: 0.7rem;
                border: none;
            }
            .exit{
                width: 2.2rem;
                height: 0.6rem;
                line-height: 0.6rem;
                  background: url("../../assets/img/images/search/exit-button.png") no-repeat;
                background-size: 100%;
                font-size:@titleFontSize;
                color:@titleColor;
                float:right;
                box-sizing: border-box;
                margin-right: 0.7rem;
                border: none;

            }
        }
    }
    .iosregloin{
        top:.8rem;
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
        <!--价格筛选部分  -->
    <transition name="bounce">
         <div class="regloin" v-if="isSearchShow" :class="{iosregloin:!isAndrion}">
            <div class="search-house-list">
                <!-- <div class="price-one">
                    <div class="types">价格区间(每月)</div>
                </div> -->
                <div class="house-type-ul">
                    <div class="renge">
                        <vue-slider  @callback="cb" ref="slider3" v-bind="demo" v-model="demo.value"></vue-slider>
                        <!-- <template slot="tooltip" slot-scope="tooltip">
                            <div class="diy-tooltip">
                                <img src="../../../../static/rent/house-list/price-icon.png" width="40"/>
                                {{ tooltip.value }}
                            </div>
                        </template> -->
                        <!-- <span class="min-price">￥500</span><span class="max-price">￥10000</span> -->
                    </div>
                </div>
            </div>
             <div class="buttons">
                <button class="subMit" @click="allBuildClick">确定</button>
                <button class="exit" @click="allBuildExitClick">重置</button>
            </div>
        </div>
    </transition>
</template>

 <script>
import vueSlider from 'vue-slider-component'
     export default {
         components: {
            vueSlider,
        },
         props:{
            isShow:{
                type:Boolean,
                default:false,
            },
            // priceMinMax:{
            //     type:Array,
            //     default:[]
            // }
         },
         data(){
             return{
                demo: {
					value: [500, 10000],
					width: '97%',
					height: 24,
					dotSize: 26,
					min: 500,
                    max: 10000,
                    interval:100,
					disabled: false,
					show: true,
					tooltip: 'always',
                    formatter: '{value}元',
                    tooltipDir: [
                    "bottom",
                    "bottom"
                    ],
					bgStyle: {
						backgroundColor: '#e8e8e8',
						boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
					},
					tooltipStyle: {
						backgroundColor: 'rgba(255,255,255,0)',
                        borderColor: 'rgba(255,255,255,0)',
                        color:'#e42929',
                        marginRright:"18",
                        top:"0",
                        bottom:"0"
					},
					processStyle: {
						backgroundColor: '#e24e59',
					},
                    sliderStyle:{
                        // backgroundColor: '#ff9b2f',
                        background:'url("../../../../static/rent/house-list/price-icon.png") no-repeat',
                        backgroundSize:'100%',
                    }
                },
                isAndrion:true,
             }
         },
         created(){

         },
         methods:{

             //价格筛选确定按钮
            allBuildClick(){
                this.$emit("changePrice",this.demo.value);
                // this.demo.value = [500, 10000]
            },
            //筛选重置按钮
            allBuildExitClick(){
                this.demo.value = [500, 10000]
            },
            // priceClear(){
            //     this.demo.value = [500, 10000]
            // },
            cb (val) {
			//  console.log(val)
		    },
         },
         watch:{
            isShow(){
                // if(!localStorage.getItem("mm")){
                //     this.demo.value = [500, 10000];
                // }
            }
         },
         computed:{
            isSearchShow(){
                if(this.isShow){
                    if((this.getStorage("mm"))==true){
                        this.demo.value = [500, 10000];
                    }
                }
                this.isAndrion = false;
                return this.isShow;
            },
         },
     }
 </script>
