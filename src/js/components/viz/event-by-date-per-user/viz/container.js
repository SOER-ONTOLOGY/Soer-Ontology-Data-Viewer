import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = ( idDepA, idDepB) => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/>
PREFIX xs: <http://www.w3.org/2001/XMLSchema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

select ?dep ?date (count (?date) As ?popByDim) where {
 ?evento rdf:type j.0:Events.
 ?evento j.0:generatedBy ?dep.
 ?evento j.0:date ?date1.
 Bind(STRDT(STR(?date1), xsd:date) as ?date)
}Group by ?dep ?date Order by ?date
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'popDepByDim',
	params: ['idDepA', 'idDepB', 'idDepC'],
});

const VizContainer = ({
	popDepByDim,
	depA,
	depB,
	depC,
	valueTabs,
	handleChangeTabsValue,
}) => (
	<div>
		<Viz
			data={popDepByDim}
			depA={depA}
			depB={depB}
			depC={depC}
			valueTabs={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	</div>
);

export default connector(VizContainer, {
	loading: () => <Spinner text={D.loading} />,
});
