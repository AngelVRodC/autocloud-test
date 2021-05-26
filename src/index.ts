import cors from 'cors';
import express from 'express';
import { getBreweries } from './api';

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
  const result = await getBreweries();
  console.log(result);
  res.status(200).send(result);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000, () => {
  console.log('app ready')
})