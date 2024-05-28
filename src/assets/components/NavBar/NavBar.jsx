import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Logo from "../../assets/buena-logo.png";

function NavBar({ openModal }) {
  const handleSingIn = () => {
    toast.warn("First, please register");
  };

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home" className="me-1">
          <img src={Logo} className="rounded" alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button className="me-3" onClick={() => openModal()}>
          Register
        </Button>
        <Button variant="outline-primary" onClick={handleSingIn}>
          Sign in
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
