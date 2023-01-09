import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import ContainerSection from './container-section';
import ContainerSubsection from './container-subsection';
import ContainerVertical from './container-vertical';
import { newblocks } from 'js/utils/newblocks';
import D from 'js/i18n';
import Modal8 from '../../modales/modal8';

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
				<Modal8></Modal8>
				<div className="mui-row loading-row">
					<div className="mui-col-md-5">
						<Select
							label={D.selectStructure}
							options={newblocks}
							value={type}
							onChange={this.handleChangeType}
						/>
					</div>
				</div>
				{type === 'section' && <ContainerSection />}
				{type === 'subsection' && <ContainerSubsection />}
				{type === 'vertical' && <ContainerVertical />}
			</React.Fragment>
		);
	}
}

export default Main;
