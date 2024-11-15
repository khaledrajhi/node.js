const http = require('http');
const fs=require('fs')
console.log("HELLO WORLD")
// http.createServer((req,res)=>{
//   res.write('<h1>Hello Node!!!!</h1>\n');
//   res.end;
// }).listen(3000);
fs.writeFile('welcome.txt','hello node',(err)=>{
  if (err) throw err;
  console.log("file created")

});
console.log("debut")
// fs.readFile('welcome.txt',(err,data)=>{
//   if (err) throw err;
//   else console.log(data.toString())
// })
fs.readFileSync('welcome.txt')

console.log("fin")