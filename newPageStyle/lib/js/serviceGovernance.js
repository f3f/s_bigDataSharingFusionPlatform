var option1 = {
    color:['#41e3bf','#e91f63','#259dd2'],
    series: [
        {
            name:'服务分类统计',
            type:'pie',
            radius: ['45%', '65%'],
            center:['50%','50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter:'\n\n{b}\n\n占比：{d}%',
                    textStyle:{
                        fontSize: '18'
                    }
                }
            },
            clockwise:false,
            labelLine: {
                normal: {
                    show: true,
                    length:20,
                    length2:50
                }
            },
            itemStyle:{
                normal:{
                    borderWidth: 3,
                    borderType: 'solid',
                    shadowBlur: 20
                }
            },
            data:[
                {
                    value:22,
                    name:'专题类',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff'
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
                            color:'rgba(65,227,191,.2)',
                            borderColor:'#41e3bf',
                            shadowColor: 'rgba(65,227,191, 0.6)'
                        }
                    }
                },
                {
                    value:64,
                    name:'主题类',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff'
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
                            color:'rgba(37,157,210,.2)',
                            borderColor:'#259dd2',
                            shadowColor: 'rgba(37,157,210, 0.6)'
                        }
                    }
                },
                {
                    value:14,
                    name:'第三方产品',
                    label: {
                        normal: {
                            textStyle:{
                                color:'#ffffff'
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
                            color:'rgba(233,31,99,.2)',
                            borderColor: '#e91f63',
                            shadowColor: 'rgba(233,31,99, 0.6)'
                        }
                    }
                }
            ]
        }
    ]
};

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
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top:'3%',
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
        data: ['产品1','产品2','产品3','产品4','产品5'],
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
            name: '服务调用',
            type: 'bar',
            data: [300, 420, 380,360,570],
            label: {
                normal: {
                    show: false,
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
        }
    ]
};

var option3 = {
    grid:{
        left:50,
        right:50
    },
    dataZoom: [{
        show: true,
        type: 'slider',
        height:10,
        backgroundColor:'rgba(37,157,210,0.1)',
        fillerColor:'rgba(37,157,210,0.4)',
        borderColor:'#259dd2',
        startValue:"2016-2-3",
        endValue:"2016-8-9",
        textStyle:{color:"#259dd2"},
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: "150%",
        handleStyle: {
            color: '#259dd2'
        }
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:false,
            axisLine:{lineStyle:{color:"#184c40"}},
            axisLabel:{textStyle:{color:"#ffffff",fontSize:14},margin:40},
            data : []
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'人口和计划生育局',
            type:'line',
            data:[],
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ec1f63'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(236, 31, 99, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(236, 31, 99, 0.1)'
                    }])
                }
            }
        }
    ]
};

