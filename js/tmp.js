/*
 * @author Alberto Lepe
 * @since Nov 2, 2014
 */
$(function(){
	 data = {};
    var directives = {};
    data.products = [
    {
          id : 1,
          price: 100,
          name : "Goggy statue",
          link : "#aaa"
    },{
          id : 2,
          price: 200,
          name : "Catty statue",
          link : "#bbb"
    },{
          id : 5,
          price: 500,
          name : "Patty statue",
          link : "#ccc"
    },
    ];
    directives.products = {
          namelink: {
            text: function() { return this.name },
            href: function() { return this.link }
          }
    };
    $('#checkout').render(data, directives);
});