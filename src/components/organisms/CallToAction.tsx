import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defaultButtonStyles, mediumButton, primaryButton } from 'components/atoms/Button';
import React from 'react';
import styled from 'styled-components/macro';

const MouthSvg = () => {
  return (
    <Mouth>
      <svg
        width="360"
        height="328"
        viewBox="0 0 360 328"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.34742 228.602C5.34742 228.602 5.34742 255.5 28.0208 291C50.6942 326.5 63.5208 326.5 63.5208 326.5C77.7741 323.603 362.531 332.997 358.021 306.5C356.628 298.315 350.937 281.976 342.752 263C320.039 210.344 278.118 123.373 255.511 147.99C220.343 186.285 194.377 247.568 125.021 191.49C120.107 184.888 114.337 178.641 108.021 172.933C60.366 129.861 -18.3519 131.458 5.34742 228.602Z"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M240.021 170C240.021 177.156 255.023 211.5 226.021 234.5C197.019 257.5 195.035 262 176.278 262C159.706 262 155.791 268 124.521 230C93.2505 192 101.521 177.931 101.521 170C101.521 156.193 137.342 213 176.278 213C215.214 213 240.021 156.193 240.021 170Z"
          fill="#383838"
        />
        <ellipse cx="40.0208" cy="196.5" rx="11" ry="10.5" fill="black" />
        <path
          d="M314 64C314 81.0622 299.376 96.81 275.031 108.351C250.762 119.856 217.165 127 180 127C142.835 127 109.238 119.856 84.969 108.351C60.6241 96.81 46 81.0622 46 64C46 46.9378 60.6241 31.19 84.969 19.6488C109.238 8.14353 142.835 1 180 1C217.165 1 250.762 8.14353 275.031 19.6488C299.376 31.19 314 46.9378 314 64Z"
          stroke="black"
          strokeWidth="2"
        />
        <path d="M144.316 124L170.316 162L204.316 124" stroke="black" strokeWidth="2" />
        <ellipse cx="173.816" cy="123.5" rx="29" ry="7.5" fill="var(--bg-color)" />
      </svg>
      <Download href={process.env.PUBLIC_URL + '/free-svgs.zip'} target="_blank" download>
        <FontAwesomeIcon icon={faDownload} />
        Try for free
      </Download>
    </Mouth>
  );
};

const Mouth = styled.div`
  position: relative;
  height: 31rem;

  & > svg {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -1;
    height: 330px;
    width: 380px;
    transform: translate(-50%, 0);
  }
`;

const Download = styled.a`
  display: inline-block;
  ${defaultButtonStyles}
  ${mediumButton}
  ${primaryButton}
  margin-top: 3.2rem;
  cursor: pointer;

  & svg {
    margin-right: 0.8rem;
  }
`;

const CallToAction = () => {
  return (
    <Section>
      <Wrapper>
        <SubHeading>Like what you see?</SubHeading>
        <MainHeading>Add some flair to your pages today</MainHeading>
      </Wrapper>
      <MouthSvg />
    </Section>
  );
};

export default CallToAction;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem;
  padding-bottom: 0;
  overflow: hidden;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
    padding-bottom: 0;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
    padding-bottom: 0;
  }
`;

const Wrapper = styled.div`
  font-weight: 700;
  text-align: center;
`;

const SubHeading = styled.h3`
  font-size: 1.25em;
  margin-bottom: 0.8rem;
`;

const MainHeading = styled.h2`
  font-weight: 700;
  font-size: 2.25em;
  letter-spacing: 0.06rem;
  margin-bottom: 3.2rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 3em;
  }
`;
