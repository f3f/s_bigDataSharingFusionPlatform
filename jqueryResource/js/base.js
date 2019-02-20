/**
 * 杨光跃
 * 项目通用js
 */


//------------------------------------对话框  start------------------------------------------------------
//简单:Demo : dialog.dialog("");
//标准:Demo : dialog.dialog({message:"是否连接数据源?",type:dialog.type.STANDARD,callback:function(){ alert("hehe") }});
//定制:Demo : dialog.dialog({title:"提示信息",message:"",type:dialog.type.CUSTOM,buttons:[{class:"btn",name:"取消",callback:function(){alert("取消!");}},{class:"btn btn-primary",name:"确定",callback:function(){alert("确定!");}}]});
var buttonIdForDialogArr=[];
var buttonCallbackForDialogArr=[];
var dialog={
				id:"dialogModal",
				name:"dialog",
				type:{SIMPLE:"simple",simple:"simple",
						STANDARD:"standard",standard:"standard",
						CUSTOM:"custom",custom:"custom"
				},
				close:function(callback){
					$("#"+this.id).remove();
				},
				buttons:{
					makeSure:{class:"btn btn-primary",name:"确定"} ,
					save:{class:"btn btn-primary",name:"保存"},
					cancel:{class:"btn",name:"取消"}
				},
				buttonToHtml:function(butObj){
					var id=randomString(10);
					buttonIdForDialogArr.push("btn"+id);
					buttonCallbackForDialogArr.push(butObj.callback);
					//onclick=\""+this.name+".close("+butObj.callback+")\"
					return "<button type=\"button\" id='btn"+id+"' class=\""+butObj.class+"\">"+butObj.name+"</button>";
				},
				buttonCustom:function(buttons){
					if(!buttons||buttons.length==0){
						buttons=[this.buttons.cancel,this.buttons.save];
					}
					var html="";
					var parent=this;
					buttons.forEach(function(item){
						html+=parent.buttonToHtml(item);
					});
					return html;
				},
				buttonStandard:function(callback){
					var newButtons=[this.buttons.cancel,{class:"btn btn-primary",name:"确定",callback:callback}];
					return this.buttonCustom(newButtons);
				},
				dialog:function(param){
						buttonIdForDialogArr=[];
						buttonCallbackForDialogArr=[];
						var footHtml="";
						var option={
								title:"提示信息",
								message:"",
								type:"simple",
								buttons:[]
						};
						if(!param||typeof param=='string'){
							option.message=param?param:"";
						//	footHtml="<button type=\"button\" onclick=\"dialog.close()\" class=\"btn btn-primary\">保存</button>";
						}else if(typeof param=='object'){
							//option=param;这样写会覆盖option的默认值,所以下面只是param有的属性才覆盖
							for(var attr in param){
								option[attr]=param[attr];
							}
						}
						var html="<div class=\"modal show\" id=\""+this.id+"\">" +
								"<div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\">"+
					                "<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>"+
					                "<h4 class=\"modal-title\">"+option.title+"</h4>"+
					            "</div>"+
					            "<div class=\"modal-body text-center\"><h2>"+
					            option.message+
					            "</h2></div>"+
					            "<div class=\"modal-footer\">"+
					            		(option.type==this.type.SIMPLE?this.buttonToHtml(this.buttons.makeSure):"")+
					            		(option.type==this.type.CUSTOM?this.buttonCustom(option.buttons):"")+
					            		(option.type==this.type.STANDARD?this.buttonStandard(option.callback):"")+
					                //"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>"+
					                //"<button type=\"button\" class=\"btn btn-primary\">保存</button>"+
					            "</div>"+
					        "</div>"+
					    "</div>"+
					"</div>";
						$("body").append(html);
						for(var i=0;i<buttonIdForDialogArr.length;i++){
							$("#"+buttonIdForDialogArr[i]).bind("click", {index: i}, clickHandler); 
							function clickHandler(event) {  
								dialog.close();
						        var i= event.data.index;  
						        if(buttonCallbackForDialogArr[i]){
						        	buttonCallbackForDialogArr[i]();
						        }
						    } 
							
						}
					}
					
		};

