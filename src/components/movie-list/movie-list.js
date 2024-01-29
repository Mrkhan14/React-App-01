import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = ({ data }) => {
	return (
		<div className='movie-list list-group'>
			{/*{data.map(item =>(*/}
			{/*	<MovieListItem name={item.name}  viewers={item.viewers}/>*/}
			{/*))}*/}
			{data.map(item => {
				return(
					<MovieListItem name={item.name}  viewers={item.viewers}/>
				)
			})}
		</div>
	)
}

export default MovieList
