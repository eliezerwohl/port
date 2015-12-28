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

  });


