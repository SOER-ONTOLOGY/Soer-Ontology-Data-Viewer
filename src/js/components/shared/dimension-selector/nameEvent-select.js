import React from 'react';
import Select from 'js/components/shared/select';
import Spinner from 'js/components/shared/spinner';
import nameEventConnector from 'js/components/connectors/nameOfEventType';
import { filterDimensions } from 'js/utils/filter-dimensions';
import D from 'js/i18n';

const NameEventSelect = ({
	dimensions,
	excludedDimensions,
	dimA,
	dimB,
	handleChangeDimA,
	handleChangeDimB,
	hasOneDimensions,
}) => {
	const filteredDimension = filterDimensions(dimensions, excludedDimensions);
	const filteredDimensionA = filterDimensions(filteredDimension, dimB);
	const filteredDimensionB = filterDimensions(filteredDimension, dimA);
	const selectAClass = hasOneDimensions
		? 'mui-col-md-4 mui-col-md-offset-4'
		: 'mui-col-md-4 mui-col-md-offset-1';
	const labelA = hasOneDimensions ? D.fixDimension : D.fixFirstDimension;
	return (
		<div className="mui-row loading-row">
			<div className={selectAClass}>
				<Select
					label={labelA}
					options={filteredDimensionA}
					value={dimA}
					onChange={handleChangeDimA}
				/>
			</div>
			{!hasOneDimensions && (
				<div className="mui-col-md-4 mui-col-md-offset-2">
					<Select
						label={D.fixSecondDimension}
						options={filteredDimensionB}
						value={dimB}
						onChange={handleChangeDimB}
					/>
				</div>
			)}
		</div>
	);
};

export default nameEventConnector(NameEventSelect, {
	loading: () => <Spinner text={D.loading} />,
});
