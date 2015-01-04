define(
	["Widget"],  //depends on
	function(){
		UI.TopWidget = UI.Widget.extend({
            template : "top",
            category : "general",
            //---
			max      : 10, //0 = Unlimited 
			widget : function(transform) {
				var type = this.initargs[0];
                var max = this.max;
                this.params["top_"+type] = max;
				this.query(function(obj) {
                    var data = { 
                        title: 'Top '+max+' '+type,
                        top : obj["top_"+type]
                    };
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
                                    return "/?p="+this.id+"&"+this.nick.decolorfy();
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
