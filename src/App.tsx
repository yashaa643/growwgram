import './app.css';

import React from 'react';

import { Header } from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';

const App = () => {
  return (
    <>
    <Header />
    <div className="main">  
        <NewsFeed/>
    </div>
    </>
  );
}

export default App;
