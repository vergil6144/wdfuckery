const http = require('http'); //imports http
const server = http.createServer((req,res)=>{
    //request and response
    console.log('-----------------------------------------------------------------')
    console.log(req.url)
    if(req.url ==='/'){
        res.end('sex')
    }
    if(req.url==='/abt'){
        res.end('about us')
    }
    res.end(`<h1>sex</h1>`) //this is what it goes to when a non existent address is put
})
server.listen(5000)
