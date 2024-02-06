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
				{ id: 1, name: "mov1", viewers: 987, like: false, favourite: false},
				{ id: 2, name: "mov2", viewers: 887, like: false, favourite: false},
				{ id: 3, name: "mov4", viewers: 787, like: false, favourite: true},
				{ id: 4, name: "mov5", viewers: 787, like: true, favourite: true}
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
	// 		const newArr = data2.filter(c => c.id !== id)
	// 		return{
	// 			data2: newArr
	// 		}
	// 	})
	// }


	addForm = (item) =>{
		this.setState(({data2 }) =>{
			const  newItme = [...data2, {...item, id: uuidv4(), favourite: false, like: false}]
			return{
				data2: newItme
			}
		})
	}

	onTogProp = (id, prop) =>{
		console.log(prop)
		this.setState(({data2 }) =>({
		 data2: data2.map(item =>{
				if (item.id == id){
					return{...item, [prop]: !item[prop]}
				}
				return item
			}),
		}))
	}



	render() {
		const {data2} = this.state
		const allmoviesCount = data2.length
		const favouriteMMoviesCount = data2.filter(c => c.favourite).length
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo  allMoviesCount={allmoviesCount} favouriteMoviesCount={favouriteMMoviesCount} />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList
						data={data2}
						onDelete={this.ondelete}
						onTogProp={this.onTogProp}
					/>
					<MoviesAddForm addForm={this.addForm}  />
				</div>
			</div>
		)
	}
}
export default App
