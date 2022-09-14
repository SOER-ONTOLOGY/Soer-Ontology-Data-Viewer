import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import { items } from '../component-list';
import {red500} from 'material-ui/styles/colors'

function PageButton({ route }) {
	const pageRoutes = items.reduce((_, p) => {
		if (p.route) _.push(p.route);
		return _;
	}, []);
	const index = pageRoutes.indexOf(route);
	const previousRoute = index - 1 < 0 ? null : pageRoutes[index - 1];
	const nextRoute =
		index + 1 < pageRoutes.length ? pageRoutes[index + 1] : null;
	const col = previousRoute ? 8 : 10;
	return (
		<div className="mui-row page-button">
			{previousRoute && (
				<Link to={previousRoute} className="mui-col-md-2 centered">
					<FloatingActionButton secondary={true } >
						<SkipPrevious style={{fill: "#fff", backgroundColor:"#003f72", width:"58px"}} />
					</FloatingActionButton>
				</Link>
			)}
			{nextRoute && (
				<Link
					to={nextRoute}
					className={`mui-col-md-offset-${col} mui-col-md-2 centered`}
				>
					<FloatingActionButton secondary={true} >
						<SkipNext style={{fill: "#fff", backgroundColor:"#eaab00", width:"58px"}} />
					</FloatingActionButton>
				</Link>
			)}
		</div>
	);
}

export default PageButton;
