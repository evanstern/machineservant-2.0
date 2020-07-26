import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Icons } from './styles';

interface ISocialLinks {
  className?: string;
}

export const SocialLinks: React.FC<ISocialLinks> = ({ className = '' }) => (
  <Icons className={className}>
    <a
      href="https://twitter.com/machineservant"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
      href="https://www.facebook.com/MachineServant/"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/company/machineservant/"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </Icons>
);
