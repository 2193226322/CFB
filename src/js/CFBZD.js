 		// 获取two5
        var two5 = document.querySelent('two5');

        // 定义一个下标
        var index = 0;

        // 定时器
        var timer = null;

        // 自动轮播
        autoPlay();

        // 给two5添加鼠标移入事件
        two5.onmouseenter = function(){
            // 清除定时器
            clearInterval(timer);
        }

        // 给two4添加鼠标移出事件
        two5.onmouseleave = function(){
            // 鼠标移出开启自动轮播
            autoPlay();
        }

        // 循环定时器,1s更换一次index值
        function autoPlay(){
            timer = setInterval(function(){
                index++;
                for(var i = 0 ; i < divs.length; i++){
                    divs[i].style.opacity = '0';
                    lis[i].style.backgroundColor = '#fff';
                }
                if(index >= 4){
                    index = 0;
                }
                divs[index].style.opacity = '1';
                lis[index].style.backgroundColor = 'red';

            },1000);
        }