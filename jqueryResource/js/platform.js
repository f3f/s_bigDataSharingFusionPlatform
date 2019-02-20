/*
 * 饼图 id="pie"
 * 
 */
function GiveParam1() {
	var data1 = option1Ajax();
	getOption1(data1);
}

//获取饼图数据
function option1Ajax() {
	var ele = null;
    ele = {"wait":8,"finish":0,"run":27,"error":0}
	// $.ajax({
	// 	url : "/dataCenter/console/getDatatask",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	}
	// });
	
	return ele;
}

//加载和渲染饼图, 代码冗长, 后期要抽取出来
function getOption1(data) {
	var errorValue = data.error;
	var waitValue = data.wait;
	var finishValue = data.finish;
	var runValue = data.run;

	var myChart1 = echarts.init(document.getElementById('pie'));
		
	myChart1.setOption({		
		color:['#41e3bf','#e91f63','#259dd2'],
		tooltip : {
			show : false,
			formatter : function(param) {
				return '<div style="width:120px;color:#333;text-align: center;font-size:30px;">'
						+ param.percent + "%</div>"
			},
			position : [ '42%', '46%' ],
			backgroundColor : 'none'
		},
		calculable : false,
		series : [ {				
			name:'访问来源',
            type:'pie',
            radius: ['45%', '68%'],
            avoidLabelOverlap: false,
			label: {
                normal: {
                    show: true,
                    formatter:'{b}{d}%',
                    textStyle:{
                        fontSize: '16'
                    }
                }
            },
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

			data : [ {
				value : errorValue,
				name : '执行失败服务',
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
			}, {
				value : waitValue,
				name : '未启动服务',
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
			}, {
				value : finishValue,
				name : '已完成服务',
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
			}
			]
		} ]
	});
}



/*
 * 柱状图 id="bar"
 * 
 */
function GiveParam2() {	
	var chartData = option2Aajx();
	getOption2(chartData);
}

//获取柱状图数据
function option2Aajx() {
	var ele = {"notStartNum":8,"failureNum":0,"statingNum":27};
	// $.ajax({
	// 	url : "/dataCenter/console/getDataChange",
	// 	type : "GET",
	// 	async : false,
	// 	datatype : "json",
	// 	success : function(data) {
	// 		ele = data;
	// 	},
	// 	error : function(error) {
	// 	// console.log("错误信息"+error);
	// 	}
	// });
	return ele;
}

