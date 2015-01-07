require(
	["PlayerScoreChartWidget","PlayerTimeChartWidget"], //require
	function(){
		var ScoreChart = new PlayerScoreChartWidget(GET["p"]);
		var TimeChart = new PlayerTimeChartWidget(GET["p"]);
        $("#main").appendWidget(ScoreChart).appendWidget(TimeChart);
        //$("body").render(); <--specific
        $.ui.render(); //<--global
	}
);
