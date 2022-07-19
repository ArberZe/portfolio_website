import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{marginTop: "20px"}}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in web development
      from Design to Backend
    </SectionText>
    <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Experience with:<br />
          HTML
        </ListParagraph>
        <ListParagraph>
          CSS
        </ListParagraph>
        <ListParagraph>
          Javascript
        </ListParagraph>
        <ListParagraph>
          React.js
        </ListParagraph>
        <ListParagraph>
          Bootstrap
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with<br />
          Firebase<br />
          Supabase<br />
          .NET 5<br />
          PHP<br />
          JAVA
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with<br />
          FIGMA
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default Technologies;
