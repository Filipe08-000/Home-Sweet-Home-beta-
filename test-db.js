require("dotenv").config()
const { Pool } = require("pg")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res.rows)
  process.exit()
})
