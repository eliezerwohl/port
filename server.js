var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
bodyParser= require('body-parser')


app.use(bodyParser.urlencoded({extended:false}));
app.use("/javascript", express.static("public/javascript"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/html", express.static("public/html"));


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/html/index.html");
});

app.get("/clicky", function(req, res) {
  res.sendFile(process.cwd() + "/public/html/clicky.html");
});

app.get('/user/:userName', function(req, res) {
 console.log (req.params.userName)
res.send(req.params.userName)
});


app.get('/guestbook', function(req, res) {
res.sendFile(process.cwd() + "/public/html/guestbook.html"); 
});

app.post('/guestbook', function(req, res) {
res.redirect("/guestBookMessage");

});

app.get("/guestBookMessage", function(req, res){
  res.sendFile(process.cwd() + "/public/html/guestMessage.html")
});

app.get("/rps", function(req, res) {
  res.sendFile(process.cwd() + "/public/html/rps.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});