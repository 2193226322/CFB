for(var uls=document.querySelectorAll("three2 ul"),i=1;i<20;i++){var li=document.createElement("li");li.innerHTML='<img src="http://" />',li.children[0].onload=function(){for(var e=[],l=0;l<uls.length;l++)e.push(uls[l].offsetHeight);for(var r=e[0],t=0,i=0;i<e.length;i++)r>e[i]&&(r=e[i],t=i);uls[t].appendChild(this.parentNode)}}