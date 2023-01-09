import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React from "react";
import { 
	Container, 
	Row, 
	Col, 
	Card,
	CardTitle,
	CardImg,
	CardBody,
	CardFooter, 
	Button, 
	ListGroup, 
	ListGroupItem,
	Tooltip
} from "shards-react";
import curso from '../../../img/curso.jpg';
import prox from '../../../img/prox.jpg';

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { open: false };
	  }
	
	  toggle() {
		this.setState({
		  open: !this.state.open
		});
	  }
	render() {
	  return (
		<Container className="dr-example-container pb-3" >
            <h5 className="pt-3 mt-3 text-center">CURSOS</h5>
			<hr style={{ backgroundColor: '#eaab00', width: "15%", height: "3px"}}/>
		  <Row>
			<Col sm="12" lg="4" className="pt-3">
			  <Card >
				  <CardImg src={curso} />
				  <CardBody>
					  <CardTitle>UTPL MCS3</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>Legislación mercantil y societaria (Edición 3)</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>04/09/2020</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>06/03/2020</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					  <a href="/MCS3"><Button block className="mx-auto">Ver información del curso</Button></a>
				  </CardFooter>
			  </Card>
			</Col>
			<Col sm="12" lg="4" className="pt-3">
				<Card >
				  <CardImg src={prox} />
				  <CardBody>
					  <CardTitle>Código del curso</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>.....</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					<Button id="TooltipExample" block className="mx-auto">Ver información del curso</Button>
					<Tooltip
					open={this.state.open}
					target="#TooltipExample"
					toggle={this.toggle}
					>
					<strong>Importante</strong> <br></br>
					Próximamente estarán disponible más cursos con información importante.
					</Tooltip>
				  </CardFooter>
			  </Card>
			</Col>
			<Col sm="12" lg="4" className="pt-3">
				<Card >
				  <CardImg src={prox} />
				  <CardBody>
					  <CardTitle>Código del curso</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>.....</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					<Button id="TooltipExample12" block className="mx-auto">Ver información del curso</Button>
					<Tooltip
					open={this.state.open}
					target="#TooltipExample12"
					toggle={this.toggle}
					>
					<strong>Importante</strong> <br></br>
					Próximamente estarán disponible más cursos con información importante.
					</Tooltip>
				  </CardFooter>
			  </Card>
			</Col>
		  </Row>
  
		  <Row>
			<Col sm="12" lg="4" className="pt-3">
				<Card >
				  <CardImg src={prox} />
				  <CardBody>
					  <CardTitle>Código del curso</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>.....</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					<Button id="TooltipExample1" block className="mx-auto">Ver información del curso</Button>
					<Tooltip
					open={this.state.open}
					target="#TooltipExample1"
					toggle={this.toggle}
					>
					<strong>Importante</strong> <br></br>
					Próximamente estarán disponible más cursos con información importante.
					</Tooltip>
				  </CardFooter>
			  </Card>
			</Col>
			<Col sm="12" lg="4" className="pt-3">
				<Card >
				  <CardImg src={prox} />
				  <CardBody>
					  <CardTitle>Código del curso</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>.....</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					<Button id="TooltipExample2" block className="mx-auto">Ver información del curso</Button>
					<Tooltip
					open={this.state.open}
					target="#TooltipExample2"
					toggle={this.toggle}
					>
					<strong>Importante</strong> <br></br>
					Próximamente estarán disponible más cursos con información importante.
					</Tooltip>
				  </CardFooter>
			  </Card>
			</Col>
			<Col sm="12" lg="4" className="pt-3">
				<Card >
				  <CardImg src={prox} />
				  <CardBody>
					  <CardTitle>Código del curso</CardTitle>
					  <ListGroup>
						  <ListGroupItem><strong>Título: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Inicia: </strong>.....</ListGroupItem>
						  <ListGroupItem><strong>Finaliza: </strong>.....</ListGroupItem>
					  </ListGroup>
				  </CardBody>
				  <CardFooter>
					<Button id="TooltipExample3" block className="mx-auto">Ver información del curso</Button>
					<Tooltip
					open={this.state.open}
					target="#TooltipExample3"
					toggle={this.toggle}
					>
					<strong>Importante</strong> <br></br>
					Próximamente estarán disponible más cursos con información importante.
					</Tooltip>
				  </CardFooter>
			  </Card>
			</Col>
		  </Row>
		</Container>
	  );
	}
  }
