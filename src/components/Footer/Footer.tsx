import React from 'react';

import {
  faMapPin,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { SocialLinks } from '../../components/SocialLinks';

import { Contact } from './components/Contact';
import { Content, Inner } from './styles';

export const Footer: React.FC = () => {
  return (
    <Content>
      <Inner>
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Contact MachineServant</h3>
            <Contact icon={faMapPin}>Akron, Ohio</Contact>
            <Contact icon={faPhone}>(330)-285-3015</Contact>
            <Contact icon={faEnvelope}>
              <a href="mailto:evanstern@machineservant.com">
                evanstern@machineservant.com
              </a>
            </Contact>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SocialLinks className="mb-4" />
          <div>© {new Date().getFullYear()}, MachineServant LLC</div>
        </div>
      </Inner>
    </Content>
  );
};
