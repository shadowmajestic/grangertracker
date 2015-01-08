define(
	["ChartHistoryWidget"],  //depends on
	function(){
		PlayerScoreChartWidget = ChartHistoryWidget.extend({
			category 	: "player",
			subcategory : ["score_aliens","score_humans"],
            type 		: "areaspline",
			prefix   	: "player_score_chart_",
			config : function() {
				var Widget = this;
				return $.extend(true, this.sup(),{
					title: {
						text: 'Player Score'
					},
    				yAxis: {
						title: {
							text: 'Score'
						}
					},
					series : [
					{
						name: 'Total Score (++)',
						data: function(){
                            return Widget.incTimeSerie(Widget.sumTimeSerie(["score_aliens","score_humans"],"score"));
						},
						color: '#47C343',
						visible: false
					},
					{
						name: 'as Alien (++)',
						data: function(){
							return Widget.incTimeSerie(Widget.getTimeSerie("score_aliens","score"));
						},
						color: '#D75151',
						visible: false
					}, 
                    {
						name: 'as Human (++)',
						data: function(){
							return Widget.incTimeSerie(Widget.getTimeSerie("score_humans","score"));
						},
						color: '#517CD7',
						visible: false
					},
					{
						name: 'Total Score',
						data: function(){
                            return Widget.sumTimeSerie(["score_aliens","score_humans"],"score");
						},
						color: '#47C343',
						visible: true 
					},
					{
						name: 'as Alien',
						data: function(){
							return Widget.getTimeSerie("score_aliens","score");
						},
						color: '#D75151',
						visible: true
					}, 
                    {
						name: 'as Human',
						data: function(){
							return Widget.getTimeSerie("score_humans","score");
						},
						color: '#517CD7',
						visible: true
					}
				    ]
				});
			},
			setup : function() {
				this.params.id = this.initargs[0];
				this.sup();
			}
		});
	}
);
