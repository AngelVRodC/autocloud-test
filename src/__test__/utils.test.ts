import { snakeCaseToCamelCase } from '../utils'


describe("test utils functions", () => {
  it("Transform snake case to camel case", () => {
    const result = snakeCaseToCamelCase('hello_world');
    const index = result.indexOf('_');
    expect(index).toBe(-1);
    expect(result).toBe('helloWorld');
  });
});