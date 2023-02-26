import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Placeholder from "react-bootstrap/Placeholder";
import { Link } from "react-router-dom";

import axios from "axios";

const MuyiCard = ({ usersList }) => {
  //console.log(userList);
  const deleteTodoHandler = (email) => {
    axios
      .delete(`http://localhost:8000/api/signUp/${email}`)
      .then((res) => console.log(res.data));
  };
  const displayUserList = usersList.map((user, index) => (
    <Card
      key={index}
      style={{ width: "50%", margin: "10px auto", maxWidth: "60%" }}
    >
      <Card.Img
        variant="top"
        src="https://cdn.pixabay.com/photo/2022/11/16/18/38/mexico-7596566_960_720.jpg"
      />
      <Card.Body>
        <Card.Title>{user["first_name"]}</Card.Title>
        <Card.Text>
          You can edit or delete the user using the button below
        </Card.Text>
      </Card.Body>
      <Card.Body className="justify-content-center">
        <Button variant="success" xs={5} style={{ marginRight: "5px" }}>
          <Link to={`edituser/${user.first_name}`} style={{color: "white", textDecoration: "none"}}>Edit User</Link>
        </Button>
        <Button
          variant="danger"
          xs={5}
          style={{ marginRight: "5px" }}
          onClick={() => deleteTodoHandler(user.email)}
        >
          Delete User
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      {usersList ? (
        <div>{displayUserList}</div>
      ) : (
        <Card style={{ width: "18rem", margin: "10px auto" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder.Button
                variant="primary"
                xs={5}
                style={{ marginRight: "5px" }}
              />
              <Placeholder.Button variant="primary" xs={5} />
            </Placeholder>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MuyiCard;
