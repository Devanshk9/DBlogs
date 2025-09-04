const express = require('express')
const app = express()
const pool = require("./db");

app.use(express.json()); 

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/blogs',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/writers',(req,res)=>{
    res.status(200).send('hello')
})

app.listen(5001, ()=>{
    console.log("running on port 5001")
})