import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {routes} from '../../data/route.data.json';
import '../style.scss';

type TBaseView = {
  children: React.ReactNode;
};

const BaseView: React.FC<TBaseView> = ({children}): JSX.Element => {
  const history = useHistory();
  return (
    <main className="base-view-container">
      <aside>
        <span className="logo" onClick={() => history.push('/')} style={{cursor: 'pointer'}}>
          <h3>ReactUIBucket</h3>
          <img src={`${process.env.PUBLIC_URL}/react-logo.png`} alt="" />
        </span>
        <ul className="items-wrapper">
          {routes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.url} exact>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <div className="content-wrapper">{children}</div>
    </main>
  );
};

export default BaseView;
