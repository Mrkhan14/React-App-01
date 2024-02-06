import { Component } from "react";
import './search-panel.css'

class SearchPanel extends Component{
	constructor(props) {
		super(props);
		this.state ={
			term: ''
		}
	}

	updateTermHandeler = (e) =>{
		const term = e.target.value.toLowerCase()
		this.setState({term : term})
		this.props.updateTermHandelerr(term)
	}

	render() {
		return <input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={this.updateTermHandeler}
			value={this.state.term}
		/>
	}
}
// const SearchPanel = () => {
// 	return <input
// 		type='text'
// 		className='form-control search-input'
// 		placeholder='Kinolarni qidirish'
// 	/>
// }
export default SearchPanel
