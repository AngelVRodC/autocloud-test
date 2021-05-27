import cors from 'cors';
import express from 'express';
import passport from 'passport';

import { executePipeline } from './functions';
import { authMiddleware } from './middlewares';

const server = express();
server.use(passport.initialize());
server.use(authMiddleware);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.get('/breweries/', executePipeline);


server.listen(3000, () => {
  console.log('Server ready');
})

export default server;