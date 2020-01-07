import React, { Component } from 'react'
import { Transition, Icon as SemIcon } from 'semantic-ui-react'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import mediumIcon from '@iconify/icons-simple-icons/medium';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import rubyIcon from '@iconify/icons-simple-icons/ruby';
import reactIcon from '@iconify/icons-simple-icons/react';
import railsIcon from '@iconify/icons-simple-icons/rails';
import html5Icon from '@iconify/icons-simple-icons/html5';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';

export default class Profile extends Component {
  state = { 
    hide: 1500, 
    show: 1500, 
    visible: false 
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  render() {
    const { hide, show, visible } = this.state

    return (
      <Transition duration={{ hide, show }} visible={visible}>
        <div>
          <h3></h3>
          <h1>Liam Healy</h1>
          <h3>Full-stack web developer in New York, NY</h3>
          <ul>
            <li><Icon icon={javascriptIcon} height='1em' color="yellow"/></li>
            <li><Icon icon={reactIcon} height='1em' color="skyblue"/></li>
            <li><Icon icon={rubyIcon} height='1em' color="#820C02"/></li>
            <li><Icon icon={railsIcon} height='1em' color="red"/></li>
            {/* <li><Icon icon={html5Icon} height='1em' color="#F16529"/></li> */}
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
          {/* <SemIcon name="arrow circle down"/> */}
        </div>
      </Transition>
    )
  }
}