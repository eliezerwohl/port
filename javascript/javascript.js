 var picture = $("#profile");
$("document").ready(function(){
  $(".navbar-toggle, li").on("click", function(e) {
   e.preventDefault();
  $("#bs-example-navbar-collapse-1").slideToggle("fast");
   $(".scrollUp").scrollTop();
  });
  $("li").on("click", function(e){
    e.preventDefault();
    $(".colimg").show();
    $(".target").empty();
    $(".jumbotron").hide();
  });
  $("#music").on("click", function(e) {
    e.preventDefault();
    musicFunction();
  });
  $("#myStory").on("click", function(e) {
    e.preventDefault();
    myStoryFunction()
     });
  $("#personalTraining").on("click", function(e) {
    e.preventDefault();
    personalTrainingFunction()
   });
  $(".navbar-brand").on("click", function(e) {
  e.preventDefault()
  eliezerButton();
  });
  $("#webCoding").on("click", function(e){
  e.preventDefault
  codingFunction()
  });
});