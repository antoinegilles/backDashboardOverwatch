const express = require('express')
const app = express()
const fetch = require("node-fetch");


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/get/bar', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar+in+Nantes&key=AIzaSyBHY26uk_J9tlNpTzrsay5DVXEcihryPVs')
        .then(function(response) {
        res.send(response)
        
    })
    .catch(function(error) {
        console.log(error)
    });
    
});
    


app.listen(process.env.PORT || 2000)