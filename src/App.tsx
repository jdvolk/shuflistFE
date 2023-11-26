import { useState } from 'react';
// app imports
import { Navigation } from './app/Components/Navagation/Navigation';
import { RoutesInternal } from './app/Routes/routes';

// UI
import logo2 from './assets/shuflist_5.png';
import { StyledBlocker } from './app/Components/Menu/StyledMenu';
import './App.css';

// Hooks
import { useWindowResizeThreshold } from './app/Hooks/useOnWIndowResize';
import { Menu } from './app/Components/Menu/Menu';

export const App = () => {
  const isMobile = useWindowResizeThreshold({});

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isMobile && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
      <StyledBlocker open={isOpen}>
        <div className="App">
          <section className="App-Container">
            <header className="App-header">
              <img src={logo2} alt="shufflist-logo" className="logo" />
            </header>
            <Navigation isMobile={isMobile} />
            <hr />
            <section className="App-Body">
              <RoutesInternal />
            </section>
          </section>
        </div>
      </StyledBlocker>
    </>
  );
};
