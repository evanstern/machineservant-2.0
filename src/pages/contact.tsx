import React from 'react';

import { Button, Form, Grid, Header } from 'semantic-ui-react';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { MainBlurb } from '../components/MainBlurb';
import { SEO } from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <MainBlurb>
        <Grid container stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image name="contact.png" />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign="middle" textAlign="center">
              <Header as="h1">We would love to hear from you!</Header>
              <Header as="h2">
                Please contact us by filling out the form below and we will
                respond as quickly as we can.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainBlurb>
      <Form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <Form.Field
          required
          label="Your name"
          control="input"
          type="text"
          name="name"
        />
        <Form.Field
          label="Company name"
          control="input"
          type="text"
          name="company"
        />
        <Form.Field
          required
          label="How can we help?"
          control="textarea"
          name="message"
        />
        <Button primary type="submit">
          Send Message
        </Button>
      </Form>
    </Layout>
  );
};

export default ContactPage;
