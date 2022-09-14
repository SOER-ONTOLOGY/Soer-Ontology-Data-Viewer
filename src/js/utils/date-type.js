import D from 'js/i18n';

export const date_type = [
	{ 
		id: 'date', 
		label: D.date
	},
	{
		id: 'type',
		label: D.type,
	},
];

export const getTypeFromId = id => date_type.find(a => a.id === id).type;
