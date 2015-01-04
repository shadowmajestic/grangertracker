define(
	["Widget"],  //depends on
	function(){
		UI.ChartWidget = UI.Widget.extend({
            template : "chart",
			config   : function(){
				return {
					title : ""
				};
			},
			data : {}, //private
            //-------------- Custom -----------
            //Totalize data
            sum      : function() {

            },
            //Average data
            average  : function() {

            },
            plot     : function() {

            },
			getSerie : function(serie) {
				var seriearr = [];
				for(var d in data[this.type]) {
					var datum = data[this.type][d];
					seriearr.push(datum[serie]);
				}
				return seriearr;
			},
			//---------------------------------
			widget   : function(transform) {
				var config = this.config();
				var type =  this.type;
				this.query(function(data) {
					this.data = data;
					for(var s in config.series) {
						if($.isFunction(config.series[s].data)) {
							config.series[s].data = config.series[s].data();
						}
					}
					if($.isFunction(config.xAxis.categories)) {
						config.xAxis.categories = config.xAxis.categories();
					}
					console.log(config);
                    //get series and translate data
                    var chartdata = {
                        chart : ""
                    };
                    var directives = {
                        chart : {
                            html : function() {
                                 return this.chart;
                            }
                        }
                    };
					console.log(chartdata.chart);
                    transform(chartdata,directives,function($html){
						$html.attr("id",type).highcharts(config);
					});
				});
			}
		});
	}
);
