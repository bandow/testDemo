var loopPlayerInit = (function(){
	var $butLeft=null,
        $butRight=null,
		$butPlay=null,
		$imglist=null,
		origin=["125px","700px"],
		imgAll=creatImg([["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"],
		["images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"],
		["images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg"]]),
	    imgArrIndex=0,
		imgAng=45,
		imgTime=300,
		rotating=false,
		autoTimer=null,
		autointerval=3000;
		
	function init(){
		$butLeft=$(".butLeft"),
        $butRight=$(".butRight"),
		$butPlay=$(".butPlay"),
		$imglist=$(".mianbox ul li");
		
		configer();
		setEvent()
		}
	/*绑定事件*/
	function setEvent(){
		$butLeft.bind("click",function(){
		    anigo(-1);
			})
		 $butRight.bind("click",function(){
			anigo(1);
			})
		$butPlay.bind("click",function(){
			var play="play",
			pause="pause",
			$but=$(this);
			if($but.text()=="play"){
				$but.text(pause);
				autoG0();
				}else{
					$but.text(play);
					autoStop();
					}
			})
		}
	/*旋转角度*/
	function configer(){
		var ang=4,
		    int=-4;
		$imglist.transform({origin:origin});
		$imglist.each(function(i){
			var $this=$(this);
			$this.transform({rotate:int+(i*ang)+"deg"})
			})
		}
     /*旋转函数*/
	function anigo(d){
		if(rotating) return false;
		rotating = true;
		/*获取当前要旋转的数组*/
		 imgArrIndex+=d;
		 if(imgArrIndex>imgAll.length-1){
			 imgArrIndex=0;
			 }else if(imgArrIndex<0){
				 imgArrIndex=imgAll.length-1;
				 }
		 
		 $imglist.each(function(i){
			var $thisItme=$(this);
			var $thisimg=$thisItme.children("img");
			var $targetImg=$(imgAll[imgArrIndex][i]);
			var thisTime=(d===1)?imgTime*i:imgTime*($imglist.length-1-i);
			$thisItme.append($targetImg);
			$thisimg.transform({origin:origin});
			$targetImg.transform({origin:origin,rotate:(0-d)*imgAng+"deg"});
			setTimeout(function(){
				$thisimg.animate({rotate:imgAng*d+"deg"});
			    $targetImg.animate({rotate:"0deg"},500,function(){
				$thisimg.remove();
				if(thisTime==($imglist.length-1)*imgTime){
					rotating=false;
					}
				});
				},thisTime)
			 })
		}
	
	/*添加图片*/
	function creatImg(arr){ 
		var imgArr=[];
		for(var i in arr){
			imgArr[i]=[];
			for(var x in arr[i]){
				imgArr[i][x]=new Image();
				imgArr[i][x].src=arr[i][x];
				}
			}
		return imgArr
		}
		/*添加定时器让事件自动播放停止*/
		function autoG0(){
				clearInterval(autoTimer);
				anigo(1);
			    autoTimer=setInterval(function(){
				 anigo(1);
				},autointerval)
			}
		function autoStop(){
			clearInterval(autoTimer);
			}
	return init;
})();
loopPlayerInit();





















