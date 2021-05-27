import breweriesMock from '../__mocks__';
import {
  sortArrayByAttribute,
  snakeCaseToCamelCase,
  deleteNullAttributes,
  groupArrayByAttribute,
} from '../utils'


describe("test utils functions", () => {
  it("Transform snake case string to camel case", () => {
    const result = snakeCaseToCamelCase('hello_world');
    const index = result.indexOf('_');
    expect(index).toBe(-1);
    expect(result).toBe('helloWorld');
  });
  it("Delete Null Attributes", () => {
    const brewery = breweriesMock[0];
    const result = deleteNullAttributes(brewery);
    const totalNullAttributes = Object.values(result).filter((value) => value === null).length;
    expect(totalNullAttributes).toBe(0);
  });

  it("Sort Array by attribute", () => {
    /* if we order an array from highest to lowest, the first element must be greater than the last*/
    const result = sortArrayByAttribute(breweriesMock, 'id');
    const lastIndex = result.length - 1;
    expect(result[0].id).toBeGreaterThan(result[lastIndex].id);
  });

  it("Group Array by attribute", () => {
    /* If all the elements of the array have a unique id when grouped by id, the number of attributes
     * of the resulting object must be equal to the length of the original array
    */
    const result = groupArrayByAttribute(breweriesMock, 'id');
    const totalIds = Object.keys(result).length;
    expect(totalIds).toEqual(breweriesMock.length);
  });
});