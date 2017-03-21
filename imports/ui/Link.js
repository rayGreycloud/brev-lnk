import React from 'react';

import { Links } from './../api/links';
import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilters />
      <LinksList />
      <AddLink />
    </div>
  );
};

export default Link;
