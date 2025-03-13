const fs = require('fs');

const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if (input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log('invalid input');
}


// const chalk = require('chalk');
 
// console.log(chalk.red('Hello World!'));

// // const http = require('http');
// // // const chalk = require('chalk');


// // // http.createServer((req,res)=>{
// // //     res.write('<h1>hey this is vishnu</h1>');
// // //     res.end();
// // // }).listen(4000);

// // const server = ((req,res) =>{
// //     res.write('<h1>hey this is </h1>');
// //     res.end();
// // })

// // http.createServer(server).listen(4000);

// const http = require('http');
// const data = require('./APIdata');

// const server = http.createServer((req,res)=>{
//     //Header of the response 
//     res.writeHead(200,{'Content-type' : 'application/json'});
//     // Body of the response
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4000);


