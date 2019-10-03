import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Title extends Component{
  render(){
    return(
      <Container>
        <Row>
          <Col><h3>Currency Exchange</h3></Col>
        </Row>
      </Container>
    );
  }
}

export default Title;
