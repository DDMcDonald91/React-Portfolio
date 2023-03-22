import { Card } from 'react-bootstrap'

export default function SkillCard(props) {
  return (
    <Card align='left' style={{width: 'auto', background: "none"}}>
        <Card.Body>
            <Card.Title style={{fontSize: '2rem'}}>{props.title}</Card.Title>
            <span style={{fontSize: '4rem'}}>{props.icon}</span>
            <span style={{fontSize: '1.25rem'}}><p>{props.classification}</p></span>
        </Card.Body>
    </Card>
  )
}
