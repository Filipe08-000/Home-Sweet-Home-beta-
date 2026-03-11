require("dotenv").config()
const { Pool } = require("pg")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.query("SELECT NOW()", (err, res) => {

  if (err) {
    console.error("Erro na conexão:", err.message)
    process.exit()
  }

  console.log("Conectado! Hora do banco:", res.rows)
  process.exit()
})
