import { Component} from "react";

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import { v4 as uuidv4 } from 'uuid';
import './app.css'
class App extends  Component{
	constructor(props) {
		super(props)
		this.state= {
			data2: [
				{ id: 1, name: "mov1", viewers: 987, favourite: false},
				{ id: 2, name: "mov2", viewers: 887,  favourite: false},
				{ id: 3, name: "mov4", viewers: 787,  favourite: true},
				{ id: 4, name: "mov5", viewers: 787,  favourite: true}
			]
		}
	}

	ondelete = id => {
		this.setState(({data2}) => ({
			data2 : data2.filter(c => c.id !== id)
		}))
		console.log(id)
	}
	// ondelete = id => {
	// 	this.setState(({data2}) =>{
	//
	// 		const newArr = data2.filter(c => c.id !== id)
	//
	// 		return{
	// 			data2: newArr
	// 		}
	// 	})
	// 	console.log(id)
	// }


	addForm = (item) =>{
		this.setState(({data2 }) =>{
			const  newArr = [...data2, {...item, id: uuidv4()}]
			return{
				data2: newArr
			}
		})
	}




	render() {
		const {data2} = this.state
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data2} onDelete={this.ondelete}/>
					<MoviesAddForm addForm={this.addForm}  />
				</div>
			</div>
		)
	}
}
export default App
