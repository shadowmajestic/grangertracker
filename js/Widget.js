define(function(){
	UI.Widget = Class.extend({
        baseurl  : "/php/proxy.php",
		type     : "",
        template : "",
        request  : "",
		category : "",
		params	 : {},
        //Initialize the Widget with type (used to recycle widget)
		init: function(type) {
			if(undefined === type) type = "";
			this.type = type;
		},
        //Retrieve data from server
        query : function(callback) {
			this.params.cat = this.category;
            $.getJSON(this.baseurl, this.params).done(function(data) {
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
