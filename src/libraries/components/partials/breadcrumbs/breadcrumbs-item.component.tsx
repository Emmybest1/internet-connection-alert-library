import React from 'react';
import {NavLink} from 'react-router-dom';

type TBreadcrumbsItem = {
  route: string;
};
const BreadcrumbsItem: React.FC<TBreadcrumbsItem> = ({route}): JSX.Element => {
  return <NavLink to={route}>{route}</NavLink>;
};

export default BreadcrumbsItem;
