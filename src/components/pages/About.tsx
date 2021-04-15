import art from 'assets/images/handmade-art.png';
import { Image } from 'components/atoms';
import { ColumnDescription, TeamCard } from 'components/molecules';
import aboutColumns from 'components/molecules/ColumnDescription/AboutColumns';
import teamMembers from 'components/molecules/TeamCard/TeamMembers';
import React from 'react';
import styled, { css } from 'styled-components/macro';

const About = () => {
  document.title = 'About Us - The Elements';

  return (
    <Wrapper>
      <Mission>
        <MainHeading>Our Company</MainHeading>
        <SubHeading>Paving the way forward in modern web design</SubHeading>
      </Mission>
      <AboutUs>
        <AboutWrapper>
          <AboutContainer>
            <SectionHeading>About Us</SectionHeading>
            <Description>
              The Elements enables developers around the globe to create beautiful, ornate websites
              with stunning visuals. We abstract the hard parts of designing and give you
              custom-made patterns that will wow your customers. With The Elements, you won't have
              to tirelessly stress over the small details. We'll do the designing for you.
            </Description>
          </AboutContainer>
          <Image src={art} alt="A canvas with a stand" />
        </AboutWrapper>
      </AboutUs>
      <Pillars>
        <PillarsContainer>
          <SectionHeading>The 3 Pillars of Strength</SectionHeading>
          <SubHeading>
            Rome wasn't built in a day, and neither were we. Our core values define who we are as a
            company.
          </SubHeading>
        </PillarsContainer>
        <ColumnContainer>
          {aboutColumns.map((props, index) => (
            <ColumnDescription key={index} {...props} />
          ))}
        </ColumnContainer>
      </Pillars>
      <Team>
        <SectionHeading>Meet the Team</SectionHeading>
        <TeamContainer>
          {teamMembers.map((props, index) => (
            <TeamCard key={index} {...props} />
          ))}
        </TeamContainer>
      </Team>
    </Wrapper>
  );
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainHeading = styled.h1`
  font-size: 2.25em;
  font-weight: 700;
  padding-bottom: 1.2rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 3.5em;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  padding-bottom: 1.6rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 2.25em;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.15em;
  color: hsl(219, 22%, 51%);
  text-align: center;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.8;
  color: hsl(219, 23%, 44%);

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.15em;
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  & > section {
    width: 100%;
  }
`;

const Mission = styled.section`
  ${flexCenter}
  flex-direction: column;
  padding: 4.8rem;
  background-color: hsl(233, 42%, 93%);
`;

const AboutUs = styled.section`
  text-align: left;
  background-image: linear-gradient(to right, var(--bg-color), white, var(--bg-color));
`;

const AboutWrapper = styled.div`
  ${flexCenter}
  flex-direction: column-reverse;
  padding: 4.8rem;
  max-width: 110rem;
  width: 100%;
  margin: auto;

  @media ${(p) => p.theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-around;
    padding: 9.6rem;
  }

  & > img {
    max-width: 20rem;
    padding-bottom: 3.6rem;

    @media ${(p) => p.theme.breakpoints.lg} {
      padding-bottom: 0;
      max-width: 30rem;
    }
  }
`;

const AboutContainer = styled.div`
  ${flexCenter}
  flex-direction: column;

  @media ${(p) => p.theme.breakpoints.lg} {
    margin-right: 4.8rem;
  }

  & > h2 {
    align-self: flex-start;
  }

  & > p {
    max-width: 50rem;
    width: 100%;
  }
`;

const Pillars = styled.section`
  ${flexCenter}
  flex-direction: column;
  padding: 8rem 2.4rem;
  background-color: hsl(23, 48%, 91%);
`;

const PillarsContainer = styled.div`
  max-width: 70rem;
  text-align: center;

  & > h3 {
    line-height: 1.5;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  max-width: 110rem;
  padding-top: 6.4rem;
  text-align: center;
  color: hsl(219, 22%, 35%);

  @media ${(p) => p.theme.breakpoints.med} {
    justify-content: flex-start;
  }

  & > article:nth-child(2) {
    padding: 3.6rem 0;

    @media ${(p) => p.theme.breakpoints.lg} {
      padding: 0 1.6rem;
    }
  }
`;

const Team = styled.section`
  display: grid;
  place-items: center;
  padding: 4.8rem;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3.6rem 2.4rem;
  justify-items: center;
  width: 100%;
  padding-top: 2rem;

  @media ${(p) => p.theme.breakpoints.med} {
    max-width: 80rem;
  }
`;

export default About;
