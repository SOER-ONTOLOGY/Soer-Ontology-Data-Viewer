import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = (dimension, idDepA, idDepB) => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/>
PREFIX xs: <http://www.w3.org/2001/XMLSchema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

select ?dep (count (?date) As ?popByDim) ?date  where {
 ?evento rdf:type j.0:Events.
 VALUES ?dep {<${idDepA}> <${idDepB}>}
 ?evento j.0:generatedBy ?dep.
 ?evento j.0:date ?date.
 ?evento j.0:tipo ?type.
 FILTER ( str(?type) = "${dimension}").
}GROUP BY ?dep ?date ?date1
ORDER BY ASC(?date)
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'popDepByDim',
	params: ['dimension', 'idDepA', 'idDepB'],
});

const VizContainer = ({
	popDepByDim,
	depA,
	depB,
	valueTabs,
	handleChangeTabsValue,
}) => (
	<div>
		<Viz
			data={popDepByDim}
			depA={depA}
			depB={depB}
			valueTabs={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	</div>
);

export default connector(VizContainer, {
	loading: () => <Spinner text={D.loading} />,
});
