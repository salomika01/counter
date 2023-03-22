import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function DropDown() {
  return (

    
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
         <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">

          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Woman"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Man</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Woman
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">all categoris</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">bags</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Gifts Cards 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default DropDown;