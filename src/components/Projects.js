import React from 'react';
import { Grid, Segment, Embed, Container } from 'semantic-ui-react';

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
				// backgroundColor: 'white'
			}}
		>
			<Grid container divided="vertically">
				<Grid.Row columns={2}>
					<Grid.Column>
						<div className="Grid-item-small">
							<Embed
								id='1'
								title='Flatiron // Twitch'
								source='youtube'
								iframe={{
									title: "Flatiron // Twitch",
									width: "560",
									height: "315", 
									src: "https://www.youtube.com/embed/6LJpu5la6Tk",
									frameBorder: "0",
									allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
								}}
							/>
						</div>
					</Grid.Column>
					<Grid.Column>
						<Segment placeholder style={{height: '100%', backgroundColor: '#c3cee1'}}>
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
							<Embed
								id='1'
								title='Flatiron // Twitch'
								source='youtube'
								iframe={{
									title: "Flatiron // Twitch",
									width: "560",
									height: "315", 
									src: "https://www.youtube.com/embed/--RuWbBQsaY",
									frameBorder: "0",
									allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
								}}
							/>
						</div>
					</Grid.Column>
					<Grid.Column>
						<Segment placeholder style={{
							height: '100%', 
							backgroundImage: 'linear-gradient(-225deg, rgb(24, 20, 43) 0%, rgb(14, 34, 43) 51%, rgb(12, 51, 46) 100%)',
							color: 'white'
						}}>
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
		</Container>
	)
}