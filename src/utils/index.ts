export const snakeCaseToCamelCase = (str: string) =>
  str.replace(/([-_]\w)/g, g => g[1].toUpperCase());

export const objectKeysInSnakeCaseToCamelCase = (input: any) => {
  let newObject = {};
  Object.keys(input).forEach((key: string) => {
    newObject = {
      ...newObject,
      [snakeCaseToCamelCase(key)]: input[key]
    };
  });
  return newObject;
}

export const deleteNullAttributes = (input: any) => {
  const output = { ...input };
  Object.keys(output).forEach((key: string) => {
    if (output[key] === null) {
      delete output[key];
    }
  });
  
  return output;
};

export const groupArrayByAttribute = (array: any[], attribute: string) => {
  return array.reduce((rv, x) => {
    (rv[x[attribute]] = rv[x[attribute]] || []).push(x);
    return rv;
  }, {});
};


export const sortArrayByAttribute = (array: any[], attribute: string) => {
  return array.sort((a, b) => {
    if (a[attribute] > b[attribute])
      return 1;
    if (a[attribute] < b[attribute])
      return -1;
    return 0;
  });
}

