import React, {useState, useEffect} from 'react';
import BreadcrumbsItem from './breadcrumbs-item.component';
import {useLocation} from 'react-router-dom';
import './breadcrumbs.style.scss';

export const BreadCrumbs = () => {
  const [clickedCrumb, setClickedCrumb] = useState<string>('');
  const [visitedLinks, setVisitedLinks] = useState<string[]>([]);
  const location = useLocation();

  /************************************************
   *@useEffect this adds to visitedLinks array
   ************************************************/
  useEffect(() => {
    const currentLink = location.pathname;
    setVisitedLinks([...visitedLinks, currentLink]);
  }, [location.pathname, visitedLinks]);

  /************************************************
   *@useEffect this removes to visitedLinks array
   ************************************************/
  useEffect(() => {
    // const visitedLinksCopy = visitedLinks;
    const indexOfClickedCrumb = visitedLinks.indexOf(clickedCrumb);
    visitedLinks.splice(indexOfClickedCrumb, 1);
  });

  /*
   *i would have used a single useEffect but its a good practice to seperate the effects aka Single responsibility principle
   */
  return (
    <ul className="breadcrumbs-wrapper">
      {visitedLinks.map((breadcrumb, index) => (
        <li key={breadcrumb + index.toString().trim()} onClick={() => setClickedCrumb(breadcrumb)}>
          <BreadcrumbsItem route={breadcrumb} />
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
