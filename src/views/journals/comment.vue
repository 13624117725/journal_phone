<template>
    <div class="comment">
        <divider>精选留言</divider>
        <!-- :max="255" -->
        <x-textarea class="mytextarea" :rows="5" v-model="comment" :autosize="true" placeholder="留言将由公众号筛选后显示，对所有人可见"></x-textarea>
        <!-- <emotion>{{item}}</emotion> -->

        <x-button class="my_button" type="primary" @click.native="commentSave">提 交</x-button>
    </div>
</template>

<script>
import { Divider, XTextarea, XButton, WechatEmotion } from "vux";
export default {
    data() {
        return {
            EmotionList: [
                "微笑",
                "撇嘴",
                "色",
                "发呆",
                "得意",
                "流泪",
                "害羞",
                "闭嘴",
                "睡",
                "大哭",
                "尴尬",
                "发怒",
                "调皮",
                "呲牙",
                "惊讶",
                "难过",
                "酷",
                "冷汗",
                "抓狂",
                "吐",
                "偷笑",
                "可爱",
                "白眼",
                "傲慢",
                "饥饿",
                "困",
                "惊恐",
                "流汗",
                "憨笑",
                "大兵",
                "奋斗",
                "咒骂",
                "疑问",
                "嘘",
                "晕",
                "折磨",
                "衰",
                "骷髅",
                "敲打",
                "再见",
                "擦汗",
                "抠鼻",
                "鼓掌",
                "糗大了",
                "坏笑",
                "左哼哼",
                "右哼哼",
                "哈欠",
                "鄙视",
                "委屈",
                "快哭了",
                "阴险",
                "亲亲",
                "吓",
                "可怜",
                "菜刀",
                "西瓜",
                "啤酒",
                "篮球",
                "乒乓",
                "咖啡",
                "饭",
                "猪头",
                "玫瑰",
                "凋谢",
                "示爱",
                "爱心",
                "心碎",
                "蛋糕",
                "闪电",
                "炸弹",
                "刀",
                "足球",
                "瓢虫",
                "便便",
                "月亮",
                "太阳",
                "礼物",
                "拥抱",
                "强",
                "弱",
                "握手",
                "胜利",
                "抱拳",
                "勾引",
                "拳头",
                "差劲",
                "爱你",
                "NO",
                "OK",
                "爱情",
                "飞吻",
                "跳跳",
                "发抖",
                "怄火",
                "转圈",
                "磕头",
                "回头",
                "跳绳",
                "挥手",
                "激动",
                "街舞",
                "献吻",
                "左太极",
                "右太极"
            ],
            comment: ""
        };
    },
    methods: {
        commentSave() {
            let articleid = this.$route.query.articleid;
            let nickname = localStorage.getItem("sup_nickname");
            let headimgurl = localStorage.getItem("sup_headimgurl");
            let Data = {
                articleid,
                nickname,
                headimgurl,
                comment: this.comment
            };
            if (Data.comment) {
                this.post("EjArticlecommentSave", Data).then(res => {
                    if (res.Code == 200) {
                        this.$router.go(-1);
                    }
                });
            } else {
                this.$vux.toast.show({
                    text: "请完成您的评论",
                    type: "text",
                    width: "10em"
                });
            }
        }
    },
    components: {
        Divider,
        XTextarea,
        XButton,
        WechatEmotion
    }
};
</script>

<style scoped lang="less">
.comment {
    background: url("../../assets/img/images/beijing.png");
    padding: 10px 0.3rem;
    .mytextarea {
        background-color: #fff;
        border-radius: 5px;
    }
    .my_button {
        margin-top: 0.2rem;
    }
}
</style>
