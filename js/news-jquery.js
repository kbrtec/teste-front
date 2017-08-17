$(document).ready(function(){
	$(".content-oc").hide();
});
var verfica = function(){

	_enter = function (valor){
		if(valor == "last-news-item item-1 col-md-4" || valor =="img1")
	  	{return 1;}
	  
	   	if(valor == "last-news-item item-2 col-md-4" || valor =="img2")
	   	{return 2;}
	  		
	   	if(valor == "last-news-item item-3 col-md-4" || valor =="img3")
	   	{return 3;}	

	}
	_sair = function (valor){
		if(valor == "content-oc content-oc-1")
	  	{return 1;}
	  
	   	if(valor == "content-oc content-oc-2" )
	   	{return 2;}
	  		
	   	if(valor == "content-oc content-oc-3")
	   	{return 3;}	
	   
	}
	return{
		sair:_sair,
		enter:_enter
 		};
};
$(document).on('mouseenter',['.last-news-item','img1'], function(e) {
   var number = verfica().enter($(e.target).attr('class'));

    	$(".content-"+number).toggle();
    	$(".content-oc-"+number).toggle();
});

$(document).on('mouseleave', '.content-oc', function(e) {
   var number = verfica().sair($(e.target).attr('class'));

    	$(".content-"+number).toggle();
    	$(".content-oc-"+number).toggle();
});

/*

$(".item-1").mouseenter(function(){
	$(".content-1").hide();
	$(".content-oc-1").show();
});
$(".item-1").mouseleave(function(){
	$(".content-oc-1").hide();
	$(".content-1").show();
});
$(".item-2").mouseenter(function(){
	$(".content-2").hide();
	$(".content-oc-2").show();
});
$(".item-2").mouseleave(function(){
	$(".content-oc-2").hide();
	$(".content-2").show();
});

$(".item-3").mouseenter(function(){
	$(".content-3").hide();
	$(".content-oc-3").show();
});
$(".item-3").mouseleave(function(){
	$(".content-oc-3").hide();
	$(".content-3").show();
});

*/