import { getBreweries as getBreweriesFromApi } from '../api';
import {
  deleteNullAttributes,
  sortArrayByAttribute,
  groupArrayByAttribute,
  objectKeysInSnakeCaseToCamelCase,
} from '../utils';

const getBreweries = async () => {

  // get the breweries from api
  const apiResult = await getBreweriesFromApi();
 
  // Delete the null attributes
  let output = apiResult.map((element) => deleteNullAttributes(element));

  // transform the snake case attributes to camel case
  output = output.map((element) => objectKeysInSnakeCaseToCamelCase(element));

  // Group by state
  output = groupArrayByAttribute(output, 'state');

  // Order By Date

  Object.keys(output).forEach((key: any) => {
    const sortedArray = sortArrayByAttribute(output[key], 'createdAt');
    output[key] = sortedArray;
  });

  return output;
}

export default getBreweries;