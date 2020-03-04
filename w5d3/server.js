const express = require("express");
const bodyParser = require("body-parser");
const { Pool, Client } = require('pg')
const dbHelpers = require('./helpers/feb_helpers')
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env

const client = new Client({
  user: 'labber',
  host: 'localhost',
  database: 'bar',
  password: 'labber',
  port: 5432
})
client.connect()
const { selectAllDrinks } = dbHelpers(client)

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/drinks', (req,res) => {
  selectAllDrinks.then(dbRes => res.json(dbRes.rows))
})

app.get('/drinks/:drinkId', (req,res) => {
  client
    .query('SELECT * FROM drinks WHERE id = $1', [req.params.drinkId])
    .then(dbRes => {
      const response = dbRes.rowCount ? dbRes.rows[0] : ["NOTHING TO SEE HERE YOU DRUNK"];
      res.json(response)
    })
    .catch(err => res.json(err))
})

app.get('/drinks/new', (req, res) => {
  res.render()
})

app.post('/drinks', (req,res) => {
  const {name, price, volume, spirit_type_id} = req.body

  client
    .query(`INSERT INTO drinks (name, price, volume, spirit_type_id) VALUES ($1, $2, $3, $4) RETURNING *`, [name, price, volume, spirit_type_id])
    .then(dbRes => res.json(dbRes))
    .catch(err => res.json(err))
})


app.listen(port, () => console.log(`Server listening on port ${port}`));
