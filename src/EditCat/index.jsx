import React, { Component } from 'react';

const EditCat = (props) => {

	return(
		<div>
			<h4>Edit Cat </h4>
			<form onSubmit={props.editCat}>
				<label>
				Edit Cat:
				<input type="text" name="name" onChanage={props.handleFormChange} value={props.catToEdit.name}/>
				</label>
				<input type="Submit" />
			</form>
		</div>
	)
}



export default EditCat;