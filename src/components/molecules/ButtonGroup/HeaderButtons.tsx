import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Anchor, Button } from '../../atoms';
import { ButtonGroup } from '../../molecules';

interface HeaderButtonsProps {
  onClick: () => void;
  theme: boolean;
}

const HeaderButtons = ({ onClick, theme }: HeaderButtonsProps) => {
  return (
    <>
      <ButtonGroup>
        <Anchor
          aria-label="View the source code repository"
          link="https://github.com/AnOrdinaryUsername/Shopping-Cart"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Anchor>
        <Button
          aria-label={theme ? 'Activate dark theme' : 'Activate light theme'}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={theme ? faSun : faMoon} />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default HeaderButtons;
