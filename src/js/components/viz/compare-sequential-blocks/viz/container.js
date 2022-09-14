import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = (dimension, idDepA, idDepB) => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

select ?dep (count (?dep) As ?popByDim) ?date  where {
 ?evento rdf:type j.0:Events.
 VALUES ?dep {<${idDepA}> <${idDepB}>}
 ?evento j.0:has ?dep.
 ?evento j.0:type ?type.
 ?evento j.0:date ?date.
 FILTER ( str(?type) = "${dimension}").
}GROUP BY ?dep ?date Order by ?date

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
