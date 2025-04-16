const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');

require('dotenv').config();

const quotesRoute = require("./api/quoteRoute");

// app.use(cors());
app.use(cors({origin:['http://localhost:5173']}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI )
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("DB not CONNECTED" , err)})


app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello page"})
})


 //seedDB()
app.use(quotesRoute);


const port = process.env.PORT || 8080;
app.listen(port , ()=>{
    console.log("server connected at port : 8080")
})
