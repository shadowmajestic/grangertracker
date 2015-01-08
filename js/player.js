require(
	["PlayerScoreChartWidget","PlayerTimeChartWidget"], //require
	function(){
		var ScoreChart = new PlayerScoreChartWidget(GET["p"]);
		var TimeChart = new PlayerTimeChartWidget(GET["p"]);
        $("#main").appendWidget(ScoreChart).appendWidget(TimeChart);
        //$("#main").doWidgets(); <-- selective same or any wrapper
        $.ui.doWidgets(); //<--global
	}
);
