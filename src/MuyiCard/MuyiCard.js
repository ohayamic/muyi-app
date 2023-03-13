import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";
import { Link } from "react-router-dom";
//import axios from "axios";

const MuyiCard = ({ usersList, sendData }) => {
  /*console.log(usersList);*/
  /*const deleteTodoHandler = (email) => {
    axios.delete(`http://localhost:8000/api/signUp/${email}`).then((res) => {
      if (res.data) {
        sendData(true);
      }
    });
  }; */
  const displayUserList = (
    <Row>
      {usersList.map((user, index) => (
        <Col xs={12} md={3} key={index}>
          <Card style={{ margin: "10px auto", maxWidth: "100%" }}>
            <Link
              to={`viewproduct/${user.id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img
                variant="bottom"
                as="img"
                width={200}
                height={300}
                src={user.image && user.image}
                alt={user.title}
              />
            </Link>

            <Card.Body
              className="justify-content-center"
              style={{ margin: "0px auto" }}
            >
              <Card.Title>{user.category}</Card.Title>
              <Card.Title>${user.price}</Card.Title>
              <Card.Text>
                {user?.title?.length > 15
                  ? user?.title?.slice(0, 15) + ` ...`
                  : user?.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
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
