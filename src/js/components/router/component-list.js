import React from 'react';
import * as C from './components';
import D from 'js/i18n';

export const items = [
	{ route: `/`, title: D.summary, body: <C.Home /> },
	{ title: D.graficas, type: 'SubHeader' },
	{
		route: `/usuarios-por-tipo-de-evento`,
		title: D.usuariosTipoEvento,
		body: <C.UsersTypeEventCompare />,
	},
	{
		route: `/eventos-totales-por-usuario`,
		title: D.usuariosEventosTotales,
		body: <C.TwoUsersCompare />,
	},	
	{
		route: `/bloques-secuenciales`,
		title: D.bloquesTipoBloque,
		body: <C.SequentialBlocksCompare />,
	},
	{ title: D.tablas, type: 'SubHeader' },
	{
		route: `/historial`,
		title: D.historial,
		body: <C.History />,
	},
	{
		route: `/eventos-totales-por-fecha-tipo`,
		title: D.bloques,
		body: <C.Blocks />,
	},	
	{
		route: `/estructura-del-curso`,
		title: D.estructura,
		body: <C.Structure />,
	},
];
