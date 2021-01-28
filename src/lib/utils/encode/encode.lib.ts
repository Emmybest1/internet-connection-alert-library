/****************
 * @encode this is suitable for encoding strange uri and also inputs to be submitted to the server
 * usecase: encode("& % \uD800\uDFFF");
 ***************/
export const encode = (value: string | number): string => {
  const _value: string = typeof value === 'string' ? value : value.toString();

  const _encodedValue: string = encodeURIComponent(_value).replace(
    /[!'()*]/g,
    (c) => '%' + c.charCodeAt(0).toString(16)
  );
  return _encodedValue;
};
