import { sparqlConnect } from 'sparql-connect';

const queryBuilder = () => `
PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  select ?label ?id where {
    ?event rdf:type j.0:Events.
    ?event j.0:type ?type.
    ?event j.0:has ?id.
    ?id rdfs:label ?label
    FILTER ( str(?type) = "Sequential" ).
  } Group by ?label ?id
`;

export default sparqlConnect(queryBuilder, {
	queryName: 'departements',
});
