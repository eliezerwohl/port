 $(document).on("click", ".projects", function(e){
e.preventDefault();

    //   $(".colimg").show();
    // $(".target").empty();
    // $(".jumbotron").hide();
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block btnGroup2')
    var projectJohn =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("First Profile");
    var projectOldProfile =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("Click On Carmack");
    var projectCurrent =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("Curent Profile");
    var projectToDo =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("To-Do List");
    var projectTriHotel =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("Tri State Hotels");
    var projectRPC =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("Rock Paper Scissors");
    var projectToGo =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass(" btn btn-default btn-md").append("To-Go-List");;
    (buttonGroup).append(projectJohn)
    .append(projectOldProfile)
    .append(projectCurrent)
    .append(projectToDo)
    .append(projectTriHotel)
    .append(projectRPC)
    .append(projectToGo);
    $(".btn-group-vertical").append(buttonGroup);


});