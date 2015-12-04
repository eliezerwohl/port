$("document").ready(function(){
var picture, picsource, panel, panelbody, 
  panel= $("<div>").addClass("panel panel-default");
  panelbody = $("<div>").addClass("panel-body");
  picture = $("#profile")
  // links button  
  $("#links").on("click", function() {
   picture.attr("src", "img/links.jpg");
    });
  // music button
  $("#music").on("click", function() {
    $(".jumbotron").hide();

    if ( $( ".musicID" ).length ) {
      return false;
      }
    picture.attr("src", "img/rickenbacker.jpg");
    var textp =$("<p>").append("To me, there are two types of Music.  Motorhead, and music that isn't as good as Motorhead.  Since I'm not in Motorhead, the music I make is lot lighter and slower.  I'd like think it's a combination of Dick Dale, Type O Negative, and Lee Perry.  I'm primarily a bass player, but have been teaching myself some guitar and keys");
    var meadow =$("<div>").addClass("musicPlayer").append('<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/222257621%3Fsecret_token%3Ds-B9Nqd&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
    var mahalo =$("<div>").append('<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172473705&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
    var musicID =$("<div>").addClass("musicID");

    $(panelbody).append(textp);
    $(panel).append(panelbody);
    $(".target").append(panel).append(mahalo).append(meadow).append(musicID);
        });
// my story button
  $("#myStory").on("click", function() {
    $(".jumbotron").hide();
    $(".target").empty();

    if ( $( ".storyID" ).length ) {
      return false;
      }
    picture.attr("src", "img/computer.jpg");
    var storyHeadline =$("<h3>").append("My Story")
    var strangelove =$("<h4>").append("or how I learned to stop worrying and love the code")
    var storyID =$("<div>").addClass("storyID")

    $(".target").append(storyHeadline).append(strangelove);


  
  });

});