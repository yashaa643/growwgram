import './styles/App.css';

import React from 'react';

import NewsFeed from './components/NewsFeed/NewsFeed';

const App = () => {
  return (
    <div className="main">
        <NewsFeed/>
    </div>
  );
}

export default App;
