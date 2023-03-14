import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import axios from "axios";

import MuyiNavBar from "./MuyiNavBar/MuyiNavBar";
import MuyiFooter from "./MuyiNavBar/MuyiFooter";
import MuyiCard from "./MuyiCard/MuyiCard";

const MuyiMainComponent = () => {
  const [usersList, setUsersList] = useState([{}]);
  const [mydata, setData] = useState(false);

  const sendData = (mydata) => {
    return setData(mydata);
  };
  const changeData = () => {
    return sendData(false);
  };
  // Read all todos
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setUsersList(res.data);
    });
  }, []);
  if (mydata) {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setUsersList(res.data);
    });
  }
  //console.log(usersList);
  setTimeout(changeData, 50);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} style={{ padding: 0 }}>
          <MuyiNavBar />
        </Col>
      </Row>
      <div style={{ width: "80%", margin: "10px auto", maxWidth: "80%" }}>
        <MuyiCard usersList={usersList} sendData={sendData} />
      </div>
      <Row>
        <MuyiFooter />
      </Row>
    </Container>
  );
};
export default MuyiMainComponent;
