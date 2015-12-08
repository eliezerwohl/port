$("document").ready(function(){
  var picture, picsource, 
  picture = $("#profile")
   $("#webCoding").on("click", function() {
    if ( $( ".webCodingID" ).length ) {
      return false;
      }
      $(".colimg").show();
    picture.attr("src", "img/webCoding.jpeg");
    $(".target").empty();
    $(".jumbotron").hide();
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block')
    var buttonPhilosophy =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("philButton btn btn-default btn-lg").append("Design Philosophy")
    var buttonStack =$("<button type='button'>").addClass("btn btn-default btn-lg").append("Stack Overflow")
    var buttonGithub =$("<button type='button' id='git'>").addClass("btn btn-default btn-lg").append("Github")
    var webCodingID =$("<div>").addClass("webCodingID")
    var listGroup =$("<div>").addClass("list-group")
    var listCol =$("<div>").addClass("col-md-4")
    var philDown =$ ('<h3>').addClass("philDown").append("'Mobile First'")

    // <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
    var repoTable =$("<table>").addClass("table")
    var repoTableBody =$("<tbody>")
    var tableCol =$("<div>").addClass("col-md-8")
    $(repoTable).append(repoTableBody)
    $(tableCol).append(repoTable)

    $(buttonGroup)
    .append(buttonPhilosophy).append(philDown)
    .append(buttonStack).append(buttonGithub);
    $(listCol).append(listGroup);
    $('.target').append(buttonGroup)
    .append(webCodingID)
    .append(listCol)
    .append(tableCol);
    (philDown).hide();
    });     
});