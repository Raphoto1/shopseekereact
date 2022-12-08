import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function CheckOutDonation() {
    const [data, setData] = useState({
        name: "",
        email: "",
        insta: "",
    });


  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>@Instagram</Form.Label>
        <Form.Control type="text" placeholder="Your @Instagram" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CheckOutDonation