//加载和渲染柱状图
var myChart2 = echarts.init(document.getElementById('bar'));
function getOption2(data) {
	var failureNum = data.failureNum;
	var notStartNum = data.notStartNum;
	var statingNum = data.statingNum;
	
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
	        data: ['服务调用失败的转换', '未被服务使用的转换','已被服务使用的转换'],
	        textStyle:{
	            color:'#ffffff',
	            	fontSize:19
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
	        data: ['文件型转换','关系型转换','接口型转换'],
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
	                 name: '服务调用失败的转换',
	                 type: 'bar',
	                 stack: '总量',
	                 label: {
	                     normal: {
	                         show: true,
	                         textStyle:{
	                             color:'#ffffff',
	                             fontSize:14
	                         }
	                     },
	                 },
	                 data : [ failureNum, 29 ],
	                 //data: [45, 128, 30],

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
	             },
	             {
	                 name: '未被服务使用的转换',
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
	                 data : [ notStartNum, 13.8 ],
	                 //data: [30, 96, 24],
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
	             },
	             {
	                 name: '已被服务使用的转换',
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
	                 data : [ statingNum, 38.5 ],
	                 //data: [460, 186, 336],
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
}


/*
 * 实时转换日志图 id="resourceForeplacedview"
 * 
 */
function GiveParam() {		
	var url = "/dataCenter/logManage/getTransLog";
    var contentList = [{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493342866000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493342793000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493342793000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493342793000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493342793000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_0__CSSJ0310_0_tf1988344449","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493341848000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1493341847000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341845000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493341845000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"33","transname":"DS_7_DS_3_T_CSSJ0413_1_tf1671038867","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493341775000,"errors":"0"},{"sourceResourceName":"192.168.1.212MSSQL","linesWritten":"0","transname":"DS_1_TESTAA_tf1293300140","targetResourceName":"192.168.1.212MSSQL","startdate":1493341774000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493341774000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1493341773000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"33","transname":"DS_7_DS_3_T_CSSJ0413_1_tf1671038743","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341773000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_0__CSSJ0310_0_tf1988346247","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341773000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1493341773000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341771000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493341771000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493341771000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493341771000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341771000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493341771000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493222400000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1493222331000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_0__CSSJ0310_0_tf1988346247","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493222327000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ1_5_tf1424350317","targetResourceName":"192.168.1.212MSSQL","startdate":1493177147000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"38","transname":"CZ_1_S_7_T_SGSBZ_1_tf637099984","targetResourceName":"192.168.1.212MSSQL","startdate":1493177048000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ1_5_tf1424350317","targetResourceName":"192.168.1.212MSSQL","startdate":1493176487000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"38","transname":"CZ_1_S_7_T_SGSBZ_1_tf637099984","targetResourceName":"192.168.1.212MSSQL","startdate":1493175375000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"33","transname":"DS_7_DS_3_T_CSSJ0413_1_tf1671038867","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493172492000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_0__CSSJ0310_0_tf1988344449","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493172444000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"33","transname":"DS_7_DS_3_T_CSSJ0413_1_tf1671038743","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493172406000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_0__CSSJ0310_0_tf1988346247","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493172341000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1493136000000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493136000000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493136000000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1493135926000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1493135925000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"38","transname":"CZ_1_S_7_T_SGSBZ_1_tf637099984","targetResourceName":"192.168.1.212MSSQL","startdate":1493135920000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493135919000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493135919000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493135919000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493135918000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1493135918000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493135918000,"errors":"1"},{"sourceResourceName":"192.168.1.212MSSQL","linesWritten":"0","transname":"DS_1_TESTAA_tf1293300140","targetResourceName":"192.168.1.212MSSQL","startdate":1493116374000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"38","transname":"CZ_1_S_7_T_SGSBZ_1_tf637099984","targetResourceName":"192.168.1.212MSSQL","startdate":1493111094000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1493100783000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1493100752000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1493083641000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493083641000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1493083641000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1493049600000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1493049600000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1492704050000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492704049000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492704049000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492704048000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492704048000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492704048000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492704047000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492704047000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492704047000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492704046000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492704001000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492704000000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1492617649000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617648000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617647000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617647000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617647000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617646000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617646000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617646000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492617600000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617600000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617539000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492617539000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1492617539000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617538000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617537000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617537000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492617537000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617536000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617536000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492617492000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1492617492000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492617491000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1492531248000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492531247000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492531247000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492531246000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492531245000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492531245000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492531245000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492531245000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492531201000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492531200000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"10","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1492498298000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1__0316_1_tf314795139","targetResourceName":"192.168.1.212MSSQL","startdate":1492494857000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CSSJ_0_tf1285156633","targetResourceName":"192.168.1.212MSSQL","startdate":1492494751000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_RQB_1_tf110868166","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1492486935000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492486048000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492485989000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492485327000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492485187000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492485111000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"0","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492485021000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"10","transname":"DS_7_T_RQB_0_tf1647021425","targetResourceName":"192.168.15.108Psql_地税","startdate":1492480913000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492444846000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492444846000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492444845000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492444845000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492444844000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492444844000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"0","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492444844000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492444844000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492444800000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492444800000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"5","transname":"CZ_1_Z_7_T_CZJMYBXX_2_tf1383501020","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492408886000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492389042000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492389042000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492389042000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492389041000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492389041000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492389040000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492389040000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492389040000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492388997000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492388997000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492358444000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492358444000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492358444000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358443000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358443000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358443000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358443000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358443000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492358400000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492358400000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492272044000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492272044000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492272044000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492272042000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492272042000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492272042000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492272042000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492272001000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492272000000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492185643000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492185642000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492185642000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492185641000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492185641000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492185641000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492185601000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492185600000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492135197000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492135138000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"5","transname":"WZ_7_T_CZJMYBXX_2_tf2066110053","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492135027000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492099242000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492099241000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492099241000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492099240000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492099240000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492099240000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492099201000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492099200000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492012841000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1492012841000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492012839000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492012839000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492012839000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492012839000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1492012800000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1492012800000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491926440000,"errors":"1"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491926438000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491926438000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491926438000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491926438000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491926400000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491926400000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"33","transname":"WZ_7_T_CSSJ221_0_tf804225940","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491901794000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_CSSJ1_3_tf482178519","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491901721000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491889969000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"33","transname":"DS_3_T_CSSJ221_1_tf483327211","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491881223000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491873270000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491840039000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491840039000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491840000000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491803760000,"errors":"0"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491753638000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491753637000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491753636000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491753636000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491753601000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"1","transname":"CZ_1__XJGZB_1_tf1730025926","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491730055000,"errors":"1"},{"sourceResourceName":"192.168.15.108MySqltest_吴中","linesWritten":"1","transname":"WZ_7_T_XJGZB_5_tf4263844","targetResourceName":"192.168.15.108oracle_apps_地税","startdate":1491729922000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491667236000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491667236000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491667236000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491667200000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491580835000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491580835000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491580835000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491580800000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491553318000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491553307000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491553305000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491551529000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491551496000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491550183000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491550151000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491549741000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491549709000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491549708000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491549624000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491549590000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491544005000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491536758000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"1","transname":"DS_3_T_MZ_0_tf609372342","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1491535298000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534914000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534875000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"11","transname":"DS_3_T_CSB_0_tf273111452","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534836000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534834000,"errors":"0"},{"sourceResourceName":"192.168.15.108Psql_地税","linesWritten":"19","transname":"DS_7_T_SGSBZ_1_tf1439251354","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534799000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"23","transname":"DS_3_T_FB0228_1_tf230755843","targetResourceName":"192.168.1.104Oracle_hp_财政","startdate":1491534787000,"errors":"0"}]
    loadTransLog(contentList);
    // $.get(url, function(result) {
	// //	console.log("result"+$.toJSON(result));
	// //	result = {"total":47,"contentList":[{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490753286000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490753098000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716828000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490716826000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716826000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716801000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716801000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490716747000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716746000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716745000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716720000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490716719000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490630427000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490630426000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490630425000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490630403000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490630403000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490609599000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490607470000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490585113000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490583104000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"6","transname":"DS_3_CZ_1_S_09_1_tf851826881","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490581898000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490581729000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490581551000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"6","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490581466000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490581167000,"errors":"2"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"10","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490580382000,"errors":"0"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_S_3_T_MZ_0_tf1243287223","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490579582000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490577943000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490577830000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490544024000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"5","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490544024000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"5","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490544001000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490457623000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"5","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490457600000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490371222000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490371200000,"errors":"1"},{"sourceResourceName":"192.168.1.104Oracle_hp_财政","linesWritten":"0","transname":"CZ_1_S_09_1_tf175179139","targetResourceName":"192.168.15.108MySqltest_吴中","startdate":1490350190000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"0","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490349894000,"errors":"1"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"5","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490349853000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_apps_地税","linesWritten":"5","transname":"DS_3_T_MZ_0_tf1376357787","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490348971000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490284825000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490284799000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490198420000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490198399000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490170220000,"errors":"0"},{"sourceResourceName":"192.168.15.108oracle_hp_吴中","linesWritten":"180","transname":"GS_09_UG_0_tf1326461466","targetResourceName":"192.168.15.108oracle_hp_吴中","startdate":1490170174000,"errors":"0"}],"pageNum":10};
	// 	loadTransLog(result.contentList);
	// });
}

function loadTransLog(list) {
	var htmlStr = "";
	list.forEach(function(item) {		
		htmlStr += "<tr style='height:30px;'><td style='text-align:left;width:15%'>"
				+ item.transname + "</td>";
		htmlStr += "<td style='text-align:left;width:30%'>"
				+ item.sourceResourceName + "</td>";
		htmlStr += "<td style='text-align:left;width:20%'>"
				+ item.targetResourceName + "</td>";
		htmlStr += "<td style='text-align:center;width:5%'>"
				+ item.linesWritten + "</td>";
		htmlStr += "<td style='text-align:center;width:10%'>"
				+ new Date(item.startdate).Format('yyyy-MM-dd hh:mm:ss') + "</td>";
		if (item.errors == '0') {
			htmlStr += "<td style='text-align:center;width:5%'>"
					+ "成功</td></tr>";
		} else {
			htmlStr += "<td style='text-align:center;width:5%'>"
					+ "失败</td></tr>";
		}
	});

	$("#resourceForeplacedview").html("");
	$("#resourceForeplacedview").html(htmlStr);
}


/**
 * 工具
 * 1. 时间格式化
 */
Date.prototype.Format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

