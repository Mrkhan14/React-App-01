import { useContext, useEffect, useState } from "react";

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'

import { Context } from "../../context";
import './App.css'

const App = () =>{
	const [isLoading, setIsLoading] = useState(false)
	const {state, dispatch} = useContext(Context)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
			const newArr2 = json.map(item => ({
				name : item.title,
				id: item.id,
				viewers: item.id * 8, 
				like: false, 
				favourite: false
			}))
			dispatch({type: 'GET_DATA', payload: newArr2})
		})
		.catch(err => console.log(err))
		.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel/>
					<AppFilter/>
				</div>
				{isLoading && "Loading..."}
				<MovieList/>
				<MoviesAddForm/>
			</div>
		</div>
	)

}
export default App