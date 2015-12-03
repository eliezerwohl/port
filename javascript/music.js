// $("document").ready(function() {
//   $("#music").on("click", function() {
//     $(".jumbotron").hide();

//   $("#links").on("click", function() {
//    picture.attr("src", "img/links.jpg");
//     });

//   })

// }

//   )]]\
var panel= $("<div>").addClass("panel panel-default");
var panelbody = $("<div>").addClass("panel-body");
var textp =("<p>".append("this is just a test");

$(".col-md-8").append(panel).append(panelbody).append(textp);

  function buildThumbnails(userData) {
    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var userImg = $("<img>").attr("src", "http://lorempicsum.com/futurama/255/200/2");
    var captionDiv = $("<div>").addClass("caption");
    var userH3 = $("<h3>").append(userData.user.name);
    var userP = $("<p>");
    var userEmail = $("<a>").attr("href", "mailto:" + userData.email).append(userData.email);
    var userGeo = $("<div>").append(userData.user.location);
    var timeZone = $("<div>").append(userData.user.time_zone);

    userP.append(userEmail).append(userGeo);

    thumbnailDiv
      .append(timeZone)
      .append(userImg)
      .append(captionDiv.append(userH3).append(userP));

    colDiv.append(thumbnailDiv);

    return colDiv;
  }