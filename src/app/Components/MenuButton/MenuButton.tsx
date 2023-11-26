import React from 'react';
import type { MenuProps } from '../Menu/Menu';
import { StyledBurger } from './StyledMenuButton';

export const MenuButton = ({ isOpen, setIsOpen }: MenuProps) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledBurger className="MenuButton" open={isOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
