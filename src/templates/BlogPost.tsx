import React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { Tag } from '../components/Tag';

const BlogPostContainer = styled(Container)`
  margin: 1.0875rem 0;
  font-family: 'Inter', sans-serif;
  padding-bottom: 5rem;

  p {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  li {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
`;

const BlogPostContent = styled(Segment)`
  background: rgb(255, 255, 255, 0.5) !important;
`;

const InnerContent = styled.div`
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

interface IProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        tags: string[];
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
  const { tags, featuredImage, title, date } = frontmatter;
  return (
    <Layout>
      <MainBlurb>
        <Grid container stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Img fluid={featuredImage.childImageSharp.fluid} />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign="middle" textAlign="center">
              <Header as="h1">{title}</Header>
              <Header as="h2">{date}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainBlurb>
      <BlogPostContainer>
        <BlogPostContent>
          <InnerContent dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <Icon name="tags" />
          {tags &&
            tags.map(tag => {
              return <Tag key={tag} value={tag} />;
            })}
        </BlogPostContent>
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
        tags
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
