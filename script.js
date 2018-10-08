function createGallery ( event ) {

   event.target.style.display = 'none';

   if ( !pictures ) return;

   var gallery = document.createElement ( 'section' );
   document.body.appendChild ( gallery );
   gallery.style.border = "double 5px gray";
   gallery.style.boxShadow = "10px 10px 20px #00000090";

   for ( var i = 0; i < pictures.length; i++ ) {
        var img = document.createElement ( 'img' );
        img.src = pictures [i];
        img.className = "ico";
        gallery.appendChild ( img );
        img.onclick = function ( event ) {
          if ( event.target.className == "ico" )
               event.target.className = "full_image";
          else event.target.className = "ico";
        }
   }
}
