import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Layout } from '../Layout';
import { MainBlurb } from '../MainBlurb';
import { SEO } from '../SEO';
import { SocialLinks } from '../SocialLinks';
import { CalendlyEmbed } from '../CalendlyEmbed';

import {
  Content,
  Label,
  InputGroup,
  Input,
  TextArea,
  SubmitButton,
  ContactRow,
} from './styles';

type ContactPageQueryProps = {
  site: {
    siteMetadata: {
      contact: string;
    };
  };
};

export const ContactPage: React.FC = () => {
  const data = useStaticQuery<ContactPageQueryProps>(graphql`
    query ContactPageQuery {
      site {
        siteMetadata {
          contact
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Please contact us by filling out the form below and we will respond as quickly as we can."
      />
      <MainBlurb
        image="contact.png"
        header="We would love to hear from you!"
        subHeader="Please contact us by filling out the form below and we will respond as quickly as we can."
      />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 sm:col-span-2">
          <Content>
            <form
              name="contact"
              action="/"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <InputGroup>
                <Label htmlFor="nameField">Your Name *</Label>
                <Input type="text" name="name" id="nameField" required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="emailField">Email Address *</Label>
                <Input type="email" name="email" id="emailField" required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="messageField">How can we help? *</Label>
                <TextArea name="message" id="messageField" rows={8} required />
              </InputGroup>
              <InputGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </InputGroup>
            </form>
          </Content>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <Content className="flex flex-col items-center justify-center w-full h-full">
            <ContactRow>
              <div className="w-full">
                <h3 className="text-2xl font-bold">MachineServant</h3>
                <p className="text-2xl">Akron, Ohio</p>
              </div>
            </ContactRow>
            <ContactRow>
              <div className="w-full">
                <p className="text-2xl leading-10">330-285-3015</p>
              </div>
            </ContactRow>
            <ContactRow>
              <div className="w-full">
                <p className="text-sm leading-10">
                  <a
                    className="underline lg:text-lg"
                    rel="noreferrer"
                    target="_blank"
                    href={`mailto:${data.site.siteMetadata.contact}`}
                  >
                    {data.site.siteMetadata.contact}
                  </a>
                </p>
              </div>
            </ContactRow>
            <ContactRow>
              <div className="w-full">
                <div className="text-lg leading-10">
                  <SocialLinks />
                </div>
              </div>
            </ContactRow>
          </Content>
        </div>
      </div>
      <div>
        <h3 className="mt-10 text-2xl font-bold text-center">
          Or, schedule a consulation
        </h3>
        <CalendlyEmbed account="machineservant" eventName="30min" />
      </div>
    </Layout>
  );
};
