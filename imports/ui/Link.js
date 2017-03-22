import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilters />
      <AddLink />
      <LinksList />
    </div>
  );
};

export default Link;
