import { inputCheck  } from "./check"

// 防抖
class Debounced {
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  constructor () {
    
  }
  public use = (func: Function, delay: number, immediate: boolean = false): Function => {
    let timer: any
    return (...args: any) => {
      if (immediate) {
        func.apply(this, args) // 确保引用函数的指向正确，并且函数的参数也不变
        immediate = false
        return
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}

// 节流(ts)
class Throttle {
  private timer: any
  private stop: boolean = false
  private death: boolean = false
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  public use(func: Function, delay: number, immediate: boolean = false): Function {
    let flag = true
    const self = this
    return (...args: any) => {
      if (this.death) {
        func.apply(this, args)
        return
      }
      if (this.stop) {
        func.apply(this, args)
        return
      }
      if (immediate) {
        func.apply(this, args)
        immediate = false
        return
      }
      if (!flag) {
        return
      }
      flag = false
      self.timer = setTimeout(() => {
        func.apply(this, args)
        flag = true
      }, delay)
    }
  }

  // 销毁
  public destroy() {
    this.death = true
    this.stop = true
    if (!!this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
  }

  // 开启
  public open() {
    if (!this.death) {
      this.stop = false
    }
  }

  // 关闭
  public close() {
    this.stop = true
  }
}


/**
* 格式化当前日期
*/
class DateFormate {
  private date = new Date();
  private mark;
  constructor(mark: string) {
    this.mark = mark
  }

  /**
   * @param num 获取当前时间
   * @param len 
   * @returns 
   */
  private getNowData() {
    let year = String(this.date.getFullYear());
    let month = String(this.date.getMonth() + 1);
    let day = String(this.date.getDate());
    let hour = String(this.date.getHours());
    let minute = String(this.date.getMinutes());
    let second = String(this.date.getSeconds());
    return { year, month, day, hour, minute, second }
  }

  /**
   * 不足位数的数字补足位数
   * @param  num-数字
   * @param  len-长度
   */
  private formateLength(num: string, len: number) {
    return num.padStart(len, '0')
  }

  /**
   * 获取当前日期（短）
   * @param mark-分隔符
   */
  public getFormateShortNowDate(mark: string) {
    let dateShortObj
    dateShortObj = this.getNowData()
    let year = this.formateLength(dateShortObj.year, 2)
    let month = this.formateLength(dateShortObj.month, 2)
    let day = this.formateLength(dateShortObj.day, 2)
    return `${year}${mark}${month}${mark}${day}`;
  }

  public getFormateLongNowDate(mark: string) {
    let dateLongObj
    dateLongObj = this.getNowData()
    let year = this.formateLength(dateLongObj.year, 2)
    let month = this.formateLength(dateLongObj.month, 2)
    let day = this.formateLength(dateLongObj.day, 2)
    let hour = this.formateLength(dateLongObj.hour, 2)
    let minute = this.formateLength(dateLongObj.minute, 2)
    let second = this.formateLength(dateLongObj.second, 2)
    return `${year}${mark}${month}${mark}${day} ${hour}:${minute}:${second}`;
  }

  /**
   * 当前时间距离指定日期的时间间隔
   */
  public dateDistance(dateParam:string) {

  }
}


/**
 * 数字格式化
 */
class NumberFormate {
  private check;
  constructor() {
    this.check = new inputCheck()
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
  public phoneNumberFormate(phoneNum:string) {
    
  }
}


export {
  Debounced,
  Throttle,
  DateFormate,
  // NumberFormate,
}