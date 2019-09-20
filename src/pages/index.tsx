import React from 'react';

import { Link } from 'gatsby';
import { Grid, Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { SEO } from '../components/SEO';

const BlackText = styled.span`
  color: rgb(0, 0, 0, 0.87);
`;

const CalloutContent = styled(Segment)`
  padding: 0 1.45rem;
  text-align: center;
  background-color: rgb(223, 223, 243, 0.45) !important;

  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;

const CalloutText = styled(Header)`
  font-weight: 500 !important;
`;

const CalloutLabel = styled(Header)`
  text-transform: uppercase !important;
`;

const ScreenWrapper = styled.div`
  position: relative;
  height: 170px;
  width: 282px;
  margin: 0 auto;
`;

const BlankScreen = styled.div`
  position: absolute;
  top: 15px;
  left: 38px;
  height: 128px;
  width: 205px;
  background-color: white;

  .gatsby-image-wrapper {
    margin: 0 auto;
    width: 128px;
  }
`;

const IndexPage: React.FC = () => (
  <Layout showHeaderImage>
    <SEO title="Home" />
    <MainBlurb>
      <Grid container stackable>
        <Grid.Row columns={3}>
          <Grid.Column>
            <ScreenWrapper>
              <Image name="laptop.png" />
              <BlankScreen>
                <Image name="machineservant-logo.png" />
              </BlankScreen>
            </ScreenWrapper>
          </Grid.Column>
          <Grid.Column width={10} verticalAlign="middle">
            <Header as="h1" textAlign="center">
              We are MachineServant.
            </Header>
            <Header as="h3" textAlign="center">
              MachineServant is a <BlackText>web design</BlackText> and{' '}
              <BlackText>development</BlackText> shop that can take your project
              from start to finish and produce high quality, professional
              results!
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </MainBlurb>
    <Grid container stackable divided>
      <Grid.Row columns={3}>
        <Grid.Column>
          <CalloutContent>
            <Image name="ohio.png" />
            <CalloutLabel as="h3" textAlign="center">
              Located in Akron Ohio
            </CalloutLabel>
            <CalloutText as="h3">
              We love northeast Ohio, but our abilities know no bounds! We can
              work with you remotely any time, any place.
            </CalloutText>
          </CalloutContent>
        </Grid.Column>
        <Grid.Column>
          <CalloutContent>
            <Image name="gears.png" />
            <CalloutLabel as="h3" textAlign="center">
              What we do
            </CalloutLabel>
            <CalloutText as="h3">
              We design, build, and manage your web site or web application. Our
              team of experts will work with you one on one to bring your vision
              to reality.
            </CalloutText>
          </CalloutContent>
        </Grid.Column>
        <Grid.Column>
          <CalloutContent>
            <Image name="contact.png" />
            <CalloutLabel as="h3" textAlign="center">
              Sound good?
            </CalloutLabel>
            <CalloutText as="h3">
              Reach out to us and get a free estimate!
            </CalloutText>
            <CalloutText as="h3">
              <Link to="/contact">Contact Us</Link>
            </CalloutText>
          </CalloutContent>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage;
