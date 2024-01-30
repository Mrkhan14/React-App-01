import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
function App() {
	const data2=[
		{ id: 1, name: "mov1", viewers: 987, favourite: false},
		{ id: 2, name: "mov2", viewers: 887,  favourite: false},
		{ id: 3, name: "mov4", viewers: 787,  favourite: true}
	]

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={ data2 } />
				<MoviesAddForm />
			</div>
		</div>
	)
}
export default App
