import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = () => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ids: <https://w3id.org/idsa/core/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

select ?fecha ?usuario (count (?fecha) As ?cantidad) where {
 ?evento rdf:type j.0:Events.      
 VALUES ?category {"vertical"}
 ?evento j.0:category ?category. 
 ?evento rdfs:label ?nombre.
 ?evento j.0:generatedBy ?user.
 ?user ids:authUserName ?usuario.
 ?evento j.0:date ?fecha3.
 Bind(STRDT(STR(?fecha3), xsd:date) as ?fecha)
 VALUES ?type {"/xblock/"}
 ?evento j.0:events_type ?type.
}group by ?fecha ?usuario order by ASC(?fecha)
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'vertical',
});

const ContainerSubsection = ({ vertical }) => (
	<Viz data={vertical} />
);

export default connector(ContainerSubsection, {
	loading: () => <Spinner text={D.loading} />,
});
