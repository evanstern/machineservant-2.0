import React from 'react';

import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Label } from 'semantic-ui-react';

interface ITag {
  value: string;
  detail?: string;
}

export const Tag: React.FC<ITag> = ({ value, detail }) => {
  return (
    <Label as={Link} to={`/tags/${kebabCase(value)}`}>
      #{value}
      {detail && <Label.Detail>{detail}</Label.Detail>}
    </Label>
  );
};
