function getId(idName) {
    return document.getElementById(idName)
}
var d = document
// 点击渐变效果
function fadeInOut(ele) {
    var raw = window.getComputedStyle(getId('stopcontinue'), null).getPropertyValue("background-color");
    ele.style.backgroundColor = "red"
    var that = ele
    var timer = setTimeout(function(){
        that.style.backgroundColor = raw
        clearTimeout(timer)
    },100)
}
getId('stopcontinue').onclick = function() {
    fireKeyEvent(d,'keydown',32)
    fadeInOut(this)
}

getId('restart').onclick = function() {
    fireKeyEvent(d,'keydown',116)
    fadeInOut(this)
}
getId('left').onclick = function() {
    fireKeyEvent(d,'keydown',37)
    fadeInOut(this)
}
getId('up').onclick = function() {
    fireKeyEvent(d,'keydown',38)
    fadeInOut(this)
}
getId('right').onclick = function() {   
    fireKeyEvent(d,'keydown',39)
    fadeInOut(this)
}
getId('down').onclick = function() {
    fireKeyEvent(d,'keydown',40)
    fadeInOut(this)
}

/*
  作者：前端程序狗
  链接：https://juejin.cn/post/6844903850336321549
  来源：掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
function fireKeyEvent(el, evtType, keyCode) {
    var evtObj;
    if (document.createEvent) {
        if (window.KeyEvent) {//firefox 浏览器下模拟事件
            evtObj = document.createEvent('KeyEvents');
            evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0);
        } else {//chrome 浏览器下模拟事件
            evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent(evtType, true, true, window, 1);
  
            delete evtObj.keyCode;
            if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
                Object.defineProperty(evtObj, "keyCode", { value: keyCode });                       
            } else {
                evtObj.key = String.fromCharCode(keyCode);
            }
  
            if (typeof evtObj.ctrlKey === 'undefined') {//为了模拟ctrl键
                Object.defineProperty(evtObj, "ctrlKey", { value: true });
            } else {
                evtObj.ctrlKey = true;
            }
        }
        el.dispatchEvent(evtObj);
  
    } else if (document.createEventObject) {//IE 浏览器下模拟事件
        evtObj = document.createEventObject();
        evtObj.keyCode = keyCode
        el.fireEvent('on' + evtType, evtObj);
    }
  }
  
  

