JS.packages(function() { with(this) {
	var classes = [
		"Widget",
		"Top"
	];
	for(var c in classes) {
    	file('/js/'+classes[c]+'.js').provides(classes[c]);
	}
}});