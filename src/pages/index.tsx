import React from 'react';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const IndexPage: React.FunctionComponent = () => (
  <>
    <Image name="machineservant.jpg" />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </>
);

export default IndexPage;
