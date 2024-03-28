import { useContext, useState } from "react";
import './movies-add-form.css'
import { Context } from "../../context";

const MoviesAddForm = () => {
	const [state, setState] = useState({ name: '', views: ''})

	const { _, dispatch} = useContext(Context)

	const changeHaelerInput = (e) => {
		setState({...state, [e.target.name]:e.target.value})
	}

	const addFormHandler = (e) => {
		e.preventDefault()
		if (state.name === '' || state.views === ''){
			return
		}
		const data = { name: state.name, viewers: state.views } 
		dispatch({type: 'ADD_FORM', payload: data})
		setState({name: '', views: '',})
	}

	return (
		<div className='app-add-form'>
			<h3>Yangi kino qo'shish</h3>
			<form className='add-form d-flex' onSubmit={addFormHandler}>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='Qanday kino?'
					name='name'
					value={state.name}
					onChange={changeHaelerInput}

					/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder="Nechi marotaba ko'rilgan?"
					name='views'
					value={state.views}
					onChange={changeHaelerInput} />

				<button type='submit' className='btn btn-outline-dark'>
					Qo'shish
				</button>
			</form>
		</div>
	)

}
export default MoviesAddForm
