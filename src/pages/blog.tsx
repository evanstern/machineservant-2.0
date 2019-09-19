import React from 'react';

import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { SEO } from '../components/SEO';

const BlogPostPreview = styled(Segment)`
  background-color: rgb(255, 255, 255, 0.7) !important;
`;

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    excerpt: string;
  };
}

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: IEdges[];
    };
  };
}

const Blog: React.FC<IProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <MainBlurb>
        <Grid container stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image name="gears-transparent.png" />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign="middle" textAlign="center">
              <Header as="h1">Blog</Header>
              <Header as="h2">
                News from MachineServant and technical musings.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainBlurb>
      <Container>
        {posts.map(({ node }) => {
          const { excerpt } = node;
          const { date, title, featuredImage } = node.frontmatter;
          const { slug } = node.fields;

          return (
            <BlogPostPreview key={slug}>
              <Grid container stackable>
                <Grid.Row columns={2}>
                  <Grid.Column width={4}>
                    <Img fluid={featuredImage.childImageSharp.fluid} />
                  </Grid.Column>
                  <Grid.Column width={12} verticalAlign="middle">
                    <Header as="h2">
                      <Link to={`/blog/${slug}`}>{title}</Link>
                    </Header>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </BlogPostPreview>
          );
        })}
      </Container>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
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
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;
