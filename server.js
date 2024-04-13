import express from 'express';
import dotenv from 'dotenv';
import db from './db.js'
import bodyParser from 'body-parser';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.send("Welcome to my backend server.");
})

import personRoutes from './routes/personRoutes.js';

app.use('/person',personRoutes);

app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})

//hello