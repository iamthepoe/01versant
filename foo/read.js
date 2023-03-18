const fs = require("node:fs");


fs.readFile("./something.json", {encoding: 'utf-8'}, function(err, data){
  if(err) return err;
  console.log(data);
});
