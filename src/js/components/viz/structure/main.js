import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import ContainerSection from './container-section';
import ContainerSubsection from './container-subsection';
import { structure } from 'js/utils/structure';
import D from 'js/i18n';

class Main extends Component {
	constructor() {
		super();
		this.state = { type: '' };
		this.handleChangeType = type => this.setState({ type });
	}

	render() {
		const { type } = this.state;
		return (
			<React.Fragment>
				<div className="mui-row loading-row">
					<div className="mui-col-md-5">
						<Select
							label={D.selectStructure}
							options={structure}
							value={type}
							onChange={this.handleChangeType}
						/>
					</div>
				</div>
				{type === 'section' && <ContainerSection />}
				{type === 'subsection' && <ContainerSubsection />}
			</React.Fragment>
		);
	}
}

export default Main;
