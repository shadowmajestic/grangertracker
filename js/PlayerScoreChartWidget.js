define(
	["ChartHistoryWidget"],  //depends on
	function(){
		PlayerScoreChartWidget = ChartHistoryWidget.extend({
			category : "player",
			subcategory : "score",
            type : "areaspline",
			config : function() {
				var Widget = this;
				return $.extend(this.sup(),{
					title: {
						text: 'Player Score'
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
                            Widget.increment("score");
							return Widget.getTimeSerie("score");
						},
						color: '#47C343'
					},
					{
						name: 'as Alien',
						data: 'score_aliens',
						color: '#D75151'
					}, 
                    {
						name: 'as Human',
						data: 'score_humans',
						color: '#517CD7'
					},
                    {
						name: 'Total',
						data: this.sum,
						color: '#47C343'
					},
                    {
						name: 'Total',
						data: this.average,
						color: '#47C343'
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
