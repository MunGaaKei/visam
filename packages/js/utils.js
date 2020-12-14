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
 * 防抖函数
 * @param {function} fn
 * @param {number} ms
 * @param {boolean} immediate
 * @return {function}
**/
function debounce( fn, ms, immediate ){
  var t;
  var f = true;
  ms || (ms = 250);

  return function(){
  var args = arguments;
  var self = this;
    if( immediate ){
      if( f ){
        fn.apply(self, args);
        f = false;
      } else {
        t && clearTimeout(t);
        t = setTimeout(function(){ f = true; }, ms);
      }
    } else {
      t && clearTimeout(t);
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

/**
 * 获取相对水平偏移值
 * @param {boundingClientRect} rectRel
 * @param {boundingClientRect} rectMenu
 * @param {boundingClientRect} rectPa
 * @return *
**/
const getOffsetX = (rectRel, rectMenu, rectPa) => {
  let offset = (rectMenu.width - rectRel.width) / 2;
  let text = 'left: 0;';
  if (offset < 0) {
      text += `left: ${(rectRel.width - rectMenu.width)/2}px;`;
  } else if (offset + 12 < rectRel.left - rectPa.left) {
      text += rectRel.right + 12 + offset < rectPa.right? `left: ${-offset}px;`: 'right: 0;';
  }
  return text;
}

/**
 * 获取相对垂直偏移值
 * @param {boundingClientRect} rectRel
 * @param {boundingClientRect} rectMenu
 * @param {boundingClientRect} rectPa
 * @return *
**/
// const getOffsetY


export {
  throttle,
  debounce,
  getDefault,
}