define(
	["ChartWidget"],  //depends on
	function(){
		UI.ChartAreaWidget = UI.ChartWidget.extend({
            days     : 30,
            config   : {
                chart: {
                    type: 'area'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: ''
                    },
                    categories: minusDays(this.days)
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    min: 0
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            radius: 2,
                            lineColor: '#666666'
                        }
                    }
                },
                legend: {
                    enable: false
                }
            },
			widget   : function(transform) {
				var type = this.type;
				this.query(function(data) {
                     
				});
			}
		});
	}
);
