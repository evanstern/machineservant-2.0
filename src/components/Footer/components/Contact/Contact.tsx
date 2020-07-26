import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IContact {
  icon: IconProp;
}

export const Contact: React.FC<IContact> = ({ icon, children }) => (
  <div className="my-2">
    <span className="inline-block w-10 pr-4 text-center">
      <FontAwesomeIcon icon={icon} />
    </span>{' '}
    {children}
  </div>
);
