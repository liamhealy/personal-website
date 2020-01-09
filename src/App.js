import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import About from './components/About';

import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Profile />
      </div>
      <div className="App-bio">
        <About />
      </div>
      <div className="App-info">
        <Projects />
      </div>
    </div>
  );
}

export default App;
