require(
	["TopWidget"], //require
	function(){
		var top100 = new UI.TopWidget("times");
		top100.max = 10;
		top100.appendTo("body");
	}
);
