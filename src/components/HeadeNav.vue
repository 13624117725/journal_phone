<template>
   <div class="HeadeNav">
       <div class="left" @click="showUser">

       </div>
       <div class="right" @click="showSearch">

       </div>
       <!-- <div class="left"></div> -->
   </div>
</template>

<script>
    export default {
        data() {
            return {

            }

        },
        methods:{
            showUser(){
                this.$emit("ShowUser")
            },
            showSearch(){
                this.$router.push("HotSearch")
            }

        },
        components: {

        }
    }
</script>

<style scoped lang="less">

.HeadeNav{
    padding: 0 10px;
    height: 50px;
    width: 100%;
    background-color: #3A3C38;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform:  translateY(0);
    transition: transform .5s;
    .left{
        float: left;
        height: 50px;
        width: 50px;
        background: url("../assets/img/images/people.png") center no-repeat;
        background-size: 54%;
    }
    .right{
        float: right;
        height: 50px;
        width: 50px;
        background: url("../assets/img/images/find.png") center no-repeat;
        background-size: 46%;
    }
}
</style>
