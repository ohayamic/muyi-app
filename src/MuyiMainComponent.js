import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import axios from "axios";

import MuyiNavBar from "./MuyiNavBar/MuyiNavBar";
import MuyiCard from "./MuyiCard/MuyiCard";
import MuyiForm from "./MuyiForm/MuyiForm";

const MuyiMainComponent = () => {
  const [usersList, setUsersList] = useState([{}]);
  const [mydata, setData] = useState(false);

  const sendData = (mydata) => {
    return setData(mydata);
  };
  const myGreeting = () => {
    return sendData(false)
  }
  // Read all todos
  useEffect(() => {
    axios.get("http://localhost:8000/api/signUp").then((res) => {
      setUsersList(res.data);
    });
  }, []);
  if (mydata) {
      axios.get("http://localhost:8000/api/signUp").then((res) => {
        setUsersList(res.data);
      });
    
  }
setTimeout(myGreeting, 50);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} style={{ padding: 0 }}>
          <MuyiNavBar />
        </Col>
      </Row>
      <Col>
        <MuyiForm sendData={sendData} />
      </Col>
      <Row>
        <Col>
          <MuyiCard usersList={usersList} sendData={sendData} />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};
export default MuyiMainComponent;
