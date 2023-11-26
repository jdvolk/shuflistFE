// app imports
import { Navigation } from './app/Components/Navagation/Navigation';
import { RoutesInternal } from './app/Routes/routes';

// UI
import logo2 from './assets/shuflist_5.png';
import './App.css';

// Hooks
import { useWindowResizeThreshold } from './app/Hooks/useOnWIndowResize';

export const App = () => {
  const isMobile = useWindowResizeThreshold({});

  return (
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
  );
};
