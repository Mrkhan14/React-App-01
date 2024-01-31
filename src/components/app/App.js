import { Component} from "react";

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
class App extends  Component{
	constructor(props) {
		super(props)
		this.state= {
			data2: [
				{ id: 1, name: "mov1", viewers: 987, favourite: false},
				{ id: 2, name: "mov2", viewers: 887,  favourite: false},
				{ id: 3, name: "mov4", viewers: 787,  favourite: true}
			]
		}
	}

	ondelete = id => {
		console.log(id)
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
					<MoviesAddForm />
				</div>
			</div>
		)
	}
}
export default App
