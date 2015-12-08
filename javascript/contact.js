$(document).ready(function(){
$(document).on("click", ".alert-danger", function(){
$(".alert-danger").attr("href", "http://www.google.com");
}
  );
  // <a href="mailto:...." 

  $("#contact").on("click", function(){
  if ( $( ".webCodingID" ).length ) {
        return false;
        }
$(".colimg").hide();
     
      $(".target").empty();
      $(".jumbotron").hide();
    var gCol=$("<div>").addClass("col-md-6")
    var gBody= $("<div>").addClass("alert alert-danger")
   var gCenterPic=$("<div>").addClass(".centerPicture")

   var gPicture=$("<img class='contactPicture'>").attr("src", "img/gmail.png")
   var linkCol= $("<div>").addClass("col-md-6")
    var linkBody = $("<div>").addClass("alert alert-info")

    gCenterPic.append(gPicture)
    
    $(gBody).append(gCenterPic)
    $(gCol).append(gBody)
    $(linkBody).append("put linked in picure")

    $(linkCol).append(linkBody)
    $(".target").append(gCol)
    .append(linkCol);

  });

});