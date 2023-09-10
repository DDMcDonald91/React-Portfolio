import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function ProjectCard(props) {
  return (
    <Container className='p-2'>
        <Card style={{ maxWidth: '30rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.skills.map((skill) => {
                  return(
                    <ListGroupItem>{skill}</ListGroupItem>
                  )
                })}
            </ListGroup>
             <Card.Body>
                  <Card.Link href={props.demo} target='_blank'>
                    <Button className='w-100 mt-2 mb-2' variant="dark">View Site</Button>
                  </Card.Link>
                  <br />
                  {props.github ? 
                  <>
                  <Card.Link href={props.github} target='_blank'>
                    <Button className='w-100 mt-2 mb-2' variant="outline-secondary">View Github</Button>
                  </Card.Link></>
                  :
                  <>
                    <Button className='w-100 mt-2 mb-2' disabled variant="outline-secondary">Github Private</Button>
                    <p>I'm sorry...however this repo is private for security reasons.</p>
                  </>
                  }
              </Card.Body>
            </Card>
    </Container>
  )
}
