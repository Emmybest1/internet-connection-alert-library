import {encode} from './encode.lib';

describe('Test for encode function', () => {
  test('should return encoded string and pass', () => {
    expect(encode('test test test')).toContain('%');
  });
});
