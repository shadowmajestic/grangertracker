define(function(){
	UI.Widget = Class.extend({
        baseurl  : "/php/proxy.php",
		initargs : "",
        template : "",
        request  : "",
		category : "",
		params	 : {},
        //Initialize the Widget with initparam (used to recycle widget)
		init: function() {
			this.initargs = arguments;
		},
        //Retrieve data from server
        query : function(callback) {
			this.params.cat = this.category;
            $.getJSON(this.baseurl, this.params).done(function(data) {
                callback(data);
            });
        }, 
        //Apply data and directives into the template and insert it [PRIVATE]
        transform : function (selector, action, data, directives, callback) {
            $.get("/htm/"+this.template+".htm").done(function(html){
				var $html = $(html);
				//When there is no child in template (single element), we
				//insert the element into the selector and then apply render 
				if($html.children().length === 0) {
					$(selector)[action]($html).render(data, directives);
				} else {
					$html.render(data, directives);
					$(selector)[action]($html);
				}
				if(callback !== undefined) callback($html);
            });
        },
        //Common code for "insert" methods [PRIVATE]
        insert : function (selector, action) {
            var Widget = this;
			this.widget(function(data, directives, callback) {
				Widget.transform(selector, action, data, directives, callback);
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
