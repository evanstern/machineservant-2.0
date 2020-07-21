import React from 'react';

import { Grid } from 'semantic-ui-react';

import { Image } from '../Image';

import { Content } from './styles';

interface IMainBlurb {
  className?: string;
  children: React.ReactNode;
  imageName?: string;
}

export const MainBlurb: React.FC<IMainBlurb> = ({
  className,
  children,
  imageName,
}) => {
  if (imageName) {
    return (
      <Content className={className}>
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
      </Content>
    );
  }

  return (
    <Content className={className}>
      <div className="inner-blurb">{children}</div>
    </Content>
  );
};
