define(
	["Widget"],  //depends on
	function(){
		UI.BrowserWidget = UI.Widget.extend({
            template : "browser",
            category : "general",
            service  : "browser",
			widget   : function(transform) {
				var type = this.type;
                var max = this.max;
				this.query(function(data) {
                    var directives = {
                        title : {
                            text : function() {
                                return this.title;
                            }
                        },
                        top : {
                              topnick: {
                                html: function() { 
                                    return this.nick.colorfy(); 
                                },
                                href: function() { 
                                    return "/?p="+this.id; 
                                }
                              },
                              topnum: {
                                  text: function() { 
                                    return this.time; 
                                  }
                              }
                        }
                    };
                    transform(data, directives);
				});
			}
		});
	}
);
