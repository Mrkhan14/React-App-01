import { useContext, useEffect, useState } from "react";

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import { v4 as uuidv4 } from 'uuid';
import { Context } from "../../context";
import './App.css'

const App = () =>{
	const [data2, setData2] = useState([])
	const [term, setTerm] = useState('')
	const [filter, setFilter] = useState('all')
	const [isLoading, setIsLoading] = useState(false)

	const {state, dispatch} = useContext(Context)

	const ondelete = (id) =>{
		const newArr = data2.filter(c => c.id !== id)
		setData2(newArr)
	}

	const addForm = (itme) =>{
		const  newItme = { name: itme.name, viewers: itme.viewers,  id: uuidv4(),  favourite: false, like: false}
		const newArr = [...data2, newItme]
		setData2(newArr)
	}

	const onTogProp = (id, prop) =>{
		const newArr = data2.map(item =>{
			if (item.id === id){
				return{...item, [prop]: !item[prop]}
			}
			return item
		})
		setData2(newArr)
	}

	const searchHandeler = (arr, term) => {
		if (term === 0){
			return arr
		}
		return arr.filter(item => {
			return item.name.toLowerCase().indexOf(term) > -1
		})
	}

	const filterHandeler = (arr, filter) => {
		switch (filter){
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewrs':
				return arr.filter(c => c.viewers > 1000)
			default:
				return arr
		}
	}

	const  updateTermHandeler = (term) => {
		return  setTerm(term)
	}

	const  updatefilterHandeler = (filter) => {
		return  setFilter(filter)
	}

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
			setData2(newArr2)
			dispatch({type: 'GET_DATA', payload: newArr2})
		})
		.catch(err => console.log(err))
		.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo  allMoviesCount={data2.length} favouriteMoviesCount={data2.filter(c => c.favourite).length} />
				<div className='search-panel'>
					<SearchPanel  updateTermHandelerr={updateTermHandeler}/>
					<AppFilter  filterr={filter} updatefilterHandelerr={updatefilterHandeler}/>
				</div>
				{isLoading && "Loading..."}
				<MovieList
					data={filterHandeler(searchHandeler(data2, term), filter)}
					onDelete={ondelete}
					onTogProp={onTogProp}
				/>
				<MoviesAddForm addForm={addForm}  />
			</div>
		</div>
	)

}
export default App