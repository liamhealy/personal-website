import React from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import mediumIcon from '@iconify/icons-simple-icons/medium';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import rubyIcon from '@iconify/icons-simple-icons/ruby';
import reactIcon from '@iconify/icons-simple-icons/react';
import railsIcon from '@iconify/icons-simple-icons/rails';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import { Grid, Segment } from 'semantic-ui-react'

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
        {/* <Header as='h1'>Liam Healy</Header>
        <Header as='h3'>Actively seeking a role in software engineering</Header>
      </div> */}
        <h1>Liam Healy</h1>
        <h3>Actively seeking a role in software engineering</h3>
        <ul>
          <li><Icon icon={javascriptIcon} height='1em' color="yellow"/></li>
          <li><Icon icon={reactIcon} height='1em' color="skyblue"/></li>
          <li><Icon icon={rubyIcon} height='1em' color="#820C02"/></li>
          <li><Icon icon={railsIcon} height='1em' color="red"/></li>
        </ul>
        <ul>
          <li>
            <a href="https://github.com/liamhealy" target="_blank" rel="noopener noreferrer">
              <Icon icon={githubIcon} height='1em'/>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@lhealy0711" target="_blank" rel="noopener noreferrer">
              <Icon icon={mediumIcon} height='1em'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/liamhealy0711/" target="_blank" rel="noopener noreferrer">
              <Icon icon={linkedinIcon} height='1em'/>
            </a>
          </li>
        </ul>
        <h5>Check out some of my work below</h5>
      </div>
      <div className="App-info">
        <Grid container divided="vertically" style={{height: '90vh'}}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="Grid-item-small">
                <iframe
                  title="Flatiron // Twitch"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/6LJpu5la6Tk" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Segment placeholder style={{height: '100%', backgroundColor: '#c3cee1'}} color="blue">
                <h4>
                  This project is a Twitch dashboard and forum. This application was 
                  built using React and React-router along with 
                  material-ui on the frontend, while on the backend I built a JSON 
                  API using Ruby on Rails. In addition, I incorporated the new Twitch
                  API and a few handy npm packages.
                </h4>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
              <div className="Grid-item-small">
                <iframe 
                  title="Portfolio Generator"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/--RuWbBQsaY" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Segment placeholder style={{height: '100%', backgroundColor: '#c3cee1'}} color="red">
                <h4>
                  This application is a dynamic portfolio generator for software
                  developers. I built this application using React and React-router
                  with semantic-ui on the frontend. For the backend I built a JSON API
                  using Ruby on Rails.
                </h4>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <div className="Grid-container">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
