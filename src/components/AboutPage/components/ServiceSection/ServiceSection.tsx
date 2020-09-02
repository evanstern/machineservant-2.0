import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Content, Heading } from './styles';

interface IServiceSection {
  heading: string;
  icon: IconProp;
}

export const ServiceSection: React.FC<IServiceSection> = ({
  heading,
  icon,
  children,
}) => (
  <Content>
    <Heading>
      <FontAwesomeIcon className="mr-4" icon={icon} /> {heading}
    </Heading>
    <div className="mx-2 text-lg md:max-w-lg md:m-auto">{children}</div>
  </Content>
);
