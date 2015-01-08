define(
	["ChartWidget"],  //depends on
	function(){
		ChartHistoryWidget = ChartWidget.extend({
            days     : 90,
			prefix   : "hist_chart_",
			//Get the serie with its date
			getTimeSerie : function(serie, field) {
				if(field === undefined) field = serie;
				var seriearr = [];
				for(var d in this.data[serie]) {
					var row = this.data[serie][d];
                    if(row.date !== undefined) {
                        row.date = new Date(row.date).valueOf();
                    }
					seriearr.push([row.date,row[field]]);
				}
				return seriearr;
			},
			//Sum a time serie
			sumTimeSerie : function(sumarr, field) {
				var seriearr = null;
				for(var s in sumarr) {
					var serie = sumarr[s];
					if(seriearr === null) {
						seriearr = this.getTimeSerie(serie, field);
					} else {
						var currarr = this.getTimeSerie(serie, field);
						for(var c in currarr) {
							for(var i in seriearr) {
								if(currarr[c][0] === seriearr[i][0]) {
									seriearr[i][1] += currarr[c][1];
									break;
								} else if(currarr[c][0] < seriearr[i][0]) { //we crossed the line...
									seriearr.splice(i, 0, currarr[c]);
									break;
								}
							}
						}
					}
				}
				return seriearr;
			},
			//Average a time serie
			avgTimeSerie : function(avgarr, field) {
				var sumarr = this.sumTimeSerie(avgarr, field);
				for(var s in sumarr) {
					sumarr[s][1] = sumarr[s][1] / avgarr.length;
				}
				return sumarr;
			},
			//Increment a Time serie
			incTimeSerie : function(seriearr) {
                var accum = 0;
				for(var d in seriearr) {
                    accum += seriearr[d][1];
					seriearr[d][1] = accum;
				}
				return seriearr;
			},
            config : function(){
                var cfg = {
					chart : {
						zoomType : "x",
						panning: true,
						panKey: 'shift'
					},
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
						min: pastDateUTC(this.days).valueOf(),
						max: getUTC().valueOf()
					},
                    tooltip: {
                        headerFormat: '{series.name}:<br>',
                        pointFormat: '{point.x: %b %e}: {point.y}'
                    }
                };
                if(this.type === "area") {
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
					};
				} else if(this.type === "bar") {
					cfg.plotOptions = {
						bar : {
							borderColor: '#333',
							shadow: true
						}
                    };
				} else if(this.type === "column") {
					cfg.plotOptions = {
						column : {
							borderColor: '#333',
							shadow: true
						}
                    };
                } else {
					cfg.plotOptions = {
                    };
                }
				return $.extend(true, this.sup(),cfg);
            },
			setup : function() {
				if($.isArray(this.subcategory)) {
					for(var s in this.subcategory) {
						this.params[this.subcategory[s]] = this.days+"d";
					}
				} else {
					this.params[this.subcategory] = this.days+"d";
				}
				this.sup();
			}
		});
	}
);
