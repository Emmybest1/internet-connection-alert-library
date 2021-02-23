import React from 'react';
import {NavLink} from 'react-router-dom';
import {routes} from '../data/route.data.json';
import './index.scss';

const TestViews: React.FC = (): JSX.Element => {
  return (
    <main>
      <aside>
        <span className="logo">
          <h3>ReactUIBucket</h3>
          <img src={`${process.env.PUBLIC_URL}/react-logo.png`} alt="" />
        </span>
        <ul className="items-wrapper">
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
