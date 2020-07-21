import styled from 'styled-components';

import { Container, Segment } from 'semantic-ui-react';

export const BlogPostContainer = styled(Container)`
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

export const BlogPostContent = styled(Segment)`
  background: rgb(255, 255, 255, 0.5) !important;
`;

export const InnerContent = styled.div`
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
