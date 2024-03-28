import { useContext } from 'react'
import MovieListItem from '../movie-list-item/movie-list-item'
import { Context } from '../../context'
import { filterHandeler, searchHandeler } from '../../utilites/data'
import './movie-list.css'

const MovieList = () => {

	const {state} = useContext(Context)
	
	const data = filterHandeler(searchHandeler(state.data2, state.term), state.filter)

	return (
		<ul className='movie-list'>
			{data.map(item =>(
				<MovieListItem
					key={item.id}
					{...item} 
				/>
			))}
		</ul>
	)
}

export default MovieList
