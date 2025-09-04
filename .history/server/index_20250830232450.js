const express = require('express')

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})

app.listen(5001, (req,res)=>{
    console.log("running on port 5001")
})