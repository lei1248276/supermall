/*func: 回调函数，delay：延迟时间，immediate：是否立即执行*/
  /* 防抖动函数*/
export function debounce(func,delay = 16,immediate = true) {
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

/*export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}*/

// 时间格式化函数（例："yyyy-MM-dd hh:mm:ss"）
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
