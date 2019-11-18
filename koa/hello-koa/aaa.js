 var http = require('http');
 var fs = require('fs');
 var url = require('url');
 
 http.createServer(function(request,response){
     var pathname = url.parse(request.url).pathname;
     console.log('request for' + pathname + 'received.');
     fs.readFile(pathname.substr(1),function(err,data){
         if(err){
             console.log(err.stack);
             response.writeHead(404,{'Content-Type': 'text/html'});
         }else{
             response.writeHead(200,{'Content-Type': 'text/html'})
             response.write(data.toString());
         }
         response.end();
     })
 }).listen(8081);
 console.log('server runing at http://127.0.0.1:8081/')