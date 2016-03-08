function codingFunction() {
    picture.attr("src", "img/webCoding.jpeg");
    var buttonGroup = $('<div role="group" aria-label="...">').addClass('col-md-8 col-xs-12 btn-group-vertical col-md-offset-2');
    var buttonPhilosophy =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("philButton btn btn-default btn-lg").append("Design Philosophy");
    var buttonProjects =$('<button type="button" data-toggle="button" aria-pressed="false" autocomplete="off">').addClass("projects btn btn-default btn-lg").append("Projects");
    var buttonStack =$("<a href ='http://stackoverflow.com/users/5510690/eliezer-wohl' target='_blank' type='button'>").addClass("btn btn-default stack btn-lg").append("Stack Overflow");
    var buttonGear =$("<button type='button'>").addClass("btn btn-default gear btn-lg").append("My Gear");
    var buttonGithub =$("<a href = 'https://github.com/eliezerwohl' type='button' target='_blank' id='git'>").addClass("btn btn-default github btn-lg").append("Github");
    var philDown =$ ('<h3>').addClass("philDown").append("'Mobile First'");
    $(buttonGroup)
    .append(buttonPhilosophy).append(philDown).append(buttonGear)
    .append(buttonGithub).append(buttonStack).append(buttonProjects);
    $('.target').append(buttonGroup)
    $(".philDown").hide();
    var projectGroup = $('<div role="group" aria-label="...">').addClass('projectHide btn-group-vertical center-block btnGroup2');
    $(".btn-group-vertical").append(projectGroup);
    // add project below, will automatically be made into a button
    var projectNames ={
    0:{text:"<strong>First Game</strong>:Click On Carmack", link:"https://evening-beyond-7392.herokuapp.com"}, 
    1:{text: "To-Do List", link:"https://fathomless-cliffs-4838.herokuapp.com"},  
    2:{text:"Tri State Hotels", link:"https://evening-beyond-7392.herokuapp.com"},
    3:{text:"Rocks Paper Scissor", link:"https://polar-inlet-6927.herokuapp.com"},
    4:{text:"To-Go List", link:"http://to-go-list.herokuapp.com"},
    5:{text:"King of New York Dice Roller", link:"https://kingofdice.herokuapp.com/"},
    6:{text:"Node.JS calculator", link:"https://github.com/eliezerwohl/Node.jsCalc"},
    7:{text:"Eat A Burger", link:"https://powerful-reaches-65882.herokuapp.com/"},
    8:{text:"Group Project: WhereRU", link:"http://rutgersflyers.herokuapp.com/"}
    }
    for (var i = 0; i < Object.keys(projectNames).length; i++) {
       console.log(projectNames[i].link)
       $(projectGroup).append('<a href ="' + projectNames[i].link + '" target="_blank" class = "btn btn-primary btn-md"> ' +  projectNames[i].text + '</a>')
    }
    $(".projectHide").hide();
}  
function codingAlert(){
    $(".modalTitle, .modalBody").empty();
    $('.modal').modal();
    $(".modalTitle").append("FYI");
     $(".modalBody").append('<h4>All my projects are listed here, in the order in which they were created. </h4>\
     <h4>I have made all of them available to show my improvement.');
    $("#modalButton").html("OK")
}
$("body").on("click", ".gear", function(){
    $(".modalTitle, .modalBody").empty();
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
        <p>MacBook Pro 13"</p>');
    $("#modalButton").html("Close")
});
