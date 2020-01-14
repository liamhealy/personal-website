import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import { Icon } from '@iconify/react';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import twitch from '../assets/images/twitch.png';
import rezzemay from '../assets/images/rezzemay.png';
import groupit from '../assets/images/groupit.png';

export default function Projects() {
	return (
		<Container 
			fluid 
			textAlign="center" 
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: 'linear-gradient(-315deg, rgb(24, 20, 43) 0%, rgb(14, 34, 43) 51%, rgb(12, 51, 46) 100%)'
			}}>
			<h2 style={{color: 'white', fontWeight: 'bolder'}}>What I've been up to</h2>
			<h3 style={{color: 'white', marginBottom: 30}}>
				Graduated from the Flatiron School's software engineering program
				in January of 2020, and got my B.S. in Computer Science from Marist
				College in May of 2019. Continuing work on some cool side projects
				but primarily seeking a full-time full stack development position.
			</h3>
			<h2 style={{color: 'white', fontWeight: 'bolder'}}>Check out some of my most recent work.</h2>
			<Grid container relaxed="very">
				<Grid.Row columns={3}>
					<Grid.Column>
						<Image src={twitch} size="large" rounded />
						<h3 style={{color: 'white'}}>Twitch Dashboard & Forum</h3>
						<a href="https://www.youtube.com/watch?v=k49eaST9eJg&t=181s" target="_blank" rel="noopener noreferrer">
                <Icon icon={youtubeIcon} height='2em'/>
            </a>
					</Grid.Column>
					<Grid.Column>
						<Image src={rezzemay} size="large" rounded />
						<h3 style={{color: 'white'}}>Rezzemay</h3>
						<a href="https://www.youtube.com/watch?v=H5TJhYSPwb4&t=72s" target="_blank" rel="noopener noreferrer">
                <Icon icon={youtubeIcon} height='2em'/>
            </a>
					</Grid.Column>
					<Grid.Column>
						<Image src={groupit} size="large" rounded />
						<h3 style={{color: 'white'}}>Group-It</h3>
						<a href="https://www.youtube.com/watch?v=U1KvPoPBTiI" target="_blank" rel="noopener noreferrer">
                <Icon icon={youtubeIcon} height='2em'/>
            </a>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	)
}