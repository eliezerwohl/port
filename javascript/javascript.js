$("document").ready(function(){
var picture, picsource

picture = $("#profile")

  $("#links").on("click", function() {
   picture.attr("src", "img/links.jpg");
    });

  // if pic source = img/links.jpg
  //   pic.attr("src", "img/elie-wohl.jpg")

 $("#music").on("click", function() {
    $(".jumbotron").hide();
   picture.attr("src", "img/rickenbacker.jpg");
   var panel= $("<div>").addClass("panel panel-default");
var panelbody = $("<div>").addClass("panel-body");
var textp =$("<p>").append("To me, there are two types of Music.  Motorhead, and music that isn't as good as Motorhead.  Since I'm not in Motorhead, the music I make is lot lighter and slower.  I'd like think it's a combination of Dick Dale, Type O Negative, and Lee Perry.  include links below");

$(".col-md-8").append(panel).append(panelbody).append(textp);
    });


}

  );