const express = require('express')
const app = express()
const pool = require("./db");
const cors = require('cors')
app.use(express.json()); 

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000"], 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})

app.get('/api/blogs',async (req,res)=>{
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
app.get("/api/blogs/:id", async (req, res) => {
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

app.get('/api/writers',async(req,res)=>{
    try {
    const result = await pool.query("SELECT * FROM users ORDER BY created_at DESC");
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})
app.get('/api/writers/:id',async(req,res)=>{
  try {
    const { id } = req.params;
    const result = await pool.query(`
      SELECT b.blog_id, b.title, b.content, u.username, b.created_at
      FROM blogs b
      JOIN users u ON b.user_id = u.user_id
      WHERE u.user_id = $1
    `,[id]);
    res.status(200).json(result.rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
    // res.status(200).send('hello')
})

app.listen(5001, ()=>{
    console.log("running on port 5001")
})