import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import Spinner from 'js/components/shared/spinner';
import VizStaff from './container-staff';
import staffConnector from 'js/components/connectors/staffUser';
import D from 'js/i18n';

class StaffSelect extends Component {
	constructor() {
		super();
		this.state = { staffUser: '' };
		this.handleChangeType = staffUser => this.setState({ staffUser });
	}

	render() {
		const { staffUsers } = this.props;
		const { staffUser } = this.state;
		return (
			<React.Fragment>
				<div className="mui-row loading-row">
					<div className="mui-col-md-5 mui-col-md-offset-1">
						<Select
							label={D.usernameByRole}
							options={staffUsers}
							value={staffUser}
							onChange={this.handleChangeType}
						/>
					</div>
				</div>
				{staffUser && <VizStaff staffUser={staffUser} />}
			</React.Fragment>
		);
	}
}

export default staffConnector(StaffSelect, {
	loading: () => <Spinner text={D.loading} />,
});
