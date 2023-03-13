import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MuyiForm = ({sendData}) => {
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");

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
          setFirstName("")
          setLastName("")
          setEmail("")
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
            {!FirstName ? (
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


function FormFloatingBasicExample({ sendData }) {
  
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // Post a User
  const addUserHandler = () => {
    //console.log(FirstName, LastName, Email);
    axios
      .post("http://localhost:8000/api/signUp/", {
        first_name: FirstName,
        last_name: LastName,
        email: Email,
        password: password
      })
      .then((res) => {
        if (res) {
          setFirstName("");
          setLastName("");
          setEmail("");
          sendData(true);
        }
      });
  };

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="First name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Enter first name"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Last name"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="Enter last name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Repeat Password">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FloatingLabel>
    </>
  );
}