import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        {/* <LinkTitle>Contact</LinkTitle> */}
        <LinkTitle>Email</LinkTitle>
        {/* <LinkItem href="tel:8347022132">8347022132</LinkItem> */}
        <LinkItem href="mailto:vaghani.dhruv41@gmail.com">vaghani.dhruv41@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
        <SocialIcons href="https://github.com/DhruvVaghani8844">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dhruv-v-461527245/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/DhruvVaghani17">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer> 
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
