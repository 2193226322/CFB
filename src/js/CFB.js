var one66 = document.querySelector('.one66');
var one99 = document.querySelector('.one99');
var op = document.querySelectorAll('.one99 ul li');
	one66.onmouseenter = function(e){
		var ev = window.event || e;
		one99.style.display = 'block';
		ev.stopPropagation();
}
// for(var i = 0; i < op.length; i++){
// 	op[i].onmouseenter = function(){
// 		one66.innerHTML = this.innerHTML;
// 	}
// }
document.onmouseleave = function(){
	one99.style.display = 'none';
}