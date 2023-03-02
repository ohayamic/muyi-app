import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MuyiForm = ({sendData}) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  // Post a User
  const addUserHandler = () => {
    //console.log(FirstName, LastName, Email);
    axios
      .post("http://localhost:8000/api/signUp/", {
        first_name: FirstName,
        last_name: LastName,
        email: Email,
      })
      .then((res) => {
        if (res) {
          sendData(true);
        }
      });
  };

  return (
    <section
      style={{
        border: "1px solid",
        borderRadius: "20px",
        width: "60%",
        margin: "20px auto",
      }}
    >
      <Form style={{ maxWidth: "60%", margin: "20px auto" }}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextFirstName"
        >
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Your Firstname"
              onChange={(event) => setFirstName(event.target.value)}
            />
            {!Email ? (
              <Form.Text className="text-muted">
                <span style={{ color: "red" }}>
                  Please enter your first name
                </span>
              </Form.Text>
            ) : null}
          </Col>
        </Form.Group>{" "}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Your Lastname"
              onChange={(event) => setLastName(event.target.value)}
            />
            {!LastName ? (
              <Form.Text className="text-muted">
                <span style={{ color: "red" }}>
                  Please enter your last name
                </span>
              </Form.Text>
            ) : null}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            {!Email ? (
              <Form.Text className="text-muted">
                <span style={{ color: "red" }}>
                  Please enter your email address
                </span>
              </Form.Text>
            ) : null}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          {!FirstName || !LastName || !Email ? (
            <Button variant="primary" xs={5} onClick={addUserHandler} disabled>
              Add User
            </Button>
          ) : (
            <Button variant="primary" xs={5} onClick={addUserHandler}>
              Add User
            </Button>
          )}
        </Form.Group>
      </Form>
    </section>
  );
};
export default MuyiForm;
