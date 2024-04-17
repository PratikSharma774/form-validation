import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar1 = ({user}) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">UniQue Developer</Navbar.Brand>
          <Nav className="me-lefts">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
