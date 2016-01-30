$(document).ready(function(){
  
function bottomNav(){
   var viewportWidth = $(window).width();
    if (viewportWidth > 990) {
      $(".navBottom").addClass("navbar-fixed-bottom");
    }
    else{
      $(".navBottom").removeClass("navbar-fixed-bottom");
    }
}

bottomNav();    

$(window).resize(function () {
  bottomNav();
});

  

  $(document).on("click", ".philButton", function(e){
    e.preventDefault();
  $(".philDown").slideToggle();
  });
   $(document).on("click", ".projects", function(e){
  e.preventDefault();
  $(".projectHide").toggle();
  });
  $(document).on("click", ".stack", function(e){
     e.preventDefault();
  window.open('http://stackoverflow.com/users/5510690/eliezer-wohl')
  });
    $(document).on("click", ".github", function(e){
       e.preventDefault();
  window.open('https://github.com/eliezerwohl')
  });
  $(document).on("click", ".john", function(e){
     e.preventDefault();
  window.open('https://evening-beyond-7392.herokuapp.com') 
  });
  $(document).on("click", ".toDo", function(e){
     e.preventDefault();
  window.open('https://fathomless-cliffs-4838.herokuapp.com') 
  });
  $(document).on("click", ".triHotel", function(e){
     e.preventDefault();
  window.open('https://polar-inlet-6927.herokuapp.com') 
  });
  $(document).on("click", ".RPS", function(e){
     e.preventDefault();
  window.open(' https://polar-inlet-6927.herokuapp.com') 
  });
  $(document).on("click", ".toGo", function(e){
     e.preventDefault();
  window.open('http://to-go-list.herokuapp.com') 
  });
});


