const express = require("express");

const app= express();

app.get("/",function(req, res) {
  console.log(req);
  res.send("<h1>Hello<h1>");
});
app.get("/contact",function(req, res) {
  res.send("Contact me at: hrujul.a.thumar@gamil.com");
});
app.get("/about",function(req, res) {
  res.send("I am upcoming Deutsche Bank Intern.");
});
app.get("/hobbies",function(req, res) {
  res.send("Basketball");
});
app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
