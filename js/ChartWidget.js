define(
	["Widget"],  //depends on
	function(){
		UI.ChartWidget = UI.Widget.extend({
            template : "chart",
            category : "",
            series   : {},
            //-------------- Custom -----------
            title    : "",
            //Totalize data
            sum      : function() {

            },
            //Average data
            average  : function() {

            },
            plot     : function() {

            },
			widget   : function(transform) {
				var type = this.type;
                var config = {};
				this.query(function(data) {
                    //get series and translate data
                    var chartdata = {
                        chart : {
                            html : $("<div>").highcharts(config).html()
                        }
                    }
                    var directives = {
                        chart : {
                            html : function() {
                                 this.html;
                            }
                        }
                    };
                    transform({},directives);
				});
			}
		});
	}
);
