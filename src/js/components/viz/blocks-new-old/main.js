import React, { Component } from 'react';
import UsersSelect from './users-select';
import Viz from './viz';
import Modal4 from '../../modales/modal4';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			depA: {
				"label" : "bloque",
				"id" :  "bloque"
			  },
			valueTabs: 0,
		};
		this.handleChangeTabsValue = valueTabs => this.setState({ valueTabs });
	}

	render() {
		const { depA, valueTabs } = this.state;
		return (
			<React.Fragment>
				<Modal4></Modal4>
				<Viz
					idDepA={depA.id}
					depA={depA}
					valueTabs={valueTabs}
					handleChangeTabsValue={this.handleChangeTabsValue}
				/>
			</React.Fragment>
		);
	}
}

export default Main;
