import D from 'js/i18n';

export const structure = [
	{ 
		id: 'section', 
		label: D.new
	},
	{
		id: 'subsection',
		label: D.old,
	},
];

export const getTypeFromId = id => structure.find(a => a.id === id).type;
