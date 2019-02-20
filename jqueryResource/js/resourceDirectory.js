
var optiona1;
var optiona2;
var optiona3;
var optiona4;
var optiona5;
var optiona6;
var optiona7;
var optiona8;

var color3 = [ '#ff715a', '#f6cb58', '#2cd6af', '#f95a79', '#8e6cd0',
       		'#2e78f2', '#0d72c8' ];


//目录供需排行
function GiveParam1() {
	var data1 = option1Ajax();
	getOption1(data1);
}

function option1Ajax() {
	var ele = {"datalist":[]};
	// $.ajax({
	// 	url : "/catalog/myechart/datarank",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	console.info("总量1:  "+$.toJSON(ele));
	return ele;
}

function getOption1(data){
	var dataArr = new Array();
	dataArr = data.datalist;
	
	var orgs = new Array();
	var publishAmount = new Array();
	var myammount = new Array();	
		
	dataArr.forEach(function(item){
		orgs.push(item[1]);
		publishAmount.push(item[2]);
		myammount.push(item[3]);
	});

	var myChart1 = echarts.init(document.getElementById('bar1'));

	var option1 = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'line',        // 默认为直线，可选为：'line' | 'shadow'
		            lineStyle:{
		                width:0
		            }
		        },
		        textStyle:{
		            color:'#ffffff',
		            fontSize:14
		        }
		    },
		    legend: {
		        data: ['我订阅的目录数量', '委办局目录总量'],
		        right:5,
		        textStyle:{
		            color:'#ffffff'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true,
		        z:3
		    },
		    xAxis:  {
		        type: 'value',
		        axisLine: {
		            lineStyle: {
		                color: "#259dd2"
		            }
		        },
		        axisLabel:{
		            textStyle:{
		                fontSize:14,
		                color: "#ffffff"
		            }
		        },
		        splitLine: {
		            show:false,
		            lineStyle: {
		                color: "#0b2e3e"
		            }
		        },
		        axisTick: {
		            show: false
		        }
		    },
		    yAxis: {
		        type: 'category',
		        offset:10,
		        //data: ['人力局','农业局','教育局','统计局','工商局','水利局','国税局'],
		        data: orgs,
		        axisLine: {
		            lineStyle: {
		                color: "#259dd2"
		            }
		        },
		        axisLabel:{
		            textStyle:{
		                fontSize:14,
		                color: "#ffffff"
		            }
		        },
		        axisTick: {
		            show: false
		        },
		        splitLine: {
		            show:false
		        }
		    },
		    itemStyle:{
		        normal:{
		            borderWidth: 1,
		            borderType: 'solid',
		            shadowBlur: 20
		        }
		    },
		    series: [
		        {
		            name: '我订阅的目录数量',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    textStyle:{
		                        color:'#ffffff',
		                        fontSize:14
		                    }
		                }
		            },
		            //data: [300, 340, 350,420,500,380,390],
		            data:myammount,
		            itemStyle:{
		                normal:{
		                    color:'rgba(65,227,191,.2)',
		                    borderColor:'#41e3bf',
		                    shadowColor: 'rgba(65,227,191, 0.6)'
		                },
		                emphasis:{
		                    color:'rgba(65,227,191,.4)'
		                }
		            }
		        }, {
		            name: '委办局目录总量',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    textStyle:{
		                        color:'#259dd2',
		                        fontSize:14
		                    }
		                }
		            },
		            //data: [900, 820, 982,886,1180,980,1230],
		            data:publishAmount,
		            itemStyle:{
		                normal:{
		                    color:'rgba(37,157,210,.2)',
		                    borderColor:'#259dd2',
		                    shadowColor: 'rgba(37,157,210, 0.6)'
		                },
		                emphasis:{
		                    color:'rgba(37,157,210,.4)'
		                }
		            }
		        }

		    ]
		};
	myChart1.setOption(option1);
	optiona1 = option1;
}


//需求排行
function GiveParam2() {
	var data2 = option2Ajax();
	// wangdl 2017/4/6 添加空判断 S
	if(data2 != null){
		getOption2(data2);
	}
	// wangdl 2017/4/6 添加空判断 E
}

function option2Ajax() {
	var ele = {"datalist":[["吴中区","财政局","236eb820-0f80-43f4-852a-8b5da7686b72","1","0"]]};
	// $.ajax({
	// 	url : "/catalog/myechart/reqrank",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	console.info("总量2:  "+$.toJSON(ele));
	return ele;
}


