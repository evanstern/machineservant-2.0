import styled from 'styled-components';

import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

export const Content = styled.header`
  background: #1b1c1d;
`;

export const SiteLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const HeaderMenu = styled(Menu)`
  padding: 1.45rem 1.0875rem;
  max-width: 960px;
  margin: 0 auto !important;
  padding: 0 !important;
`;
