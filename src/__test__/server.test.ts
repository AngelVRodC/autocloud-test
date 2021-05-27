import axios from 'axios';
import supertest from 'supertest';

import server from '../index';
import breweriesMock from '../__mocks__';
import { CUSTOM_TOKEN } from '../constants';

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("test server", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({ data: breweriesMock });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("Testing Auth Middleware - UNAUTHORIZED", async () => {
    await supertest(server).get("/breweries")
      .expect(401);
  });

  it("Testing Auth Middleware - SUCCESS", async () => {
    await supertest(server).get("/breweries")
      .set('custom-token', `${CUSTOM_TOKEN}`)
      .expect(200);
  });

  it("Testing breweries endpoint", async () => {
    await supertest(server).get("/breweries")
      .set('custom-token', `${CUSTOM_TOKEN}`)
      .expect(200).then((result) => {
        // the call to the external api must be executed
        expect(mockAxios.get).toBeCalled();
        const { body: data } = result;
        Object.entries(data).forEach(([key, value]) => {
          // Match with OutputInterface
          expect(typeof key).toBe('string');
          expect(Array.isArray(value)).toBe(true);
        })
      });
  });
});
