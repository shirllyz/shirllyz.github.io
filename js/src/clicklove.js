// 添加代码：
!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);
//随机背景颜色
function sjys() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var t = Math.floor(Math.random() * 9) / 10;
  console.log(t);
  var color = "rgb(" + r + "," + g + "," + b + "," + t.toFixed(1) + ") ";
  console.log(color)
  return color;
}
// var bd = document.getElementById("body");
// // bd.style.background = 'url("/images/body.png") center center / cover no-repeat fixed';
// bd.style.background = color;


var index = 0; // 当前颜色索引
function changeGradient() {
  // 使用 jQuery 设置左右渐变背景
  var colors = [sjys(), sjys(), sjys()]; // 渐变色数组
  // var colors = ['#ff0000', '#00ff00', '#0000ff']; // 渐变色数组
  console.log(colors.join(', '))
  var gradient = 'linear-gradient(to bottom right, ' + colors.join(', ') + ')';
  var cssProperties = {
    'background': gradient,
    'background-size': 'cover',
    'background-attachment': 'fixed',
    'background-repeat': 'no-repeat',
  };
  $('#body').css(cssProperties);
  // 循环遍历颜色数组
  index = (index + 1) % colors.length;
}
changeGradient();
// 设置定时器，每隔一段时间改变渐变效果
setInterval(changeGradient, 10000);
