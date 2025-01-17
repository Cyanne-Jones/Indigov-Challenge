import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getRepresentative } from "./services/representative";
import { getAllConstituents, createConstituent } from "./services/constituents";
import { downloadCSV } from "./services/downloadCSV";
const app = express();
const port = 4000;

app.use(cors({
  origin:"*",
  methods:['GET', 'POST']
}));

app.use(bodyParser.json());

app.get('/representative', (req, res) => {
  const representativeId = req?.query?.id;
  const representative = getRepresentative(representativeId);
  return res.send(representative);
});

app.get('/constituents', (req, res) => {
  const representativeId = req?.query?.id;
  const constituents = getAllConstituents(representativeId);
  return res.send(constituents);
});

app.post('/addConstituent', (req, res) => {
  const constituent = req?.body;
  const constituents = createConstituent(constituent);
  return res.send(constituents);
});

app.get('/downloadCSV', (req, res) =>  {
  const sortBy = req?.query?.sortBy;
  const representativeId = req?.query?.id;

  const csv = downloadCSV(representativeId, sortBy)
  res.header('Content-Type', 'text/csv');
  return res.send(csv);
})

app.listen(port, () => {
  console.log(`Running an Express.js server on port ${port}`)
});