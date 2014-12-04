Date.prototype.format=function(h){var g=/DD|D|dd|d|MM|m|n|YYYY|yyyy|Y|YY|yy|y|hh|h|g|HH|H|G|i|s|fff|ff|f|zz|z/g;var f="";var a;function c(i){if(i<10){return"0"+i}return i.toString()}function e(i){if(i<10){return"00"+i}if(i<100){return"0"+i}return i.toString()}for(;;){var d=g.lastIndex;var b=g.exec(h);f+=h.slice(d,b?b.index:h.length);if(!b){break}switch(b[0]){case"DD":case"D":case"dd":case"d":f+=c(this.getDate());break;case"j":f+=this.getDate();break;case"MM":case"m":f+=c(this.getMonth()+1);break;case"n":f+=this.getMonth()+1;break;case"YYYY":case"yyyy":case"Y":f+=this.getFullYear();break;case"YY":case"yy":case"y":f+=c(this.getFullYear()%100);break;case"hh":case"h":a=this.getHours()%12;if(a==0){a=12}f+=c(a);break;case"g":a=this.getHours()%12;if(a==0){a=12}f+=a;break;case"HH":case"H":f+=c(this.getHours());break;case"G":f+=this.getHours();break;case"i":f+=c(this.getMinutes());break;case"s":f+=c(this.getSeconds());break;case"f":f+=e(this.getMilliseconds()).charAt(0);break;case"ff":f+=e(this.getMilliseconds()).substr(0,2);break;case"fff":f+=e(this.getMilliseconds());break;case"z":a=this.getTimezoneOffset()/60;f+=((a>=0)?"+":"-")+Math.floor(Math.abs(a));break;case"zz":a=this.getTimezoneOffset()/60;f+=((a>=0)?"+":"-")+c(Math.floor(Math.abs(a)));break}}return f};Date.prototype.isValid=function(){return this instanceof Date&&isFinite(this)};Date.prototype.isYMD=function(b){var a=this.isValid();if(a){a=false;var c=b.match(/(\d{4}).(\d{2}).(\d{2})/);if(c){if(this.format("Ymd")==""+c[1]+c[2]+c[3]){a=true}}if(!a){c=b.match(/(\d{2}).(\d{2}).(\d{4})/);if(c){if(this.format("dmY")==""+c[1]+c[2]+c[3]){a=true}}}}return a};
//LEPE: Shortcut for jsonp + POST. Similar to $.getJSON
jQuery.postJSON = function(url, data, func) { return $.post(url+(url.indexOf("?") === -1 ? "?" : "&")+"callback=?", data, func, "json"); };
//LEPE: @overrride. It will automatically add "callback=?" to the URL as in JQuery < 1.6
jQuery.getJSON = function(url, data, func) { return $.get(url+(url.indexOf("?") === -1 ? "?" : "&")+"callback=?", data, func, "json"); };
//GET object
var GET={}; window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){GET[name]=value;});
function getUTC() { 
    var date = new Date();
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}
//LEPE: get all days from now minus N days
function minusDays(num, full) {
	var days = [];
	var date = getUTC();
	for(var d = 0; d < num; d++) {
		date.setDate(date.getDate() - 1);
		days.push(full == undefined ? date.getDate()+"" : date.format("YYYY-m-d"));
	}
	return days.reverse();
}
//Sort table
jQuery.fn.sortTable = (function(){
    var $table = $(this);
    if($table.is("table")) {
        $table.find("th").each(function() {
            var th = $(this);
            var t = parseInt($(this).index()) + 1;
            var inverse = true;
            th.click(function(){
                $(this).toggleClass("up");
                $table.find('td:nth-child(' + t + ')').sortElements(function(a, b){
                    return (th.hasClass("num") ? $.text([a]) * 1 > $.text([b]) * 1 : (th.hasClass("rank") ? compareRank(a, b): $.text([a]) > $.text([b]))) ? inverse ? -1 : 1 : inverse ? 1 : -1;
                }, function(){
                    return this.parentNode;
                });
                inverse = !inverse;
            });
        });
    } else {
        console.log("Not at table");
    }
});
jQuery.fn.sortElements = (function(){
    var sort = [].sort;
    return function(comparator, getSortable) {
        getSortable = getSortable || function(){return this;};
        var placements = this.map(function(){
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                // Since the element itself will change position, we have
                // to have some way of storing it's original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
            return function() {
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);
            };

        });
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
    };
})();

String.prototype.colorfy = function() {
    var data = this;
    if(data.indexOf('^') === -1) return data;
    var colors = data.split("^");
    var i=1;
    var retval="";
    for(var c in colors) {
        var row = colors[c];
        color = row[0];
        if(color > 0) {
            retval += '<span class="c'+color+'">'+row.substr(1)+'</span>';
        } else {
            retval += row;
        }
    }
    return retval;
};

var $ = jQuery;
var Class = chic.Class;
var UI = {};
requirejs.config({
    baseUrl: '/js'
});