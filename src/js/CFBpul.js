 // 获取所有的ul
        var uls = document.querySelectorAll('three2 ul');

        // 创建39个li,并插入图片
        for(var i = 1; i < 20; i++){
            var li = document.createElement('li');
            li.innerHTML = '<img src="http://" />';
            // 要等待图片加载完成,才能获取到img的高度
            li.children[0].onload = function(){
                var arrHeight = [];
                // 第一步:要拿到所有ul的高度,并且存放到数组中
                for(var j = 0; j < uls.length; j++){
                    arrHeight.push(uls[j].offsetHeight);
                }

                // 第二步:获取存放ul高度数组中的最小值,并获取对应的下标
                var minHeight = arrHeight[0];
                var minIndex = 0;
                for(var k = 0; k < arrHeight.length; k++) {
                    if (minHeight > arrHeight[k]) {
                        minHeight = arrHeight[k];
                        minIndex = k;
                    }
                }
                uls[minIndex].appendChild(this.parentNode);
            }

        }