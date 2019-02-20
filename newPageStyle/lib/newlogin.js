$(function(){
	var username =  $("#uname").val();
	var mygov2 =  $("#mygov").val();
	var myloginTime2 =  $("#myloginTime").val();
	console.info("username  "+ username);
	if(typeof(username) != "undefined" & username.length >0 ){
		$(".loginBox").hide();
        $(".userCenter").show();
        $("#showname").text("用户名称："+username);
        $("#showorg").text("用户单位："+mygov2);
        $("#showtime").text("登录时间："+myloginTime2);
	}
	
	
})