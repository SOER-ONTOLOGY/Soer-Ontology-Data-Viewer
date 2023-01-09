import React, { Component } from 'react';
import Viz from './viz';
import Modal3 from '../../modales/modal3';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			depA: {
				"label" : "lytapia1",
				"id" :  "https://utpl.edu.ec/soer/data/equip/lytapia1"
			  },
			depB: {
				"label" : "MaryKrmen",
				"id" : "https://utpl.edu.ec/soer/data/equip/MaryKrmen"
			  },
			depC: {
				"label" : "opencampus",
				"id" : "https://utpl.edu.ec/soer/data/equip/opencampus"
			  },
			valueTabs: 0,
		};
		this.handleChangeTabsValue = valueTabs => this.setState({ valueTabs });
	}

	render() {
		const { depA, depB, depC, valueTabs } = this.state;
		return (
			<React.Fragment>
				<Modal3></Modal3>
				<Viz
					idDepA={depA.id}
					depA={depA}
					idDepB={depB.id}
					depB={depB}
					idDepC={depC.id}
					depC={depC}
					valueTabs={valueTabs}
					handleChangeTabsValue={this.handleChangeTabsValue}
				/>
			</React.Fragment>
		);
	}
}

export default Main;
