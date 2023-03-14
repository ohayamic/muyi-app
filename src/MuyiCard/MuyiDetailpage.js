import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuyiNavBar from "../MuyiNavBar/MuyiNavBar";
import MuyiFooter from "../MuyiNavBar/MuyiFooter";

import axios from "axios";

const MuyiDetailpage = (props) => {
  const [productList, setProductList] = useState({});
  let { id } = useParams();

  // Read all product
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProductList(res.data);
    });
  }, []);


  //console.log(productList);
  return (
    <>
      <MuyiNavBar />
      <Card className="text-center" style={{height:"60vh"}}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <MuyiFooter />
    </>
  );
};
export default MuyiDetailpage;
