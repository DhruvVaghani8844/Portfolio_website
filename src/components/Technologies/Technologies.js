import React from 'react';
import { DiFirebase, DiMsqlServer, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Blockchain development world.
        Front-end to Solidity
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiences with <br/>
              Ether.js and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experiences with <br/>
             Solidity and Alchemy
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMsqlServer size="3rem"/>
        <ListContainer>
          <ListTitle>Server</ListTitle>
          <ListParagraph>
            Experiences with <br/>
              tools like Alchemy 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
