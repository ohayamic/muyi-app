import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MuyiFooter = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{ height: "300px" }}>
      <Container fluid>
        <div style={{ width: "30%" }}>
          <Col xs={12} md={4}>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="link-3">
                Disabled
              </Nav.Link>
            </Nav>
          </Col>
        </div>
        <div style={{ width: "70%" }}>
          <Col xs={12} md={8}>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="link-3">
                Disabled
              </Nav.Link>
            </Nav>
          </Col>
        </div>
      </Container>
    </Navbar>
  );
};
export default MuyiFooter;
