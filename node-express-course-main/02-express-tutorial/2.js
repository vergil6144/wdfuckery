const express = require('express')
const app = express()
let {people} = require("./data")

app.use(express.static('./methods-public')) //runs files stored in methods-public folder by adding it to static assets
app.use(express.urlencoded({extended:false})) //no fucking clue
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
    //res.send(people)
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    console.log(name)
    console.log(req.body)
    // console.log(req)
    if(!name){
        return res.json({success:false,msg:'providename'})
    } 
    return res.status(201).send({success:true,person:name})
})

app.post('/posty',(req,res)=>{
    const {name} = req.body
    //res.status(201).json({success:true,data:name})
    res.send(`hi${name}`)
})

app.post('/login',(req,res)=>{ 
    const {name} = req.body //bcos of the form name being name
    if(name){
        console.log(name)
        res.status(200).send(`hi ${name}`)
    } else{
        res.status(401).send('provide credentials')
    }
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(id,name)
    res.status(200).send(id,name)
})

app.listen(5000,()=>{
    console.log('serverlistening')
})