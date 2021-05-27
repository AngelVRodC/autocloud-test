import supertest from 'supertest';

import server from '../index';
import { CUSTOM_TOKEN } from '../constants';


describe("test server", () => {
  it("Testing Auth Middleware - UNAUTHORIZED", async () => {
    await supertest(server).get("/breweries")
      .expect(401);
  });

  it("Testing Auth Middleware - SUCCESS", async () => {
    await supertest(server).get("/breweries")
      .set('custom-token', `${ CUSTOM_TOKEN }`)
      .expect(200);
  });  
});
