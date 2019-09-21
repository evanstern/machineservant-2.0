import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { kebabCase } from 'lodash';
import { Label } from 'semantic-ui-react';

interface ITagGroup {
  tag: string;
  totalCount: number;
}

interface ITags {
  allMarkdownRemark: {
    group: ITagGroup[];
  };
}

export const TagList: React.FC = () => {
  const data: ITags = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <div>
      {data.allMarkdownRemark.group.map(group => {
        return (
          <Label key={group.tag} as={Link} to={`/tags/${kebabCase(group.tag)}`}>
            #{group.tag}
            <Label.Detail>({group.totalCount})</Label.Detail>
          </Label>
        );
      })}
    </div>
  );
};
