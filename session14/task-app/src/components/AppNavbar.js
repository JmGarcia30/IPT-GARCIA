// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import{Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default function AppNavbar() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary shadow p-3 sticky-top">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-primary fw-bold'>UA Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Button className="rounded-pill px-4" as={Link} to="/login">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}