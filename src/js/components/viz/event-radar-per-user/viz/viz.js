import React from 'react';
import Tabs from 'js/components/shared/tabs';
import { Chart } from 'primereact/chart';
import * as B from './build-data';
import D from 'js/i18n';

export default ({ data, depA, depB, depC, valueTabs, handleChangeTabsValue }) => {
	const tabs = [
		{
			label: 'Radar',
			content: (
				<div className="mui-row">
					<div className="mui-col-md-12">
						<Chart type="radar" data={B.buildRadarData(data, depA, depB, depC)} />
					</div>
				</div>
			),
		},
	];
	return (
		<Tabs
			tabs={tabs}
			value={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	);
};
