import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectFrom from './SelectFrom';
import SelectTo from './SelectTo';
const Form = props => {
  const currencyList = props.currencies;
  return(
    <form onSubmit={props.getCurrencyRates}>
      <Container>
        <Row>
          <Col  xs="6">
            <input type="text" class="form-control" name="from_amt" placeholder="Amount"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SelectFrom currencyList={ currencyList }/>
          </Col>
          <Col>
            <SelectTo currencyList={ currencyList }/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col><p></p>  <button>Convert</button> </Col>
        </Row>
      </Container>
    </form>
  );
}

export default Form;
