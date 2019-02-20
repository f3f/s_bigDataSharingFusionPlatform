seajs.config({
  // 别名配置
  alias: {
		artDialog:"lib/artDialog/dialog.js",
		artTemplate:"lib/artTemplate/artTemplate.js",
		ztree:"lib/ztree/ztree.js",
		ztreeCheck:"lib/ztree/ztree.excheck.js",
		ztreeEdit:"lib/ztree/ztree.exedit.js",
		jquery:"lib/jquery/1.11.3/jquery.js",
		dateP:"lib/My97DatePicker/WdatePicker.js"
  },


  // Sea.js 的基础路径
  base: './',
  // 文件编码
  charset: 'utf-8'
});
		
	seajs.use("./jqueryResource/js/index.js",function(main){
		main.init();
	})
		

