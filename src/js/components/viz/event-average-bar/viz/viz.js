import React from 'react';
import Tabs from 'js/components/shared/tabs';
import { Chart } from 'primereact/chart';
import * as B from './build-data';
import D from 'js/i18n';

export default ({ data, depA, depB, depC, valueTabs, handleChangeTabsValue }) => {
	const tabs = [
		{
			label: "Grafico de barras apilado",
			content: (
				<div className="mui-row">
					<div className="mui-col-md-12">
						<Chart
							type="bar"
							data={B.buildBarData(data, depA, depB, depC)}

							options={B.stackedOptions}
						/>
						<p className='text-center'><strong>Configuración de detalles: 2.55% Configuración de equipo: 5.12% Creación de sección: 3.41% <br></br>Creación de subsección: 4.27% Creación de unidad: 8.54% Edición de sección: 28.21% <br></br>Edición de subsección: 47.86% Edición de contenido del curso: 0% Libros: 0%</strong></p>
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
