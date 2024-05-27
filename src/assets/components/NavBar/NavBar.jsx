import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/buena-logo.png";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="rounded" alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button className="me-4">Register</Button>
        <Button>Sign in</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