function getOption2(data){
	var dataArr = new Array();
	dataArr = data.datalist;
	
	var orgs = new Array();
	var givenAmount = new Array();
	var demandAmmount = new Array();	
		
	dataArr.forEach(function(item){
		orgs.push(item[1]);
		demandAmmount.push(item[3]);
		givenAmount.push(item[4]);
		
	});

	var myChart2 = echarts.init(document.getElementById('bar2'));
var option2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',        // 默认为直线，可选为：'line' | 'shadow'
            lineStyle:{
                width:0
            }
        },
        textStyle:{
            color:'#ffffff',
            fontSize:14
        }
    },
    legend: {
        data: ['我订阅的目录数量', '委办局目录总量'],
        right:5,
        textStyle:{
            color:'#259dd2'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#259dd2"
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:14,
                color: "#ffffff"
            }
        },
        splitLine: {
            lineStyle: {
                color: "#0b2e3e"
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        offset:10,
        //data: ['人力局','农业局','教育局','统计局','工商局','水利局','国税局'],
        data:orgs,
        axisLine: {
            lineStyle: {
                color: "#259dd2"
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:14,
                color: "#ffffff"
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:false
        }
    },
    itemStyle:{
        normal:{
            borderWidth: 1,
            borderType: 'solid',
            shadowBlur: 20
        }
    },
    series: [
        {
            name: '我订阅的目录数量',
            type: 'bar',
            stack: '总量',
            //data: [300, 420, 380,360,570,480,390],
            data: demandAmmount,
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        color:'#ffffff',
                        fontSize:14
                    }
                },
            },
            itemStyle:{
                normal:{
                    color:'rgba(233,31,99,.2)',
                    borderColor: '#e91f63',
                    shadowColor: 'rgba(233,31,99, 0.6)'
                },
                emphasis:{
                    color:'rgba(233,31,99,.4)'
                }
            }
        }, {
            name: '委办局目录总量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        color:'#259dd2',
                        fontSize:14
                    }
                }
            },
            //data: [900, 810, 1022,886,1180,980,1300],
            data: givenAmount,
            itemStyle:{
                normal:{
                    color:'rgba(37,157,210,.2)',
                    borderColor:'#259dd2',
                    shadowColor: 'rgba(37,157,210, 0.6)'
                },
                emphasis:{
                    color:'rgba(37,157,210,.4)'
                }
            }
        }

    ]
};
myChart2.setOption(option2);
optiona2 = option2;
}





//目录供需关系图
function GiveParam3() {
	var data3 = option3Ajax();
	//TODO: 加一个非空和size>0的判断
	getOption3(data3);	
}

function option3Ajax() {
	var ele = {"datalist":[["吴中区","财政局","2"],["吴中区","地税局","4"],["吴中区","国税局","1"],["吴中区","财政局下属","4"]]}
	// $.ajax({
	// 	url : "/catalog/myechart/datalink",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("目录供需:  "+$.toJSON(ele));
	return ele;
}

