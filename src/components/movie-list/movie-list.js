import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = ({ data }) => {
	return (
		<ul className='movie-list'>
			{data.map(item =>(
				// <MovieListItem
				// 	key={item.name}
				// 	name={item.name}
				// 	viewers={item.viewers}
				// 	favourite={item.favourite}
				// />

				// interpalatsiya yordamida malumotlarni yuborish
				<MovieListItem {...item} key={item.name}/>
			))}
		</ul>
	)
}

export default MovieList
