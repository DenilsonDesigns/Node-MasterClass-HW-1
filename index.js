//PRIMARY FILE

//DEPENDENCIES
const http = require('http');
const url = require('url');
const config = require('./config');

//START SERVER
const server = http.createServer((req, res)=>{
   //GET URL AND PARSE
   const parsedUrl = url.parse(req.url, true);

   //GET PATH FROM URL
   const path = parsedUrl.pathname;
   const trimmedPath = path.replace(/^\/+|\/+$/g,'');
   console.log(`Rec. request on ${trimmedPath}`);
   //GET THE QUERY STRING AS AN OBJECT
   const queryStringObject = parsedUrl.query;

   if(trimmedPath=== 'hello'){
      res.end(JSON.stringify('Hello world!'));
   }else{
      res.end(JSON.stringify('404 not found'));
   }
   
   
});


//LISTEN TO HTTP PORT
server.listen(config.httpPort, ()=>{
   console.log(`The server is listening on port ${config.httpPort}`);
})