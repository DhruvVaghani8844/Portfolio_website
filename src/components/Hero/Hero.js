import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      I am an expert in web development and blockchain development and have a thorough understanding of everything relating to this platform. I am also skilled in coding languages, programming, and the following additional talents. 
      </SectionText>
      <Button onClick={()=>window.location = "/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;