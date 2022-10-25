import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Classcountstudent extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        count: 1,
        student: {
          title: "Class component",
          name: "Dungx",
          age: 18,
        },
      });
    this.clickStudentIncrease = this.clickStudentIncrease.bind(this);
    this.clickToReduce = this.clickToReduce.bind(this);
    this.clickCount = this.clickCount.bind(this);
    this.clickCountReduce = this.clickCountReduce.bind(this);
  }

  clickStudentIncrease() {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        age: this.state.student.age + 1,
      },
    });
  }

  clickToReduce() {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        age: this.state.student.age - 1,
      },
    });
  }

  clickCount() {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  clickCountReduce() {
    this.setState({
      ...this.state,
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: "18rem", marginLeft: "20rem" }}>
          <Card.Body>
            <Card.Title>Title: {this.state.student.title}</Card.Title>
            <Card.Title>Name: {this.state.student.name}</Card.Title>
            <Card.Text>Age: {this.state.student.age}</Card.Text>
            <Button variant="primary" onClick={this.clickStudentIncrease}>
              Click Age Change Increase
            </Button>
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              onClick={this.clickToReduce}
            >
              Click Age Change Reduce
            </Button>

            <Card.Title>Count: {this.state.count}</Card.Title>
            <Button variant="primary" onClick={this.clickCount}>
              Click Count Change Increase
            </Button>
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              onClick={this.clickCountReduce}
            >
              Click Count Change Reduce
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Classcountstudent;
