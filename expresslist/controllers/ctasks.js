import { Task } from "../schem.js"

export const getall = async (req,res)=>{
    try{
        const tasks= await Task.find({})//returns all tasks
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
export const maketask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)//create a new task with the details provided in the req body
        res.status(201).json({"message":task})
    } catch(error){
        res.status(500).json({msg:error})
    }

}

export const gettask = async (req,res)=>{
    try{
        const {id:taskid} = req.params//normal destructuring but we're telling it to use taskid as alias
        const task = await Task.findOne({_id:taskid})
        if(!task){
            return res.status(404).json({message:"no task with id"})//return is there so that the code beneath does not get executed
        }
        res.status(200).json({task})
        //res.send({id :req.params.id})
    } catch(err){
        res.status(500).json({err})
    }
}
export const updatetask = async (req,res)=>{
    try{
        const {id:taskid} = req.params
        const task = await Task.findOneAndUpdate({_id:taskid},req.body,{
            new:true,//return the new item
            runValidators:true//run the checking to ensure it still meets the requirements of the schema
        })//req.body contains the new info to be added. third param is options
        if(!task){
            res.status(404).json({message:"no task with that id"})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}
export const deltask = async (req,res)=>{
    try{
        const {id:taskid} = req.params
        const task = await Task.findOneAndDelete({_id:taskid})//_id is special, it is the default key generated for each doc, hence the _, to distinguish from user-defined shit.
        if(!task){
            return res.status(404).json({message:"no task with id"})
        }
        res.status(200).json({task})
    } catch(err){
        res.status(500).json({err})
    }
}