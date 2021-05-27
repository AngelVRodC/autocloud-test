import cors from 'cors';
import passport from 'passport';
import express, { Request, Response } from 'express';

import getBreweries from './functions';
import { authMiddleware } from './middlewares';

const server = express();
server.use(passport.initialize());
server.use(authMiddleware);

server.get('/breweries/',async (req: Request, res: Response) => {
  const result = await getBreweries();
  res.status(200).send(result);
});

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.listen(3000, () => {
  console.log('App ready')
})

export default server;