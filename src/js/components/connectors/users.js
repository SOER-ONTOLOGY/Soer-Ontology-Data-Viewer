import { sparqlConnect } from 'sparql-connect';

const queryBuilder = () => `
    PREFIX j.0: <https://utpl.edu.ec/soer/ontology#>
    PREFIX ids: <https://w3id.org/idsa/core/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    select ?label ?id where {
      ?id ids:authUserName ?label.
    }
`;

export default sparqlConnect(queryBuilder, {
	queryName: 'departements',
});
