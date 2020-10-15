import React from 'react';

import { StyledLink } from './styles';

export const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  <StyledLink {...props} rel="noreferrer" target="_blank">
    {children}
  </StyledLink>
);
