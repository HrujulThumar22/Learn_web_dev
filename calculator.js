const express = require("express");
const bodyParser=require("body-parser"); // npm install body-parser
const app= express();
app.use(bodyParser.urlencoded({extended: true})) // to use body-parser to read data received using post
app.get("/",function(req, res) {
  res.sendFile(__dirname+"/index.html"); //sendFile() is used to send file as a response to get request
                                        //__dirname gives the current path
});

app.post("/", function(req,res) {
  //console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;

  res.send("The result of the calculation is : " + result);
})
app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
