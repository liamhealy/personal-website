import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import mediumIcon from '@iconify/icons-simple-icons/medium';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import rubyIcon from '@iconify/icons-simple-icons/ruby';
import reactIcon from '@iconify/icons-simple-icons/react';
import railsIcon from '@iconify/icons-simple-icons/rails';
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
          <h1>Liam Healy</h1>
          <h3>Full-stack web developer in New York, NY</h3>
          <ul>
            <li><Icon icon={javascriptIcon} height='1em' color="yellow"/></li>
            <li><Icon icon={reactIcon} height='1em' color="skyblue"/></li>
            <li><Icon icon={rubyIcon} height='1em' color="#820C02"/></li>
            <li><Icon icon={railsIcon} height='1em' color="red"/></li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/liamhealy" target="_blank" rel="noopener noreferrer">
                <Icon icon={githubIcon} />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@lhealy0711" target="_blank" rel="noopener noreferrer">
                <Icon icon={mediumIcon}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/liamhealy0711/" target="_blank" rel="noopener noreferrer">
                <Icon icon={linkedinIcon}/>
              </a>
            </li>
          </ul>
          <h5>More about me below</h5>
        </div>
      </Transition>
    )
  }
}