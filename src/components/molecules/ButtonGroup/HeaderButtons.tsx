import { faLock, faLockOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CartIcon } from 'components/atoms';
import { ButtonGroup } from 'components/molecules';
import React from 'react';

interface HeaderButtonsProps {
  isMobile?: boolean;
  isSticky: boolean;
  onClick: () => void;
  onHeaderToggle: () => void;
  theme: boolean;
}

const HeaderButtons = ({
  isMobile,
  isSticky,
  onClick,
  onHeaderToggle,
  theme,
}: HeaderButtonsProps) => {
  return (
    <ButtonGroup isMobile={isMobile}>
      <Button aria-label={theme ? 'Activate dark theme' : 'Activate light theme'} onClick={onClick}>
        <FontAwesomeIcon icon={theme ? faSun : faMoon} />
      </Button>
      <Button
        aria-label={isSticky ? 'Remove persistent header' : 'Use persistent header'}
        onClick={onHeaderToggle}
      >
        <FontAwesomeIcon icon={isSticky ? faLock : faLockOpen} />
      </Button>
      {!isMobile && <CartIcon />}
    </ButtonGroup>
  );
};

export default HeaderButtons;
