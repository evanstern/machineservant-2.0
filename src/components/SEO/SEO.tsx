/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

interface ISEO {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  keywords?: string[];
  image?: {
    src: string;
    width: number;
    height: number;
  }
}

export const SEO: React.FC<ISEO> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  keywords = [],
  image: metaImage,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            site_url
            keywords
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords && keywords.length ? keywords : site.siteMetadata.keywords;
  const image = metaImage && metaImage.src ? `${site.siteMetadata.site_url}${metaImage.src}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords.join(','),
        },
      ].concat(
        metaImage ? [
          {
            property: 'og:image',
            content: image,
          },
          {
            property: 'og:image:width',
            content: metaImage?.width,
          },
          {
            property: 'og:image:height',
            content: metaImage?.height,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ] : [
          {
            property: 'og:image',
            content: `${site.siteMetadata.site_url}${site.siteMetadata.image}`,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
        ]
      ).concat(meta)}
    />
  );
};
