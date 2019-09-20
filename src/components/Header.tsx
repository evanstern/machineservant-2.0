import React from 'react';

import { Link } from 'gatsby';
import { Menu, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';

interface IProps {
  siteTitle?: string;
}

const StyledHeader = styled.header`
  background: #1b1c1d;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const StyledMenu = styled(Menu)`
  padding: 1.45rem 1.0875rem;
  max-width: 960px;
  margin: 0 auto !important;
  padding: 0 !important;
`;

const StyledSubMenu = styled(StyledMenu)`
  margin: 0 !important;
  width: 100% !important;
  border-radius: 0px !important;
`;

export const Header: React.FunctionComponent<IProps> = ({ siteTitle = '' }) => (
  <>
    <StyledHeader>
      <StyledMenu inverted borderless>
        <Menu.Item>
          <h1>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </h1>
        </Menu.Item>
        <Responsive as={Menu.Menu} position="right" minWidth={768}>
          <Menu.Item>
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </Responsive>
      </StyledMenu>
    </StyledHeader>
  </>
);
