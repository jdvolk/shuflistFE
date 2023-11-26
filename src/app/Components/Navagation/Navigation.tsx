import React from 'react';
// app imports
import { SongSearch } from '../SongInput/SongInput';

// UI
import './Navigation.css';
import { NavLinks } from '../NavLinks/NavLinks';

interface NavigationProps {
  isMobile: boolean;
}

export const Navigation = ({ isMobile }: NavigationProps) => {
  return (
    <section className="nav-bar">
      <SongSearch />
      {!isMobile && <NavLinks />}
    </section>
  );
};
