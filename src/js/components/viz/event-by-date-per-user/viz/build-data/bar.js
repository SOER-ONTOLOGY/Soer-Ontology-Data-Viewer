import { sum } from 'js/utils/array-utils';
import { radarColors } from 'js/utils/prime-colors';

export const buildBarData = (data, depA, depB, depC) => ({
	labels: data.filter(d => d.dep === depA.id).map(d => d.date),
	datasets: [
		{
			label: depA.label,
			backgroundColor: radarColors[0][0],
			borderColor: radarColors[0][1],
			pointBackgroundColor: radarColors[0][1],
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: radarColors[0][1],
			data: buildData(data, depA.id),
		},
		{
			label: depB.label,
			backgroundColor: radarColors[1][0],
			borderColor: radarColors[1][1],
			pointBackgroundColor: radarColors[1][1],
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: radarColors[1][1],
			data: buildData(data, depB.id),
		},
		{
			label: depC.label,
			backgroundColor: radarColors[2][0],
			borderColor: radarColors[2][2],
			pointBackgroundColor: radarColors[2][2],
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: radarColors[2][2],
			data: buildData(data, depC.id),
		},
	],
});

const buildData = (data, depId) => {
	const subDataDep = data.filter(d => d.dep === depId);
	return subDataDep.reduce((_, d) => {
		_.push((d.popByDim));
		return _;
	}, []);
};

