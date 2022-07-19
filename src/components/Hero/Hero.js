import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A student of computer science , an adorer of coding and technology in general, a constant learner,
        looking forward to develop professional skills and learning new things. No work experience in the
        field of ICT but I possess general knowledge in coding.
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;