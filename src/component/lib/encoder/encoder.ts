export const encode = (value: string | number): string => {
  const _value: string = typeof value === 'string' ? value : value.toString();
  
  const _encodedValue :string= encodeURIComponent(_value).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16));
  return _encodedValue;
};
