
import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import { UniqueTokenStrategy } from 'passport-unique-token';

import { CUSTOM_TOKEN } from '../constants';

const strategyOptions = {
  tokenHeader: 'custom-token',
  failOnMissing: true
};

passport.use(
  new UniqueTokenStrategy(strategyOptions, (token: string, done) => {

    if (token === CUSTOM_TOKEN) {
      return done(null, {});
    }
    return done({ name: 'UNAUTHORIZED', message: 'Incorrect token credentials'});
  }),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('token', 
    (error, user, x) => {
      if (error || !user) {
        res.status(401).send(error);
      } else {
        next();
      }
  })(req, res, next);
}