import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

const TestViews: React.FC = (): JSX.Element => {
  return (
    <main>
      <aside>
        <h3>Components</h3>
        <ul>
          <li>
            <NavLink to="/inputs">Test Inputs</NavLink>
          </li>
          <li>
            <NavLink to="/modals">Test Modals</NavLink>
          </li>
          <li>
            <NavLink to="/prot-route">Protected Route</NavLink>
          </li>

          <li>
            <NavLink to="/others">Test Others</NavLink>
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default TestViews;
