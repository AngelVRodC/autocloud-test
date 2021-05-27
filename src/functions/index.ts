import { Request, Response } from 'express';

import {
  breweriesWithoutNullAttributes,
  breweriesArrayWithCamelCaseAttributes,
  groupBreweriesByStateAndSortByCreatedAt
} from './pipeline-functions';
import { getBreweries } from '../api';

export const executePipeline = async (req: Request, res: Response) => {

  // get the breweries from api
  const apiBreweriesArray: BreweryApiInterface[] = await getBreweries();
 
  // Step 1 Breweries without null attributes
  const breweriesETLStep1 = breweriesWithoutNullAttributes(apiBreweriesArray);

  // Step 2 - Breweries array with camel case properties
  const breweriesETLStep2 = breweriesArrayWithCamelCaseAttributes(breweriesETLStep1);

  // Step - 3 Group by state an order by date
  const breweriesETLStep3 = groupBreweriesByStateAndSortByCreatedAt(breweriesETLStep2);

  // TODO: Step 4 - If the brewery have coordinates set the region

  const output: OutputInterface = breweriesETLStep3;

  res.status(200).send(output);
}