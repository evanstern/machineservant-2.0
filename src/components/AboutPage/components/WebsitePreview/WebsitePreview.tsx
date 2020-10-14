import React from 'react';

import Image, { FluidObject } from 'gatsby-image';

type WebsitePreviewProps = {
  fluid: FluidObject;
  href: string;
  label: string;
};

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({
  fluid,
  href,
  label,
}) => (
  <a
    href={href}
    className="block px-2 mt-4 hover:underline"
    title={label}
    rel="noreferrer"
    target="_blank"
  >
    <Image fluid={fluid} alt={label} />
    <h4 className="mt-2 font-bold text-center text-gray-800">{label}</h4>
  </a>
);
