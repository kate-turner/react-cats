import React, { Component } from 'react';

const CatDetail = (props) => {
	const catList = props.cats.map((cat, i) => {
		return (
			<li key={cat._id}>
			<span>{cat.name}</span>
			<button onClick={props.deleteCat.bind(null, cat._id)}>Delete</button>
			</li>
		)
	});

	return (
		<ul>
			{catList}
		</ul>
	)
}




export default CatDetail;