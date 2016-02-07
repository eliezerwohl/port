// get all of the delete buttons


document.getElementById("myBtn").addEventListener("click", countdown);
function countdown() {
setTimeout(function(){ 
prompt("you click on" + " " + counter + " " + "heads");   
}, 20000);

}

var counter = 0;
function countup() {
counter = counter + 1;
}


function handleClick(e)
{
    countup();
    e.target.removeEventListener('click', handleClick);
}

var images = document.querySelectorAll('img'); 
for (var i = 0; i < images.length; i++) 
{
    images[i].addEventListener('click', handleClick);
}

