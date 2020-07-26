import React from 'react';

import { Image } from '../Image';

import { Inner, Content, Grid, ImageCell, ContentCell } from './styles';

interface IMainBlurb {
  className?: string;
  image: string | JSX.Element;
  header?: string;
  subHeader?: string | JSX.Element;
}

export const MainBlurb: React.FC<IMainBlurb> = ({
  className,
  children,
  image,
  header,
  subHeader,
}) => (
  <Content className={className}>
    <Inner>
      <Grid>
        <ImageCell className="lg:col-span-1">
          <div className="max-w-sm mx-auto lg:max-w-auto lg:w-auto">
            {typeof image === 'string' ? <Image name={image} /> : image}
          </div>
        </ImageCell>
        <ContentCell>
          <div className="max-w-xl">
            {header && (
              <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
                {header}
              </h1>
            )}
            {subHeader && (
              <h3 className="text-xl text-center text-gray-800">{subHeader}</h3>
            )}
            {children}
          </div>
        </ContentCell>
      </Grid>
    </Inner>
  </Content>
);
