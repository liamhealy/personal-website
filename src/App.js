import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import mediumIcon from '@iconify/icons-simple-icons/medium';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="App-header">
        <h1>Liam Healy</h1>
        {/* <p><InlineIcon icon={githubIcon} height='2em' /><InlineIcon icon={mediumIcon} height='2em' /></p> */}
        <ul>
          <li><a href="https://github.com/liamhealy" target="_blank"><Icon icon={githubIcon} height='2em'/></a></li>
          <li><a href="https://medium.com/@lhealy0711" target="_blank"><Icon icon={mediumIcon} height='2em'/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
