import React from 'react';

import { MainHeading, Divider } from './styles';

interface IHeading {
  title: string;
}

export const Heading: React.FC<IHeading> = ({ title }) => (
  <>
    <MainHeading>{title}</MainHeading>
    <Divider />
  </>
);
