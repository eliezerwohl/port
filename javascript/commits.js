$(document).ready(function(){
  $(document).on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
       url: $(this).attr("href"),
      // console.log($this);
success: function(commits){
        $("tbody").empty();

        for(var i = 0; i < commits.length; i++){

          $("tbody").append(buildTableRow(commits[i]));
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });

    function buildTableRow(commitData){

      var authorTd = $("<td>").append(commitData.author.login);
      var messageTd = $("<td>").append(commitData.commit.message);
      var dateTd = $("<td>").append(commitData.commit.author.date);
      var htmlUrl =$("<a>").attr("href", url).append("<td>").append(commitData.html_url)

      var commitLink =$("<tr>") 
    
        .append(authorTd)
        .append(messageTd)
        .append(dateTd)
        .append(htmlUrl);
        return commitLink
    }
  });
});