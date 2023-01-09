import NavExample from "js/components/front/nav.js";
import Example from "js/components/front/container.js";
import React from "react";
import { 
	Container, 
	Row, 
	Col, 
	Card,
	CardImg,
} from "shards-react";
import utpl from '../../../img/utpl.png';
import kbs from '../../../img/kbs.png';
import opencampus from '../../../img/openCampus.png';

export default () => (
    <div>
        <NavExample></NavExample>
        <div>
        <h5 className="pt-3 mt-3 text-center">Participantes:</h5>
        <hr style={{ backgroundColor: '#eaab00', width: "15%", height: "3px"}}/>
            <Container className="dr-example-container">
                <Row>
                    <Col sm="12" lg="4" className="pt-3">
                        <Card  style={{ width: "50%"}} className="mx-auto">
                            <CardImg src={utpl} />
                        </Card>
                    </Col>
                    <Col sm="12" lg="4" className="pt-3">
                        <Card  style={{ width: "50%"}} className="mx-auto">
                            <CardImg src={kbs}/>
                        </Card>
                    </Col>
                    <Col sm="12" lg="4" className="pt-3">
                        <Card  style={{ width: "50%"}} className="mx-auto">
                            <CardImg src={opencampus}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <Example></Example>
        
        <footer  class="footer mt-auto py-3 "  style={{ backgroundColor: '#003f72'}}>
            <p className="pt-4 text-center" style={{ color: '#fff'}}>Desarrollado por Marco Caicedo</p>
        </footer>
    </div>
);