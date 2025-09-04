const express = require('express')
const app = express()
const pool = require("./db");
const cors = require('cors')
app.use(express.json()); 

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.get('/',corsOptions(),(req,res)=>{
    res.status(200).send('hello')
})

app.get('/blogs',corsOptions(),async (req,res)=>{
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
app.get("/blogs/:id",corsOptions(), async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT b.blog_id, b.title, b.content, u.username, b.created_at
       FROM blogs b
       JOIN users u ON b.user_id = u.user_id
       WHERE b.blog_id = $1`,
      [id]
    );

    if (result.rows.length === 0) return res.status(404).json({ error: "Blog not found" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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