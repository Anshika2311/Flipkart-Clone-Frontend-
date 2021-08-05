import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//components
import Connection from './database/db.js';
import DeafultData from './default.js';

const app = express()
const PORT = 8000

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

Connection();

app.listen(PORT,(req,res)=>{

    console.log(`Server is successfully running on PORT ${PORT}`)

})

//data to database

DeafultData();

