import './app.css';
import './typography.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import ProfileSection from './components/ProfileSection/ProfileSection';
import NotFound from './errors/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" children={<NewsFeed/>} />
            <Route path="/users/:username" children={<ProfileSection/>} />
            <Route path="*" children={<NotFound></NotFound>}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
