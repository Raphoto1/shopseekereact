import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function DesignCard(props) {
  return (
    <div className='col'>
      <Card className='h-100' style={{ width: '100%' }}>
          <Card.Img variant="top" src={`/Assets/Img/Designs/${props.idInterno}.jpg`} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.desc}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
    </div>
  )
}

export default DesignCard