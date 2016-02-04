 function musicFunction() {
    $(".colimg").show();
    $(".target").empty();
    $(".jumbotron").hide();
    picture.attr("src", "img/rickenbacker.jpg");
    var panel= $("<div>").addClass("panel panel-default")
    var panelbody = $("<div>").addClass("panel-body")
    var textp =$("<p>").append("To me, there are two types of music.  Motorhead, and music that isn't as good as Motorhead.  Since I'm not in Motorhead, the music I make is lot lighter and slower.  I'd like think it's a combination of Dick Dale, Type O Negative, and Lee Perry.  I'm primarily a bass player, but have been teaching myself some guitar and keys...");
    var musicDiv=$ ("<div>").addClass("col-md-12");
    var meadow =$("<div>").append('<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3685517600/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://franksmom.bandcamp.com/track/in-the-meadow">In The Meadow by Elie Wohl</a></iframe>')
    var mahalo =$("<div>").append('<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3573504760/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/track=1402739610/transparent=true/" seamless><a href="http://franksmom.bandcamp.com/album/raw">RAW by Frank&#39;s Mom</a></iframe>');
    var alderlake=$("<div>").append('<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3573504760/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/track=3945661995/transparent=true/" seamless><a href="http://franksmom.bandcamp.com/album/raw">RAW by Frank&#39;s Mom</a></iframe>');
    var upsetter=$("<div>").append('<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3573504760/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/track=749080091/transparent=true/" seamless><a href="http://franksmom.bandcamp.com/album/raw">RAW by Frank&#39;s Mom</a></iframe>')
    $(panelbody).append(textp);
    $(panel).append(panelbody);
    $(".target").append(panel).append(musicDiv)
    .append(mahalo)
    .append(meadow)
    .append(alderlake)
    .append(upsetter);
   }
