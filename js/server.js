$(function(){
	$("body").load("/htm/server.htm", function(){
		$.getJSON("/query.php",{server: 'info', id: GET["s"]}).done(function(res){
			var serv = res.data;
			$("#name").html(serv.server_name.colorfy());
			$("#rank").html("#"+serv.server_rank);
			$("#status").addClass("o"+serv.server_online).html(serv.server_online ? "ONLINE" : "OFFLINE");
			$("#address").html(serv.server_ip.replace(/\./g,"<b>.</b><u>_</u>")+" <i>port</i> "+serv.server_port);
			$("#country").html("<b style='display:none'>"+serv.server_country+"</b><img src='img/countries/"+serv.server_country.toLowerCase()+".png' width=16 height=11 alt='"+serv.server_country+"' title='"+serv.server_country+"'>");
			var html = "";
            for(var p in res.top) {
                var player = res.top[p];
                html += "<tr class='nick'>";
                html += "<td>"+((p*1)+1)+".</td>";
                html += "<td><div class='cut' title='"+player.player_nick+"'><a href='?p="+player.player_main_id+"&name="+player.player_nick+"'>"+player.player_nick.colorfy()+"</a></div></td>";
                html += "<td>"+player.player_score+"</td>";
                html += "</tr>";
            } 
            $("#tpm tbody").append(html);
			html = "";
			for(var r in res.serv) {
				var serv = res.serv[r];
				html += "<li><a href='?s="+serv.server_id+"&name="+serv.server_name+"'>"+(serv.server_name.colorfy() || "<span class='unnamed'>Unnamed</span>")+"</a>";
				games[serv.server_type] = "";
			}
			html += "</ul>";
			$("#top_players").append(html);
			html = "<ul>";
			var players = [];
			for(var p in res.hist) {
				players.push(res.hist[p]);
			}
			players = players.slice(0,-1).slice(-15);
			$("#history_players").highcharts({
			title: {
				text: 'Players'
			},
			xAxis: {
				title: {
					text: 'Day'
				},
				categories: minusDays(15)
			},
			yAxis: {
				title: {
					text: 'Players'
				},
                min: 0,
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]		
			},
			legend: {
				enabled: false
			},	
			series: [{
				name: 'players',
				data: players,
				color: '#EFD137'
			}]
			});
		});
		$.getJSON(BACKEND + "/query.php",{server: 'live', id: GET["s"]}).done(function(res){
			for(var p in res.players) {
				var player = res.players[p];
				switch(player.team*1) {
					case 0:
						$("#players .sp").append("<div class='in'>"+player.nick.colorfy()+"</div>");
						break;
					case 1:
						$("#players .aw .pl").append("<div class='in'>"+player.nick.colorfy()+"</div>");
						break;
					case 2:
						$("#players .hw .pl").append("<div class='in'>"+player.nick.colorfy()+"</div>");
						break;
				}
			}
		});
	});

});
