require(
	["TopWidget"], //require
	function(){
		var topT = new UI.TopWidget("times");
		topT.max = 10;
		topT.appendTo("#right");
		var browser = new UI.BrowserWidget();
		
	}
);
