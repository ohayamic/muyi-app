import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import data from "../data.js"

const MuyiCard = () => {

  return (
    <>
      {data ? (
        <Card style={{ width: "18rem", margin: "10px auto" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body className="justify-content-end">
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
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
