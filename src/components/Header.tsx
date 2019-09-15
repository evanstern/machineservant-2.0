import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

interface IProps {
  siteTitle?: string;
}

const StyledHeader = styled.header`
  background: black;

  .header-wrapper {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const Header: React.FunctionComponent<IProps> = ({ siteTitle = '' }) => (
  <StyledHeader>
    <div className="header-wrapper">
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </div>
  </StyledHeader>
);
