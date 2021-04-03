import { faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, CompanyLogo } from 'components/atoms';
import React from 'react';
import styled from 'styled-components/macro';
import columnData from './ColumnData';
import FooterColumn from './FooterColumn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Container>
        <Social>
          <CompanyLogo />
          <Copyright>Copyright © {currentYear} The Elements</Copyright>
          <SVGContainer>
            <Anchor link="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Anchor>
            <Anchor link="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Anchor>
            <Anchor link="https://discordapp.com/users/324705092726947842">
              <FontAwesomeIcon icon={faDiscord} />
            </Anchor>
          </SVGContainer>
        </Social>
        <Columns>
          {columnData.map((props, index) => {
            return <FooterColumn heading={props.heading} links={props.links} key={index} />;
          })}
        </Columns>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 1.8rem;
  background: hsl(204, 31%, 91%);

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 3.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: space-evenly;
  max-width: 110rem;
  width: 100%;
  margin: 0 auto;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  margin-bottom: 2.4rem;
  text-align: center;

  /* Shrinks the company logo */
  & a > svg {
    height: 3.25rem;
  }

  & a > span {
    font-size: 1.25em;
  }

  /* End of shrink */
`;

const Copyright = styled.p`
  font-size: 0.875em;
  padding-top: 1.6rem;
  padding-bottom: 0.8rem;
`;

const SVGContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  font-size: 2em;

  & > a {
    padding: 0.8rem 1.6rem;
    line-height: 1;
  }
`;

const Columns = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-flow: row wrap;

  & > div {
    margin-bottom: 2.4rem;

    @media ${(p) => p.theme.breakpoints.sm} {
      margin-bottom: 0;
    }
  }
`;
