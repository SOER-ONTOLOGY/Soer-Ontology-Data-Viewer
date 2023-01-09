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
                        <CardTitle>Gráfica de pastel comparativa entre bloques nuevos vs antiguos</CardTitle>
                        <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                        Esta gráfica muestra datos cuantitativos continuos y discretos, los zcuales permiten identificar la cantidad de bloques nuevos creados vs bloques antiguos mantenidos, además se muestra el tipo de bloques que han sido creados.
                        <p>Para más información de la gráfica haz click en el siguiente botón.<Button className="btn btn-warning" onClick={this.toggle}>Información</Button></p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Modal size="lg" centered="true"  open={open} toggle={this.toggle}>
            <ModalHeader className="text-center">Instrucciones de uso</ModalHeader>
            <ModalBody>
                <ListGroup>
                    <ListGroupItem><strong>1. </strong>Los nombres a lado de los recuadros de la gráfica derecha son los bloques nuevos o antiguos.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong>Los nombres a lado de los recuadros de la gráfica izquierda son los tipos de bloques.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong>En la parte inferior de la gráfica se muestra la cantidad de bloques.</ListGroupItem>
                    <ListGroupItem><strong>4. </strong>Los bloques son las estructuras que permiten organizar y crear la información de un curso, hay de 3 tipos.</ListGroupItem>
                </ListGroup>
                <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                <ListGroup>
                    <ListGroupItem><strong>Bloque tipo chapter. </strong>Refiere a las semanas de un curso</ListGroupItem>
                    <ListGroupItem><strong>Bloque tipo sequential. </strong>Refiere a las temáticas de un curso</ListGroupItem>
                    <ListGroupItem><strong>Bloque tipo vertical. </strong>Refiere a los recursos y actividades para los estudiantes en un curso.</ListGroupItem>
                </ListGroup>
            </ModalBody>
            </Modal>
        </Container>    
      </div>
    );
  }
}