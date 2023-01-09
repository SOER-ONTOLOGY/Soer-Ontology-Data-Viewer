import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = ( idDepA, idDepB) => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
select ?dep  ?date (count (?date) As ?popByDim) where {
 ?evento rdf:type j.0:Events.
 ?evento j.0:category ?date.  
 VALUES ?event {"/xblock/"}
 ?evento j.0:events_type ?event.
    BIND("bloque" as ?dep)
}Group by ?dep ?date order by ASC(?popByDim)
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'popDepByDim',
	params: ['idDepA'],
});

const VizContainer = ({
	popDepByDim,
	depA,
	valueTabs,
	handleChangeTabsValue,
}) => (
	<div>
		<Viz
			data={popDepByDim}
			depA={depA}
			valueTabs={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	</div>
);

export default connector(VizContainer, {
	loading: () => <Spinner text={D.loading} />,
});
