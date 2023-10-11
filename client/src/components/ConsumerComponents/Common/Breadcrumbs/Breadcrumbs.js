import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import './breadcrumbs.css';

const Breadcrumbs = ({ socket }) => {
  const { name } = useParams();
  const location = useLocation();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link className="crumb-link" to={currentLink}>
            {' '}
            {capitalizeFirstLetter(crumb)}
          </Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs__container">
      <div className="grid wide">
        <div className="breadcrumbs">
          <div className="crumb">
            <Link className="crumb-link" to={'/home'}>
              <i className="crumb__home-icon fa fa-home"></i>
              {'Home'}
            </Link>
          </div>

          {crumbs}
          {name}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
