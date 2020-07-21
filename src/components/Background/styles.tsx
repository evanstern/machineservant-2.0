import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

export const Content = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;

  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
