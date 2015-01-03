define(
	["Widget"],  //depends on
	function(){
		UI.EmptyWidget = UI.Widget.extend({
            template : "",
            category : "",
			widget   : function(transform) {
				var type = this.type;
				this.query(function(data) {
                    var directives = {
                    };
                    transform(data, directives);
				});
			}
		});
	}
);
