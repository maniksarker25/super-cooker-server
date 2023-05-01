const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require("cors");
const cheps = require('./data/cheps.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Super cooker running!')
})

app.listen(port, () => {
  console.log(`Supper cook server running on port ${port}`)
})