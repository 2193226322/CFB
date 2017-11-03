var one88 = document.querySelector('.one88');
var one77 = document.querySelector('.one77');
var op = document.querySelectorAll('.one77 ul li');
	one88.onmouseenter = function(e){
		var ev = window.event || e;
		one77.style.display = 'block';
		ev.stopPropagation();
}
// for(var i = 0; i < op.length; i++){
// 	op[i].onmouseenter = function(){
// 				one88.innerHTML = this.innerHTML;
// 	}
// }
document.onmouseleave = function(){
	one77.style.display = 'none';
}