define(
	["Widget"],  //depends on
	function(){
		ChartWidget = Widget.extend({
            template : "chart",
            type     : "line", //line, column, bar, pie, area, spline, areaspline, scatter
			config   : function(){
				return {
					chart: {
						type: this.type
					},
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
            //Incremental data
            increment : function(serie) {
                var accum = 0;
				for(var d in data[this.subcategory]) {
					var row = data[this.subcategory][d];
                    accum += row[serie];
					row[serie] = accum;
				}
            },
			getSerie : function(serie) {
				var seriearr = [];
				for(var d in data[this.subcategory]) {
					var row = data[this.subcategory][d];
					seriearr.push(row[serie]);
				}
				return seriearr;
			},
			getTimeSerie : function(serie) {
				var seriearr = [];
				for(var d in data[this.subcategory]) {
					var row = data[this.subcategory][d];
                    if(row.date !== undefined) {
                        row.date = new Date(row.date).valueOf();
                    }
					seriearr.push([row.date,row[serie]]);
				}
				return seriearr;
			},
			//---------------------------------
			render : function(data, callback) {
				var config = this.config();
				var subcategory =  this.subcategory;
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
				callback({
                    content : {
                        chart : ""
                    },
                    directives : {
                        chart : {
                            html : function() {
                                 return this.chart;
                            }
                        }
                    },
                }, function($html) {
                    var elems = $("#"+subcategory).length;
                    $.delay(100,function(){
                        $html.attr("id",subcategory+(elems > 0 ? elems : "")).highcharts(config);
                    });
				});
			}
		});
	}
);
