import {decode} from './decode.lib';

describe('Test for decode function', () => {
  test('should decode and pass', () => {
    expect(decode('http%3A%2F%2Fwww.mysite.com%2Fa+file+with+spaces.html')).not.toContain('%');
  });
});
