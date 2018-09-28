window.onload=function(){
	 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
	    myChart.setOption({
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius: '55%',
		            data:[
		                {value:120, name:'ps'},
		                {value:250, name:'html+css'},
		                {value:370, name:'js'},
		                {value:260, name:'jQuery'},
		            ]
		        }
		    ]
		})

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
