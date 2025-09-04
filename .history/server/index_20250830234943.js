const express = require('express')
const app = express()
const pool = require("./db");

app.use(express.json()); 

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/blogs',async (req,res)=>{
    try {
    const result = await pool.query(`
      SELECT b.blog_id, b.title, b.content, u.username, b.created_at
      FROM blogs b
      JOIN users u ON b.user_id = u.user_id
      ORDER BY b.created_at DESC
    `);
    res.status(200).json(result.rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
    // res.status(200).send('hello')
})

app.get('/writers',async(req,res)=>{
    try {
    const result = await pool.query("SELECT * FROM users ORDER BY created_at DESC");
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

app.listen(5001, ()=>{
    console.log("running on port 5001")
})