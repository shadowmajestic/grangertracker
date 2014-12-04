define(
	["Widget"],  //depends on
	function(){
		UI.TopWidget = UI.Widget.extend({
			max : 10, //0 = Unlimited 
			query : function(callback) {
				var type = this.type;
				$.get("/php/proxy.php?top_"+this.type+"="+this.max).done(function(data) {
					data = $.parseJSON(data);
					$.get("/htm/top.htm").done(function(html){
						var directives = {};
						directives["top_"+type] = {
						  topnick: {
							text: function() { 
								return this.nick.colorfy(); 
							},
							href: function() { 
								return "/?p="+this.id; 
							}
						  },
						  topnum: {
							  text: function() { return this.time; }
						  }
						};
						callback($(html).render(data, directives));
					});
				});
			}
		});
	}
);