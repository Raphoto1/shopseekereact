import React from 'react'
import { Card } from 'react-bootstrap'

function DetailedDesign({design}) {
    
  return (
    <Card className='cardDetailedDesign'>
          <Card.Img variant="top" src={`/Assets/Img/Designs/${design.idInterno}.jpg`} alt={design.title} />
          <Card.Body>
            <Card.Title>{design.title}</Card.Title>
            <Card.Text>
              {design.desc}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
  )
}

export default DetailedDesign