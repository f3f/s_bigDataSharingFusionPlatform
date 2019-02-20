/*
 * 椭圆形的力导向（使用例）
 *  此组件需要引用d3.js,和两张背景图片
 *  支持单击，鼠标滑入滑出
 *  支持轨道远近维度，球大小维度，球分组颜色维度
 * 可视化 贾鸣 2016/11/22
 */
//----------------------测试数据制作 begin----------------------------
function createRandomString(n) {
	var elements = "abcdefghijklmnopqrstuvwxyz-".split("");
	var string = "";
	for (var i = 0; i < n; i++) {
		var e = elements[Math.floor(Math.random() * elements.length)];
		string += i == 0 ? e.toUpperCase() : e;
	}
	return string;
}
// add 增加 ping的ip的地址
function ping(ip) {
	var type;
	var img = new Image();
	var start = new Date().getTime();
	console.info(ip);
	img.src = "http://" + ip + "?t=" + start;
	var flag = false;
	img.onload = function() {
		flag = true;
		// console.log('ok');
		type = "0";
		alert(type)
		return type;
	}
	var timer = setTimeout(function() {
		if (!flag) {
			flag = false;
			// console.log('failed');
			type = "1";
			alert(type)
			return type;
		}

	}, 1500);

	return type;

}
// add 增加ping的ip的地址
function createRandomData(i) {
	var data = [];

	var databack = [ {
		"name" : "192.168.1.104财政",
		"contribution" : "192549",
		"demand" : "192345",
		"access" : "6",
		"grade" : "1",
		"type" : "0"
	}, {
		"name" : "192.168.1.103地税",
		"contribution" : "528845",
		"demand" : "528845",
		"access" : "6",
		"grade" : "2",
		"type" : "0"
	}, {
		"name" : "192.168.15.109吴中",
		"contribution" : "803508",
		"demand" : "803508",
		"access" : "6",
		"grade" : "4",
		"type" : "0"
	}, {
		"name" : "192.168.20.163zml",
		"contribution" : "0",
		"demand" : "0",
		"access" : "6",
		"grade" : "5",
		"type" : "0"
	}, {
		"name" : "192.168.15.108国税",
		"contribution" : "0",
		"demand" : "0",
		"access" : "6",
		"grade" : "7",
		"type" : "0"
	}, {
		"name" : "192.168.21.22dd",
		"contribution" : "0",
		"demand" : "0",
		"access" : "6",
		"grade" : "9",
		"type" : "1"
	} ];
	
	// add 增加从后台读取数据
	// var databack = [];
	// $.ajax({
	// 	url : "/dataCenter/console/getFront?index="+i,
	// 	type : "GET",
	// 	dataType : "json",
	// 	async : false,
	// 	success : function(result) {
	// 		databack = result;
	// 	}
	// });
	//console.info("节点数据we:"+$.toJSON(databack));
	
	var allObj = {};
	for (var i = 0; i < databack.length; i++) {

		data.push({
			name : databack[i].name, // 名称
			contribution : databack[i].contribution,
			demand : databack[i].demand,
			access : databack[i].access,
			grade : databack[i].grade, // 距离
			type : databack[i].type
		// 类型
		});
	}
	return data;

}
// ----------------------测试数据制作 end----------------------------

// 创建随机数据.
var categories = [ {
	type : 0,
	name : "连接正常",
	color : "#21d9c2"
}, {
	type : 1,
	name : "硬件异常",
	color : "#eb3631"
}, {
	type : 2,
	name : "连接断线",
	color : "#ff9d42"
} ];

var chart = new ForceGuidanceChart(document.getElementById("datacenter"), 1134,
		700);

// 图例分组
chart.categories = categories;

// 图片位置可以调整
// chart.backgroundImage = "./newPageStyle/lib/imgs/backgroundImage.png";
// chart.switchMachineImage = "./newPagesStyle/lib/imgs/switchMachine.png";

// 动画开启/关闭，默认为ture
// chart.animation = false;

// 单击事件触发
chart.clickHandler = function(d) {
	// console.log("click event", d.name, d.type, d.contribution, d.grade);
};
// 鼠标滑入场合，tooltip显示
chart.showTooltip = function(d) {
	// console.log("show tip:", d.name, d.type, d.contribution, d.grade);
};
// tooltip隐藏
chart.hideTooltip = function(d) {
	// console.log("hide tip:", d.name, d.type, d.contribution, d.grade);
};
// chart初始化
chart.init();

function GiveParamindexfirst(i) {
	// 设置随机数据
	var data = createRandomData(i);
	// 图表开始描绘，数据读入
	chart.data(data);

}