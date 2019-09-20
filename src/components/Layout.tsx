/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import 'semantic-ui-less/semantic.less';

import { Background } from './Background';
import { Footer } from './Footer';
import { Header } from './Header';
import { Image } from './Image';

interface IProps {
  showHeaderImage?: boolean;
  children: React.ReactNode;
}

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 0px 1.45rem;
  padding-top: 0;

  footer {
    padding: 1.45rem 1.0875rem;
  }
`;

export const Layout: React.FunctionComponent<IProps> = ({
  showHeaderImage = false,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Background>
      {showHeaderImage && <Image name="machineservant.jpg" />}
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
        <Footer />
      </Content>
    </Background>
  );
};
