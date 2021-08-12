import './app.css';
import './typography.css';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import ProfileSection from './components/ProfileSection/ProfileSection';
import NotFound from './errors/NotFound/NotFound';

const App = () => {
  const location = useLocation();
  return (
    <>
        <Header />
        <div className="main">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
              <Route exact path="/" children={<NewsFeed />} />
              <Route path="/:username" children={<ProfileSection />} />
              <Route path="*" children={<NotFound errorMessage="BAD_URL"></NotFound>}></Route>
          </Switch>
        </AnimatePresence>
        </div>
    </>
  );
}

export default App;
