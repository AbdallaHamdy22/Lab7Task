import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link" style={({ isActive }) => {
              return {
                color:(isActive)?"red":""
              }
            }}>Home</NavLink>
            <NavLink to="products" className="nav-link">Products</NavLink>
            <NavLink to="aboutUs" className="nav-link">About Us</NavLink>
            <NavLink to="contactUs" className="nav-link">Contact Us</NavLink>
            <NavLink to="join" className="nav-link">join</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;