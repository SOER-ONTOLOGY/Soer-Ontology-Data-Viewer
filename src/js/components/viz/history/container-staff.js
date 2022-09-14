import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = staffUser => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dcterms: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/>
PREFIX xs: <http://www.w3.org/2001/XMLSchema#>

select ?log ?date ?type where {
 ?evento rdf:type j.0:Events.
 ?evento dcterms:ispartOf ?log.
 ?evento j.0:generatedBy <${staffUser}>.
 ?evento j.0:date ?date.
 ?evento j.0:tipo ?type.
} Order by ?date
`;


const connector = sparqlConnect(queryBuilder, {
	queryName: 'userByRole',
	params: ['staffUser'],
});

const ContainerStaff = ({ userByRole }) => (
	<Viz data={userByRole} title={"Eventos realizados por: "}/>
);

export default connector(ContainerStaff, {
	loading: () => <Spinner text={D.loading} />,
});
