/*func: 回调函数，delay：延迟时间，immediate：是否立即执行*/
  /* 防抖动函数*/
export function debounce(func,delay = 500,immediate = true) {
  let timer = null;
  return function () {
    if (timer) {clearTimeout(timer)}
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      },delay);
      if (callNow) {func.apply(this,arguments)}
    } else{
      timer = setTimeout(() => {
        func.apply(this,arguments);
      },delay)
    }
  }
}
