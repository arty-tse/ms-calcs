import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Flames.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import FlameScore from "./FlameScore";

export class Flames extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FlameScore />
          </Col>
          <Col sm={8}>Imagine being able to cube during DMT.</Col>
        </Row>
      </Container>
    );
  }
}

export default Flames;
