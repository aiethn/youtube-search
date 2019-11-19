import React from 'react';

class SearchBar extends React.Component {
	state = {text: ''};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.text)
		// child to parent props
	};

	render (){
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
					<label> Youtube </label>
					<input 
					type="text" 
					value={this.state.text} 
					onChange={e => this.setState({text: e.target.value})}
					/> 
				</div>
				</form>
			</div>

		);
	}
};

export default SearchBar; 