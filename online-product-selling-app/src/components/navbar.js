import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export function AlertDismissible() {
    // const [show, setShow] = useState(true);
  
    return (
  
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Md. Towhidul Islam</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Career</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

    );
  }
