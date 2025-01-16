import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getRepresentative } from "./services/representative";
import { getAllConstituents, createConstituent } from "./services/constituents";
const app = express();
const port = 4000;

app.use(cors({
  origin:"*",
  methods:['GET', 'POST']
}));

app.use(bodyParser.json());

app.get('/representative', (req, res) => {
  const representative = getRepresentative(req?.query?.id);
  return res.send(representative);
});

app.get('/constituents', (req, res) => {
  const constituents = getAllConstituents(req?.query?.representativeId);
  return res.send(constituents);
});

app.post('/addConstituent', (req, res) => {
  const constituent = req?.body?.constituent;
  const constituents = createConstituent(constituent);
  return res.send(constituents);
});

app.listen(port, () => {
  console.log(`Running an Express.js server on port ${port}`)
});