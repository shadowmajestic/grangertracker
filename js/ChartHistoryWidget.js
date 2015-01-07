define(
	["ChartWidget"],  //depends on
	function(){
		ChartHistoryWidget = ChartWidget.extend({
            days     : 60,
            config : function(){
				var Widget = this;
                var cfg = {
					legend: {
						enable: false
					},
					xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: { 
                            day: '%b %e'
                        },
						title: {
							text: 'Date'
						},
						//categories: minusDays(this.days)
						/*categories: function() {
							return Widget.getSerie("date");
						}*/
					},
                    tooltip: {
                        headerFormat: '{series.name}:<br>',
                        pointFormat: '{point.x: %b %e}: {point.y}'
                    }
                }
                if(this.type == "area") {
					cfg.plotOptions = {
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
					}
                } else {
					cfg.plotOptions = {
                    }
                }
				return $.extend(this.sup(),cfg);
            },
			setup : function() {
				this.params[this.subcategory] = this.days+"d";
				this.sup();
			}
		});
	}
);
