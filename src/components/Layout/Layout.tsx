/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Background } from '../Background';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Image } from '../Image';

import { Content } from './styles';

import './styles.css';

interface ILayout {
  showHeaderImage?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayout> = ({
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
      </Content>
      <Footer />
    </Background>
  );
};
