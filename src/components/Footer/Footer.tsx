import React from 'react';

import { Link } from 'gatsby';
import { Menu, Responsive } from 'semantic-ui-react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Responsive maxWidth={767}>
        <hr />
        <Menu text>
          <Menu.Item header>
            <Link to="/blog/">Blog</Link>
          </Menu.Item>
          <Menu.Item header>
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </Menu>
      </Responsive>
      <div>© {new Date().getFullYear()}, MachineServant LLC</div>
      <div>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  );
};
