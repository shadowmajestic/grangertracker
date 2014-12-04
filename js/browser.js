$(function() {
    function reload() {
        $("#browser tbody").html("");
        $.getJSON("/query.php",{player : 'top_score'}).done(function(res){
            var html = "";
            for(var p in res.data) {
                var player = res.data[p];
                html += "<tr class='nick'>";
                html += "<td>"+((p*1)+1)+".</td>";
                html += "<td><div class='cut' title='"+player.player_nick+"'><a href='?p="+player.player_main_id+"&name="+player.player_nick+"'>"+player.player_nick.colorfy()+"</a></div></td>";
                html += "<td>"+player.player_score+"</td>";
                html += "</tr>";
            } 
            $("#tpm tbody").append(html);
            $("#tpm .count").text(res.count);
        }).fail(function(){});
        $.getJSON("/query.php",{browser : 'list'}).done(function(res){
            var html = "";
            var delayer = 0;
            for(var s in res.data) {
                var server = res.data[s];
                var cur_players = server.v_ingame*1 + server.v_spec*1;
                html = "<tr class='server"+(cur_players > 0 ? ' with' : '')+"'>";
                    html += "<td><a href='#'>"+server.server_type+"</a></td>";
                    html += "<td><a href='#'>"+(server.server_game || "base")+"</a></td>";
                    html += "<td><b style='display:none'>"+server.server_country+"</b><img src='img/countries/"+server.server_country.toLowerCase()+".png' width=16 height=11 alt='"+server.server_country+"' title='"+server.server_country+"'></td>";
                    html += "<td title='"+server.server_ip+"'><a data-id='"+server.server_id+"' href='?s="+server.server_id+"&name="+server.server_name+"'>"+(server.server_name || "<span class='unnamed'>Unnamed</span>").colorfy()+"</a></td>";
                    html += "<td title='spectators: "+server.v_spec+"'><a "+(cur_players ? "href='#'" : "")+">"+cur_players+" / "+server.server_max_players+(server.server_bots*1 ? "<span class='bots' title='Bots'> ("+server.server_bots+") </span>" : "")+"</a></td>";
                    html += "<td><a href='#'>"+(server.map_name || "atcs")+"</a></td>";
                    html += "<td>#"+server.server_rank+"</td>";
                html += "</tr>";
                var $html = $(html);
                $("#browser tbody").append($html);
                $html.fadeIn(1000 + delayer);
                delayer += 200;
            }
			//TODO: the data may contain 31 days, so lets fix that
			var view = 15;
			var pastDays = minusDays(view);
			var pastDaysFull = minusDays(view, true);
			var t11 = [];
			var gpp = [];
			var unv = [];
			for(var d in pastDaysFull) {
				var fd = pastDaysFull[d];
				for(var n in res.net) {
					var stat = res.net[n];
					if(stat["player_date"] === fd) {
						switch(stat["server_type"]) {
							case "1.1": t11.push(stat["players"]*1); break;
							case "GPP": gpp.push(stat["players"]*1); break;
							case "Unv": unv.push(stat["players"]*1); break;
						}
					}
				}
			}
			t11 = t11.slice(view*-1);
			gpp = gpp.slice(view*-1);
			unv = unv.slice(view*-1);
			$('#allply').highcharts({
			title: {
				text: ''
			},
			xAxis: {
				categories: pastDays 
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
				}],
				minorTickInterval: 200,
				tickInterval: 200
			},
			plotOptions: {
				series: {
					marker: {
						enabled: false
					}
				}
			},		
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'middle',
				borderWidth: 0
			},		
			series: [{
				name: '1.1',
				data: t11
			}, {
				name: 'GPP',
				data: gpp
			}, {
				name: 'Unv',
				data: unv
			}]
			});
        }).fail(function(){});
    }
    $("body").load("/htm/browser.htm", function(){
        reload();
        $("#browser").sortTable();
    });
    setInterval(function(){
      reload();
    },60000);
});
