import { Component} from "react";
import './movie-list-item.css'

const MovieListItem = props => {
	const {name, viewers, onDelete, onTogProp, favourite, like  } = props

	return (
		<li className={`list-group-item d-flex justify-content-between favourite ${favourite && 'favouriteClass'} ${like && 'like'}`} >
			<span
				className='list-group-item-label'
				onClick={onTogProp}
				data-toggle='like'
			>
				{name}
			</span>
			<input type='number' className='list-group-item-input' defaultValue={viewers} />
			<div className='d-flex justify-content-center align-items-center'>
				<button
					type='button'
					className='btn-cookie btn-sm'
					onClick={onTogProp}
					data-toggle='favourite'
				>
					<i className='fas fa-cookie'></i>
				</button>

				<button
					type='button'
					className='btn-trash btn-sm'
					onClick={onDelete}
				>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}

export default MovieListItem
