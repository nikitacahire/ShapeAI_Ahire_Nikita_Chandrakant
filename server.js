const express = require("express");
const app = express("Body-parser");

const app = express();
app.use()(bodyParser.urlencoded({entended: true}));


app.get("/", function(req, res){
  res.sendFile(_dirname+"/index.html");
});

app.get("/", function(req, res){
  var n1 = req.body.num1;
  var n2 = req.body.num2;
  var result = n1+n2;
  res.Send("the answer is " + result);
});


app.listen(3000, function(){
  console.log("Server has started on port 3000");
  });