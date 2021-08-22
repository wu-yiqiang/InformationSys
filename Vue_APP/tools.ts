/**
 * 防抖
 */

class debounce {
  private timer;
  constructor(parameters) {
    
  }
  public debounce(fn: Function,wait:number,immediate:boolean){
    let timeStamp=0;
    let context, args;
    let run = ()=>{
      this.timer= setTimeout(()=>{
        fn.apply(context,args);
      },wait);
    }
    let clean = () => {
      clearTimeout(this.timer);
    }

    return function(){
      context=this;
      args=arguments;
      let now = (new Date()).getTime();
      if(now-timeStamp < wait){
        clean(); 
        run();    
      }else{
        run();    
      }
      timeStamp=now;
    }

  }
  public destroyed() {
    
  }

  public run() {
    
  }

}

/**
 * 节流
 */
class throtter {
  constructor(parameters) {
    
  }

  public throtter(){

  }
  /**
   * 销毁
   */
  public destroyed() {
    
  }
}





/**
 * 文字格式化
 */
class wordFormate {
  constructor(parameters) {
    
  }
}


