define(
	["ChartHistoryWidget"],  //depends on
	function(){
		PlayerTimeChartWidget = ChartHistoryWidget.extend({
			category 	: "player",
			subcategory : ["time_humans","time_aliens"],
            type 		: "column",
			prefix   	: "player_time_chart_",
			config : function() {
				var Widget = this;
				return $.extend(true, this.sup(),{
					title: {
						text: 'Played Time'
					},
					yAxis: {
						title: {
							text: 'Minutes'
						}
					},
                    tooltip: {
                        headerFormat: '{series.name}:<br>',
                        pointFormat: '{point.x: %b %e}: {point.y} min.'
                    },
					series : [
					{
						name: 'Total Played Time',
						data: function(){
							return Widget.sumTimeSerie(["time_aliens","time_humans"],"time");
						},
						color: '#47C343'
					},
					{
						name: 'as Alien',
						data: function(){
							return Widget.getTimeSerie("time_aliens","time");
						},
						color: '#D75151',
						visible: false
					}, 
                    {
						name: 'as Human',
						data: function(){
							return Widget.getTimeSerie("time_humans","time");
						},
						color: '#517CD7',
						visible: false
					},{
						name: 'Average Played Time',
						data: function(){
							return Widget.avgTimeSerie(["time_aliens","time_humans"],"time");
						},
						color: '#ED9419',
						visible: false
					}]
				});
			},
			setup : function() {
				this.params.id = this.initargs[0];
				this.sup();
			}
		});
	}
);
