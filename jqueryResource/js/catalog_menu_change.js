//function change(id){
////	alert(id);
//	var storage = window.localStorage;
//	storage.setItem("menuid",id);
////	 $("#"+id).addClass("active");
//}

$(document).ready(function(){
//	var menuKey = "menuid"; 
//    var storage = window.localStorage;   
//    var menuValue=storage.getItem(menuKey);
//    alert(menuValue);  
  
//    if(menuValue){
//   	 $("#catalogBasicId").removeClass("active");
//   	 $("#"+menuValue).addClass("active");
//   	 $("#"+menuValue).find('ul').slideToggle("fast");
//    } 
    
    //隐藏显示检索区
    $('.showHideBtn').bind("click",function(){
		if($(this).attr('data-showhide')=='false')
		{
			$(this).html('隐藏').removeClass('showBtnClass');
			$(this).attr('data-showhide','true');
		}
		else  
		{
			$(this).html('显示').addClass('showBtnClass')	;
			$(this).attr('data-showhide','false');
		
		}
		$('#searchArea').toggle();

		});
});



        