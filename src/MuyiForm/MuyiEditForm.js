import MuyiNavBar from "../MuyiNavBar/MuyiNavBar";
import { useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MuyiEditForm = (props) => {
  const [userList, setUserList] = useState([{}]);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  // Get params
  let { id } = useParams();
  console.log(id)
  const navigate = useNavigate()
  // Read single todo
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setUserList(res.data);
    });
  }, [id]);

  // Update a User
const UpdateUserHandler = () => {
    axios
      .put(`http://localhost:8000/api/signUp/${LastName}`, {
        first_name: FirstName,
        last_name: LastName,
        email: Email,
      })
      .then((res) => {
        if (res) {
          navigate("/");
        }
      });
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
                placeholder={userList.first_name}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Col>
          </Form.Group>{" "}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextLastName"
          >
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder={userList.last_name}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder={userList.email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Button variant="primary" xs={5} onClick={UpdateUserHandler}>
              Update User
            </Button>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};
export default MuyiEditForm;
