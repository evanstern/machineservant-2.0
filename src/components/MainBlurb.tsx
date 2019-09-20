import React from 'react';

import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { Image } from './Image';

const Main = styled.div`
  display: flex;
  background-color: rgb(190, 190, 193, 0.5);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 1.45rem;

  .inner-blurb {
    margin: 0 auto;
    padding: 1.45rem 1.0875rem;
    width: 100%;
    max-width: 960px;
  }

  .header {
    color: rgb(70, 70, 70, 0.87);
  }
`;

interface IProps {
  className?: string;
  children: React.ReactNode;
  imageName?: string;
}

export const MainBlurb: React.FC<IProps> = ({
  className,
  children,
  imageName,
}) => {
  if (imageName) {
    return (
      <Main className={className}>
        <div className="inner-blurb">
          <Grid container stackable>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                <Image name={imageName} />
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                {children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Main>
    );
  }

  return (
    <Main className={className}>
      <div className="inner-blurb">{children}</div>
    </Main>
  );
};
