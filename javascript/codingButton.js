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
    var buttonStack =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Stack Overflow")
    var buttonGithub =$("<button type='button' id='git'>").addClass("btn btn-default btn-lg").append("Github")
    var webCodingID =$("<div>").addClass("webCodingID")
    var listGroup =$("<div>").addClass("list-group")
    var listCol =$("<div>").addClass("col-md-4")

    var repoTable =$("<table>").addClass("table")
    var repoTableBody =$("<tbody>")
    var tableCol =$("<div>").addClass("col-md-8")
    $(repoTable).append(repoTableBody)
    $(tableCol).append(repoTable)

    $(buttonGroup).append(buttonPhilosophy).append(buttonStack).append(buttonGithub);
    $(listCol).append(listGroup);
    $('.target').append(buttonGroup).append(webCodingID).append(listCol).append(tableCol);
    });     
});