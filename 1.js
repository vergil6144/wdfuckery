// const fs = require('fs').promises
// const util = require('util')
// const readfilep = util.promisify(fs.readFile)

// const gettext = path =>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf8',(err,result)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(result)
//             }
//         })
//     })
// }

// // gettext('./wd14/thing.txt').then(result=>console.log(result)).catch(err=>console.log(err))
// const start = async() =>{
//     try{
//         // const first = await gettext('./wd14/thing.txt')
//         const first = await fs.readFile('./wd14/thing.txt','utf8')
//         console.log(first)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// start()

// const EventEmitter = require('events')
// const em = new EventEmitter()
// em.on('response',()=>{
//     console.log('new')
// })
// em.emit('response')

// const http = require('http')
// const server = http.createServer()
// server.on('request',(req,res)=>{
//     res.end('welcome')
// })
// server.listen(5000)
const auth = require('./auth')
const express = require('express')
const app = express()
const people = require('./data')
console.log(people)
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    'server is listening'
})