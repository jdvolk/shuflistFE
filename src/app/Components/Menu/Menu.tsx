// app imports
import { MenuButton } from '../MenuButton/MenuButton';
import { NavLinks } from '../NavLinks/NavLinks';
// UI
import { StyledMenu, StyledMenuContainer } from './StyledMenu';

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  return (
    <StyledMenuContainer className="MenuContainer">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledMenu open={isOpen}>
        <NavLinks />
      </StyledMenu>
    </StyledMenuContainer>
  );
};
