function eliezerButton() {
    $("#profile").attr("src", "img/EliezerWohl.jpg");
    var jumbotron = $("<div>").addClass("jumbotron");
    var h3 =$("<h3>").append("Welcome To The Personal Website Of Full Stack Web Developer/Personal Trainer");
    var h2 =$("<h2>").append('<strong>Eliezer "Elie" Wohl</strong>');
    jumbotron.append(h3)
    .append(h2);
    $(".target").append(jumbotron);
    
  }
