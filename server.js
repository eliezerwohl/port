var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use("/javascript", express.static("public/javascript"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});