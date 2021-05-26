export const snakeToCamelCase = (str: string) =>
  str.replace(/([-_]\w)/g, g => g[1].toUpperCase());