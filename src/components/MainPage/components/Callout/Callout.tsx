import React from 'react';

import { Image } from '../../../Image';

interface ICallout {
  imageName: string;
  headerText: string;
}

export const Callout: React.FC<ICallout> = ({
  imageName,
  headerText,
  children,
}) => (
  <div className="flex">
    <div className="flex-1 p-8 text-center bg-gray-400 bg-opacity-50 border border-gray-500 border-opacity-50 rounded-lg shadow-lg">
      <Image name={imageName} />
      <h1 className="my-4 text-xl font-bold uppercase">{headerText}</h1>
      {children}
    </div>
  </div>
);
