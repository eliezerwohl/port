var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var session= require ("express-session");
bodyParser= require('body-parser');

app.use("/javascript", express.static("public/javascript"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/html", express.static("public/html"));


app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: "secret phrase",
  cookie: {maxAge:10000},
  saveUninitialized: true,
  resave:false,

}));

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


app.get('/guestbook', function(req, res, next) {
  var sess = req.session;
res.sendFile(process.cwd() + "/public/html/guestbook.html"); 

});

app.post('/guestbook', function(req, res) {
console.log(req.body.password)
console.log(req.body.message)
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