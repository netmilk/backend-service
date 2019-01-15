require('dotenv').config();
var express = require('express');

var app = express()
var host = process.env['BACKEND_API_DESIGN_API_HOST']
var port = host.split(":")[1] || 8000

// Server the API Specification in the deiscovery endpoint
var specPath = "api-landscape/provide/backend-api-design/openapi.json";
app.use("/discovery/spec/openapi.json", express.static(specPath));

app.get("/companies", function(req, res){
 res.json(
   [
     {"name": "ACME"} // required property
   ]
 );
})

app.get("/persons", function(req, res){
 res.json(
   [
     { "username": "netmilk"} // required property
   ]
 )
})

app.listen(port, function(){
  console.log("Listening on: " + host);
});
