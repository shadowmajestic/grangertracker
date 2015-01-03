require(
	["ChartAreaWidget"], //require
	function(){
		var ScoreChart = new UI.ChartAreaWidget("score");
		ScoreChart.days = 30;
        ScoreChart.title = 'Player Score';
        ScoreChart.data_title = 'Score';
        ScoreChart.series = {
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
                data: ScoreChart.sum,
                color: '#47C343'
            },{
                name: 'Total',
                data: ScoreChart.average,
                color: '#47C343'
            }]
        };
		ScoreChart.htmlTo("#main");
	}
);

/*
$(function(){
	$("body").load("/htm/player.htm", function(){
		$.getJSON("/proxy.php",{player : 'info', id: GET["p"]}).done(function(res){
			$("#nick").html(res.inf.player_nick.colorfy());
			$("#rank").html("#"+(res.inf.player_rank || " --- "));
			$("#lastseen").html("<b>Updated:</b> "+res.inf.player_last_upd.split(" ")[0]);
			var a = res["atm"].reduce(function(a, b) { return a + b });
			var h = res["htm"].reduce(function(a, b) { return a + b });
			var tot = a+h;
			var ap = Math.round(a/tot*100);
			var hp = 100 - ap;
			$("#team").html("<span class='c1'>"+ ap + "%</span> / <span class='c4'>" + hp + "%</span>");
			var games = {};
			var html = "<ul>";
			for(var r in res["serv"]) {
				var serv = res["serv"][r];
				html += "<li><a href='?s="+serv.server_id+"&name="+serv.server_name+"'>"+(serv.server_name.colorfy() || "<span class='unnamed'>Unnamed</span>")+"</a>";
				games[serv.server_type] = "";
			}
			html += "</ul>";
			$("#servers").append(html);
			html = "<ul>";
			for(var g in games) {
				html += "<li>"+g+"</li>";
			}
			html += "</ul>";
			$("#games").append(html);
			$("#score_chart").highcharts({
			chart: {
				type: 'area'
			},		
			title: {
				text: 'Player Score'
			},
			xAxis: {
				title: {
					text: 'Days'
				},
				categories: minusDays(30)
			},
			yAxis: {
				title: {
					text: 'Score'
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
			},		
			series: [{
				name: 'as Alien',
				data: res["asc"],
				color: '#D75151'
			}, {
				name: 'as Human',
				data: res["hsc"], 
				color: '#517CD7'
			}]
			});
                        var tottime = [];
			for(var i in res["atm"]) {
				tottime[i] = (res["atm"][i]*1) + (res["htm"][i]*1);
			}

			$("#time_chart").highcharts({
			title: {
				text: 'Minutes Played'
			},
			xAxis: {
				title: {
					text: 'Days'
				},
				categories: minusDays(30)
			},
			yAxis: {
				title: {
					text: 'Minutes'
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
			},		
			series: [{
				name: 'as Alien',
				data: res["atm"],
				color: '#D75151'
			}, {
				name: 'as Human',
				data: res["htm"], 
				color: '#517CD7'
			},{
                                name: 'Total',
                                data: tottime,
                                color: '#47C343'
                        }]
			});
		});
	});
});*/
