import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Button } from 'components/atoms';
import { ButtonGroup } from 'components/molecules';
import React from 'react';

interface HeaderButtonsProps {
  isMobile?: boolean;
  onClick: () => void;
  theme: boolean;
}

const HeaderButtons = ({ isMobile, onClick, theme }: HeaderButtonsProps) => {
  return (
    <ButtonGroup isMobile={isMobile}>
      <Anchor
        aria-label="View the source code repository"
        link="https://github.com/AnOrdinaryUsername/Shopping-Cart"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
      <Button aria-label={theme ? 'Activate dark theme' : 'Activate light theme'} onClick={onClick}>
        <FontAwesomeIcon icon={theme ? faSun : faMoon} />
      </Button>
    </ButtonGroup>
  );
};

export default HeaderButtons;
