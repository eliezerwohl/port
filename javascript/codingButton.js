$("document").ready(function(){
  var picture, picsource, 
  picture = $("#profile")
   $("#webCoding").on("click", function() {
    if ( $( ".webCodingID" ).length ) {
      return false;
      }
    picture.attr("src", "img/webCoding.jpeg");
    $(".target").empty();
    $(".jumbotron").hide();
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block')
    var buttonPhilosophy =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Design Philosophy")
    var buttonStack =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Visit My Stack Overflow Account")
    var buttonGithub =$("<button type='button' id='git'>").addClass("btn btn-default btn-lg").append("Look at what I've been doing on Github")
    var webCodingID =$("<div>").addClass("trainingID")
    $(buttonGroup).append(buttonPhilosophy).append(buttonGithub).append(buttonStack);
    $('.target').append(buttonGroup).append(webCodingID);
    // code for github table goes below
    // $("#git").on("click", function() {
    //   prompt("herro");
    //  }); 
    });     
});