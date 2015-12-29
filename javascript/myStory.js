function myStoryFunction() {
    picture.attr("src", "img/computer.jpg");
    var storyHeadline =$("<h3>").append("My Story")
    var strangelove =$("<h4>").append("Or How I Learned to Stop Worrying and Love the Code")
    var storyParagraph1=$("<p>").append('For the past 3 years, I have been employed as a personal trainer. One day, while talking to a client about the possible dangers of applying too much thermal paste to my CPU, he looked at me and said “why aren’t you working with computers? Have you thought about coding?” I told him I had, but never followed through with it. He told me he has recently changed careers, by taking online classes, and he thought I should do the same. ')
    var storyParagraph2=$("<p>").append('So I started take Code Academy classes. And I began to realize I might be able to persue coding further . A few months later, a friend  mentioned he had seen an ad for a Rutgers Coding Bootcamp, and I was immediately intrigued. I had looked at other bootcamps before, but this one was different. I told my friend "I needed to think about it."')
    var storyParagraph3=$("<p>").append('Within a few days I had signed up for the bootcamp. A month later, I went to the first class. Ever since then, I’ve been hooked. I’ve been coding and improving my skills every day. Or in the words of my teacher, “ABC, always be coding” .')
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var storyID =$("<div>").addClass("storyID")
    $(panelbody).append(storyParagraph1)
    .append(storyParagraph2)
    .append(storyParagraph3)
    $(panel).append(panelbody);
    $(".target").append(storyHeadline)
    .append(strangelove)
    .append(panel);
}