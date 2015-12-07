$("document").ready(function(){
  var picture, picsource, 
  picture = $("#profile")
  // links button  
  $("#links").on("click", function() {
   picture.attr("src", "img/links.jpg");
    });
  // music button
  $("#music").on("click", function() {
  if ( $( ".musicID" ).length ) {
      return false;
      }
    $(".target").empty();
    $(".jumbotron").hide();
    picture.attr("src", "img/rickenbacker.jpg");
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
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
    var storyParagraph1=$("<p>").append('For the past 3 years, I have been employed as a personal trainer.  One day, while talking to a client about the possible dangers of applying too much thermal paste after changing my CPU fan, he looked at me and said “why aren’t you working with computers?  have you thought about coding?” I told him I had, but never followed through with it. He told me he has recently changed careers, and started by taking online classes, and he thought I should do the same.  At first I was afraid.  What if I was wasting my time?  What if I broke the internet?')
    
    var storyParagraph2=$("<p>").append('So started take Code Academy classes.  And I really enjoyed it.  But I soon hit a wall.  I completed a HTML and CSS course, but never felt like I really knew what I was doing.  So I gave up on it for a few months, unsure of my next step.')
    var storyParagraph3=$("<p>").append('Until one Saturday night, I was hanging out with my friend.  He mentioned he had seen an ad for a  Rutgers Coding Bootcamp, and I was immediately intrigued.  I had looked at other bootcamps before, but this one was part-time.  I told my friend "I needed to think about it."')
    var storyParagraph4=$("<p>").append('By the end of the next week I had signed up for the bootcamp.  A month later, I went to the first class.  Ever since that first class, I’ve been hooked.  I’ve been coding and improving my skills every day.  Or in the words of my teacher, “ABC, always be coding” .')
        var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var storyID =$("<div>").addClass("storyID")

        $(panelbody).append(storyParagraph1)
    .append(storyParagraph2)
    .append(storyParagraph3)
    .append(storyParagraph4)
    $(panel).append(panelbody);
    $(".target").append(storyHeadline)
    .append(strangelove)
    .append(panel)
    .append(storyID);

    
   
  }); //end of my story
  // personal training
  $("#personalTraining").on("click", function() {
   if ( $( ".trainingID" ).length ) {
      return false;
      }
    $(".target").empty();
    $(".jumbotron").hide();
    picture.attr("src", "img/eliezerTrainer.jpg");
    var panelheading = $("<div>").addClass("panel-heading")
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var trainingID =$("<div>").addClass("trainingID")
    var panelheadingTest = $("<div>").addClass("panel-heading")
    var panelTest= $("<div>").addClass("panel panel-default")
    var panelbodyTest = $("<div>").addClass("panel-body")
    $(panelheading).append("Certifications")
    $(panelbody).append('<h3>NASM 2014-2016 <br><br> NPTI 2013- <br><br> Red Cross CPR AED 2013- </h3>')
    $(panel).append(panelheading);
    $(panel).append(panelbody).append;  
    $(panelheadingTest).append("Testamonials")
    $(panelbodyTest).append('<h3>Put in the nice things ppl say about me here</h3>')
    $(panelTest).append(panelheadingTest);
    $(panelTest).append(panelbodyTest).append;
    $(".target").append(panel).append(trainingID).append(panelTest);
   });// end of personal training section
    // web coding
 // $("#webCoding").on("click", function() {
 //    if ( $( ".webCodingID" ).length ) {
 //      return false;
 //      }
 //    picture.attr("src", "img/webCoding.jpeg");
 //    $(".target").empty();
 //    $(".jumbotron").hide();
 //    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block')
 //    var buttonPhilosophy =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Design Philosophy")
 //    var buttonStack =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Visit My Stack Overflow Account")
 //    var buttonGithub =$("<button type='button' id='git'>").addClass("btn btn-default git btn-lg").append("Look at what I've been doing on Github")
 //    var webCodingID =$("<div>").addClass("trainingID")
 //    $(buttonGroup).append(buttonPhilosophy).append(buttonGithub).append(buttonStack);
 //    $('.target').append(buttonGroup).append(webCodingID);
 //    // code for github table goes below
 //    $("#git").on("click", function() {

    // });


  // });
});