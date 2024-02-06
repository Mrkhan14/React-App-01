import './app-filter.css'

const AppFilter = ({updatefilterHandelerr, filterr}) => {
	return (
		<div className='btn-group'>
			{btnsArr.map(btn=> (
				// btn-outline-dark btn  btn-dark
				<button
					key={btn.name}
					onClick={() => updatefilterHandelerr(btn.name)}
					className={`btn ${filterr === btn.name ? 'btn-dark' : 'btn-outline-dark btn'}`}
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
