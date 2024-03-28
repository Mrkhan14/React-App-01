import { Fragment, useContext } from "react";
import './app-info.css'
import { Context } from "../../context";

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {

	const {state} = useContext(Context)

	return (
		<Fragment>
			<div className='app-info'>
				<p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data2.length} </p>
				<p className='fs-4 text-uppercase'>Sevimlik filim: {state.data2.filter(c => c.favourite).length}</p>
			</div>
		</Fragment>
	)
}

export default AppInfo
