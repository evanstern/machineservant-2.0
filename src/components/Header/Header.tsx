import React from 'react';

import { Link } from 'gatsby';
import { Content, Inner, SiteTitle, SiteLinks } from './styles';

interface IHeader {
  siteTitle?: string;
}

export const Header: React.FunctionComponent<IHeader> = ({
  siteTitle = '',
}) => (
  <Content>
    <Inner>
      <SiteTitle>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
      <SiteLinks>
        <div className="lg:flex-grow">
          <Link className="mr-4" to="/blog">
            Blog
          </Link>
          <Link to="/contact/">Contact</Link>
        </div>
      </SiteLinks>
    </Inner>
  </Content>
);
