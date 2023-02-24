import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MuyiNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>
        Muyi-App
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ marginRight: "10px" }}
      />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
        style={{ marginLeft: "30px" }}
      >
        <Nav>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#others">Others</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MuyiNavBar;
