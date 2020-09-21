const express = require("express");
const bodyParser=require("body-parser"); // npm install body-parser
const app= express();
app.use(bodyParser.urlencoded({extended: true})) // to use body-parser to read data received using post
app.get("/bmi",function(req, res) {
  res.sendFile(__dirname+"/bmi.html"); //sendFile() is used to send file as a response to get request
                                        //__dirname gives the current path
});

app.post("/bmi", function(req,res) {
  //console.log(req.body);
  var w=parseFloat(req.body.weight);
  var h=parseFloat(req.body.height);
  var result=w/(h*h);

  res.send("Your BMI is : " + result);
})
app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
