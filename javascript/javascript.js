 var picture = $("#profile");
$("document").ready(function(){
  eliezerButton();
  $(".scrollUp").scrollTop();
  $(".navbar-toggle, li").on("click", function(e) {
     e.preventDefault();
    $("#bs-example-navbar-collapse-1").slideToggle("fast");
    });
  $("li, .eliezerButton").on("click", function(e){
    e.preventDefault();
    $(".target").empty();
    $(".scrollUp").scrollTop();
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
  $(".eliezerButton").on("click", function(e) {
    e.preventDefault();
    eliezerButton();
  });
  $("#webCoding").on("click", function(e){
    e.preventDefault
        codingAlert();

    codingFunction();
  });
});