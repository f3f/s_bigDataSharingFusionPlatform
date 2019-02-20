/*$(function(){
        $(".level-one-box").click(function(){
            var title = $(this).find(".level-one-title").text();
            var typeId = $(this).find("#typeId").val();
            $.ajax({
    			type : "GET",
    			url : "/getType",
    			data:{typeId:typeId},
    			success : function(type) {
    				alert(result);
    				$(".categories-bottom-box .title").text(title);
    				$("#introduce-circle").text(type.describe);
    				$(".categories-bottom-box .category-box").hide();
    				$(".categories-bottom-box .introduce-box").show();
    			}
    		});
        });
        $(".level-three-title").click(function(){
            $(".level-three-title").removeClass("active");
            $(this).addClass("active");
            var title = $(this).text();
            $(".categories-bottom-box .title").text(title+"类产品");
            $(".categories-bottom-box .introduce-box").hide();
            $(".categories-bottom-box .category-box").show();
        });

});*/

function firstDetail(typeId) {
	$.ajax({
		type : "GET",
		url : "/getType",
		data:{typeId:typeId},
		success : function(type) {
			//alert(type);
			$(".categories-bottom-box .title").text(type.typeName);
			$("#introduce-circle").text(type.describe);
			$(".categories-bottom-box .category-box").hide();
			$(".categories-bottom-box .introduce-box").show();
		}
	});
}

function thirdDetail(typeId) {
	$.ajax({
		type : "GET",
		url : "/getType",
		data:{typeId:typeId},
		success : function(type) {
			$("#thirdDescription").text(type.describe);
			$.ajax({
				type : "GET",
				url : "/getServiceByType",
				data:{typeName:type.typeName},
				success : function(service) {
					$(".level-three-title").removeClass("active");
		            $(this).addClass("active");
		            var html = "";
		            service.forEach(function(item) {
		            	 html += "<tr><td>" + item.serviceName + "</td><td>" + item.interfaceName 
		            	 	  +"</td><td> 6个月  </td><td>" +"<a href=\"/detailsPages/" + item.serviceName + "\" class='operation-a'>查看</a></td>" ;
		    		}); 
		            $("#serviceTable").html(html);
		            $(".categories-bottom-box .title").text(type.typeName+"类产品");
		            $(".categories-bottom-box .introduce-box").hide();
		            $(".categories-bottom-box .category-box").show();
				}
			});
		}
	});
	
	
}
