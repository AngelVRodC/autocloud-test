import cors from 'cors';
import passport from 'passport';

import express, { Request, Response} from 'express';
import getBreweries from './functions';
import { authMiddleware } from './middlewares';

const app = express();
app.use(passport.initialize());
app.use(authMiddleware);

app.get('/breweries/',async (req: Request, res: Response) => {
  const result = await getBreweries();
  res.status(200).send(result);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000, () => {
  console.log('App ready')
})