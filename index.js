const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})


app.listen(4000);

// app.get('',(req,res)=>{
//     res.send('Hello,this is a home page');
// })

// app.get('/about',(req,res)=>{
//     res.send('Hello,this is a about page');
// })

// app.get('/help',(req,res)=>{
//     res.send('welcome,this is a help page');
// })

// app.listen(2000);

//  const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'crud');

// const filepath = `${dirPath}/file.txt`;

// //Create file
// fs.writeFileSync(filepath,'this is the first created file');

//Read files data 
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// })

//update file
// fs.appendFile(filepath,'and the name is crud',(err)=>{
//     if(!err)console.log('file updated');
// })

//rename file
// fs.rename(filepath,`${dirPath}/testing.txt`,(err)=>{
//     if(!err)console.log('rename successfull');
// })

//delete file

// fs.unlinkSync(`${dirPath}/testing.txt`);

// const dirPath = path.join(__dirname,"files");

// // create multiples files in a folder
// for(let i=0;i<5;i++){
//     // fs.writeFileSync(dirPath+`/files${i}.txt`,'this is a demo file');
//     fs.writeFileSync(dirPath+ "/hello" +i+".txt" , "this is a demo file");
// }

// //Read and list multiple files

// fs.readdir(dirPath,((err,files)=>{
//     files.forEach((item)=>{
//         console.log('file name is',item);
//     })
// }))

// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if (input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid input');
// }


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


