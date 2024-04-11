import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager','owner','staff']
    }
})

const person = mongoose.model('person',personSchema);

export default person;