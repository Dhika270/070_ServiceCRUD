import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(
      express.urlencoded({
            extended: true,
      })
)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: 'Dhika202005', //sesuaikan dengan password database masing masing
  port: 5432, //sesuai port masing2
})
