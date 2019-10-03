import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Screen = props =>(
  <Container>
    <Row>
      <Col>{props.result}</Col>
    </Row>
  </Container>

);

export default Screen;
