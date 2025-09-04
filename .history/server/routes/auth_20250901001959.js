const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET ;

// ===== Helper: Send OTP =====
async function sendOtpEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { 
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It will expire in 10 minutes.`
  });
}

// ===== Signup =====
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if email already exists
    const exists = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if (exists.rows.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry

    await pool.query(
      `INSERT INTO users (username, email, hashed_password, otp, otp_expiry, is_verified)
       VALUES ($1, $2, $3, $4, $5, false)`,
      [username, email, hashedPassword, otp, expiry]
    );

    // send OTP
    await sendOtpEmail(email, otp);

    res.json({ message: "Signup successful. Verify OTP sent to your email." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Signup failed " });
  }
});

// ===== Verify OTP =====
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const result = await pool.query(
      `SELECT * FROM users WHERE email=$1 AND otp=$2 AND otp_expiry > NOW()`,
      [email, otp]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    await pool.query(
      `UPDATE users 
       SET otp=NULL, otp_expiry=NULL, is_verified=true 
       WHERE email=$1`,
      [email]
    );

    res.json({ message: "OTP verified successfully. You can now log in." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "OTP verification failed" });
  }
});

// ===== Login =====
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = result.rows[0];

    if (!user.is_verified) {
      return res.status(403).json({ error: "Please verify your email before login." });
    }

    const match = await bcrypt.compare(password, user.hashed_password);
    if (!match) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // generate JWT
    const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      token,
      user: { id: user.user_id, username: user.username, email: user.email }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Login failed" });
  }
});

// // ===== Example Protected Route =====
// router.get("/me", async (req, res) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.status(401).json({ error: "Missing token" });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await pool.query(
//       `SELECT user_id, username, email FROM users WHERE user_id=$1`,
//       [decoded.userId]
//     );
//     res.json(user.rows[0]);
//   } catch (err) {
//     res.status(403).json({ error: "Invalid token" });
//   }
// });

module.exports = router;
