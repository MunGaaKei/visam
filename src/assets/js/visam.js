
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

    return function(){
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

export {
    throttle
}