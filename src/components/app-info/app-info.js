import { Fragment } from "react";
import './app-info.css'

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
	return (
		<Fragment>
			<div className='app-info'>
				<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount} </p>
				<p className='fs-4 text-uppercase'>Sevimlik filim: {favouriteMoviesCount}</p>
			</div>
		</Fragment>
	)
}

export default AppInfo
