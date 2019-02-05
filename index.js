const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.post('/:platform/:reg/:tag', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  const overwatch = require('overwatch-api');
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
    


app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})