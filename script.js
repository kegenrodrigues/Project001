function makeid(){
var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
	

};


/*
document.write("This is working if this is the only thing")


 $( document ).ready(function() {
      $( "a" ).click(function( event ) {
          alert( "The link will no longer take you to jquery.com" );
         event.preventDefault();
     });
});
*/	