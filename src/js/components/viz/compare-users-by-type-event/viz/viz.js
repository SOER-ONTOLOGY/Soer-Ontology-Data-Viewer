import React from 'react';
import Tabs from 'js/components/shared/tabs';
import { Chart } from 'primereact/chart';
import * as B from './build-data';
import D from 'js/i18n';

export default ({ data, depA, depB, valueTabs, handleChangeTabsValue }) => {
	const tabs = [
		{
			label: 'Radar',
			content: (
				<div className="mui-row">
					<div className="mui-col-md-12">
						<Chart type="radar" data={B.buildRadarData(data, depA, depB)} />
					</div>
				</div>
			),
		},
		{
			label: "Grafico de barras apilado",
			content: (
				<div className="mui-row">
					<div className="mui-col-md-12">
						<Chart
							type="bar"
							data={B.buildBarData(data, depA, depB)}
							options={B.stackedOptions}

						/>
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
