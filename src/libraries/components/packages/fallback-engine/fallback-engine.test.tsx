import React from 'react';
import {render} from '@testing-library/react';
import {FallBackEngine} from './fallback-engine.lib';

describe('<FallBackEngine/>', () => {
  test('should render <FallBackEngine/> correctly', () => {
    const renderedFallBack = render(
      <FallBackEngine textToDisplay="Failed failed" buttonText="Go Home" fallBackPath="/" />
    );

    expect(renderedFallBack).toMatchSnapshot();
  });
});