function getOption3(data) {					
	var series = new Array();
	
	//准备type=graph数据
	var mpp = {
			type : "graph",
			name : data.datalist[0][0]
		};
	series.push(mpp);
	
	var dataArr2 = new Array();		
	dataArr2 = data.datalist;
	
	dataArr2.forEach(function(item) {
		var mp1 = {
			type : "graph",
			name : item[1]
		};
		series.push(mp1);
	});
		
	//准备图样
	var lineStyleMap = {
		normal : {
			color : 'source',
			curveness : 0.3
		}
	}

	var labelMap = {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        };
		
	//准备两端数据
	var dataArr = new Array();
	var currMap = {
		name : dataArr2[0][0],			
		value : 30,
		symbolSize : 40,			
		itemStyle : {
			normal:{
               color : '#18bef7'
            }
		}
	}
	dataArr.push(currMap);

	dataArr2.forEach(function(item, index) {
		var valueArr = new Array();
		valueArr.push(30);
		valueArr.push(item[2]);			
		var dataMap = {
			name : item[1],
			value : valueArr,		
			itemStyle : {
				normal : {
					color : color3[index]					
				}
			}
		}
		dataArr.push(dataMap);
	});
	//console.info("data:  "+$.toJSON(dataArr));
	
	//准备连接数据
	var linksArr = new Array();
	dataArr2.forEach(function(item) {
		var dataMap = {
			source : item[0],				
			target : item[1],
		}
		linksArr.push(dataMap);
	});	
	//console.info("links: "+$.toJSON(linksArr));

	//将端数据和连接数据放入map2中
	var map2 = {};
	map2 = {
		type : 'graph',
		layout : 'circular',
		symbol : 'circle',
		symbolSize : 20,
		roam : true,     
		lineStyle : lineStyleMap,
		label : labelMap,
		data : dataArr,
		links : linksArr
	}
	series.push(map2);
	//console.info("aaa: "+$.toJSON(series)); 

	var myChart3 = echarts.init(document.getElementById('bar3'));
	var option3 = {
			animationDurationUpdate : 1500,
			animationEasingUpdate : 'quinticInOut',
			tooltip : {
				trigger : 'item',
				padding : 15,
				borderWidth : 1,
				borderColor : "#239a8c",
				backgroundColor : "rgba(19,12,79,0.8)",
				formatter: function(params) {
	                if(params.dataType == "edge") { // is edge
	                	return params.data.source + " >> " + params.data.target;
	                } else { // is node
	                	var num = params.value[1];
	                	//注意:这里无法采用typeof判断undefined
	                	if(num == undefined){
	                		 return params.name;
	                	}	                	
	                    return params.name+" 订阅了"+num+" 条目录";
	                }
	            }
			},
			grid : {
				left : 70,
				top : 30
			},
		
			series : series
		}
	myChart3.setOption(option3);
	optiona3 = option3;
	//console.info("option42:  "+$.toJSON(option4))
}



//需求供需关系图
function GiveParam4() {
	var data4 = option4Ajax();		
	// wangdl 2017/4/6 添加空判断 S
	if(data4 != null){
		getOption4(data4);
	}
	// wangdl 2017/4/6 添加空判断 E
}

function option4Ajax() {
	var ele = {"datalist":[["吴中区","财政局","3"],["吴中区","农业局","1"],["吴中区","地税局","1"],["吴中区","国税局","8"]]};
	// $.ajax({
	// 	url : "/catalog/myechart/reqlink",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("需求供需:  "+$.toJSON(ele));
	return ele;
}


function getOption4(data) {					
	var series = new Array();
	
	//准备type=graph数据
	var mpp = {
			type : "graph",
			name : data.datalist[0][0]
		};
	series.push(mpp);
	
	var dataArr2 = new Array();		
	dataArr2 = data.datalist;
	
	dataArr2.forEach(function(item) {
		var mp1 = {
			type : "graph",
			name : item[1]
		};
		series.push(mp1);
	});
		
	//准备图样
	var lineStyleMap = {
		normal : {
			color : 'source',
			curveness : 0.3
		}
	}

	var labelMap = {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        };
		
	//准备两端数据
	var dataArr = new Array();
	var currMap = {
		name : dataArr2[0][0],			
		value : 30,
		symbolSize : 40,			
		itemStyle : {
			normal:{
               color : '#18bef7'
            }
		}
	}
	dataArr.push(currMap);

	dataArr2.forEach(function(item, index) {
		var valueArr = new Array();
		valueArr.push(30);
		valueArr.push(item[2]);			
		var dataMap = {
			name : item[1],
			value : valueArr,		
			itemStyle : {
				normal : {
					color : color3[index]					
				}
			}
		}
		dataArr.push(dataMap);
	});
	//console.info("data:  "+$.toJSON(dataArr));
	
	//准备连接数据
	var linksArr = new Array();
	dataArr2.forEach(function(item) {
		var dataMap = {
			source : item[0],				
			target : item[1],
		}
		linksArr.push(dataMap);
	});
	
	//console.info("links: "+$.toJSON(linksArr));

	//将端数据和连接数据放入map2中
	var map2 = {};
	map2 = {
		type : 'graph',
		layout : 'circular',
		symbol : 'circle',
		symbolSize : 20,
		roam : true,     
		lineStyle : lineStyleMap,
		label : labelMap,
		data : dataArr,
		links : linksArr
	}
	series.push(map2);
	//console.info("aaa: "+$.toJSON(series)); 

	var myChart4 = echarts.init(document.getElementById('bar4'));
	var option4 = {
			animationDurationUpdate : 1500,
			animationEasingUpdate : 'quinticInOut',
			tooltip : {
				trigger : 'item',
				padding : 15,
				borderWidth : 1,
				borderColor : "#239a8c",
				backgroundColor : "rgba(19,12,79,0.8)",
				formatter: function(params) {
	                if(params.dataType == "edge") { // is edge
	                	return params.data.source + " >> " + params.data.target;
	                } else { // is node
	                	var num = params.value[1];
	                	//注意:这里无法采用typeof判断undefined
	                	if(num == undefined){
	                		 return params.name;
	                	}	                	
	                    return "需要  "+params.name+"  提供"+num+" 条目录";
	                }
	            }
			},
			grid : {
				left : 70,
				top : 30
			},
		
			series : series
		}
	myChart4.setOption(option4);
	optiona4 = option4;
	//console.info("option42:  "+$.toJSON(option4))
}



