import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import ReactPortal from './react-portal.component';
import '../../../../setupTests';

describe('ModalPortlet component unit test', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ReactPortal>
        <h2 className="heading">Internet Connection Error!</h2>
      </ReactPortal>
    );
  });
  it('should test the JSX children passed to it', () => {
    expect(wrapper.find('.heading')).toBeTruthy;
  });

  it('should test that divContainer elementNode was injected into the DOM as a grand childNode of the body elementNode', () => {
    const modalContainer = document.querySelector('#modal-root .modal-container');
    expect(modalContainer).toBeTruthy;
  });
});
