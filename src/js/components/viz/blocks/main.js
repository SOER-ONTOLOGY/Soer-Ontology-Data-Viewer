import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import ContainerDate from './container-date';
import ContainerType from './container-type';
import { date_type } from 'js/utils/date-type';
import D from 'js/i18n';
import Modal6 from '../../modales/modal6';

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
				<Modal6></Modal6>
				<div className="mui-row loading-row">
					<div className="mui-col-md-5">
						<Select
							label={D.selectSearch}
							options={date_type}
							value={type}
							onChange={this.handleChangeType}
						/>
					</div>
				</div>
				{type === 'date' && <ContainerDate />}
				{type === 'type' && <ContainerType />}
			</React.Fragment>
		);
	}
}

export default Main;
