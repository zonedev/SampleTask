import React from 'react';

import ListComponent from './list-component.jsx';

export default class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			message: 'hello'
		};

		this.changeMessage = this.changeMessage.bind(this);
	}  

	render() {
		return (
				<div>
					<h1>Main Component</h1>
					<div>
						{ this.state.message }
						<ListComponent data={ ['Das', 'ist', 'eine', 'Liste'] } callback={this.changeMessage}/>
					</div>
				</div>
			);
	}

	changeMessage(newMessage){
		this.setState({ message : newMessage});
	}

}