//目录概览
function GiveParam5() {
	var data5 = option5Ajax();
	getOption5(data5);
}

function option5Ajax() {
	var ele = {"list":[102]};
	// $.ajax({
	// 	url : "/catalog/myechart/overview",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("总量:  "+$.toJSON(ele));
	return ele;
}

function getOption5(data) {
	var totalnum = data.list[0];
	var myChart5 = echarts.init(document.getElementById('bar5'));

	var option5 = {
		    series: [{
		        type: 'liquidFill',
		        data: [
		            {
		                value: totalnum/1000,
		                direction: 'left',
		                itemStyle: {
		                    normal: {
		                        color: "rgba(65,227,191,0.3)"
		                    }
		                }
		            },
		            //这是干嘛?
		            {
		                value: 0.9,
		                direction: 'right',
		                itemStyle: {
		                    normal: {
		                        color: "rgba(65,227,191,0.3)"
		                    }
		                }

		            }
		        ],

		        radius: '70%',
		        outline: {
		            show: false
		        },
		        backgroundStyle: {
		            borderColor: '#259dd2',
		            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: 'rgba(0, 183, 238,.25)'
		            }, {
		                offset: 1,
		                color: 'rgba(0, 183, 238,0)'
		            }]),
		            borderWidth: 5,
		            shadowBlur: 20,
		            shadowColor: 'rgba(37, 157, 210, .8)'
		        }
		    }]
		};
	optiona5 = option5;
	myChart5.setOption(option5);	
}	
	

//需求概览
function GiveParam6() {
	var data6 = option6Ajax();
	getOption6(data6);
}

function option6Ajax() {
	var ele = {"list":[22]};
	// $.ajax({
	// 	url : "/catalog/myechart/allreq",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("总量2:  "+$.toJSON(ele));
	return ele;
}

function getOption6(data) {
	var totalnum = data.list[0];
	var myChart6 = echarts.init(document.getElementById('bar6'));
	
var option6 = {
    series: [{
        type: 'liquidFill',
        data: [
            {
                value: totalnum/1000,
                direction: 'left',
                itemStyle: {
                    normal: {
                        color: "rgba(233,31,99,0.3)"
                    }
                }
            },
            {
                value: 0.3,
                direction: 'right',
                itemStyle: {
                    normal: {
                        color: "rgba(233,31,99,0.3)"
                    }
                }

            }
        ],

        radius: '70%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#259dd2',
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 183, 238,.25)'
            }, {
                offset: 1,
                color: 'rgba(0, 183, 238,0)'
            }]),
            borderWidth: 5,
            shadowBlur: 20,
            shadowColor: 'rgba(37, 157, 210, .8)'
        },
    }]
};
optiona6 = option6;
myChart6.setOption(option6);
}


//待办目录
function GiveParam7() {
	var data7 = option7Ajax();
	getOption7(data7);
}

function option7Ajax() {
	var ele = {"basicList":[],"basicNum":0,"dynamicNum":0,"subInfoNum":0,"dynamicList":[],"subInfoList":[]};
	// $.ajax({
	// 	url : "/catalog/myechart/datatodo",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("待办目录图:  "+$.toJSON(ele));
	return ele;
}

