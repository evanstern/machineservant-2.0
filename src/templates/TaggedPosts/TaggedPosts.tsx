import React from 'react';

import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Header } from 'semantic-ui-react';

import { Layout } from '../../components/Layout';
import { MainBlurb } from '../../components/MainBlurb';
import { Posts } from '../../components/Posts';

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
  pageContext: {
    tag: string;
  };
}

const TaggedPosts: React.FC<IProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <MainBlurb imageName="gears-transparent.png">
        <Header as="h1">
          Posts tagged with <samp>#{tag}</samp>
        </Header>
      </MainBlurb>
      <Posts posts={posts} />
    </Layout>
  );
};

export default TaggedPosts;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          excerpt
        }
      }
    }
  }
`;
