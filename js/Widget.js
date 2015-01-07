define(function(){
	Widget = Class.extend({
		initargs : "",
        template : "",
		category : "",
		params	 : {},
        //private---
        parent : null,
        action : null,
        html   : null,
        //Initialize the Widget with initparam (used to recycle widget)
		init: function() {
			this.initargs = arguments;
		},
        //Override it if need to modify params
/*
        setup  : function() {
        },
        //Override it to apply data into the template
        render : function(data, callback) {
            callback({
                content: {},
                directives: {}
            });
        }
*/
	});
});
