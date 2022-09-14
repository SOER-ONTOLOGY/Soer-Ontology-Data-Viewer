import { sparqlConnect } from 'sparql-connect';

const queryBuilder = dsd => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX xs: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

select ?id ?label where {
	?event rdf:type <${dsd}>.
	?event j.0:type ?label.
	BIND(?label AS ?id)
   }Group by ?id ?label Order by ?label
`;

export default sparqlConnect(queryBuilder, {
	queryName: 'dimensions',
	params: ['dsd'],
});
