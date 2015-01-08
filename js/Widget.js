define(function(){
	Widget = Class.extend({
		initargs : "",
        template : "",
		category : "",
		params	 : {},
		prefix	 : "widget_", //used to generate IDs
        //private---
        parent : null, //jQuery parent
        action : null, //jQuery action: append, prepend or html
        html   : null, //translated html
		widget_id : "", //keep widget id to locate it (filled by UI)
        //Initialize the Widget with initparam (used to recycle widget)
		init: function() {
			this.initargs = arguments;
		},
        //Override it if need to modify params
        setup  : function() {
        },
        //Override it to apply data into the template
        render : function(data, callback) {
            callback({
                models: {},
                directives: {}
            });
        }
	});
});