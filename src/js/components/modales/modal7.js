import React from "react";
import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalHeader,
	Row, 
	Col, 
	Card,
	CardTitle,
	CardBody,
	CardFooter, 
	ListGroup, 
	ListGroupItem,
    Container
} from "shards-react";

export default class Modal4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
		<Container className="dr-example-container pb-3" >
            <Row>
                <Col sm="12" lg="8" className="pb-3" style={{ margin: "auto" }}>
                <Card >
                    <CardBody className="text-center">
                        <CardTitle>Tabla de secciones y subsecciones creadas</CardTitle>
                        <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                        En esta tabla se muestra información de las nuevas secciones y subsecciones creadas.
                        <p>Para más información de la tabla haz click en el siguiente botón.<Button className="btn btn-warning" onClick={this.toggle}>Información</Button></p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Modal size="lg" centered="true"  open={open} toggle={this.toggle}>
            <ModalHeader className="text-center">Instrucciones de uso</ModalHeader>
            <ModalBody>
                <ListGroup>
                    <ListGroupItem><strong>Secciones:  </strong>Refiere a los bloques tipo chapter</ListGroupItem>
                    <ListGroupItem><strong>Subsecciones: </strong>Refiere a los bloques tipo sequential</ListGroupItem>
                </ListGroup>
                <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                <ListGroup>
                    <ListGroupItem><strong>Bloque tipo chapter. </strong>Refiere a las semanas de un curso</ListGroupItem>
                    <ListGroupItem><strong>Bloque tipo sequential. </strong>Refiere a las temáticas de un curso</ListGroupItem>
                </ListGroup>
            </ModalBody>
            </Modal>
        </Container>    
      </div>
    );
  }
}