/*var x = 70000,y = 85;
function rData(num) {
    return Math.round(Math.random()*num);
}
var option4 = {
    color:['#41e3bf','#e91f63','#259dd2'],
    legend: {
        right: 0,
        icon:'rect',
        itemWidth:15,
        itemHeght:15,
        textStyle:{
            color:'#259dd2'
        },
        data: ['主题类', '专题类','第三方产品']
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top:'13%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: "#259dd2"
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:14,
                color: "#259dd2"
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: "rgba(37,157,210,0.3)"
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: "#259dd2"
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:14,
                color: "#259dd2"
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: "rgba(37,157,210,0.3)"
            }
        },
        axisTick: {
            show: false
        },
        scale: true
    },
    series: [{
        name: '主题类',
        data: [
        	[2017-3-30,rData(y)],
            [2017-3-26,rData(y)],
            [2017-3-27,rData(y)],
            [2017-3-26,rData(y)],
            [2017-3-28,rData(y)]
        ],
        type: 'scatter',
        symbolSize: function (data) {
            return data[1] ;
        },
        label: {
            emphasis: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                borderWidth:2,
                color:'rgba(233,31,99,.2)',
                borderColor: '#e91f63',
                shadowColor: 'rgba(233,31,99,.2)'
            }
        }
    }, {
        name: '专题类',
        data: [
        	[2017-3-23,rData(y)],
            [2017-3-24,rData(y)],
            [2017-3-22,rData(y)],
            [2017-3-24,rData(y)],
            [2017-3-28,rData(y)]
        ],
        type: 'scatter',
        symbolSize: function (data) {
            return data[1] ;
        },
        label: {
            emphasis: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                borderWidth:2,
                color:'rgba(65,227,191,.2)',
                borderColor:'#41e3bf',
                shadowColor: 'rgba(65,227,191, 0.6)'
            }
        }
    }, {
        name: '第三方产品',
        data: [
        	[2017-3-30,rData(y)],
            [2017-3-26,rData(y)],
            [2017-3-27,rData(y)],
            [2017-3-26,rData(y)],
            [2017-3-28,rData(y)]
        ],
        type: 'scatter',
        symbolSize: function (data) {
            return data[1] ;
        },
        label: {
            emphasis: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                borderWidth:2,
                color:'rgba(37,157,210,.2)',
                borderColor:'#259dd2',
                shadowColor: 'rgba(37,157,210, 0.6)'
            }
        }
    }]
};*/
function randomData() {
    return Math.round(Math.random()*250);
}
var option4 = {
	  /*  backgroundColor: '#000',*/
	    legend: {
	        right: 10,
	        data: ['主题类', '专题类','第三方产品'],
	        textStyle:{
	            color:'#ffffff',
	            fontSize:16
	        }
	    },
	      grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        data: [],
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
	        type: 'value',
	        splitNumber:6,
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
			},
	        scale: true
	    },
	    visualMap: [
	        {
	        	show:false,
	            inRange: {
	                symbolSize: [10, 100]
	            },
	        }
	    ],
	    series: [{
	        name: '主题类',
	        data: [],
	        type: 'scatter',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	                borderWidth:2,
	                color:'rgba(233,31,99,.2)',
	                borderColor: '#e91f63',
	                shadowBlur: 20,
	                shadowColor: 'rgba(233,31,99, 0.6)'
	            }
	        }
	    }, {
	        name: '专题类',
	        data: [],
	        type: 'scatter',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	               borderWidth:2,
	                color:'rgba(65,227,191,.2)',
	                borderColor:'#41e3bf',
	                shadowColor: 'rgba(65,227,191, 0.6)',
	                shadowBlur: 20,
	            }
	        }
	    },
	    
	     {
	        name: '第三方产品',
	        data: [],
	        type: 'scatter',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	               borderWidth:2,
	               color:'rgba(37,157,210,.2)',
	               borderColor:'#259dd2',
	               shadowColor: 'rgba(37,157,210, 0.6)',
	                shadowBlur: 20,
	            }
	        }
	    }]
	};

var myChartPie = echarts.init(document.getElementById('pie'));
//myChartPie.setOption(option1);

var myChartLine = echarts.init(document.getElementById('line'));
//myChartLine.setOption(option2);

var myChartLine2 = echarts.init(document.getElementById('line2'));
//myChartLine2.setOption(option3);

var myChartScatter = echarts.init(document.getElementById('scatter'));
//myChartScatter.setOption(option4);

