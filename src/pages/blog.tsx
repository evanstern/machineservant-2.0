import React from 'react';

import { graphql, Link } from 'gatsby';
import { Grid, Header } from 'semantic-ui-react';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { SEO } from '../components/SEO';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
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
      {posts.map(({ node }) => {
        const { excerpt } = node;
        const { date, title } = node.frontmatter;
        const { slug } = node.fields;

        return (
          <article key={slug}>
            <Header as="h2">
              <Link to={`/blog/${slug}`}>{title}</Link>
            </Header>
            <p>{date}</p>
            <p>{excerpt}</p>
          </article>
        );
      })}
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
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;
