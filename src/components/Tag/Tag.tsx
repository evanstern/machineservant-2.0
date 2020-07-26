import React from 'react';

import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import { Label, Detail } from './styles';

interface ITag {
  value: string;
  detail?: string;
  className?: string;
}

export const Tag: React.FC<ITag> = ({ value, detail, className }) => {
  return (
    <Link to={`/tags/${kebabCase(value)}`}>
      <Label className={className}>
        #{value}
        {detail && <Detail>{detail}</Detail>}
      </Label>
    </Link>
  );
};
