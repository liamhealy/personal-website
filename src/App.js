import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import mediumIcon from '@iconify/icons-simple-icons/medium';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import rubyIcon from '@iconify/icons-simple-icons/ruby';
import reactIcon from '@iconify/icons-simple-icons/react';
import railsIcon from '@iconify/icons-simple-icons/rails';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';

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
        <h3>Actively seeking a role in software engineering</h3>
        <ul>
          <li><Icon icon={javascriptIcon} height='1em' color="yellow"/></li>
          <li><Icon icon={reactIcon} height='1em' color="skyblue"/></li>
          <li><Icon icon={rubyIcon} height='1em' color="#820C02"/></li>
          <li><Icon icon={railsIcon} height='1em' color="red"/></li>
        </ul>
        <ul>
          <li><a href="https://github.com/liamhealy" target="_blank"><Icon icon={githubIcon} height='1.5em'/></a></li>
          <li><a href="https://medium.com/@lhealy0711" target="_blank"><Icon icon={mediumIcon} height='1.5em'/></a></li>
          <li><a href="https://www.linkedin.com/in/liamhealy0711/" target="_blank"><Icon icon={linkedinIcon} height='1.5em'/></a></li>
        </ul>
      </div>
      <div className="App-info">
        <h3>Here are some projects I've worked on recently</h3>
        <div className="Grid-container">
            <div className="Grid-item-small">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6LJpu5la6Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="Grid-item-large">
              <h4>
                This is my most recent project. I built this application using
                React and React-router along with material-ui on the frontend, while
                on the backend I built a JSON API using Ruby on Rails. In addition, I
                incorporated the new Twitch API and a few handy npm packages.
              </h4>
            </div>
            <div className="Grid-item-large">
              <h4>
                This application is a dynamic portfolio generator for software
                developers. I built this application using React and React-router
                with semantic-ui on the frontend. For the backend I built a JSON API
                using Ruby on Rails.
              </h4>
            </div>
            <div className="Grid-item-small">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/--RuWbBQsaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
