import mongoose from "mongoose";
const taskschema = new mongoose.Schema({ //mongoose's schema makes it so that it can be required for each object to have a set few properties.
    name:{type:String,required:[true,'must provide name'],trim:true},//one of the properties is name, type string, required, if not given output must provide name, trim whitespace 
    completed:{type:Boolean,required:[true,'must provide completion status'],default:false,} //by default it is set to false unless prompted otherwise
})

export const Task= mongoose.model('Task',taskschema)//schema is the blueprint for what a Task document. a model is mongoose's representation of a collection in mongodb. Task is essentially the collection of documents that follows schema schematic. technically its a model but a model is what represents a collection.