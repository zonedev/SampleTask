import React from 'react';

export default class ListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.clickedItem = this.clickedItem.bind(this);
	}  

	render() {
		return (
				<div className='list'>
					{
						this.props.data.map( (entry, index) => {
							return (
								<div className='listItem' key={index} onClick={this.clickedItem}>{entry}</div>
							)
						})
					}
				</div>
			);
	}

	clickedItem(e){
		if(this.props.callback){
			let clickedText = e.target.innerHTML;
			this.props.callback(clickedText);
		}
	}

}