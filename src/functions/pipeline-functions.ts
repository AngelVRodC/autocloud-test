import {
  deleteNullAttributes,
  sortArrayByAttribute,
  groupArrayByAttribute,
  objectKeysInSnakeCaseToCamelCase,
} from '../utils';

export const breweriesWithoutNullAttributes = (array: BreweryApiInterface[]) =>
  array.map((element) => deleteNullAttributes(element));


export const breweriesArrayWithCamelCaseAttributes = (array: GenericObjectInterface[]) =>
  array.map((element) => objectKeysInSnakeCaseToCamelCase(element));


export const groupBreweriesByStateAndSortByCreatedAt = (array: GenericObjectInterface[]): OutputInterface => {
  let result = groupArrayByAttribute(array, 'state');
  Object.keys(result).forEach((key: string) => {
    const sortedArray: BreweryCustomInterface[] = sortArrayByAttribute(result[key], 'createdAt');
    result[key] = sortedArray;
  });

  return result;
};
