import { sum } from 'js/utils/array-utils';
import { backgroundColor } from 'js/utils/prime-colors';

export const buildStackedBarData = (data, depArray) => {
	const sums = depArray.map(dep =>
		sum(data.filter(d => d.dep === dep.id).map(d => d.popByDim))
	);
	const modalities = data
		.filter(d => d.dep === depArray[0].id)
		.map(d => d.dimLabel);

	return {
		labels: depArray.map(dep => dep.label),
		datasets: modalities.map((m, i) => ({
			type: 'bar',
			label: m,
			backgroundColor: backgroundColor[i],
			data: data
				.filter(d => d.dimLabel === m)
				.map((d, j) => (d.popByDim )),
		})),
	};
};

export const stackedOptions = {
	tooltips: {
		mode: 'index',
		intersect: false,
	},
	responsive: true,
	scales: {
		xAxes: [
			{
				stacked: true,
			},
		],
		yAxes: [
			{
				stacked: true,
			},
		],
	},
};
