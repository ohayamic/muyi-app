import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MuyiNavBar from "./MuyiNavBar/MuyiNavBar";
import MuyiCard from "./MuyiCard/MuyiCard";
const MuyiMainComponent = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} style={{ padding: 0 }}>
          <MuyiNavBar />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          xl={3}
          style={{ margin: "20px" }}
        >
          <MuyiCard />
        </Col>
      </Row>
    </Container>
  );
};
export default MuyiMainComponent;
