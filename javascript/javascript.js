$("document").ready(function(){
var picture, picsource

picture = $("#profile")
picsource = $("#profile").attr("src")

  $("#links").on("click", function() {
   picture.attr("src", "img/links.jpg");
    });

  // if pic source = img/links.jpg
  //   pic.attr("src", "img/elie-wohl.jpg")

}

  );