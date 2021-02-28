const _rawPlatformInfo: string = window.navigator.userAgent?.toString().toLocaleLowerCase();
const _derivedInfo: string[] = _rawPlatformInfo.split(' ');

console.log('Raw platform info', _rawPlatformInfo);

/*************************************************************
 * @_system this is a util for get a user system information
 * @useCase import {system} from 'react-ui-bucket';
 *          system.os or system.version
 *************************************************************/
export const _system = () => {
  const _derivedSystemInfo: string[] = navigator.appVersion.split(' ');
  const os: string = _derivedSystemInfo[1];
  const version: string = _derivedSystemInfo[0];

  return {
    os: os.replace(/\(|\)/gi, ''),
    version,
  };
};

/*************************************************************
 * @_broswer this is a util for get a user browser information
 * @useCase import {browser} from 'react-ui-bucket';
 *          browser.name or browser.version
 *************************************************************/
export const _browser = () => {
  let name: string = '';
  let version: string | null = '';

  /*
   *below code update browserVersion
   */
  const _derivedBrowserInfo = _derivedInfo[0].includes('/')
    ? _derivedInfo[0].split('/')
    : _derivedInfo[_derivedInfo.length - 1].split('/');

  _derivedBrowserInfo.length > 1 ? (version = _derivedBrowserInfo[1]) : (version = null);

  /*
   *below code update browserName
   */
  try {
    switch (true) {
      case _rawPlatformInfo.includes('firefox') || _rawPlatformInfo.includes('mozilla'):
        name = 'Mozilla Firefox';
        break;

      case _rawPlatformInfo.includes('chrome') || _rawPlatformInfo.includes('google'):
        name = 'Google Chrome';
        break;

      case _rawPlatformInfo.includes('safari'):
        name = 'Safari';
        break;

      case _rawPlatformInfo.includes('opera'):
        name = 'Opera';
        break;

      case _rawPlatformInfo.includes('msie') || _rawPlatformInfo.includes('edge'):
        name = 'Internet Exploder';
        break;

      case _rawPlatformInfo.includes('yabrowser'):
        name = 'YaBrowser';
        break;

      default:
        name = _derivedInfo[_derivedInfo.length - 1];
    }
  } catch (e) {
    window.alert(e);
    console.group('BROWSER NAME DETECTION ERROR ❌');
    console.error(e);
    console.groupEnd();
  }
  return {
    name,
    version,
  };
};

export const system = _system();
export const browser = _browser();
