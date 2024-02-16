import { useState } from "react";
import './search-panel.css'

const SearchPanel = ({updateTermHandelerr}) => {
	const [term, setTerm] = useState()

	const updateTermHandeler = (e) => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		updateTermHandelerr(term)
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
