import React from 'react';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
function Word(props) {
	return (
		<Card elevation={3} raised={true}>
			<CardActionArea>
				<CardContent>
					{props.word}
				</CardContent>
			</CardActionArea>
		</Card>
	)
};

export default Word;