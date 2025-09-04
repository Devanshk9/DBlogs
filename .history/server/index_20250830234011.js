const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/blogs',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/writers',(req,res)=>{
    res.status(200).send('hello')
})

app.listen(5001, (req,res)=>{
    console.log("running on port 5001")
})