function randomString(len) {
	　　len = len || 32;
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (i = 0; i < len; i++) {
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return pwd;
	}
//------------------------------------对话框  end------------------------------------------------------

//------------------------------------分页  start------------------------------------------------------
var pageQuerying=function(url,param,option,callback,page){
	if(!page){
		page=0;
	}
	$.post(url+page,param,function(pageBean){
		pageBean=JSON.parse(pageBean);
		initPage(url,param,option,callback,pageBean);
		var data=pageBean.content;
		
		if(option&&option.length>0){
			var html="";
			data.forEach(function(item){
				html+="<tr>";
				option.forEach(function(fileds){
					try{
						var filedSp=fileds.split(",");
						var innerHtml="";
						var headTd="<td >";
						filedSp.forEach(function(filed){
							if(filed.length>3&&filed.substr(0,3)=="pm:"){
								var temp=parseFiled(filed.substr(3),item);
								headTd="<td "+temp+" >";
							}else if(filed.length>3&&filed.substr(0,3)=="hm:"){
								var temp=parseFiled(filed.substr(3),item);
								innerHtml+=temp;	
							}else{
								innerHtml+=getValueByFaild(item,filed);
							}
						});
						html+=headTd+innerHtml+"</td>";
					}catch(e){
						html+="<td></td>";
						console.info("解析错误："+fileds);
						console.info(e);
					}
					
				});
				html+="</tr>";
			});
			$("#replaceRow").html(html);
		}
		
		if(callback){
			callback(data);
		}
		
		
		
	});
}
var getValueByFaild=function(item,filed){
	var result="";
	if(filed.length>5&&filed.substr(0,5)=="item."){
		result= eval(filed);
	}else{
		result= eval("item."+filed);
	}
	return result?result:"";
};
var parseFiled=function(temp,item){
	if(temp.indexOf("${")>=0){
		var innerFiled=temp.substr(temp.indexOf("${")+2);
		innerFiled=innerFiled.substr(0,innerFiled.indexOf("}"));
		temp=temp.substr(0,temp.indexOf("${"))+getValueByFaild(item,innerFiled)+temp.substr(temp.substr(0,temp.indexOf("${")).length+2+1+innerFiled.length);
	}
	return temp;
}

var insertTd=function(context){
	return "<td>"+context+"</td>";
}
var initPage=function(url,param,option,callback,pageBean){
	var config={
			maxPages:pageBean.totalPages,
			showPages:5,
			selectedIndex : pageBean.number,
			onPageClicked : function(obj,pageIndex) {
	        	pageQuerying(url,param,option,callback,pageIndex);
	       }
	};
	var pageHtmls="";
	for(var i=0;i<config.showPages;i++){
		var pageNum=config.selectedIndex-config.selectedIndex%config.showPages+i+1;
		if(i==0){
			pageHtmls+="<li  class='page' pageNum='1'><a  href='javascript:void(0)'>«</a></li>";
			pageHtmls+="<li  class='page "+(pageNum<config.showPages?'disabled':'')+"' pageNum='"+(pageNum-1)+"'><a  href='javascript:void(0)'>上一页</a></li>";
		}
		if(pageNum<=config.maxPages){
			pageHtmls+="<li class='page "+(pageNum==(config.selectedIndex+1)?'active':'')+"' pageNum='"+pageNum+"'><a href='javascript:void(0)'  >"+pageNum+"</a></li>";
		}
		if(i==(config.showPages-1)){
			pageHtmls+="<li class='page "+(pageNum>=config.maxPages?'disabled':'')+"' pageNum='"+(pageNum+1)+"'><a  href='javascript:void(0)'>下一页</a></li>";
			pageHtmls+="<li  class='page' pageNum='"+config.maxPages+"'><a  href='javascript:void(0)'>»</a></li>";
		}
	}
	$(".pagination").html(pageHtmls);
	$(".pagination li").bind("click",function(){
		if($(this).hasClass("disabled")){
			return;
		}
		pageQuerying(url,param,option,callback,$(this).attr("pageNum")-1);
	});
};
//------------------------------分页 end-------------------------------------

//---------------------------菜单选中样式控制 start---------------------------
$(document).ready(function(){
	 var menuKey = "menuKey"; 
     var storage = window.localStorage; 
     var menuValue=storage.getItem(menuKey);
     if(menuValue){
    	 $("#myMenuUL li").removeClass("active");
    	 $("#"+menuValue).addClass("active");
     }
     $("#myMenuUL li").bind("click",function(){
		var menuValue = $(this).attr("id"); 
		
        if (storage) { 
        	storage.setItem(menuKey, menuValue);   
	    }
	});
});

//---------------------------菜单选中样式控制end---------------------------
