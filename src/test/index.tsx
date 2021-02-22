import React from 'react';
import {NavLink} from 'react-router-dom';
import {routes} from '../data/route.data.json';
import './index.scss';

const TestViews: React.FC = (): JSX.Element => {
  return (
    <main>
      <aside>
        <h3>ReactUIBucket</h3>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.url}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
};

export default TestViews;
