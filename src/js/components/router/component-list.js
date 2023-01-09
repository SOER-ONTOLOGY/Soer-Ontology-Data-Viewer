import React from 'react';
import * as C from './components';
import D from 'js/i18n';

export const items = [
	{ route: `/`, body: <C.Front /> },
	{ route: `/acerca-del-proyecto`, body: <C.About /> },
	{ route: `/MCS3`, title: D.summary, body: <C.Home /> },
	{ title: D.graficas, type: 'SubHeader' },
	{
		route: `/MCS3/indicador-1`,
		title: "Indicador 1",
		body: <C.EventRadar />,
	},
	{
		route: `/MCS3/indicador-2`,
		title: "Indicador 2",
		body: <C.EventAverage />,
	},
	{
		route: `/MCS3/indicador-3`,
		title: "Indicador 3",
		body: <C.EventByDate />,
	},
	{
		route: `/MCS3/indicador-4`,
		title: "Indicador 4",
		body: <C.BlocksNewOld />,
	},	
	{ title: D.tablas, type: 'SubHeader' },
	{
		route: `/MCS3/historial`,
		title: D.historial,
		body: <C.History />,
	},
	{
		route: `/MCS3/eventos-totales-por-fecha-tipo`,
		title: D.bloques,
		body: <C.Blocks />,
	},
	{
		route: `/MCS3/estructura-del-curso`,
		title: "Secciones y subsecciones",
		body: <C.Structure />,
	},	
	{
		route: `/MCS3/nuevos-bloques`,
		title: D.estructura,
		body: <C.NewBlocks />,
	},
];
