import React from 'react';

import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, Header } from 'semantic-ui-react';

import { Tag } from '../Tag';

import { BlogPostPreview } from './styles';

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

interface IPosts {
  posts: IEdges[];
}

export const Posts: React.FC<IPosts> = ({ posts }) => {
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
                    {' '}
                    <Link to={`/blog${slug}`}>{title}</Link>
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
