//performs the js part after jQuery is loaded
//only used when jQuery and js file are import in head section
//alternate is deaclare/import js and jQuery before the end of body section
$(document).ready(function () {
  $("h1").css("color","yellow");
})

//to be used when jQuery and js are imported at the end of body
//$("h1").css("color","yellow");
