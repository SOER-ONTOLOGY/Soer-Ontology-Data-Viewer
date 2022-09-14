import { sum } from 'js/utils/array-utils';
import { backgroundColor, hoverBackgroundColor } from 'js/utils/prime-colors';

export const buildDoughnutData = (data, depId) => {
	const defaultDoughnut = {
		labels: data.filter(d => d.dep === depId).map(d => d.date),
		datasets: [
			{
				data: [],
				backgroundColor,
				hoverBackgroundColor,
			},
		],
	};
	const subDataDep = data.filter(d => d.dep === depId);
	const sumData = sum(subDataDep.map(d => d.popByDim));
	return subDataDep.reduce(
		(_, d) => {
			_.datasets[0].data.push((d.popByDim));
			return _;
		},
		{...defaultDoughnut }
	);
};
