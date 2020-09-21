//document.querySelectorAll("h1") = $("h1")
//    {js code}                       {jquery code}
$("h1").css("background-color","yellow");//to change css property
console.log($("h1").css("color")); // to get the current css property value

$("h1").addClass("big-title"); // to add class defined in css to a html element
$("h1").addClass("big-title margin-50");// to add multiple classes
$("h1").removeClass("big-title");// to remove the class from html element

console.log($("h1").hasClass("big-title"));//returns boolean

$("h1").text("Bye");//to change text
$("h1").html("<em>big-title</em>");//to change the HTML....same as innerHTML of js

$("img").attr("src","F:/Web Dev/Drum Kit/images/tom1.png");// to change attribute of HTML tag
$("img").attr("src");//get value if attribute
$("img").attr("class"); //give the classes applied to the tag


//adding event listener
$("button").click(function () {
  $("h1").css("color","purple");
});/* similar to
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
  document.querySelectorAll("h1").style.color("purple");
  });
}*/

$("h1").on("mouseover",function () {
    $("h1").css("color","purple");
});

//adding and removing tags using jQuery
$("h1").before("<button>New</button>");//adds before h1 tag i.e. <button></button><h1></h1>
$("h1").after("<button>New</button>");//adds after h1 tag i.e. <h1></h1> <button></button>
$("h1").prepend("<button>New</button>");//adds at the starting of h1 tag i.e <h1><button></button>{text}</h1>
$("h1").append("<button>New</button>");//adds at the end of h1 tag i.e. <h1>{text}<button></button></h1>
