const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require("cors");
const cheps = require('./data/cheps.json');
const latestRecipes = require('./data/LatestRecipes.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Super cooker running!')
})

app.get('/cheps',(req,res)=>{
    res.send(cheps)
})

app.get('/cheps/:id',(req,res)=>{
  const id = req.params.id;
  console.log(id)
  const selectedChep = cheps.find(c=>c.id == id)
  res.send(selectedChep)
})

app.get('/latest-recipes',(req,res)=>{
  res.send(latestRecipes)
})

app.listen(port, () => {
  console.log(`Supper cook server running on port ${port}`)
})