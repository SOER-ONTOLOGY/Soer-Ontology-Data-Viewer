import React from 'react';
import Tabs from 'js/components/shared/tabs';
import { Chart } from 'primereact/chart';
import * as B from './build-data';
import D from 'js/i18n';

export default ({ data, depA, valueTabs, handleChangeTabsValue }) => {
	const tabs = [
		{
			label: 'Pastel',
			content: (
				<div className="mui-row">
					<div className="mui-col-md-6">
						<h4 className='text-center'>Cantidad de bloques nuevos vs antiguos</h4>
						<Chart type="doughnut" data={B.buildDoughnutData([{"dep" : "bloque","date" : "nuevo","popByDim" : "2.2864"},{"dep" : "bloque","date" : "antiguo","popByDim" : "13.7136"}],depA.id)} />
						<p className='text-center'><strong>Nuevo: 16 - Antiguo: 96</strong><br></br><strong> Total: 112</strong></p>
					</div>
					<div className="mui-col-md-6">
						<h4 className='text-center'>Cantidad de bloques nuevos creados</h4>
						<Chart type="doughnut" data={B.buildDoughnutData1(data, depA.id)} />
						<p className='text-center'><strong> Chapter: {data.filter(d => d.date === "chapter").map(d => d.popByDim)} | Sequential: {data.filter(d => d.date === "sequential").map(d => d.popByDim)} | Vertical: {data.filter(d => d.date === "vertical").map(d => d.popByDim)}</strong><br></br><strong> Total: 16</strong></p>
					</div>
					
				</div>
			),
		}
	];
	return (
		<Tabs
			tabs={tabs}
			value={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	);
};
