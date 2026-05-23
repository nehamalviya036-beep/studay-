require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// SAFE DB CONNECTION
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log("DB Error ❌", err);
  } else {
    console.log("DB Connected ✔️");
  }
});

// TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("API LIVE 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});