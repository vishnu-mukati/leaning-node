const http = require('http');

// http.createServer((req,res)=>{
//     res.write('<h1>hey this is vishnu</h1>');
//     res.end();
// }).listen(4000);

const server = ((req,res) =>{
    res.write('<h1>hey this is </h1>');
    res.end();
})

http.createServer(server).listen(4000);