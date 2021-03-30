import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

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

		</div>
	)
}

export default Main;