function getOption7(data) {
	var basicNum = data.basicNum;
	var subInfoNum = data.subInfoNum;
	var dynamicNum = data.dynamicNum;
	var myChart7 = echarts.init(document.getElementById('bar7'));
	
var option7 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
        textStyle:{
            color:'#259dd2',
            fontSize:14
        }
    },
    legend: {
        right:0,
        data: ['待审核订阅', '待审核目录','待审核特殊权限'],
        textStyle:{
            color:'#ffffff'
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['30%','70%'],
            center: ['50%', '50%'],
            label:{
                normal:{
                    textStyle:{
                        fontSize:20,
                        color:"#ffffff"
                    }
                }
            },
            data:[
                {
                    value:subInfoNum,
                    name:'待审核订阅',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff',
                                fontSize:14,
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#41e3bf'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:'rgba(65,227,191,.2)',
                            borderColor:'#41e3bf',
                            shadowColor: 'rgba(65,227,191, 0.6)'
                        }
                    }
                },
                {
                    value:basicNum,
                    name:'待审核目录',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff',
                                fontSize:14
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#e91f63'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:'rgba(233,31,99,.2)',
                            borderColor: '#e91f63',
                            shadowColor: 'rgba(233,31,99, 0.6)'
                        }
                    }
                },
                {
                    value:dynamicNum,
                    name:'待审核特殊权限',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#259dd2',
                                fontSize:14
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#259dd2'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(37,157,210,.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(37,157,210,.1)'
                            }]),
                            borderColor:'#259dd2',
                            shadowColor: 'rgba(37,157,210, 0.6)'
                        }
                    }
                },
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    length: 4,
                    length2: 50
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
optiona7 = option7;
myChart7.setOption(option7);
}

//待办需求
function GiveParam8() {
	var data8 = option8Ajax();
	getOption8(data8);
}

function option8Ajax() {
	var ele = {"reqList":[{"requirementId":"afdf42a2de33494b8c3a763afb5fb25e","requirementTitle":"国税局需要吴中区资源","reqBusiness":"国税局需要吴中区资源","createTime":1493086354000,"creator":null,"updateTime":1493087275000,"updater":null,"expectedTime":1493164800000,"priority":"1","orgId":"fcacda33-75b1-4acf-956d-0994883870e7","orgName":"国税局","organizationId":"root","organizationName":"吴中区","statement":"国税局需要吴中区资源","statementName":"国税局需要...","status":"2","proposal":"国税局需要吴中区资源","subRemark":null,"resid":"100400/102367,1"},{"requirementId":"a80bebfac86f436fada45a813cf41e6a","requirementTitle":"0419吴中区企业信息需求","reqBusiness":"0419吴中区企业信息需求","createTime":1492570702000,"creator":null,"updateTime":1492570702000,"updater":null,"expectedTime":1492646400000,"priority":"3","orgId":"d682e11f-aa5d-4b0d-84b1-2bb119de29be","orgName":"地税局","organizationId":"root,59348996-79c1-4f81-b3e7-23f51f1a6a41,20683f5e-a034-461d-9ffc-48eafab623cb,d682e11f-aa5d-4b0d-84b1-2bb119de29be,bcd7013f-4e33-40ef-9c89-ca0d79e454b5,236eb820-0f80-43f4-852a-8b5da7686b72,3d205925-de64-4e44-9e1c-1b6dfdb125dc,ff41b0cd-29d2-46ad-9951-31b59c5f0f85","organizationName":"吴中区,商业局,稽查大队,地税局,宣传部,财政局,公安局,法院","statement":"0419吴中区企业信息需求","statementName":"0419吴...","status":"2","proposal":"0419吴中区企业信息需求","subRemark":null,"resid":null}],"reqNum":2,"listwNum":0,"requirementNum":7,"listw":[],"auditType":"audit","requirementList":[{"requirementId":"047c7e086d5b4731a87a358a09991000","requirementTitle":"新增需求tiny","reqBusiness":null,"createTime":1522048120000,"creator":null,"updateTime":1522048120000,"updater":null,"expectedTime":1522454400000,"priority":"1","orgId":"root","orgName":"吴中区","organizationId":"2b7b3c06-d4aa-4d32-91b5-9389ca5d0eea","organizationName":"农业局","statement":"新增需求","statementName":"新增需求","status":"1","proposal":null,"subRemark":null,"resid":null},{"requirementId":"9328058132384d68bf0b501131ff1ca2","requirementTitle":"0419财政局、国税局财务信息需求","reqBusiness":"0419财政局、国税局财务信息需求","createTime":1492569583000,"creator":null,"updateTime":1492569551000,"updater":null,"expectedTime":1492560000000,"priority":"2","orgId":"root","orgName":"吴中区","organizationId":"236eb820-0f80-43f4-852a-8b5da7686b72,0218d2d1-02c9-4002-8d49-8a8ea1548ffe,de3b29c4-d8b6-412d-b202-ef9a21e7bbbc,f3f760e3-d3d7-42be-b8db-49b91491a6eb,fdeb6351-d3b5-4c7d-ba9d-731b06eb293a,fcacda33-75b1-4acf-956d-0994883870e7","organizationName":"财政局,测试01001,财政局下属,财税科,财税科一室,国税局","statement":"0419财政局、国税局财务信息需求","statementName":"0419财...","status":"1","proposal":"0419财政局、国税局财务信息需求","subRemark":null,"resid":null},{"requirementId":"ba25a2cad80449899de9bf5bbdaabc78","requirementTitle":"0417吴中区人口信息需求","reqBusiness":"0417吴中区人口信息需求","createTime":1492409294000,"creator":null,"updateTime":1492409294000,"updater":null,"expectedTime":1492560000000,"priority":"1","orgId":"root","orgName":"吴中区","organizationId":"20683f5e-a034-461d-9ffc-48eafab623cb,b96b1a6a-546a-4123-9365-fedbcd372ceb,d682e11f-aa5d-4b0d-84b1-2bb119de29be,2c9b9ce8-6ae9-429d-95ea-74e161c1c93e,2b7b3c06-d4aa-4d32-91b5-9389ca5d0eea","organizationName":"稽查大队,机械组,地税局,地税局财务科,农业局","statement":"0417吴中区人口信息需求","statementName":"0417吴...","status":"1","proposal":"0417吴中区人口信息需求","subRemark":null,"resid":null},{"requirementId":"30d5023b892e4395ab07075bbd1fe18d","requirementTitle":"sadf","reqBusiness":"sdf","createTime":1492071259000,"creator":null,"updateTime":1492071259000,"updater":null,"expectedTime":1492041600000,"priority":"1","orgId":"root","orgName":"吴中区","organizationId":"fcacda33-75b1-4acf-956d-0994883870e7","organizationName":"国税局","statement":"ds","statementName":"ds","status":"1","proposal":null,"subRemark":null,"resid":null},{"requirementId":"3ea679b8d5554025bb58397220af351f","requirementTitle":"sdf","reqBusiness":"sdf","createTime":1492070300000,"creator":null,"updateTime":1492070300000,"updater":null,"expectedTime":1492041600000,"priority":"1","orgId":"root","orgName":"吴中区","organizationId":"20683f5e-a034-461d-9ffc-48eafab623cb,b96b1a6a-546a-4123-9365-fedbcd372ceb","organizationName":"稽查大队,机械组","statement":"sdf","statementName":"sdf","status":"1","proposal":null,"subRemark":null,"resid":null}]};
	// $.ajax({
	// 	url : "/catalog/myechart/reqtodo",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	//console.info("待办需求图:  "+$.toJSON(ele));
	return ele;
}

