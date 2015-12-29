$("document").ready(function(){
  var picture, picsource, 
  picture = $("#profile")
   $("#webCoding").on("click", function(e) {
    e.preventDefault();
    if ( $( ".webCodingID" ).length ) {
      return false;
      }
      $(".colimg").show();
    picture.attr("src", "img/webCoding.jpeg");
    $(".target").empty();
    $(".jumbotron").hide();
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block')
    var buttonPhilosophy =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("philButton btn btn-default btn-lg").append("Design Philosophy");
    var buttonProjects =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("projects btn btn-default btn-lg").append("Projects");
    var buttonStack =$("<button type='button'>").addClass("btn btn-default stack btn-lg").append("Stack Overflow")
    var buttonGithub =$("<button type='button' id='git'>").addClass("btn btn-default github btn-lg").append("Github")
    var webCodingID =$("<div>").addClass("webCodingID")
    var listGroup =$("<div>").addClass("list-group")
    var listCol =$("<div>").addClass("col-md-4")
    var philDown =$ ('<h3>').addClass("philDown").append("'Mobile First'")
    var repoTable =$("<table>").addClass("table")
    var repoTableBody =$("<tbody>")
    var tableCol =$("<div>").addClass("col-md-8")
    $(repoTable).append(repoTableBody)
    $(tableCol).append(repoTable)
    $(buttonGroup)
    .append(buttonPhilosophy).append(philDown)
    .append(buttonStack).append(buttonGithub).append(buttonProjects);
    $(listCol).append(listGroup);
    $('.target').append(buttonGroup)
    .append(webCodingID)
    .append(listCol)
    .append(tableCol);
    (philDown).hide();


    var buttonGroup = $('<div role="group" aria-label="...">').addClass('projectHide btn-group-vertical center-block btnGroup2')
    var projectJohn =$('<button type="button">').addClass("john btn btn-primary btn-md").append("<strong>First Game</strong>:Click On Carmack");
    var projectToDo =$('<button type="button">').addClass("toDo btn btn-primary btn-md").append("To-Do List");
    var projectTriHotel =$('<button type="button">').addClass("triHotel btn btn-primary btn-md").append("Tri State Hotels");
    var projectRPS =$('<button type="button">').addClass("RPS btn btn-primary btn-md").append("<strong>Second Game</strong>:Rock Paper Scissors");
    var projectToGo =$('<button type="button">').addClass("toGo btn btn-primary btn-md").append("To-Go-List");;
    (buttonGroup).append(projectJohn)
    .append(projectToDo)
    .append(projectTriHotel)
    .append(projectRPS)
    .append(projectToGo);
    $(".btn-group-vertical").append(buttonGroup);
    $(".projectHide").hide();

    });     
});