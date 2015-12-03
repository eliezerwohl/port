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
var textp =$("<p>").append("To me, there are two types of Music.  Motorhead, and music that isn't as good as Motorhead.  Since I'm not in Motorhead, the music I make is lot lighter and slower.  I'd like think it's a combination of Dick Dale, Type O Negative, and Lee Perry.  I'm primarily a bass player, but have been teaching myself some guitar and keys");
var meadow =$("<div>").addClass("musicPlayer").append('<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/222257621%3Fsecret_token%3Ds-B9Nqd&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
var mahalo =$("<div>").append('<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172473705&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
$(panelbody).append(textp);
$(panel).append(panelbody);
$(".col-md-8").append(panel).append(mahalo).append(meadow);
    });


}

  );