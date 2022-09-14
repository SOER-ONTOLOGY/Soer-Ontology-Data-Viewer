import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import StaffSelect from './staff-select';
import TeacherSelect from './teacher-select';
import { roles } from 'js/utils/roles';
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
							label={D.selectRole}
							options={roles}
							value={type}
							onChange={this.handleChangeType}
						/>
					</div>
					{type === 'STAFF' && <StaffSelect />}
					{type === 'TEACHER' && <TeacherSelect />}
				</div>
			</React.Fragment>
		);
	}
}

export default Main;
