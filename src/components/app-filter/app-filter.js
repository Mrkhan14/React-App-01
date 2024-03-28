import { useContext } from 'react'
import { Context } from '../../context'
import './app-filter.css'

const AppFilter = ({updatefilterHandelerr}) => {
	const {state, dispatch} = useContext(Context)
	return (
		<div className='btn-group'>
			{btnsArr.map(btn=> (
				// btn-outline-dark btn  btn-dark
				<button
					key={btn.name}
					className={`btn ${state.filterr === btn.name ? 'btn-dark' : 'btn-outline-dark btn'}`}
					onClick={() => dispatch({type: 'ON_FILTER', payload: btn.name })}
					type='button'
				>
					{btn.lable}
				</button>
			))}
		</div>
	)
}

const btnsArr = [
	{
		name: 'all',
		lable: 'Barcha kinolar'
	},
	{
		name: 'popular',
		lable: 'Mashhur kinolar'
	},
	{
		name: 'mostViewrs',
		lable: 'Eng ko\'p ko\'rilgan kinolar'
	},
]

export default AppFilter
