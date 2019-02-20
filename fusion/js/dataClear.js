var option1 = {
    color:['#41e3bf','#e91f63','#259dd2'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['45%', '68%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter:'{b}\n\n占比：{d}%\n\n数量： {c}',
                    textStyle:{
                        fontSize: '16',
                        color:"#ffffff"
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
            data:[
                {
                    value:35,
                    name:'非结构化清洗工具',
                    label: {
                        normal: {
                            textStyle:{
                            	color:"#ffffff"
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
                },
                {
                    value:136,
                    name:'结构化清洗工具',
                    label: {
                        normal: {
                            textStyle:{
                            	color:"#ffffff"
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
        }
    ]
};

var option2 = {
    color:['#41e3bf','#e91f63','#259dd2'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['45%', '68%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter:'{b}\n\n占比：{d}%\n\n数量： {c}',
                    textStyle:{
                        fontSize: '16',
                        color:"#ffffff"
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
            data:[
                {
                    value:138,
                    name:'正在执行任务',
                    label: {
                        normal: {
                            textStyle:{
                            	color:"#ffffff"
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
                    value:106,
                    name:'未执行任务',
                    label: {
                        normal: {
                            textStyle:{
                            	color:"#ffffff"
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
                },
                {
                    value:629,
                    name:'已完成任务',
                    label: {
                        normal: {
                            textStyle:{
                            	color:"#ffffff"
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
        }
    ]
};

var myChartPie = echarts.init(document.getElementById('tools'));
myChartPie.setOption(option1);

var myChartBar = echarts.init(document.getElementById('tasks'));
myChartBar.setOption(option2);