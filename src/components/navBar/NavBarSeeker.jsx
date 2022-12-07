import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "./CartWidget";

function NavBarSeeker() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="./Assets/Icons/IconoR.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/">
        <Navbar.Brand href="#home">Shop Seeker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Filter By Style" id="basic-nav-dropdown">
              <LinkContainer to="/Style/Traditional">
                <NavDropdown.Item href="#action/3.1">
                  Traditional
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Style/Digital">
                <NavDropdown.Item href="#action/3.2">
                    Digital
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Style/Photography">
                <NavDropdown.Item href="#action/3.3">
                  Photography
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item href="#action/3.4">
                  See all
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Filter By Shop" id="basic-nav-dropdown">
              <LinkContainer to="/Shop/redbubble">
                <NavDropdown.Item href="#action/3.1">
                  RedBubble
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Shop/society6">
                <NavDropdown.Item href="#action/3.2">
                    Society6
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Shop/displate">
                <NavDropdown.Item href="#action/3.3">
                  Displate
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item href="#action/3.4">
                  See all
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBarSeeker;
