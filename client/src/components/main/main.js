import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import { Grid } from '@material-ui/core';

import Word from '../word/word';

function Main() {
	const [words, setWords] = useState([]);

	useEffect(() => {
		getAllWords();
	}, []);

	const getAllWords = () => {
		API.getWords()
			.then(results => {
				console.log(results);
				setWords(results.data);
			})
			.catch(err => console.log(err));
	}

	return (
		<div>
			<Grid container spacing={3}>
				{words.map(word => (
					<Grid item xs={6} sm={3} key={word._id}>
						<Word
							key={word._id}
							word={word.word} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default Main;