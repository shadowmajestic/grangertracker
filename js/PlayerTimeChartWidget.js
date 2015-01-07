define(
	["ChartHistoryWidget"],  //depends on
	function(){
		PlayerTimeChartWidget = ChartHistoryWidget.extend({
			category : "player",
			subcategory : "time",
            type : "areaspline",
			config : function() {
				var Widget = this;
				return $.extend(this.sup(),{
					title: {
						text: 'Played Time'
					},
					yAxis: {
						title: {
							text: 'Minutes'
						},
						min: 0
					},
                    tooltip: {
                        headerFormat: '{series.name}:<br>',
                        pointFormat: '{point.x: %b %e}: {point.y} min.'
                    },
					series : [
					{
						name: 'Played Time',
						data: function(){
							return Widget.getTimeSerie(Widget.subcategory);
						},
						color: '#D75151'
					}/*
					{
						name: 'as Alien',
						data: 'score_aliens',
						color: '#D75151'
					}, {
						name: 'as Human',
						data: 'score_humans',
						color: '#517CD7'
					},{
						name: 'Total',
						data: this.sum,
						color: '#47C343'
					},{
						name: 'Total',
						data: this.average,
						color: '#47C343'
				}*/]
				});
			},
			setup : function() {
				this.params.id = this.initargs[0];
				this.sup();
			}
		});
	}
);
