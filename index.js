const express = require('express')
const app = express()
const overwatch = require('overwatch-api');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.post('/:platform/:reg/:tag', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  var platform = req.params.platform;
  var reg = req.params.reg;
  var tag = req.params.tag;

  console.log(platform + " " + reg + " "+ tag) 

  overwatch.getProfile(platform, reg, tag, (err, json) => {
    if (err) console.error(err);
    
    console.log(json)
    res.send(json);
  });
});
    


app.listen(process.env.PORT || 2000)