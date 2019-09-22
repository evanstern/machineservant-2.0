import React from 'react';

import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Label } from 'semantic-ui-react';

interface IProps {
  value: string;
  detail?: string;
}

export const Tag: React.FC<IProps> = ({ value, detail }) => {
  return (
    <Label as={Link} to={`/tags/${kebabCase(value)}`}>
      #{value}
      {detail && <Label.Detail>{detail}</Label.Detail>}
    </Label>
  );
};
