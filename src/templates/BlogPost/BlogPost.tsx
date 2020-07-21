import React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, Header, Icon } from 'semantic-ui-react';

import { Layout } from '../../components/Layout';
import { MainBlurb } from '../../components/MainBlurb';
import { Tag } from '../../components/Tag';

import { BlogPostContainer, BlogPostContent, InnerContent } from './styles';

interface IBlogPost {
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

const BlogPost: React.FC<IBlogPost> = ({
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
