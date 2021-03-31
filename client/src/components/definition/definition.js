import React from 'react';
import { Modal } from '@material-ui/core';


function Definition() {
	return (
		<Modal
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<h2 id="modal-title">My Title</h2>
			<p id="modal-description">My Description</p>
		</Modal>
	)
};

export default Definition;