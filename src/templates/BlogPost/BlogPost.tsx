/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import RehypeReact from 'rehype-react';

import { Layout } from '../../components/Layout';
import { MainBlurb } from '../../components/MainBlurb';
import { Tag } from '../../components/Tag';
import { SEO } from '../../components/SEO';

import {
  BlogPostContainer,
  BlogPostContent,
  InnerContent,
  Pre,
} from './styles';

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
        featured: {
          childImageSharp: {
            resize: {
              src: string;
              width: number;
              height: number;
            };
          };
        };
        keywords: string[];
      };
      htmlAst: any;
      excerpt: string;
    };
  };
}

// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    // @ts-ignore
    pre: Pre,
  },
}).Compiler;

const BlogPost: React.FC<IBlogPost> = ({ data: { markdownRemark: post } }) => {
  const {
    tags,
    featuredImage,
    featured,
    title,
    date,
    keywords,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt.replaceAll('\n', ' ')}
        keywords={keywords}
        image={featured.childImageSharp.resize}
      />
      <MainBlurb
        image={<Img fluid={featuredImage.childImageSharp.fluid} />}
        header={title}
        subHeader={date}
      />
      <BlogPostContainer>
        <BlogPostContent>
          <InnerContent>{renderAst(post.htmlAst)}</InnerContent>
        </BlogPostContent>
      </BlogPostContainer>
      <div className="flex flex-col my-6">
        <span className="p-6 text-2xl font-bold text-gray-800">
          <FontAwesomeIcon icon={faTags} /> Tagged as
        </span>
        <div>
          {tags &&
            tags.map(tag => {
              return <Tag key={tag} value={tag} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt(pruneLength: 160)
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
        featured: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
        keywords
      }
    }
  }
`;
