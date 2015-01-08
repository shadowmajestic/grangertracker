define(
	["Widget"],  //depends on
	function(){
		TopWidget = Widget.extend({
            template : "top",
            category : "general",
            //---
			max      : 10, //0 = Unlimited 
            setup : function() {
				var type = this.initargs[0];
                this.params["top_"+type] = this.max;
            },
			render : function(data, callback) {
				var type = this.initargs[0];
                var max = this.max;
                callback({
                    models: { 
                        title: 'Top '+max+' '+type,
                        top : data["top_"+type]
                    },
                    directives : {
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
                    }
                });
			}
		});
	}
);
