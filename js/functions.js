

$(document).ready(function() {
	
	
	//console.log(db);
	
    //function will be called when device ready
    
	$('#exit').on('click', function(e){
		exitFromApp();
	});
	
});

$(document).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
});


	

function exitFromApp(){
   console.log("Fechando Aplicação");
   navigator.app.exitApp();
}