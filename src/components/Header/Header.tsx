import React from 'react';

import { Link } from 'gatsby';
import { Menu, Responsive } from 'semantic-ui-react';
import { Content, HeaderMenu, SiteLink } from './styles';

interface IHeader {
  siteTitle?: string;
}

export const Header: React.FunctionComponent<IHeader> = ({
  siteTitle = '',
}) => (
  <Content>
    <HeaderMenu inverted borderless>
      <Menu.Item>
        <h1>
          <SiteLink to="/">{siteTitle}</SiteLink>
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
    </HeaderMenu>
  </Content>
);
