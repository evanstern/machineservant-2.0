import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const BackgroundSection: React.FC<IProps> = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.png" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={'#e6e6e6'}
    >
      {children}
    </BackgroundImage>
  );
};

export const Background = styled(BackgroundSection)`
  width: 100%;
  min-height: 100vh;

  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
