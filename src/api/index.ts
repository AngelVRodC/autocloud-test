import axios, { AxiosResponse } from 'axios'

export const getBreweries = async (): Promise<BreweriesApiInterface[]> => {
  return axios.get('https://api.openbrewerydb.org/breweries')
    .then((response: AxiosResponse) => {
      return response.data as BreweriesApiInterface[];
    });
}