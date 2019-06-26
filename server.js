var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var BusinessEntity= [
    {id:1, name:"Pranjal",description:"CEO",Worth:500, Years:12},
    {id:2, name:"Prashant",description:"Analyst",worth:1500, years:16},
    {id:3, name:"Dipesh",description:"CTO",worth:5000, years:17},
    {id:4, name:"Lily",description:"marketing head",worth:400, years:25},
    {id:5, name:"Kanika",description:"Business head",worth:7500, years:4},
  ];
  res.send(BusinessEntity);
};

// setting router to map requests  with controllers
app.get ('/BusinessEntity',BusinessEntityController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})