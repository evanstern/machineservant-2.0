import React from 'react';

import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { Tag } from './Tag';

interface IEdges {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      tags?: string[];
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
  posts: IEdges[];
}

const BlogPostPreview = styled(Segment)`
  background-color: rgb(255, 255, 255, 0.7) !important;
`;

export const Posts: React.FC<IProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ node }) => {
        const { excerpt } = node;
        const { date, title, featuredImage, tags } = node.frontmatter;
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
              <Grid.Row>
                <Grid.Column width={16}>
                  {tags &&
                    tags.map(tag => {
                      return <Tag key={tag} value={tag} />;
                    })}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </BlogPostPreview>
        );
      })}
    </>
  );
};
