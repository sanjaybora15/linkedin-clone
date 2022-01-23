import React from 'react';
import Home from '../containers/Home';
import Navigation from '../containers/Navigation';
import './app.scss';

function App() {
  return (
    <div>
        <Navigation />
        <Home/>
    </div>
  );
}

export default App;
