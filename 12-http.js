//http module (it allows to setup a web server) we will create our own server and set up the API and we will use abstraction on the top of http module which is a package called express.

const http = require('http')

//req parameter is incoming request from the client for your webpage on web browser this res object will contain  all info about method and all data and res object contains what we're sending back.
const server = http.createServer((req,res)=>{

   //console.log(res)   //res obj is giant obj
   if(req.url  === '/'){  //url property provides us with the url i.e address (/,/about,etc)
      res.end('welcome to our home page')
   }
   else if(req.url === '/about'){
      res.end('here is our short history')
   }
    res.end(`
    <h1> Oops! </h2>
    <p>We can't seem to find the page you're looking for'</p>
    <a href="/">back home</a>
    `)
    

   // res.write('welcome to our home page')  //returns the response
  // res.end()   //ends our request
})

//listen method defines that which port our server will listen to.
//.listen(5000)
server.listen(5000)   // created first website
