function personalTrainingFunction() {
    $(".colimg").show();
    $(".target").empty();
    $(".jumbotron").hide();
    picture.attr("src", "img/eliezerTrainer.jpg");
    var panelheading = $("<div>").addClass("panel-heading")
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var trainingID =$("<div>").addClass("trainingID")
    var panelheadingTest = $("<div>").addClass("panel-heading")
    var panelTest= $("<div>").addClass("panel panel-default")
    var panelbodyTest = $("<div>").addClass("panel-body")
    $(panelheading).append("Certifications")
    $(panelbody).append('<h3>NASM 2014-2016 <br><br> NPTI 2013- <br><br> Red Cross CPR AED 2013- </h3>')
    $(panel).append(panelheading);
    $(panel).append(panelbody).append;  
    $(panelheadingTest).append("Testamonials")
    $(panelbodyTest).append('<h3>Put in the nice things ppl say about me here</h3>')
    $(panelTest).append(panelheadingTest);
    $(panelTest).append(panelbodyTest).append;
    $(".target").append(panel).append(trainingID).append(panelTest);
}