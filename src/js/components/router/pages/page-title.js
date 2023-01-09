import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ title, subtitle }) {
	return (
		<div className="mui-row">
			{title && (
				<div className="mui-col-md-8 centered mui-col-md-offset-2" style={{ paddingTop: "10px"}}>
					<h2 className="page-title" style={{ fontSize: "200%" }}>
						{title}
						{subtitle && <div>&quot; {subtitle} &quot;</div>}
					</h2>
				</div>
			)}
		</div>
	);
}

PageTitle.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default PageTitle;
