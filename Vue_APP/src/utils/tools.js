"use strict";
exports.__esModule = true;
exports.DateFormate = exports.Throttle = exports.Debounced = void 0;
var check_1 = require("./check");
// 防抖
var Debounced = /** @class */ (function () {
    /**
     * @param func 需要包装的函数
     * @param delay 延迟时间，单位ms
     * @param immediate 是否默认执行一次(第一次不延迟)
     */
    function Debounced() {
        var _this = this;
        this.use = function (func, delay, immediate) {
            if (immediate === void 0) { immediate = false; }
            var timer;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (immediate) {
                    func.apply(_this, args); // 确保引用函数的指向正确，并且函数的参数也不变
                    immediate = false;
                    return;
                }
                clearTimeout(timer);
                timer = setTimeout(function () {
                    func.apply(_this, args);
                }, delay);
            };
        };
    }
    return Debounced;
}());
exports.Debounced = Debounced;
// 节流(ts)
var Throttle = /** @class */ (function () {
    function Throttle() {
        this.stop = false;
        this.death = false;
    }
    /**
     * @param func 需要包装的函数
     * @param delay 延迟时间，单位ms
     * @param immediate 是否默认执行一次(第一次不延迟)
     */
    Throttle.prototype.use = function (func, delay, immediate) {
        var _this = this;
        if (immediate === void 0) { immediate = false; }
        var flag = true;
        var self = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.death) {
                func.apply(_this, args);
                return;
            }
            if (_this.stop) {
                func.apply(_this, args);
                return;
            }
            if (immediate) {
                func.apply(_this, args);
                immediate = false;
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            self.timer = setTimeout(function () {
                func.apply(_this, args);
                flag = true;
            }, delay);
        };
    };
    // 销毁
    Throttle.prototype.destroy = function () {
        this.death = true;
        this.stop = true;
        if (!!this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
    };
    // 开启
    Throttle.prototype.open = function () {
        if (!this.death) {
            this.stop = false;
        }
    };
    // 关闭
    Throttle.prototype.close = function () {
        this.stop = true;
    };
    return Throttle;
}());
exports.Throttle = Throttle;
/**
* 格式化当前日期
*/
var DateFormate = /** @class */ (function () {
    function DateFormate(mark) {
        this.date = new Date();
        this.mark = mark;
    }
    /**
     * @param num 获取当前时间
     * @param len
     * @returns
     */
    DateFormate.prototype.getNowData = function () {
        var year = String(this.date.getFullYear());
        var month = String(this.date.getMonth() + 1);
        var day = String(this.date.getDate());
        var hour = String(this.date.getHours());
        var minute = String(this.date.getMinutes());
        var second = String(this.date.getSeconds());
        return { year: year, month: month, day: day, hour: hour, minute: minute, second: second };
    };
    /**
     * 不足位数的数字补足位数
     * @param  num-数字
     * @param  len-长度
     */
    DateFormate.prototype.formateLength = function (num, len) {
        return num.padStart(len, '0');
    };
    /**
     * 获取当前日期（短）
     * @param mark-分隔符
     */
    DateFormate.prototype.getFormateShortNowDate = function (mark) {
        var dateShortObj;
        dateShortObj = this.getNowData();
        var year = this.formateLength(dateShortObj.year, 2);
        var month = this.formateLength(dateShortObj.month, 2);
        var day = this.formateLength(dateShortObj.day, 2);
        return "" + year + mark + month + mark + day;
    };
    DateFormate.prototype.getFormateLongNowDate = function (mark) {
        var dateLongObj;
        dateLongObj = this.getNowData();
        var year = this.formateLength(dateLongObj.year, 2);
        var month = this.formateLength(dateLongObj.month, 2);
        var day = this.formateLength(dateLongObj.day, 2);
        var hour = this.formateLength(dateLongObj.hour, 2);
        var minute = this.formateLength(dateLongObj.minute, 2);
        var second = this.formateLength(dateLongObj.second, 2);
        return "" + year + mark + month + mark + day + " " + hour + ":" + minute + ":" + second;
    };
    /**
     * 当前时间距离指定日期的时间间隔
     */
    DateFormate.prototype.dateDistance = function (dateParam) {
    };
    return DateFormate;
}());
exports.DateFormate = DateFormate;
/**
 * 数字格式化
 */
var NumberFormate = /** @class */ (function () {
    function NumberFormate() {
        this.check = new check_1.inputCheck();
    }
    /**
     * 千分位格式化
     */
    // public numberFormatter(num:any, len = 2, options = {}) {
    //   let result = {
    //     value: '—',
    //     color: 'black',
    //     colorHex: '#333333'
    //   };
    //   Object.assign(result, options);
    //   if (typeof num === 'number' || typeof num === 'string') {
    //     num = parseFloat(num).toFixed(len);
    //     if (num > 0) {
    //       result.value = '+' + toThousands(num, len);
    //     } else if (num < 0) {
    //       result.value = toThousands(num, len);
    //     } else {
    //       result.value = toThousands(num, len);
    //     }
    //   }
    //   return result;
    // }
    /**
     * 电话号码格式化
     */
    NumberFormate.prototype.phoneNumberFormate = function (phoneNum) {
    };
    return NumberFormate;
}());
