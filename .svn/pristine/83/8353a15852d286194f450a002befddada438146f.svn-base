import router from '../router/index';
import store from '../store/index';
export default class {
    constructor() {

        }
        // 测试全局地址
    Utils = "https://mt.guoanfamily.com/ejmanage/"
        // Utils = "http://172.16.44.233:9093/ejmanage/"

    Utils2 = "https://www.guoanfamily.com/zcollect/"

    IMAGE_PATH = "https://img.guoanfamily.com/";
    install(Vue, options) {
        this.isBlank(Vue); //非空验证
        this.idCard(Vue); //身份验证
        this.installExtendsFunction(Vue);
        this.installPrototype(Vue); //ajax
    }

    // /*------------------添加vue过滤器------------------*/
    installExtendsFunction() {
        /**
         * 扩展时间对象，增加Format方法
         */
        (function() {
            /*对Date的扩展，将 Date 转化为指定格式的String
            月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
            年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
            例子：
            (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
            支持时间格式化*/
            Date.prototype.Format = function(fmt) { //author: meizz
                let o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }())
    }
    installFilter(Vue) {
            /**
             * 格式化日期的过滤器
             * (yyyy-MM-dd)
             */
            Vue.filter('date-filter', function(time) {
                return new Date(time).Format("yyyy-MM-dd");
            });
            /**
             * 格式化日期+时间的过滤器
             * (yyyy-MM-dd hh:mm)
             */
            Vue.filter('date-time-filter', function(time) {
                return new Date(time).Format("yyyy-MM-dd hh:mm");
            });
        }
        // 验证值是否为空，undefined 或者为字符串空值
    isBlank(Vue) {
            // 消息弹窗提示
            // Vue.prototype.msgalert = function(msg) {
            //     Vue.$vux.toast.show({
            //         text: msg,
            //         type: "text"
            //     });
            // }
            Vue.prototype.notEmpty = (value) => {
                    if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
                        return true;
                    } else {
                        return false;
                    }
                }
                // 获取年月日
            Vue.prototype.ThisTime = (timer, y, m, d, t, object) => {
                    var now = new Date();
                    var year = now.getFullYear().toString(); //得到年份
                    var mounth = (now.getMonth() + 1).toString(); //得到月份
                    var date = now.getDate().toString(); //得到日期
                    var hour = now.getHours().toString();; //得到小时
                    if (hour < 10) {
                        hour = '0' + hour;
                    }
                    var minu = now.getMinutes().toString();; //得到分钟
                    if (minu < 10) {
                        minu = '0' + minu;
                    }
                    var sec = now.getSeconds().toString();; //得到秒
                    if (sec < 10) {
                        sec = '0' + sec;
                    }
                    timer = year + "-" + mounth + "-" + date + "-" + hour + ":" + minu + ":" + sec;
                    y = year;
                    m = mounth;
                    if (m < 10) {
                        m = "0" + mounth;
                    }
                    d = date;
                    t = hour + ":" + minu + "'" + sec + "''" + ' ';
                    let obj = {};
                    obj.ymd = timer;
                    obj.year = y;
                    obj.mounth = m;
                    obj.date = d;
                    obj.time = t;
                    object = obj;
                    return object;
                }
                // 获取当前月份
            Vue.prototype.getDays = (mouth) => {
                    //构造当前日期对象
                    var date = new Date();
                    //获取年份
                    var year = date.getFullYear();
                    //定义当月的天数；
                    var days;
                    //当月份为二月时，根据闰年还是非闰年判断天数
                    if (mouth == 2) {
                        days = year % 4 == 0 ? 29 : 28;
                    } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
                        //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                        days = 31;
                    } else {
                        //其他月份，天数为：30.
                        days = 30;
                    }
                    return days;
                }
                // 获取上个月的天数和下个月的天数
            Vue.prototype.priveMounthDays = (mouth) => {
                    var date = new Date();
                    //获取年份
                    var year = date.getFullYear();
                    //获取当前月份
                    // mouth = date.getMonth() + 1;
                    //获取上个月
                    let priveDays = mouth - 1;
                    if (priveDays <= 0) {
                        priveDays = 12
                    }


                    // 后去下个月
                    let nextDays = mouth + 1;
                    if (nextDays > 12) {
                        nextDays = 1
                    }
                    var arr = [];
                    //定义上个月的天数；
                    var days;
                    if (priveDays == 2) {
                        days = year % 4 == 0 ? 29 : 28;
                    } else if (priveDays == 1 || priveDays == 3 || priveDays == 5 || priveDays == 7 || priveDays == 8 || priveDays == 10 || priveDays == 12) {
                        //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                        days = 31;
                    } else {
                        //其他月份，天数为：30.
                        days = 30;
                    }
                    arr.unshift(days);
                    var nextdays;
                    if (nextDays == 2) {
                        nextdays = year % 4 == 0 ? 29 : 28;
                    } else if (nextDays == 1 || nextDays == 3 || nextDays == 5 || nextDays == 7 || nextDays == 8 || nextDays == 10 || nextDays == 12) {
                        //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                        nextdays = 31;
                    } else {
                        //其他月份，天数为：30.
                        nextdays = 30;
                    }
                    arr.unshift(nextdays);

                    return arr;
                }
                /**
                 * 判断是否是在微信端
                 */
            Vue.prototype.isECTouch = () => {
                var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                } else {
                    return false;
                }
            }

            Vue.prototype.concatFileUrl = (fileName, w, h) => {
                let size = "";
                if (w !== undefined && h !== undefined) {
                    size = `?imageView2/0/w/${w}/h/${h}`;
                }
                return this.IMAGE_PATH + `${fileName}${size}`;
            };
            // 判断接口返回的图片路径是否为空
            Vue.prototype.getImgUrl = () => {
                let ImgNullurl = "https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.png";
                return ImgNullurl;
            }
        }
        // 身份证号码规则验证
    idCard(Vue) {
        Vue.prototype.IC = (field) => {
            let value = field;
            if (value === "") {
                return true;
            }
            let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
            let arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
            let reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            if (reg.test(value)) {
                let sum = 0,
                    idx;
                for (let i = 0; i < value.length - 1; i++) {
                    // 对前17位数字与权值乘积求和
                    sum += parseInt(value.substr(i, 1), 10) * arrExp[i];
                }
                // 计算模（固定算法）
                idx = sum % 11;
                // 检验第18为是否与校验码相等
                return arrValid[idx] == value.substr(17, 1).toUpperCase();
            } else {
                return false;
            }
        }
    }
    installPrototype(Vue) {
        Vue.prototype.KEYS = {
            //记录当前登录的用户信息
            USER_INFO: 'USER_INFO',

            USER_TOKEN: "token",
            USER_STAND_BY_TOKEN: "standbyToken",

            //记录用户搜索
            SEARCH_LOG: 'SEARCH_LOG',
            SEARCH_CONTENT: 'SEARCH_CONTENT',

            OPENID: "openid",
            USER_INFO_MAP: 'userInfroMap', //登陆者收藏的房间列表
        };
        /**
         * 设置、清空session中的对象
         * @param key
         * @param value
         */
        Vue.prototype.setSession = (key, value) => {
            if (value === undefined) {
                window.sessionStorage.removeItem(key);
            } else {

                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }

                window.sessionStorage.setItem(key, value);
            }
        };

        /**
         * 获取storage中的对象
         * @param key
         */
        Vue.prototype.getStorage = key => {
            let value = window.localStorage.getItem(key);
            if (value === "") {
                return null;
            }
            try {
                value = JSON.parse(value);
            } catch (e) {
                //console.error(e, key, value);
                return value;
            }

            return value;
        };

        /**
         * 设置、清空Storage中的对象
         * @param key
         * @param value
         */
        Vue.prototype.setStorage = (key, value) => {
            if (value === undefined) {
                window.localStorage.removeItem(key);
            } else {

                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }

                window.localStorage.setItem(key, value);
            }
        };
        /**
         * 获取session中的对象
         * @param key
         */
        Vue.prototype.getSession = key => {
            let value = window.sessionStorage.getItem(key);
            if (value === "") {
                return null;
            }
            try {
                value = JSON.parse(value);
            } catch (e) {
                //console.error(e, key, value);
                return value;
            }

            return value;
        };

        /**
         * 设置、清空session中的对象
         * @param key
         * @param value
         */
        Vue.prototype.setSession = (key, value) => {
            if (value === undefined) {
                window.sessionStorage.removeItem(key);
            } else {

                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }

                window.sessionStorage.setItem(key, value);
            }
        };

        /**
         * get请求
         * @param url
         * @returns {Promise.<TResult>}
         */

        let Get = Vue.prototype.get = url => {
            let openid = localStorage.getItem("sub_openid");
            if (!openid) {
                openid = ""
            }
            Vue.$vux.loading.show()
            return fetch(this.Utils + url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    'openid': openid
                },
                timeout: 5000,
            }).then(function(response) {
                Vue.$vux.loading.hide()
                return response.json();
            }).then(res => {
                if (res.status == -1) {
                    alert('服务异常');
                }


                return res;
            }).catch(function(e) {
                // window.location.hash = "/refashData";
                Vue.$vux.loading.hide();
                console.error(e);
            })
        };

        /**
         * post请求
         * @param url
         * @param data
         * @returns {Promise.<TResult>}
         */
        let POST = Vue.prototype.post = (url, data = {}) => {
            // let token = localStorage.getItem('token');
            let openid = localStorage.getItem("sub_openid");
            if (!openid) {
                openid = ""
            }
            Vue.$vux.loading.show();
            return fetch(this.Utils + url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "openid": openid
                },
                timeout: 5000,
                body: JSON.stringify(data),
            }).then(function(response) {
                Vue.$vux.loading.hide()
                return response.json();
            }).then(res => {
                // if (res.msg === '权限不足' || res.code == 4 || res.status == 130001) {
                //     let standbyToken = localStorage.getItem('standbyToken');
                //     if (standbyToken) {
                //         return fetch(this.Utils + `user/userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                //             method: 'get',
                //             headers: {
                //                 "Content-Type": "application/json",
                //             },
                //             timeout: 5000,
                //         }).then(function(response) {

                //             Vue.$vux.loading.hide();
                //             return response.json();
                //         }).then(res => {
                //             if (res.code == 200) {
                //                 localStorage.setItem('agentPhone', res.data.phoneNum); //将用户电弧存入本地
                //                 localStorage.setItem('token', res.data.token); //将用户token存入本地
                //                 localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地

                //                 localStorage.setItem('userInfoMap', JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                //                 return POST(url);
                //             } else {
                //                 return;
                //             }

                //         }).catch(res => {
                //             return false;
                //         })
                //     } else {
                //         window.location.href = window.location.href.split("#")[0] + "#/login"
                //     }
                // } else {
                //     return res;
                // }

                return res;
            }).catch(function(e) {
                // window.location.hash = "/refashData";
                // return false;
                Vue.$vux.loading.hide()
                console.error(e);
            })
        };

        Vue.prototype.CollectGet = url => {
            Vue.$vux.loading.show()
            return fetch(this.Utils2 + url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 5000,
            }).then(function(response) {
                Vue.$vux.loading.hide()
                return response.json();

            }).then(res => {
                return res;
            }).catch(function(e) {
                Vue.$vux.loading.hide()
                console.error(e);
            })
        };
        Vue.prototype.CollectPost = (url, data = {}) => {
            Vue.$vux.loading.show()
            return fetch(this.Utils2 + url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 5000,
                body: JSON.stringify(data),
            }).then(function(response) {
                Vue.$vux.loading.hide()
                return response.json();
            }).catch(function(e) {
                Vue.$vux.loading.hide()
                console.error(e);
            })
        };
        Vue.prototype.ShearPost = (url, data = {}) => {

            return fetch("https://www.guoanfamily.com/" + url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(function(response) {
                return response.json();
            }).then(res => {
                Vue.$vux.loading.hide()
                if (res.Code === 200) {
                    return res
                }

                return res;
            }).catch((err) => {
                Vue.$vux.loading.hide()
                Vue.$vux.toast.text(
                    '请求错误：' + err.response.status + ',' + err.response.statusText, 'middle')
                console.error(err);
            })

        }
        Vue.prototype.IMAGE_PATH = this.IMAGE_PATH
        Vue.prototype.Utils = this.Utils
        Vue.prototype.Utils2 = this.Utils2
        Vue.prototype.ImgsmallSize = '?imageView2/2/w/100/h/100'

    }
}