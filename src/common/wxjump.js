(function() {
    function wxjump() {
        var _proto = wxjump.prototype;
        _proto.getQueryString = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        }
        _proto.getUserInfo = function() {
            if (this.getQueryString("error") == 'true') {
                return;
            }
            if (!localStorage.getItem("sub_openid")) {
                //如果链接中也没有参数则跳转授权
                if (!this.getQueryString("openid")) {
                    window.location.href = "http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=" + encodeURIComponent(window.location.href);
                } else {
                    //从链接中获取了参数，则存到本地
                    localStorage.setItem("sub_nickname", this.getQueryString("nickname"));
                    localStorage.setItem("sub_headimgurl", this.getQueryString("headimgurl"));
                    localStorage.setItem("sub_openid", this.getQueryString("openid"));
                    localStorage.setItem("sub_province", this.getQueryString("province"));
                    localStorage.setItem("sub_city", this.getQueryString("city"));
                }
            }
        }
    }
    var windowRouter = window.location.href
    window.$wxjump = new wxjump();
})(window)
// window.$wxjump.getUserInfo();