import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItems from './menu-items';
import { withRouter } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class AppMenu extends Component {
	constructor() {
		super();
		this.state = { open: false };

		this.handleToggle = () => this.setState({ open: !this.state.open });
		this.handleMenuItem = route => {
			this.setState({ open: false });
		};
	}

	render() {
		const { items } = this.props;
		const menuItems = items.map(
			({ route, title, type }) =>
				type === 'SubHeader' ? (
					<div key={title}>
						<Divider />
						<Subheader style={{ color: '#eaab00', fontSize: '26px' }}>
							{title}
						</Subheader>
					</div>
				) : (
					<MenuItems
						key={route}
						route={route}
						title={title}
						close={this.handleMenuItem}
					/>
				)
		);
		if (this.props.location.pathname === '/' || this.props.location.pathname === '/acerca-del-proyecto') {
			return ( null )
		} else {
			return (
				<div>
					<AppBar
						title={<span style={{ color: '#FFFFFF' }}>Visualizador de los equipos de trabajo</span>}
						onLeftIconButtonClick={this.handleToggle}
						iconElementLeft={<IconButton><NavigationMenu color="#fff" /></IconButton>}
						style={{ backgroundColor: '#003f72' }}
					/>
					<Drawer
						ref="leftNav"
						docked={false}
						open={this.state.open}
						onRequestChange={this.handleToggle}
						style={{
							width: 1000,
						}}
						width="25%"
					>
						{menuItems}
					</Drawer>
				</div>
			);
		}
	}
		
}

export default withRouter(AppMenu);
