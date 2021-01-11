import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import InternetConnectionAlert from './internet-connection-alert.component';

describe('InternetConnectionAlert component Unit test', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<InternetConnectionAlert />);
  });

  it('should test that the component is not rendered when internet is connected', () => {});

  it('should test that the component is mounted when internet is disconnected', () => {});

  it('should test that when user clicks the button the modal is closed and termitted', () => {});
});
