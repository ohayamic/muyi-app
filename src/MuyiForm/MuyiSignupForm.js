import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MuyiNavBar from "../MuyiNavBar/MuyiNavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/* const MuyiForm = ({sendData}) => {
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
}; */
//export default MuyiForm;

function MuyiSignupForm({ sendData }) {
  const [validated, setValidated] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Post a User
  const addUserHandler = (event) => {
    //console.log(FirstName, LastName, Email);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      setValidated(true);

      axios
        .post("http://localhost:8000/api/signUp/", {
          first_name: FirstName,
          last_name: LastName,
          email: Email,
          password: password,
        })
        .then((res) => {
          if (res) {
            setFirstName("");
            setLastName("");
            setEmail("");
            sendData(true);
          }
        });
    }
  };

  return (
    <>
      <MuyiNavBar />
      <section
        style={{
          border: "1px solid",
          borderRadius: "20px",
          width: "60%",
          margin: "20px auto",
        }}
      >
        <Form
          style={{ maxWidth: "60%", margin: "20px auto" }}
          noValidate
          validated={validated}
          onSubmit={addUserHandler}
        >
          <FloatingLabel
            controlId="floatingFirstname"
            label="First name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              required
              placeholder="Enter first name"
              onChange={(event) => setFirstName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingLastname"
            label="Last name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              required
              placeholder="Enter last name"
              onChange={(event) => setLastName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              required
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword1"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              required
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword2"
            label="Repeat Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              required
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Password must match.
            </Form.Control.Feedback>
          </FloatingLabel>
          <div style={{ margin: "20px auto", width: "80%" }}>
            <Button
              type="submit"
              variant="outline-primary"
              style={{ width: "40%" }}
            >
              Submit
            </Button>{" "}
            <Button
              variant="outline-secondary"
              style={{ width: "40%" }}
              href="/"
            >
              Return to home
            </Button>{" "}
          </div>
        </Form>
      </section>
    </>
  );
}

export default MuyiSignupForm;
