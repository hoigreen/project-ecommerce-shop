import React from 'react';
import { useParams, usePathname } from 'next/navigation'
// import './breadcrumbs.css';
import Link from 'next/link';
import formatString from '@/helpers/formatString.helper';

const Breadcrumbs = () => {
  const params = useParams();
  const pathname = usePathname();

  let currentLink = '';
  const crumbs = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link className="crumb-link" href={currentLink}>
            {' '}
            {formatString.capitalizeFirstLetter(crumb)}
          </Link>
        </div>
      );
    });

  console.log(params)

  return (
    <div className="breadcrumbs__container">
      <div className="grid wide">
        <div className="breadcrumbs">
          <div className="crumb">
            <Link className="crumb-link" href={'/'}>
              <i className="crumb__home-icon fa fa-home"></i>
              {'Home'}
            </Link>
          </div>

          {crumbs}
          {/* {name} */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
