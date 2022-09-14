import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import Spinner from 'js/components/shared/spinner';
import VizTeacher from './container-teacher';
import teacherConnector from 'js/components/connectors/teacherUser';
import D from 'js/i18n';

class TeacherSelect extends Component {
	constructor() {
		super();
		this.state = { teacherUser: '' };
		this.handleChangeType = teacherUser => this.setState({ teacherUser });
	}

	render() {
		const { teacherUsers } = this.props;
		const { teacherUser } = this.state;
		return (
			<React.Fragment>
				<div className="mui-row loading-row">
					<div className="mui-col-md-5 mui-col-md-offset-1">
						<Select
							label={D.usernameByRole}
							options={teacherUsers}
							value={teacherUser}
							onChange={this.handleChangeType}
						/>
					</div>
				</div>
				{teacherUser && <VizTeacher teacherUser={teacherUser} />}
			</React.Fragment>
		);
	}
}

export default teacherConnector(TeacherSelect, {
	loading: () => <Spinner text={D.loading} />,
});
