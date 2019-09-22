import React from 'react';

import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Grid, Header, Icon } from 'semantic-ui-react';

import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { Posts } from '../components/Posts';
import { SEO } from '../components/SEO';
import { TagList } from '../components/TagList';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      tags: string[];
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
      <MainBlurb imageName="gears-transparent.png">
        <Header as="h1">Blog</Header>
        <Header as="h2">News from MachineServant and technical musings.</Header>
      </MainBlurb>
      <Grid container stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <Posts posts={posts} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h3">
              <Icon name="tags" /> Tags
            </Header>
            <TagList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
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
