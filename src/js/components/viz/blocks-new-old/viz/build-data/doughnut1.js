import { sum } from 'js/utils/array-utils';
import { backgroundColor1, hoverBackgroundColor1 } from 'js/utils/prime-colors';

export const buildDoughnutData1 = (data, depId) => {
	const defaultDoughnut = {
		labels: data.filter(d => d.dep === depId).map(d => d.date),
		datasets: [
			{
				data: [],
				backgroundColor: ['#a3ffac','#e79eff','#ffe180'],
				hoverBackgroundColor:['#a3ffac','#e79eff','#ffe180'],
			},
		],
	};
	const subDataDep = data.filter(d => d.dep === depId);
	const sumData = sum(subDataDep.map(d => d.popByDim));
	return subDataDep.reduce(
		(_, d) => {
			_.datasets[0].data.push((parseFloat(((d.popByDim * 100)/16)).toFixed(2)));
			return _;
		},
		{...defaultDoughnut }
	);
};
