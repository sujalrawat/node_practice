import express from 'express';
import person from './../models/person.js';

const router = express.Router();

router.post('/', async(req,res) => {
    try{
        const data =  req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.get('/',async(req,res) =>{
    try{
        const data =await person.find();
        console.log("Data fethced");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.get('/:workType',async(req,res) =>{
    try{
        const workType = req.params.workType;
        if(workType=='chef'||workType=='staff'||workType=='waiter'||workType=='manager'||workType=='owner'){
            const workPerson = await person.find({work:workType});
            console.log("Response fetched");
            res.status(200).json(workPerson);
        }else{
            res.status(400).json({message:"Invalid worktype"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.put('/:id',async(req,res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const personIdData = await person.findByIdAndUpdate({_id:personId},updatedPersonData);
        if(!personIdData){
            return res.status(404).json({message:"Person not found"});
        }
        console.log("Data updated");
        res.status(200).json(personIdData); 
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const personId = req.params.id;
        const deletedData = await person.findByIdAndDelete({_id:personId});
        if(!deletedData){
            return res.status(404).json({message:"Person not found"});
        }
        console.log("Data deleted successfully");
        res.status(404).json(deletedData);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

export default router;