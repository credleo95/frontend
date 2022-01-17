import React from 'react';
import { Section, Paragraph, Header, Button } from './LandingPageStyles';

const landingPage = () => {
  return (
    <div>
      <Header>Introducing PinteReach</Header>
      <Section>
        <Paragraph>
          PinteReach is research made easy. Treat this as your own personal
          archive. Save all of the best articles for later.
          <br />
          <br />
          The modern research solution has arrived. <br />
          Create your free account today.
        </Paragraph>
        <Section>
          <Button onClick={(e) => (window.location.href = '/signup')}>
            Sign Up Now!
          </Button>
        </Section>
      </Section>
    </div>
  );
};

export default landingPage;
