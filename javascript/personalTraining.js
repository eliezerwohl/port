function personalTrainingFunction() {
    picture.attr("src", "img/eliezerTrainer.jpg");
    var panelheading = $("<div>").addClass("panel-heading")
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var panelheadingTest = $("<div>").addClass("panel-heading")
    var panelTest= $("<div>").addClass("panel panel-default")
    var panelbodyTest = $("<div>").addClass("panel-body")
    $(panelheading).append("<h3>Certifications</h3>")
    $(panelbody).append('<p>National Academy of Sports Medicine 2014-2016 </p><br> <p>National Personal Training Institute. 2013- </p><br> <p>Red Cross CPR AED 2013- </p>')
    $(panel).append(panelheading);
    $(panel).append(panelbody).append;  
    $(panelheadingTest).append("<h3>Testamonials</h3>")
    $(panelbodyTest).append('<p>&nbsp&nbsp&nbsp&nbsp"When I joined the Center, I wasn’t confident it would work for me. I did not have gym experience, and was not in the best fitness health. I thought a trainer might motivate me and help me feel comfortable. Initially, I was a bit intimidated by the age and physical condition of the trainers, but I decided to go for it. My husband, a Center member since opening, recommended Elie Wohl as a good fit. Over a year and a half later, I still have my 5:00am weekly training sessions with Elie! He motivates me and never gets frustrated if I cannot do something. We also share a lot of laughs, which makes the early-morning workouts more fun. Elie finds what works for me, always considering my physical limitations. He is creative; no workouts are exactly the same. I look forward to using new equipment and trying new things, which I would never attempt on my own. I lost weight and inches, and feel so much better. I see my results, which helps me stay committed, even at 5:00am. I am happy I chose the Center, and especially happy I chose Trainer Elie. He is fun, and always has my best interests at heart. I really appreciate that!" <br> -Beth B.-</p> <p>&nbsp&nbsp&nbsp&nbsp"Elie developed a training plan specific to my needs and ability. He built on my progress, worked with my weaknesses, and helped me strengthen a troublesome previous injury. I look forward to my weekly sessions, as well as doing what he has shown me on my own." <br>-Matthew F.- </p> <p>&nbsp&nbsp&nbsp&nbsp"Elie makes it fun to go to the Center. I enjoy working out with him, and continue to see great results."<br>-Carl S.-</p>');
    $(panelTest).append(panelheadingTest);
    $(panelTest).append(panelbodyTest).append;
    $(".target").append(panelTest).append(panel);
}