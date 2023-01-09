import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = () => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/>
PREFIX xs: <http://www.w3.org/2001/XMLSchema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

select ?tipo (count (?tipo) As ?cantidad) where {
 ?evento rdf:type j.0:Events.
 ?evento j.0:tipo ?tipo.
}Group by ?tipo Order by DESC(?cantidad)
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'totalTypeEvents',
});

const ContainerType = ({ totalTypeEvents }) => (
	<Viz data={totalTypeEvents} />
);

export default connector(ContainerType, {
	loading: () => <Spinner text={D.loading} />,
});
