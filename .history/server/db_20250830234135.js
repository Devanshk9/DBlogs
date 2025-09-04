const { Pool } = require("pg");

const pool = new Pool({
  user: "apple",             
  host: "localhost",       
  database: "dvlogs",        
  password: "",             
  port: 5432,              
});

module.exports = pool;
