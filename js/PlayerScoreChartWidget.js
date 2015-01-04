define(
	["ChartAreaWidget"],  //depends on
	function(){
		UI.PlayerScoreChartWidget = UI.ChartAreaWidget.extend({
			category : "player",
			type	 : "score",
			config : function() {
				var Widget = this;
				return $.extend(this.sup(),{
					title: {
						text: 'Player Top Scores'
					},
					xAxis: {
						title: {
							text: 'Date'
						},
						//categories: minusDays(this.days)
						categories: function() {
							return Widget.getSerie("date");
						}
					},
					yAxis: {
						title: {
							text: 'Score'
						},
						min: 0
					},
					series : [
					{
						name: 'Total Score',
						data: function(){
							return Widget.getSerie("score");
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
			widget   : function(transform) {
				this.params.id = this.initargs[0];
				this.sup(transform);
			}
		});
	}
);
