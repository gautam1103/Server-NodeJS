// Server creation


//1. http module

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) =>{
    console.log("Your request has been made from browser to server");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('Content-type', 'text/html');
    // res.write('<h1>Hello, Coders ! :-)</h1>');
    // res.write('<h2>How you Doing ? :-)</h2>');
    // res.end();


    let path= './views';
    switch(req.url){
        case '/':
            path += '/index.html'
            res.statusCode=200; 
            break;
        case '/about':
            path+='/about.html'
            res.statusCode=200; 
            break;
        case '/about-me':
            res.statusCode=301; 
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '/404.html'
            res.statusCode=404;  
            break;  
    };
    
    
    fs.readFile(path, (err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            //res.write(fileData);
            res.end(fileData);
        }
    })
});
// host, port number, callback function

server.listen(3000, 'localhost', () =>{
    console.log("Server is listening the request on PORT 3000");
});