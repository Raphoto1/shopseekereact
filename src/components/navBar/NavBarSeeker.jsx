import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavBarSeeker() {
  return (
    <Navbar fixed='top' bg="dark" expand="lg" variant='dark'>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="/Assets/Icons/IconoR.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand href='#home'>Shop Seeker</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBarSeeker