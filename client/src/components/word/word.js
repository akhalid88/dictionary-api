import React from 'react';
import { Paper } from '@material-ui/core';
function Word(props) {
	return (
		<Paper elevation={3}>{props.word}</Paper>
	)
};

export default Word;