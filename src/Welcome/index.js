import React from 'react';
import { Link } from 'react-router-dom';

import { Page, TextContent, Header, ButtonLink } from '../styles/Layout';

const Welcome = () => (
	<Page className="welcome">
		<Header>
			<h1>Welcome to the Card game!</h1>
		</Header>

		<TextContent center>Click Start to play</TextContent>

		<TextContent strong>Can you win?</TextContent>

		<ButtonLink>
			<Link to="/play/10">Start</Link>
		</ButtonLink>
	</Page>
);

export default Welcome;
