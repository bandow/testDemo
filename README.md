# javascript_jquery_width_heihght

一、window对象表示浏览器中打开的窗口
二、window对象可以省略

一、document对象是window对象的一部分
二、浏览器的HTML文档成为Document对象

window.location和document.location
window对象的location属性引用的是Location对象
表示该窗口中当前显示文档的URL.
document的对象的location属性也是引用了Location对象
window.location===document.location  //true

javascript的高宽
window.innerWidth
window.innerHeight
window.outerWidth
window.outerHeight

window.screen.height
window.screen.width
widow.screen.availHeight
window.screen.availWidth
window.screenTop
window.screenLeft

document.body.clientWidth
document.body.clientHeight
document.body.clientLeft
document.body.cilentTop

假如无padding无滚动
clientWeigth=style.width

假如有padding无滚动
clientWidth=style.width+style.padding*2

假如有padding有滚动，且滚动是显示的
clientWidth=style.width+style.padding*2-滚动轴宽度

clientTop=border-top的border-width
clientLeft=border-left的boder-width

document.body.offsetWidth
document.body.offsetHeight
document.body.offsetLeft
document.body.offsetTop

假如无padding无border
offsetWidth=clientWeigth=style.width

假如有padding无border
offsetWidth=style.width+style.padding*2+（border-width）*2
offsetWidth=clientWidth+border宽度*2

假如有padding有滚动，且滚动是显示的，有border
offsetWidth=style.width+style.padding*2+（border-width）*2
offsetWidth=clientWidth+style.padding*2+滚动轴宽度+border宽度*2

在IE6/7中
offsetLeft=（offsetParent的padding-left）+（当前元素的margin-left）

在IE8/8/10/及Chorme中
offsetLeft=（offsetParent的margin-left）+（offsetParent的border的宽度）+（offsetParent的padding-left）+（当前元素的margin-left）

在FirFox中
offsetLeft=（offsetParent的margin-left）+（当前元素的margin-left）+（offsetParent的padding-left）

无滚动轴时：
scrollWidth==cilentWidth=style.width+style.padding*2

有滚动轴时：
scrollWidth==是实际内容的宽度+padding*2
scrollHeight==是实际内容的高度+padding*2

clientX和clientY      相对于浏览器（可视区左上角0，0）的坐标
screenX和screenY   相对于设备屏幕左上角（0，0）的坐标
offsetX和offsetY     相对于事件源左上角（0，0）的坐标
pageX和pageY       相对于整个网页左上角（0，0）的坐标
X和Y                      本来是IE属性，相对于用css动态定位的最内层包容元素

jquery高宽
.width()  
.height()
.innerWidth() 
.innerHeight()
.outerWidth()
.outerHeight()

.width()    window  document  传值无效
                普通元素 width（value） width（function(){}）
.width()与.css("width")区别  
width()返回结果无单位 
css("width")的结果有单位

.innerWidth()    window  document  传值无效 不推荐
                普通元素.innerWidth（value） .innerWidth（function(){}）
.outerWidth和innerWidth 以上同理。

.scrollLeft()  .scrollTop()  .offset()  .position()
scrollLeft(): 相对于水平滚动条左边的距离
如果滚动条非常左、右或者元素不能被滚动，那么这个值为0，0
scrollTop(): 相当上、下或者元素不能被滚动，那么这个值为0，0
offset(): 相对于document的当前坐标值（相对于body左上角的left，top的值）
.position(): 相对于offset parent的当前坐标值（相对于offset parent元素左上角的left、top的值）

#setInterval_setTimeout
setInterval  是间隔执行        
setTimeout 是延时执行   执行一次    
clearInterval();  清除定时器
