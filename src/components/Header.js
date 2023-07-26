import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../image/avtar.jpg'

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={image}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;