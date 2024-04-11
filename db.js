import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected',() =>{
    console.log("Mongo DB server connected");
})

db.on('disconnected',() =>{
    console.log("Disconnected MongoDB");
})

db.on('error',() =>{
    console.log("Mongo DB server error");
})

export default db;