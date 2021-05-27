import axios, { AxiosResponse } from 'axios'
import { BREWERIES_EXTERNAL_API } from '../constants';

export const getBreweries = async (): Promise<BreweryApiInterface[]> => {
  return axios.get(BREWERIES_EXTERNAL_API)
    .then((response: AxiosResponse) => {
      return response.data as BreweryApiInterface[];
    });
}