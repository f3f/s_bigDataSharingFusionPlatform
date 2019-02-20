define(function(require, exports, module) {
	exports.init=function(){

			
			
//首页-左侧边栏

		window.onload=function(){
			$('.leftBar h2,.leftBar2 h2').bind("click",function(){
				//var _index=$(this).parents(".item").index();
				//$(".contentWrap2 .bBox ,.contentWrap .bBox ").eq(_index).show().siblings().hide();
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
//				$(this).parent().find('ul').slideToggle("normal");
//				$(this).parent().siblings().find("ul").slideUp();
			});
									
				
//			$("#catalogContentNav li").bind("click",function(){		//注释到点击两次的click		
				var oNav=$('#catalogContentNav');
				var aNavBtn=oNav.children();
				var oMainBox=$('#catalogContentMainBox');
				var aMain=oMainBox.children();
				
				aNavBtn.click(function(){
						var index=$(this).index();
						aNavBtn.removeClass('active');
						$(this).addClass('active');
						aMain.removeClass('show');
						aMain.eq(index).addClass('show');
					});
				
					var oMainNav=$('#catalogContentMainNav');
					var aMainNavBtn=oMainNav.children();
					var aMainBottom=$('.catalogContentMainBottom');
					
					aMainNavBtn.click(function(){
						var index=$(this).index();
						aMainNavBtn.removeClass('active');
						$(this).addClass('active');
						aMainBottom.removeClass('show');
						aMainBottom.eq(index).addClass('show');
					});		
				
//			});
			
		}
					
	}
		
		
//目录管理-右侧目录列表-表格		
				$('.checkedTr checkbox').each(function(){				
					$(this).click(function(){					
						$(this).parent().parent().toggleClass('checked');	
						
					});			
				});
				
				$('.checkAll').click(function(){
					
					if(!$(this).attr("falg")|| $(this).attr("falg")==="false"){
						
						$(this).parents('table').find('input').prop('checked',"checked");
						$(this).parents('table').find('tr').addClass('checked');
						$(this).attr("falg","true")
					}else if($(this).attr("falg")=="true"){
						$(this).attr("falg","false")
						$(this).parents('table').find('input').prop('checked',false);
						$(this).parents('table').find('tr').removeClass('checked');
						$(this).attr("falg","false")
						}						
					
				});
			
			
				//编目-右侧头部导航点击切换对应内容
	/**
			var oNav=$('#catalogContentNav');
			var aNavBtn=oNav.children();
			var oMainBox=$('#catalogContentMainBox');
			var aMain=oMainBox.children();
			
			aNavBtn.click(function(){
				var index=$(this).index();
				aNavBtn.removeClass('active');
				$(this).addClass('active');
				aMain.removeClass('show');
				aMain.eq(index).addClass('show');
			});
			
			
			var oMainNav=$('#catalogContentMainNav');
			var aMainNavBtn=oMainNav.children();
			var aMainBottom=$('.catalogContentMainBottom');
			
			aMainNavBtn.click(function(){
				var index=$(this).index();
				aMainNavBtn.removeClass('active');
				$(this).addClass('active');
				aMainBottom.removeClass('show');
				aMainBottom.eq(index).addClass('show');
			});			
			
		*/	
				
//编目-核心信息-选择按钮
		var oSpanSelect=$('#spanSelect');	
		var oChargerBox=$('#chargerBox');
		var oConfirmBtn=$('#confirmBtn');
		
		oSpanSelect.onclick=function(){			
			if(oChargerBox.style.display=="block")
			{
				oChargerBox.style.display='none';
				
			}
			else
			{
				oChargerBox.style.display='block';
				
			}
			return false;
		};
			
		oConfirmBtn.onclick=function(){						
			oChargerBox.style.display='none';			
		};	
			
			
//编目-核心信息-日历控件		

// 		var dates=$("#timeStart,#timeEnd");
		
//		dates.datepicker();
		

//点击按钮显示隐藏检索区域
//	$('.showHideBtn').click(function(){
//		if($(this).attr('data-showhide')=='false')
//		{
//			$(this).html('隐藏').removeClass('showBtnClass');
//			$(this).attr('data-showhide','ture');
//		}
//		else  
//		{
//			$(this).html('显示').addClass('showBtnClass')	;
//			$(this).attr('data-showhide','false');
//		
//		}
//		$('#searchArea').toggle();
//
//		});

	});


