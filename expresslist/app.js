import { connectDB } from './db/con.js'
import express from 'express'
const app = express()
import {router} from './routes/tasks.js'
import('dotenv')
import { Task } from './schem.js'
app.use(express.json())//so we get text in req.body

app.use('/api/v1/tasks',router) //any route defined inside of router will be prefixed with /api/v1/tasks


app.get('/',(req,res)=>{
    res.send('wzg')
})


const port = 5000
const start = async()=>{
    try{ //try connecting to the server, if it doesn't work don't bother listening on the port
        await connectDB(process.env.constring)//constring is in .env, returns promise
        app.listen(port,console.log(`listening on ${port}`))
    }catch(error){
        console.log(error)
    }
}
start()