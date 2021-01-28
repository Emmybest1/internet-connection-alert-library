/*************
 * @decode you can use this function to decode an encoded uri & strings
 * usecase:decode("%20%DD%40%33")
 *************/

export const decode: (arg: string) => string = (value: string): string => {
  return window.decodeURIComponent(value);
};
