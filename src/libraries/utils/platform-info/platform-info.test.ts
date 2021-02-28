import {system, browser} from './platform-info.lib';

describe('Test for platform-info.test.ts', () => {
  test('should check if browser is firfox and version defined', () => {
    expect(browser.name).toContain('Firefox');
    expect(browser.version).toBeDefined();
  });

  test('should pass if system os is undefined because this is runnit in headless mode and can only detect system os with the help of some realtime browser helpers', () => {
    expect(system.os).toBeUndefined();
    expect(system.version).toBeDefined();
  });
});
