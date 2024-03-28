import { useState, useContext } from "react";
import './search-panel.css'
import { Context } from "../../context";

const SearchPanel = props => {
	const [term, setTerm] = useState()
	const {state, dispatch} = useContext(Context)

	const updateTermHandeler = (e) => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		dispatch({ type: 'ON_TERM', payload: term})
	}

	return <input
		type='text'
		className='form-control search-input'
		placeholder='Kinolarni qidirish'
		onChange={updateTermHandeler}
		value={term}
	/>
}
export default SearchPanel
