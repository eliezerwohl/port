$(document).ready(function(){
  $(document).on("click", ".philButton", function(){
  $(".philDown").slideToggle();
  });

   $(document).on("click", ".projects", function(e){
  e.preventDefault();
  $(".projectHide").toggle();

});

  $(document).on("click", ".stack", function(){
window.open('http://stackoverflow.com/users/5510690/eliezer-wohl')
});

    $(document).on("click", ".github", function(){
window.open('https://github.com/eliezerwohl')
});


  $(document).on("click", ".john", function(){
  window.open('https://evening-beyond-7392.herokuapp.com') 
});

  $(document).on("click", ".toDo", function(){
  window.open('https://fathomless-cliffs-4838.herokuapp.com') 
});

  $(document).on("click", ".triHotel", function(){
  window.open('https://polar-inlet-6927.herokuapp.com') 
});

  $(document).on("click", ".RPS", function(){
  window.open(' https://polar-inlet-6927.herokuapp.com') 
});

  $(document).on("click", ".toGo", function(){
  window.open('http://to-go-list.herokuapp.com') 
});


  });


