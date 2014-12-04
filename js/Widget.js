define(function(){
	UI.Widget = Class.extend({
		type : "",
		init: function(type) {
			this.type = type;
		},
		prependTo : function (selector) {
			this.query(function(res) {
				$(selector).prepend(res);
			});
		},
		appendTo : function (selector) {
			this.query(function(res) {
				$(selector).append(res);
			});
		}
	});
});