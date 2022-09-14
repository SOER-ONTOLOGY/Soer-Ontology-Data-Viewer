import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = () => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sioc: <http://rdfs.org/sioc/ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ids: <https://w3id.org/idsa/core/>

  select ?fecha ?usuario ?nombre where {
    ?event rdf:type j.0:Events.
    ?event j.0:type ?label.
    ?event j.0:date ?fecha.
    ?event j.0:has ?blockId.
    ?event j.0:generatedBy ?user.
    ?user ids:authUserName ?usuario.
    ?blockId sioc:id ?codigo.
    ?subsection rdf:type j.0:Subsections.
    ?subsection sioc:id ?codigo.
    ?subsection rdfs:label ?nombre
    FILTER ( str(?label) = "Sequential" ).
  } Group by ?nombre ?fecha ?usuario Order by ?fecha
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'sequential',
});

const ContainerSubsection = ({ sequential }) => (
	<Viz data={sequential} />
);

export default connector(ContainerSubsection, {
	loading: () => <Spinner text={D.loading} />,
});
