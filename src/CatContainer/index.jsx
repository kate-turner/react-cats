import React, { Component } from 'react';
import CatDetail from '../CatDetail';
import CreateCat from '../CreateCat';


class CatContainer extends Component {
	constructor(){
		super();

		this.state = {
			cats: [],
			catToEdit: {
				name: ''
			}
		}
	}
	componentDidMount(){
		this.getCats().then((cats) => {
			this.setState({
				cats: cats.data
			})
		}).catch((err) => {
			console.log(err)
		});
	}
	getCats = async () => {
		const cats = await fetch('http://localhost:8000/cats');
		const parsedCats = cats.json();

		return parsedCats
	}
	addCat = async (cat, e) => {
		e.preventDefault();
		try {
			const createCat = await fetch('http://localhost:8000/cats', {
				method: 'POST',
				body: JSON.stringify(cat),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const parsedResponse = await createCat.json();
			this.setState({cats: [...this.state.cats, parsedResponse.data]})
		} catch(err){
			console.log(err);
		}
	}
	deleteCat = async (id, e) => {
		e.preventDefault();
		console.log('deleteCat function is being called,this is the id: ', id);
		try {
			const deleteCat = await fetch('http://localhost/cats' + id, {
				method: 'DELETE'
			});
			const parsedResponse = await deleteCat.json();
			if(parsedResponse.status === 200){
				this.setState({cats: this.state.cats.filter((cat, i) => cat._id !== id)});
			} else {
				console.log("problem in delete cat setting state")
			}
		}catch(err){
			console.log(err);
		}
	}
	render(){
		return (
			<div>
				<CatDetail cats={this.state.cats} deleteCat={this.deleteCat} />
				<CreateCat addCat={this.addCat} />
			</div>
		)
	}
}

export default CatContainer;
