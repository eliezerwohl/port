 var picture, picsource, 
  picture = $("#profile");

$("document").ready(function(){
  // function navbar(){
  $(".navbar-toggle, li").on("click", function(e) {
   e.preventDefault();
  $("#bs-example-navbar-collapse-1").slideToggle("fast");
  });
// }
  $("#links").on("click", function() {
   picture.attr("src", "img/links.jpg");
    });
  // music button
  $("#music").on("click", function(e) {
    e.preventDefault();
    musicFunction();
  });
// my story button
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

});