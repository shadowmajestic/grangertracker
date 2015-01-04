define(
	["Widget"],  //depends on
	function(){
		UI.BrowserWidget = UI.Widget.extend({
            template : "browser",
            category : "general",
			widget   : function(transform) {
            	this.params["browser"] = "";
				this.query(function(data) {
                    var directives = {
                        browser : {
                              server: {
								'class' : function() {
									return this.ingame > 0 ? 'with' : '';
								}
							  },
							  type : {
                                text: function() { 
                                    return this.type; 
                                },
                                href: function() { 
                                    return "";
                                }
                              },
							  game : {
                                text: function() { 
                                    return this.game || "base"; 
                                },
                                href: function() { 
                                    return "";
                                }
                              },
							  country : {
                                text: function() { 
                                    return this.country; 
                                }
                              },
                              flag: {
                                src : function() { 
                                    return "img/countries/"+this.country.toLowerCase()+".png"; 
                                },
								alt : function() { 
                                    return this.country; 
                                },
								title : function() { 
                                    return this.country; 
                                }
                              },
							  ip : {
								title : function() { 
                                    return this.ip; 
                                },
								text : function() { return ""; }
							  },
							  name : {
								  'data-id' : function() {
									  return this.id;
								  },
								  href : function() {
									  return "?s="+this.id+"&"+this.name.decolorfy();
								  },
								  html: function(target) {
									  return (this.name || "^8Unnamed").colorfy();
								  }
							  },
							  players : {
								  title : function() {
									  return "spectators: "+this.spec;
								  }
							  },
							  current : {
								  href : function() {
									  return this.ingame > 0 ? "#" : null;
								  },
								  text : function() {
									  return this.ingame+" / "+this.max_players;
								  }
							  },
							  bots : {
								  text : function(target) {
									  return this.bots > 0 ? "("+this.bots+")" : "";
								  },
								  title : function() {
									  return this.bots > 0 ? "Bots" : "";
								  }
							  },
							  map : {
								  href : function() {
									  return "#";
								  },
								  text : function() {
									  return "atcs";
								  }
							  },
							  rank : {
								  text: function() {
									  return "#"+this.rank;
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
