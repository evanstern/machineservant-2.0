import React from 'react';

import { BigIcon, IconWrapper } from './styles';

interface ILogo {
  title: string;
  logo: React.ReactNode;
}

export const Logo: React.FC<ILogo> = ({ title, logo }) => (
  <BigIcon title={title}>
    <IconWrapper>{logo}</IconWrapper>
  </BigIcon>
);
