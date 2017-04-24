var html =  document.getElementById('html');
var oWidth = document.body.clientWidth;
html.style.fontSize = oWidth/750*100+"px";
window.onresize = function(){
	var oWidth = document.body.clientWidth;
	html.style.fontSize = oWidth/750*100+"px";
}