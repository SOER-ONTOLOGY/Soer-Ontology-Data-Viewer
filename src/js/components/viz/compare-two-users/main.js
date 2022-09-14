import React, { Component } from 'react';
import UsersSelect from './users-select';
import Viz from './viz';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			depA: '',
			depB: '',
			valueTabs: 0,
		};
		this.handleChangeDepA = (id, deps) =>
			this.setState({
				depA: { id, label: deps.find(d => d.id === id).label },
			});
		this.handleChangeDepB = (id, deps) =>
			this.setState({
				depB: { id, label: deps.find(d => d.id === id).label },
			});
		this.handleChangeTabsValue = valueTabs => this.setState({ valueTabs });
	}

	render() {
		const { dimension, depA, depB, valueTabs } = this.state;
		return (
			<React.Fragment>
				<UsersSelect
					depA={depA.id}
					depB={depB.id}
					handleChangeDepA={this.handleChangeDepA}
					handleChangeDepB={this.handleChangeDepB}
				/>
				{
					depA.id &&
					depB.id && (
						<Viz
							idDepA={depA.id}
							depA={depA}
							idDepB={depB.id}
							depB={depB}
							valueTabs={valueTabs}
							handleChangeTabsValue={this.handleChangeTabsValue}
						/>
					)}
			</React.Fragment>
		);
	}
}

export default Main;
