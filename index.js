const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   
    if(req.url=='/'){
        res.end('Home page called');
    }else if(req.url=='/about'){
        res.end('About page called');
    }else if(req.url=='/contact'){
        res.end('contact page called');
    }else if(req.url=='/userapi'){
        fs.readFile('./UserApi/userapi.json','utf-8',(err,data)=>{
            console.log(data);
            res.end(data);
        });
       
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('No page found');
    }
});

server.listen('8000','127.0.0.1',()=>{
    console.log('server listne request');
});