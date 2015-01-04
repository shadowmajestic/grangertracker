define(
	["ChartWidget"],  //depends on
	function(){
		UI.ChartAreaWidget = UI.ChartWidget.extend({
            days     : 60,
            config : function(){
				return $.extend(this.sup(),{
					chart: {
						type: 'area'
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
					}
				});
            },
			widget   : function(transform) {
				this.params[this.type] = this.days+"d";
				this.sup(transform);
			}
		});
	}
);
