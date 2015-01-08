define(
	["Widget"],  //depends on
	function(){
		ChartWidget = Widget.extend({
            template : "chart",
            type     : "line", //line, column, bar, pie, area, spline, areaspline, scatter
			prefix   : "chart_",
			//----- PRIVATE -------
			chart	 : null, //to place highchart object
			config   : function(){
				return {
					chart: {
						type: this.type
					},
					yAxis: {
						min: 0
					},
    				title : ""
				};
			},
			data : {}, //private
            //-------------- Custom -----------
			getSerie : function(serie, field) {
				if(field === undefined) field = serie;
				var seriearr = [];
				for(var d in this.data[serie]) {
					var row = this.data[serie][d];
					seriearr.push(row[field]);
				}
				return seriearr;
			},
            //Totalize data
            sumSerie  : function(sumarr, field) {
				if(field === undefined) field = serie;
				var seriearr = null;
				for(var s in sumarr) {
					var serie = sumarr[s];
					if(seriearr === null) {
						seriearr = this.getSerie(serie, field);
					} else {
						seriearr = arraysSum(seriearr,this.getSerie(serie, field));
					}
				}
				return seriearr;
            },
            //Average data
            avgSerie  : function(avgarr, field) {
				var sumarr = this.sumSerie(avgarr, field);
				for(var s in sumarr) {
					sumarr[s] = sumarr[s] / avgarr.length;
				}
				return sumarr;
            },
            //Incremental data
            incSerie : function(seriearr) {
                var accum = 0;
				for(var d in seriearr) {
                    accum += seriearr[d];
					seriearr[d] = accum;
				}
				return seriearr;
            },
			//------------ Overrrides ---------------------
			render : function(data, callback) {
				var widget = this;
				var config = this.config();
                this.data = data;
                for(var s in config.series) {
                    if($.isFunction(config.series[s].data)) {
                        config.series[s].data = config.series[s].data();
                    }
                }
                if($.isFunction(config.xAxis.categories)) {
                    config.xAxis.categories = config.xAxis.categories();
                }
                //get series and translate data
				callback(null, function($html) {
					$html.highcharts(config);
					widget.chart = $html.highcharts();
				});
			}
		});
	}
);
