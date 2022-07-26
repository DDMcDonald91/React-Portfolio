import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function ProjectCard(props) {
  return (
    <Container>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.skill1}</ListGroupItem>
                <ListGroupItem>{props.skill2}</ListGroupItem>
                <ListGroupItem>{props.skill3}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={props.demo} target='_blank'><Button variant="dark">View Demo</Button></Card.Link>
                <Card.Link href={props.github} target='_blank'><Button variant="outline-secondary">View Github</Button></Card.Link>
            </Card.Body>
            </Card>
    </Container>
  )
}
