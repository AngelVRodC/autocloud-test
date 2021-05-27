import dotenv from 'dotenv';
dotenv.config();


export const { CUSTOM_TOKEN, BREWERIES_EXTERNAL_API = '' } = process.env;