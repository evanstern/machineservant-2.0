import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

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
      <MainBlurb
        image={<Img fluid={featuredImage.childImageSharp.fluid} />}
        header={title}
        subHeader={date}
      />
      <BlogPostContainer>
        <BlogPostContent>
          <InnerContent dangerouslySetInnerHTML={{ __html: html }} />
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