function getOption8(data) {
	var requirementNum = data.requirementNum;
	var reqNum = data.reqNum;
	var listwNum = data.listwNum;
	var myChart8 = echarts.init(document.getElementById('bar8'));

var option8 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
        textStyle:{
            color:'#259dd2',
            fontSize:14
        }
    },
    legend: {
        right:0,
        data: ['待匹配需求', '待审核需求','待确认匹配需求'],
        textStyle:{
            color:'#ffffff'
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['30%','70%'],
            center: ['50%', '50%'],
            label:{
                normal:{
                    textStyle:{
                        fontSize:20,
                        color:"#ffffff"
                    }
                }
            },
            data:[
                {
                    value:reqNum,
                    name:'待匹配需求',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff',
                                fontSize:14,
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#41e3bf'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:'rgba(65,227,191,.2)',
                            borderColor:'#41e3bf',
                            shadowColor: 'rgba(65,227,191, 0.6)'
                        }
                    }
                },
                {
                    value:requirementNum,
                    name:'待审核需求',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff',
                                fontSize:14
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#e91f63'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:'rgba(233,31,99,.2)',
                            borderColor: '#e91f63',
                            shadowColor: 'rgba(233,31,99, 0.6)'
                        }
                    }
                },
                {
                    value:listwNum,
                    name:'待确认匹配需求',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff',
                                fontSize:14
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle:{
                                color:'#259dd2'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            borderWidth:3,
                            shadowBlur: 10,
                            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(37,157,210,.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(37,157,210,.1)'
                            }]),
                            borderColor:'#259dd2',
                            shadowColor: 'rgba(37,157,210, 0.6)'
                        }
                    }
                },
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    length: 4,
                    length2: 50
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
optiona8 = option8;
myChart8.setOption(option8);
}

