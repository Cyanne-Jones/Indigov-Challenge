const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({
  origin:"*",
  methods:['GET']
}))  // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/kittens', (req, res) => {
  console.log('GET /kittens');
  res.send({ kittens: ['Fluffy', 'Whiskers', 'Paws'] });
});

app.listen(port, () => {
  console.log(`Running an Express.js server on port ${port}`)
});