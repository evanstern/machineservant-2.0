import React from 'react';

import { Grid, Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const TransparentSegment = styled(Segment)`
  background: transparent !important;
`;

const MainBlurb = styled.div`
  display: flex;
  background-color: rgb(190, 190, 193, 0.5);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 1.45rem;

  .inner-blurb {
    margin: 0 auto;
    padding: 1.45rem 1.0875rem;
    width: 100%;
    max-width: 960px;
  }

  .header {
    color: rgb(70, 70, 70, 0.87);
  }
`;

const BlackText = styled.span`
  color: rgb(0, 0, 0, 0.87);
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
      <div className="inner-blurb">
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
                <BlackText>development</BlackText> shop that can take your
                project from start to finish and produce high quality,
                professional results!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </MainBlurb>
    <Grid container stackable>
      <Grid.Row columns={3} verticalAlign="middle">
        <Grid.Column>
          <TransparentSegment>Foo</TransparentSegment>
        </Grid.Column>
        <Grid.Column>
          <TransparentSegment>Foo</TransparentSegment>
        </Grid.Column>
        <Grid.Column>
          <TransparentSegment>Foo</TransparentSegment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage;
