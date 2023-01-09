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
                        <CardTitle>Tabla historica de eventos realizados</CardTitle>
                        <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                        En esta tabla se muestra el listado total de eventos realizados por usuario.
                        <p>Para más información de la tabla haz click en el siguiente botón.<Button className="btn btn-warning" onClick={this.toggle}>Información</Button></p>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Modal size="lg" centered="true"  open={open} toggle={this.toggle}>
            <ModalHeader className="text-center">Instrucciones de uso</ModalHeader>
            <ModalBody>
            <ListGroup>
                    <ListGroupItem><strong>1. </strong>Columna Log refiere al log del cual fue sacada la información.</ListGroupItem>
                    <ListGroupItem><strong>2. </strong>Columna Tipo refiere al tipo de evento realizado.</ListGroupItem>
                    <ListGroupItem><strong>3. </strong>Un evento es una acción realizada dentro de la plataforma.</ListGroupItem>
                </ListGroup>
                <hr style={{ backgroundColor: '#003f72', width: "85%", height: "3px"}}/>
                <ListGroup>
                    <ListGroupItem><strong>Configuración de detalles: </strong>refiere a la gestión del curso, como por ejemplo, cambio de información del curso.</ListGroupItem>
                    <ListGroupItem><strong>Configuración de equipo: </strong>refiere a la gestión de los usuarios con roles de staff, admin, teacher.</ListGroupItem>
                    <ListGroupItem><strong>Creación de sección: </strong>refiere a la acción de crear bloques de tipo chapter (estos bloques refieren a la semana del curso.)</ListGroupItem>
                    <ListGroupItem><strong>Creación de subsección: </strong>refiere a la acción de crear bloques de tipo sequential (estos bloques refieren a la temática del curso.)</ListGroupItem>
                    <ListGroupItem><strong>Creación de unidad: </strong>refiere a la acción de crear bloques de tipo vertical (estos bloques refieren a a los recursos y actividades para los estudiantes en un curso.)</ListGroupItem>
                    <ListGroupItem><strong>Edición de sección: </strong>refiere a la acción de editar bloques de tipo chapter.</ListGroupItem>
                    <ListGroupItem><strong>Edición de subsección: </strong>refiere a la acción de editar bloques de tipo sequential.</ListGroupItem>
                    <ListGroupItem><strong>Libros: </strong>refiere a la acción de cargar libros al curso.</ListGroupItem>
                    <ListGroupItem><strong>Edición de contenido del curso: </strong>refiere a la actualización de información del curso.</ListGroupItem>
                </ListGroup>
            </ModalBody>
            </Modal>
        </Container>    
      </div>
    );
  }
}