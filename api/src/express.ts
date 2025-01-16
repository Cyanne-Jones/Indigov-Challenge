import express from 'express';
import cors from 'cors';
import { getRepresentative } from "./services/representative";
const app = express();
const port = 4000;

app.use(cors({
  origin:"*",
  methods:['GET']
}))  // Enable CORS for all routes

app.get('/representative', (req, res) => {
  const rep = getRepresentative(req?.query?.id);
  return res.send(rep)
});

app.listen(port, () => {
  console.log(`Running an Express.js server on port ${port}`)
});