$(function(){

	var successCall = 134;
	var faliCall = 1;
	//$("#userNum").text(56);
	//获取用户数量
    $("#userNum").text(22);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/sysUser/getAllSysUserAsList",
	// 	data:"",
	// 	success : function(result) {
	// 		$("#userNum").text(result.length);
	// 	}
	// });
	//挂在服务数量

    $("#serviceNum").text(0);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/serviceCount",
	// 	data:"",
	// 	success : function(count) {
	// 		$("#serviceNum").text(count);
	// 	}
	// });
	//访问成功服务

    successCall = 493;
    $("#logNum").text(493);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/countLog",
	// 	data:"",
	// 	success : function(count) {
	// 		successCall = count;
	// 		$("#logNum").text(count);
	// 	}
	// });
    faliCall = 58;
    countCall(successCall,faliCall);
    $("#logFailNum").text(58);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/countFailLog",
	// 	data:"",
	// 	success : function(count) {
	// 		faliCall = count;
	// 		countCall(successCall,faliCall);
	// 		$("#logFailNum").text(count);
	// 		//alert(count);
	// 	}
	// });

    var result = {"第三方产品":0,"主题类":0,"专题类":0};
    option1.series[0].data[0].value = result["主题类"];
    option1.series[0].data[1].value = result["专题类"];
    option1.series[0].data[2].value = result["第三方产品"];
    option1.series[0].data[0].name = "主题类";
    option1.series[0].data[1].name = "专题类";
    option1.series[0].data[2].name = "第三方产品";
    myChartPie.setOption(option1);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/mainServiceCount",
	// 	data:"",
	// 	success : function(result) {
	// 		option1.series[0].data[0].value = result["主题类"];
	// 		option1.series[0].data[1].value = result["专题类"];
	// 		option1.series[0].data[2].value = result["第三方产品"];
	// 		option1.series[0].data[0].name = "主题类";
	// 		option1.series[0].data[1].name = "专题类";
	// 		option1.series[0].data[2].name = "第三方产品";
	// 		myChartPie.setOption(option1);
	// 	}
	// });
	var res = [{"工会会员查询":153},{"企业信息查询":140},{"民生生活":96},{"常驻人口查询":32},{"社会团体组织查询":21},{"data-check-service":19},{"国土信息查询":11},{"百度服务测试":7},{"工会信息查询":5}];
    for(var i=0;i<5;i++){
        for(var key in res[i]){
            option2.yAxis.data[4-i] = key;
            option2.series[0].data[4-i] = res[i][key];
        }
    }
    myChartLine.setOption(option2);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/serviceRank",
	// 	data:"",
	// 	success : function(result) {
	// 		for(var i=0;i<5;i++){
	// 			for(var key in result[i]){
	// 				option2.yAxis.data[4-i] = key;
	// 				option2.series[0].data[4-i] = result[i][key];
	// 			}
	// 		}
	// 		myChartLine.setOption(option2);
	// 	}
	// });
	var response = {"2017-03-20":1,"2017-03-21":3,"2017-03-22":4,"2017-03-23":145,"2017-03-24":112,"2017-03-25":58,"2017-03-26":6,"2017-03-27":3,"2017-03-28":4,"2017-03-29":12,"2017-03-30":15,"2017-03-31":83,"2017-04-01":33,"2017-04-17":0}
    var i = 0 ;
    for(var key in response){
        option3.xAxis[0].data[i] = key;
        option3.series[0].data[i] = response[key];
        i++;
    }
    var time = option3.xAxis[0].data;
    option3.dataZoom[0].startValue = time[0];
    option3.dataZoom[0].endValue = time[time.length-1];
    myChartLine2.setOption(option3);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/serviceRankByTime",
	// 	data:"",
	// 	success : function(result) {
	// 		var i = 0 ;
	// 		for(var key in result){
	// 			option3.xAxis[0].data[i] = key;
	// 			option3.series[0].data[i] = result[key];
	// 			i++;
	// 		}
	// 		var time = option3.xAxis[0].data;
	// 		option3.dataZoom[0].startValue = time[0];
	// 		option3.dataZoom[0].endValue = time[time.length-1];
	// 		myChartLine2.setOption(option3);
	// 	}
	// });
	var re = {"2017-03-20":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-21":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-22":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-23":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-24":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-25":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-26":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-27":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-28":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-29":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-30":{"第三方产品":0,"主题类":0,"专题类":0},"2017-03-31":{"第三方产品":0,"主题类":0,"专题类":0},"2017-04-01":{"第三方产品":0,"主题类":0,"专题类":0},"2017-04-17":{"第三方产品":0,"主题类":0,"专题类":0}}
    var i = 0;
    for(var key in re){
        option4.xAxis.data.push(key);
        var map = re[key];
        for (var ke in map) {
            if(ke =="主题类"){
                option4.series[0].data.push(map[ke]);
            }else if(ke =="专题类"){
                option4.series[1].data.push(map[ke]);
            }else{
                option4.series[2].data.push(map[ke]);
            }
        }
    }
    //alert(option4.series[0].data);
    myChartScatter.setOption(option4);
	// $.ajax({
	// 	type : "GET",
	// 	url : "/serviceByTimeCount",
	// 	data:"",
	// 	success : function(result) {
	// 		var i = 0;
	// 		for(var key in result){
	// 			option4.xAxis.data.push(key);
	// 			var map = result[key];
	// 			for (var ke in map) {
	// 				if(ke =="主题类"){
	// 					option4.series[0].data.push(map[ke]);
	// 				}else if(ke =="专题类"){
	// 					option4.series[1].data.push(map[ke]);
	// 				}else{
	// 					option4.series[2].data.push(map[ke]);
	// 				}
	// 			}
	// 		}
	// 		//alert(option4.series[0].data);
	// 		myChartScatter.setOption(option4);
	// 	}
	// });
/*	$.ajax({
		type : "GET",
		url : "/serviceByTimeCount",
		data:"",
		success : function(result) {
			for(var key in result){
				//alert(key);
				var obj = result[key][1];
				if(obj.indexOf("主题类")>=0){
					var map = result[key][0];
					for(var key in map){
						
						option4.series[0].data.push(time);
					}
					
				}
				if(obj.indexOf("专题类")>=0){
					var map = result[key][0];
					for(var key in map){
						var time = [key, map[key]];
						option4.series[1].data.push(time);
					}
					
				}
				if(obj.indexOf("第三方产品")>=0){
					var map = result[key][0];
					for(var key in map){
						var time = [key, map[key]];
						option4.series[2].data.push(time);
					}
					
				}
				
			}
			//alert(option4.series[0].data);
			myChartScatter.setOption(option4);
		}
	});
*/	
	
});

function countCall(call1, call2) {
	var success = (call1/(call1+call2))*100;
	var fail = (call2/(call1+call2))*100;
	$("#successCall").text(success.toFixed(2) + "%");
	$("#faliCall").text(fail.toFixed(2) + "%");
}
