import React from 'react';

import { Links } from './../api/links';
import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksList />
      <AddLink />
    </div>
  );
};

export default Link;
