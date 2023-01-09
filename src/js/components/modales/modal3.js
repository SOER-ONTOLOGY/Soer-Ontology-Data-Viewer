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

export default class Modal3 extends React.Component {
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
                        <CardTitle>Gráfica de barras con la cantidad de eventos totales organizados por fechas</CardTitle>
                        <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                        Esta gráfica muestra datos cuantitativos discretos, los cuales permiten identificar cuales son los dias con mayor actividad.
                        <p>Para más información de la gráfica haz click en el siguiente botón.<Button className="btn btn-warning" onClick={this.toggle}>Información</Button></p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Modal size="lg" centered="true"  open={open} toggle={this.toggle}>
            <ModalHeader className="text-center">Instrucciones de uso</ModalHeader>
            <ModalBody>
                <ListGroup>
                    <ListGroupItem><strong>1. </strong>Los nombres a lado de los recuadros son los nombres de usuario de los usarios del curso.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong>Un evento es una acción realizada dentro de la plataforma.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong>Las fechas de la parte inferior son las fechas en las cuales hubo actividad por parte de los usuarios.</ListGroupItem>
                </ListGroup>
            </ModalBody>
            </Modal>
        </Container>    
      </div>
    );
  }
}