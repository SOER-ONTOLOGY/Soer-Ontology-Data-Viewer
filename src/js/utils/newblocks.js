import D from 'js/i18n';

export const newblocks = [
	{ 
		id: 'section', 
		label: D.seccion
	},
	{
		id: 'subsection',
		label: D.subseccion,
	},
	{
		id: 'vertical',
		label: D.vertical,
	},
];

export const getTypeFromId = id => newblocks.find(a => a.id === id).type;
