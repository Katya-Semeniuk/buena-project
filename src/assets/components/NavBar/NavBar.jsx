import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/buena-logo.png";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <img src={Logo} className="logo" alt="logo" />
        <p>Buena</p>
      </Container>
    </Navbar>
  );
}

export default NavBar;
