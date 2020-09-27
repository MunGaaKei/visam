/**
 * 节流函数
 * @param {function} fn
 * @param {number} ms
 * @param {boolean} cancelLast
 * @return {function}
**/
const throttle = (
  fn,
  ms = 240,
  cancelLast
) => {
  var t;
  var f = true;

  return function () {
      var args = arguments;
      var self = this;
      t && clearTimeout(t);
      if( f ){
          fn.apply(self, args);
          f = false;
          setTimeout(function(){ f = true; }, ms);
      } else if( cancelLast !== true ) {
          t = setTimeout(function(){ fn.apply(self, args); }, ms);
      }
  }
}

/**
 * 获取默认值
 * @param {*} value
 * @param {array} arr
 * @param {*} def
 * @return *
**/
const getDefault = (
  value,
  arr = [],
  def
) => arr.includes(value)? value: def;

export {
  throttle,
  getDefault
}