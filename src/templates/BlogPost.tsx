import React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Container, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';

const BlogPostContainer = styled(Container)`
  margin: 1.0875rem 0;

  p {
    font-size: 1.3em;
  }
`;

interface IProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
      html: string;
    };
  };
}

const BlogPost: React.FC<IProps> = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <Layout>
      <MainBlurb>
        <Grid container stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign="middle" textAlign="center">
              <Header as="h1">{frontmatter.title}</Header>
              <Header as="h2">{frontmatter.date}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainBlurb>
      <BlogPostContainer>
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </BlogPostContainer>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
