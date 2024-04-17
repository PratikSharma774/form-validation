import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar2 = ({user}) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">UniQue Developer</Navbar.Brand>
          <Nav className="me-lefts">
            <Nav.Link href="/adminLogin">ADD</Nav.Link>
            <Nav.Link href="/retrieve">Retrive</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
