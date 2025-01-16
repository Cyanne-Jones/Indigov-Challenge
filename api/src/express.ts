import express from 'express';
import cors from 'cors';
import { getRepresentative } from "./services/representative";
import { getAllConstituents } from "./services/constituents";
const app = express();
const port = 4000;

app.use(cors({
  origin:"*",
  methods:['GET']
}))  // Enable CORS for all routes

app.get('/representative', (req, res) => {
  const representative = getRepresentative(req?.query?.id);
  return res.send(representative)
});

app.get('/constituents', (req, res) => {
  const constituents = getAllConstituents(req?.query?.id);
  return res.send(constituents)
});

app.listen(port, () => {
  console.log(`Running an Express.js server on port ${port}`)
});