import MuyiNavBar from "../MuyiNavBar/MuyiNavBar";
import { useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";


const MuyiSigninForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [userList, setUserList] = useState([{}]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Get params
  let { id } = useParams();
  console.log(id)
  const navigate = useNavigate()
  
  // Read single product
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setUserList(res.data);
    });
  }, [id]);

  // Update a User
  const addUserHandler = (event) => {
    //console.log(FirstName, LastName, Email);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      setValidated(true);

      axios
        .post("http://localhost:8000/api/signUp/", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res) {
            setEmail("");
            setPassword('')

          }
        });
    }
  };
console.log(userList)
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
          noValidate
          validated={validated}
          onSubmit={addUserHandler}
          style={{ maxWidth: "60%", margin: "20px auto" }}
        >
          <FloatingLabel
            controlId="floatingInput"
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
          <FloatingLabel controlId="floatingPassword" label="Password">
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
};
export default MuyiSigninForm;
