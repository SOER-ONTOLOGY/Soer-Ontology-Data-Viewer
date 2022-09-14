import D from 'js/i18n';

export const roles = [
	{ 
		id: 'STAFF', 
		label: D.staff
	},
	{
		id: 'TEACHER',
		label: D.teacher,
	},
];

export const getTypeFromId = id => roles.find(a => a.id === id).type;
