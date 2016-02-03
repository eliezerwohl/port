function codingFunction() {
    picture.attr("src", "img/webCoding.jpeg");
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('btn-group-vertical center-block')
    var buttonPhilosophy =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("philButton btn btn-default btn-lg").append("Design Philosophy");
    var buttonProjects =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("projects btn btn-default btn-lg").append("Projects");
    var buttonStack =$("<button type='button'>").addClass("btn btn-default stack btn-lg").append("Stack Overflow");
    var buttonStack =$("<button type='button'>").addClass("btn btn-default gear btn-lg").append("My Gear");
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
    .append(listCol)
    .append(tableCol);
    (philDown).hide();
    var projectGroup = $('<div role="group" aria-label="...">').addClass('projectHide btn-group-vertical center-block btnGroup2');
    $(".btn-group-vertical").append(projectGroup);
    var projectNames ={
    0:{text:"<strong>First Game</strong>:Click On Carmack", link:"https://evening-beyond-7392.herokuapp.com"}, 
    1:{text: "To-Do List", link:"https://fathomless-cliffs-4838.herokuapp.com"},  
    2:{text:"Tri State Hotels", link:"https://evening-beyond-7392.herokuapp.com"},
    3:{text:"Rocks Paper Scissor", link:"https://polar-inlet-6927.herokuapp.com"},
    4:{text:"To-Go List", link:"http://to-go-list.herokuapp.com"}  
    }
    for (var i = 0; i < Object.keys(projectNames).length; i++) {
       console.log(projectNames[i].link)
       $(projectGroup).append('<a href ="' + projectNames[i].link + '" target="_blank" class = "btn btn-primary btn-md"> ' +  projectNames[i].text + '</a>')
    }
    $(".projectHide").hide();
}  
$("body").on("click", ".gear", function(){
    $(".modalTitle, .modalBody, .modalFooter").empty();
    $('.modal').modal();
    $(".modalTitle").append("My Gear");
    $(".modalBody").append('<h4>Custom Built Rig</h4>\
        <p>MSI GTX 970</p>\
        <p>4.0GHz OC i5 4590k</p>\
        <p>16gb RAM</p>\
        <p>Samsung 840 Pro Evo 250GB SSD</p>\
        <p>Western Digital 1TB HD</p>\
        <p>Fractal Design R4 case</p>\
        <p>Cooler Master Evo 212 CPU fan</p>\
        <p>Noctua (1), Cooler Master (2), Fractal Design (2) case fans</p>\
        <br>\
        <h4>Web Development Tools</h4>\
        <p>Microsoft Sculpt Keyboard</p>\
        <p>Anker Vertical Mouse</p>\
        <p>MacBook Pro 13"</p>\
        <p>Droid Turbo (for testing)</p>\
        <p>Samsung Galaxy Tab 2 (for testing)</p>');
    $(".modalFooter").append('<button type="button" class="btn btn-info btn-lg col-lg-4 col-xs-12" data-dismiss="modal">Close</button>');
});