import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width="75px"
            src="data:image/jpeg;base64,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"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
