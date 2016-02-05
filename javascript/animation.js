$(document).ready(function(){
  function bottomNav(){
  // moves the nav bar from fixed bottom to not fixed at the bottom, depending on screen size
   var viewportWidth = $(window).width();
    if (viewportWidth > 990) {
      $(".navBottom").addClass("navbar-fixed-bottom");
    }
    else{
      $(".navBottom").removeClass("navbar-fixed-bottom");
    }
  }
// run the function when the page load, also every time the screen is resized
  bottomNav();    
  $(window).resize(function () {
  bottomNav();
});
  $(document).on("click", ".philButton", function(e){
    // my philospohy button toggle
    e.preventDefault();
  $(".philDown").slideToggle();
  });
  $(document).on("click", ".projects", function(e){
  // toggles the projects button
  e.preventDefault();
  $(".projectHide").toggle();

  });
 $(document).one("click", ".projects", function(e){
 // activates modal once
  e.preventDefault(); 
     codingAlert();
  });
});


