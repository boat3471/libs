// x: 最大MB，y：总MB，z：总KB
var x=0,y=0,z=0;
$('#Searchresult_onemonthdetail001 tr td').filter(function(a, b){ 
    var $b = $(b);
    if($b.text().indexOf('任我享流量半年包') >= 0){
	var $c = $b.siblings(':eq(4)');
	var dd = $c.text();
	if(dd.indexOf('KB') > 0){
	    z += parseInt(dd.replace('KB', ''));
	}
	if(dd.indexOf('MB') > 0){
	    var yy = parseInt(dd.replace('MB', ''));
	    y += yy;
	    if(yy > x) x = yy;
	}
    }
})
console.info(x, y + z/1024)
