define(function(){
	UI.Widget = Class.extend({
        baseurl  : "/php/proxy.php",
		type     : "",
        template : "",
        request  : "",
        category : "",
        //Initialize the Widget with type (used to recycle widget)
		init: function(type) {
			this.type = type;
		},
        //Return the URL to be called [PRIVATE]
        getURL : function(){
            return this.baseurl + "?cat=" + this.category + "&" + this.service;
        },
        //Retrieve data from server
        query : function(callback) {
            $.getJSON(this.getURL()).done(function(data) {
                callback(data);
            });
        }, 
        //Apply data and directives into the template and insert it [PRIVATE]
        transform : function (selector, action, data, directives) {
            $.get("/htm/"+this.template+".htm").done(function(html){
                $(selector)[action]($(html).render(data, directives));
            });
        },
        //Common code for "insert" methods [PRIVATE]
        insert : function (selector, type) {
            var Widget = this;
			this.widget(function(data, directives) {
				Widget.transform(selector, type, data, directives);
			});
        },
        //JQuery methods to insert HTML into the DOM
		htmlTo : function (selector) {
            this.insert(selector, "html");
		},
		prependTo : function (selector) {
            this.insert(selector, "prepend");
		},
		appendTo : function (selector) {
            this.insert(selector, "append");
		}
	});
});
