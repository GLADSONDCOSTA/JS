var fs = require('fs');
var readme = fs.readFileSync('index.html','utf-8');
console.log(readme);

var fs = require('fs');
var readme=fs.readFileSync('index.html','utf-8');
fs.writeFileSync('index1.html',readme);

var fs = require('fs');
console.log("Befor Apending",fs.readFileSync("index.html","utf8"));
fs.appendFile("index.html","World",(err)=>{
if (err){
    console.log(err);
}else{
    console.log("After Apending",fs.readFileSync("index.html","utf8"));
}
});