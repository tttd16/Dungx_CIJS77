import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Count() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
  };
  const noClick = () => {
    setNumber(number - 1);
  };

  return (
    <Card style={{ width: "18rem", marginLeft: "20rem", marginTop: "20px" }}>
      <Card.Body>
        <Card.Title>Count: {number}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          Click Count Increase
        </Button>
        <Button
          style={{ marginTop: "10px" }}
          variant="primary"
          onClick={noClick}
        >
          Click Count Reduce
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Count;
